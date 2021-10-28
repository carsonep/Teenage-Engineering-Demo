using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Specifications;

namespace Core.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        T GetById(int id);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        IEnumerable<T> Find(ISpecification<T> specification = null);
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        void Add(T entity);
        void Delete(T entity);
        void Upsert(T entity);

        bool Contains(ISpecification<T> specification = null);
        bool Contains(Expression<Func<T, bool>> predicate);

        int Count(ISpecification<T> specification = null);
        int Count(Expression<Func<T, bool>> predicate);
        
    }
}