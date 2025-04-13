class StrategyA {
    execute() { console.log("Executing Strategy A"); }
}

class StrategyB {
    execute() { console.log("Executing Strategy B"); }
}

class Context {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

// Gebruik
const context = new Context();
context.setStrategy(new StrategyA());
context.executeStrategy();
context.setStrategy(new StrategyB());
context.executeStrategy();
