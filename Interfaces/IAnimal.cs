interface IAnimal {
    void MakeNoice();
}

interface IWalker {
    void Walk();
}

interface IRunner {
    void Run();
}

interface IFlyer {
    void Fly();
}

class Dog : IAnimal, IWalker, IRunner {
    public void MakeNoice() => Console.WriteLine("Woof!");
    public void Walk() => Console.WriteLine("Walking...");
    public void Run() => Console.WriteLine("Running...");
}

class Bird : IAnimal, IWalker, IFlyer {
    public void MakeNoice() => Console.WriteLine("Chirp!");
    public void Walk() => Console.WriteLine("Walking...");
    public void Fly() => Console.WriteLine("Flying...");
}
