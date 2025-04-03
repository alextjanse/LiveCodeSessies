interface IPaymentMethod {
    void ProcessPayment(decimal amount);
}

class PayPalPayment(string accountName) : IPaymentMethod
{
    private readonly string _accountName = accountName;

    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing PayPal payment of {amount} euros from account {_accountName}");
    }
}

class IDEALPayment(string iban) : IPaymentMethod {
    readonly string _iban = iban;

    public void ProcessPayment(decimal amount)
    {
        Console.WriteLine($"Processing IDeal payment of {amount} euros from IBAN {_iban}");
    }
}

