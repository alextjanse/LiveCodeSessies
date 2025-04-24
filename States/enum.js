// Enum
const AgentState = {
    IDLE: 0,
    RUNNING: 1,
    FINISHED: 2,
};

/**
 * Agent class. An agent is defined as a worker that has a list of instructions
 * that it steps through 
 */
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
        
        if (isDone()) return;

        this.state = AgentState.MOVING;

        const instruction = instructions[currentInstruction];

        console.log(`Agent ${this.name}: ${instruction}`);

        this.currentInstruction++;

        if (this.currentInstruction === instructions.length) {
            this.state = AgentState.FINISHED;
            console.log(`Agent ${name} is klaar`);
        }
    }

    isIdle = () => this.state === AgentState.IDLE;
    isRunning = () => this.state === AgentState.RUNNING;
    isDone = () => this.state === AgentState.FINISHED;
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

/**
 * Sleep the program for a given number of milliseconds.
 * @param {number} ms 
 */
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    let allDone = true;

    for (const agent of agents) {
        agent.step();

        if (!agent.isDone()) {
            allDone = false;
        }
    }

    if (allDone) return;
    await sleep(100);
    await run();
}

run();