const AgentState = {
    IDLE: "IDLE",
    MOVING: "MOVING",
    FINISHED: "FINISHED",
};

class Agent {
    constructor(name, instructions) {
        this.name = name;
        this.instructions = instructions;
        this.currentInstruction = 0;
        this.state = AgentState.IDLE; // state enum
        this.hasReachGoal = false; // state flag
    }

    step() {
        const { name, state, instructions, currentInstruction } = this;
        
        if (state === AgentState.FINISHED) return;

        this.state = AgentState.MOVING;

        const instruction = instructions[currentInstruction];

        console.log(`Agent ${this.name}: ${instruction}`);

        this.currentInstruction++;

        if (this.currentInstruction === instructions.length) {
            this.state = AgentState.FINISHED;
            this.hasReachGoal = true;
            console.log(`Agent ${name} is klaar`);
        }
    }
}

const agents = [
    new Agent("Bakker", [
        "Meet bloem af",
        "Voeg gist toe",
        "Voeg water toe",
        "Kneed het deeg",
        "Laat rijzen",
        "Vorm het brood",
        "Laat opnieuw rijzen",
        "Verwarm oven voor",
        "Bak het brood",
        "Laat afkoelen",
      ]),
    new Agent("Fietsenmaker", [
        "Zet fiets op z'n kop",
        "Haal wiel eruit",
        "Laat band leeglopen",
        "Haal buitenband los",
        "Haal binnenband eruit",
        "Zoek het lek",
        "Ruw het oppervlak op",
        "Breng lijm aan",
        "Wacht tot lijm droog is",
        "Plak plakker erop",
        "Zet alles weer in elkaar",
        "Pomp de band op",
        "Test de band"
    ])
];

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stepAll() {
    let allDone = true;

    for (const agent of agents) {
        agent.step();

        if (!agent.hasReachGoal) {
            allDone = false;
        }
    }

    if (allDone) return;
    await sleep(100);
    await stepAll();
}

stepAll();