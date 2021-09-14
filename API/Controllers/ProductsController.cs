using System.Collections.Generic;
using System.Linq;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public ProductsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return _unitOfWork.Repository<Product>().Find(new ProductsWithProductTypeSpecification()).ToList();
        }

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
        public ActionResult<Product> CreateProduct(Product product)
        {
            _unitOfWork.Repository<Product>().Add(product);
            _unitOfWork.Complete();

            return CreatedAtAction("CreatedProduct", new { id = product.Id}, product);
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
            catch(DbUpdateConcurrencyException)
            {
                if(!_unitOfWork.Repository<Product>().Contains(x => x.Id ==id))
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
    }
}