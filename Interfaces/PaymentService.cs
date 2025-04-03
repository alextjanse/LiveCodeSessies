class PaymentService(ILogger logger, IPaymentMethod paymentMethod)
{
    private readonly ILogger _logger = logger;
    private readonly IPaymentMethod _paymentMethod = paymentMethod;

    public void MakePayment(decimal amount)
    {
        _logger.Log($"Starting payment of {amount} euros");
        _paymentMethod.ProcessPayment(amount);
        _logger.Log("Payment completed successfully");
    }
}