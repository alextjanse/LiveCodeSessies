class Program {
    static void Main(string[] args) {
        AnimalExample();
        PaymentExample();
    }

    static void AnimalExample() {
        Dog dog = new();
        Bird bird = new();

        dog.Walk();
        bird.Fly();

        List<IAnimal> animals = [dog, bird];

        foreach (IAnimal animal in animals) {
            animal.MakeNoice();
        }
    }

    static void PaymentExample() {
        ILogger logger = new ConsoleLogger();
        IPaymentMethod method = new PayPalPayment("Bit Academy's private PayPal");

        PaymentService service = new(logger, method);

        service.MakePayment(9.99m);
    }
}