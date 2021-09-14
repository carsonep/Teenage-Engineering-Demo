using System;
using System.Linq.Expressions;
using Core.Entities;

namespace Core.Specifications
{
    public class ProductsWithProductTypeSpecification : BaseSpecification<Product>
    {
        public ProductsWithProductTypeSpecification()
        {
            AddInclude(x => x.ProductType);
        }

        public ProductsWithProductTypeSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(x => x.ProductType);
        }
    }
}