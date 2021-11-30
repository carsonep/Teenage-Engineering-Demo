using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Helpers;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly IPhotoService _photoService;
        public ProductsController(IUnitOfWork unitOfWork, IMapper mapper, IPhotoService photoService)
        {
            _photoService = photoService;
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        [Cached(600)]
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return _unitOfWork.Repository<Product>().Find(new ProductsWithProductTypeSpecification()).ToList();
        }

        [Cached(600)]
        [HttpGet("{id}")]
        public ActionResult<Product> GetProduct(int id)
        {
            var product = _unitOfWork.Repository<Product>().Find(new ProductsWithProductTypeSpecification(id)).SingleOrDefault();

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        [HttpPost]
        public ActionResult<ProductToReturnDto> CreateProduct(ProductToCreateDto productToCreate)
        {
            var product = _mapper.Map<ProductToCreateDto, Product>(productToCreate);

            _unitOfWork.Repository<Product>().Add(product);
            var result = _unitOfWork.Complete();

            if (result <= 0) return BadRequest();

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            _unitOfWork.Repository<Product>().Upsert(product);

            try
            {
                _unitOfWork.Complete();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_unitOfWork.Repository<Product>().Contains(x => x.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult<Product> DeleteProduct(int id)
        {
            var product = _unitOfWork.Repository<Product>().GetById(id);

            if (product == null)
            {
                return NotFound();
            }

            _unitOfWork.Repository<Product>().Delete(product);
            _unitOfWork.Complete();

            return product;
        }


        [HttpPut("{id}/photo")]
        // [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductToReturnDto>> AddProductPhoto(int id, [FromForm] ProductPhotoDto photoDto)
        {
            var spec = new ProductsWithProductTypeSpecification(id);
            var product = await _unitOfWork.Repository<Product>().GetEntityWithSpec(spec);

            if (photoDto.Photo.Length > 0)
            {
                var photo = await _photoService.SaveToDiskAsync(photoDto.Photo);

                if (photo != null)
                {
                    product.AddPhoto(photo.PictureUrl, photo.FileName);

                    _unitOfWork.Repository<Product>().Upsert(product);

                    var result = _unitOfWork.Complete();

                    if (result <= 0) return BadRequest();
                }
                else
                {
                    return BadRequest();
                }
            }

            return _mapper.Map<Product, ProductToReturnDto>(product);
        }
    }
}