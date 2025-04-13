class Car {
    constructor() {
        this.engine = "";
        this.wheels = 0;
        this.hasSunroof = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setWheels(wheels) {
        this.car.wheels = wheels;
        return this;
    }

    setSunroof(hasSunroof) {
        this.car.hasSunroof = hasSunroof;
        return this;
    }

    build() {
        return this.car;
    }
}

// Gebruik
const car = new CarBuilder()
    .setEngine("V8")
    .setWheels(4)
    .setSunroof(true)
    .build();
console.log(car);
