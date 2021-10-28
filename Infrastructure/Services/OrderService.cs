using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Infrastructure.Data;
using Core.Specifications;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IUnitOfWork _unitOfWork;
        public OrderService(IUnitOfWork unitOfWork, IBasketRepository basketRepository)
        {
            _unitOfWork = unitOfWork;
            _basketRepository = basketRepository;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, string basketId, Address shippingAddress)
        {
            // get Basket from BasketRepository
            var basket = await _basketRepository.GetBasketAsync(basketId);
            // Get Items from the Product Repository
            var items = new List<OrderItem>();
            foreach (var item in basket.Items)
            {
                
                var productItem = _unitOfWork.Repository<Product>().GetById(item.Id);

    

                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, item.PictureUrl);

                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            // Calculate Subtotal
            var subtotal = items.Sum(item => item.Price * item.Quantity);

            // Create order
            var order = new Order(items, buyerEmail, shippingAddress, subtotal);

            _unitOfWork.Repository<Order>().Add(order);
            // save to Db
            var result = _unitOfWork.Complete();

            if (result <= 0)
            {
                return null;
            }

            await _basketRepository.DeleteBasketAsync(basketId);

            // return Order
            return order;
        }

        public Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            throw new System.NotImplementedException();
        }

        public Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            throw new System.NotImplementedException();
        }
    }
}