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
        private readonly IPaymentService _paymentService;
        public OrderService(IUnitOfWork unitOfWork, IBasketRepository basketRepository, IPaymentService paymentService)
        {
            _paymentService = paymentService;
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

                var itemOrdered = new ProductItemOrdered(productItem.Id, productItem.Name, productItem.Photos.FirstOrDefault(x => x.IsMain)?.PictureUrl);

                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            // Calculate Subtotal
            var subtotal = items.Sum(item => item.Price * item.Quantity);

            // Check to see if order exists already
            var spec = new OrderByPaymentIntentIdSpecification(basket.PaymentIntentId);
            var existingOrder = await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

            if (existingOrder != null)
            {
                _unitOfWork.Repository<Order>().Delete(existingOrder);
                await _paymentService.CreateOrUpdatePaymentIntent(basket.PaymentIntentId);
            }

            // Create order
            var order = new Order(items, buyerEmail, shippingAddress, subtotal, basket.PaymentIntentId);

            _unitOfWork.Repository<Order>().Add(order);
            // save to Db
            var result = _unitOfWork.Complete();

            if (result <= 0)
            {
                return null;
            }

            // return Order
            return order;
        }

        public Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(id, buyerEmail);

            return _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersWithItemsAndOrderingSpecification(buyerEmail);

            return await _unitOfWork.Repository<Order>().ListAsync(spec);
        }
    }
}