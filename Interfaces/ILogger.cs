interface ILogger {
    void Log(string message);
}

class ConsoleLogger : ILogger {
    public void Log(string message) => Console.WriteLine(message);
}

class FileLogger(string filePath) : ILogger {
    private readonly string _filePath = filePath;
    public void Log(string message) => Console.WriteLine($"Wrote \"{message}\" to {_filePath}");
}