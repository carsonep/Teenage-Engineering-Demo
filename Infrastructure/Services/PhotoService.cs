using System;
using System.IO;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;


namespace Infrastructure.Services
{
    public class PhotoService : IPhotoService
    {
        public void DeleteFromDisk(Photo photo)
        {
            if (File.Exists(Path.Combine("wwwroot/images/products", photo.FileName)))
            {
                File.Delete("wwwroot/images/products/" + photo.FileName);
            }
        }

        public async Task<Photo> SaveToDiskAsync(IFormFile file)
        {
            var photo = new Photo();
            if (file.Length > 0)
            {
                var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);
                var filePath = Path.Combine("wwwroot/images/products", fileName);
                await using var fileStream = new FileStream(filePath, FileMode.Create);
                await file.CopyToAsync(fileStream);

                photo.FileName = fileName;
                photo.PictureUrl = "images/products/" + fileName;

                return photo;
            }

            return null;
        }
    }
}