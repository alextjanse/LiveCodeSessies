class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    doSomething() {
        console.log("Singleton instance is working!");
    }
}

// Gebruik
const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2); // True, want het is dezelfde instantie
s1.doSomething();
