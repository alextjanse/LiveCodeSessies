const romaniaMap = {
    Arad: {
      lat: 46.18656,
      lon: 21.31227,
      neighbors: [
        { city: 'Zerind', cost: 75 },
        { city: 'Sibiu', cost: 140 },
        { city: 'Timisoara', cost: 118 }
      ]
    },
    Zerind: {
      lat: 46.62251,
      lon: 21.51742,
      neighbors: [
        { city: 'Arad', cost: 75 },
        { city: 'Oradea', cost: 71 }
      ]
    },
    Oradea: {
      lat: 47.0465,
      lon: 21.91894,
      neighbors: [
        { city: 'Zerind', cost: 71 },
        { city: 'Sibiu', cost: 151 }
      ]
    },
    Sibiu: {
      lat: 45.79833,
      lon: 24.12558,
      neighbors: [
        { city: 'Arad', cost: 140 },
        { city: 'Oradea', cost: 151 },
        { city: 'Fagaras', cost: 99 },
        { city: 'Rimnicu Vilcea', cost: 80 }
      ]
    },
    Timisoara: {
      lat: 45.74887,
      lon: 21.20868,
      neighbors: [
        { city: 'Arad', cost: 118 },
        { city: 'Lugoj', cost: 111 }
      ]
    },
    Lugoj: {
      lat: 45.68861,
      lon: 21.90306,
      neighbors: [
        { city: 'Timisoara', cost: 111 },
        { city: 'Mehadia', cost: 70 }
      ]
    },
    Mehadia: {
      lat: 44.90411,
      lon: 22.36452,
      neighbors: [
        { city: 'Lugoj', cost: 70 },
        { city: 'Drobeta', cost: 75 }
      ]
    },
    Drobeta: {
      lat: 44.63692,
      lon: 22.65973,
      neighbors: [
        { city: 'Mehadia', cost: 75 },
        { city: 'Craiova', cost: 120 }
      ]
    },
    Craiova: {
      lat: 44.31889,
      lon: 23.79488,
      neighbors: [
        { city: 'Drobeta', cost: 120 },
        { city: 'Rimnicu Vilcea', cost: 146 },
        { city: 'Pitesti', cost: 138 }
      ]
    },
    'Rimnicu Vilcea': {
      lat: 45.09968,
      lon: 24.36932,
      neighbors: [
        { city: 'Sibiu', cost: 80 },
        { city: 'Craiova', cost: 146 },
        { city: 'Pitesti', cost: 97 }
      ]
    },
    Fagaras: {
      lat: 45.84164,
      lon: 24.9731,
      neighbors: [
        { city: 'Sibiu', cost: 99 },
        { city: 'Bucharest', cost: 211 }
      ]
    },
    Pitesti: {
      lat: 44.85648,
      lon: 24.86918,
      neighbors: [
        { city: 'Rimnicu Vilcea', cost: 97 },
        { city: 'Craiova', cost: 138 },
        { city: 'Bucharest', cost: 101 }
      ]
    },
    Bucharest: {
      lat: 44.42677,
      lon: 26.10254,
      neighbors: [
        { city: 'Fagaras', cost: 211 },
        { city: 'Pitesti', cost: 101 },
        { city: 'Giurgiu', cost: 90 },
        { city: 'Urziceni', cost: 85 }
      ]
    },
    Giurgiu: {
      lat: 43.90371,
      lon: 25.96993,
      neighbors: [
        { city: 'Bucharest', cost: 90 }
      ]
    },
    Urziceni: {
      lat: 44.71653,
      lon: 26.64112,
      neighbors: [
        { city: 'Bucharest', cost: 85 },
        { city: 'Hirsova', cost: 98 },
        { city: 'Vaslui', cost: 142 }
      ]
    },
    Hirsova: {
      lat: 44.685,
      lon: 27.94594,
      neighbors: [
        { city: 'Urziceni', cost: 98 },
        { city: 'Eforie', cost: 86 }
      ]
    },
    Eforie: {
      lat: 44.05842,
      lon: 28.63361,
      neighbors: [
        { city: 'Hirsova', cost: 86 }
      ]
    },
    Vaslui: {
      lat: 46.64069,
      lon: 27.72765,
      neighbors: [
        { city: 'Urziceni', cost: 142 },
        { city: 'Iasi', cost: 92 }
      ]
    },
    Iasi: {
      lat: 47.15845,
      lon: 27.60144,
      neighbors: [
        { city: 'Vaslui', cost: 92 },
        { city: 'Neamt', cost: 87 }
      ]
    },
    Neamt: {
      lat: 47.20464,
      lon: 26.36598,
      neighbors: [
        { city: 'Iasi', cost: 87 }
      ]
    }
};

// depth-first search
function DFS(start, end) {
    const stack = [{ location: start, route: [start] }];

    const visited = new Set();

    while (stack.length > 0) {
        const { location, route } = stack.pop();

        if (visited.has(location)) continue;
        visited.add(location);

        if (location === end) {
            return route;
        }

        stack.push(...romaniaMap[location].neighbors.map(({ city, _ } ) => {
            return { location: city, route: [...route, city] };
        }));
    }

    return null;
}

// breadth-first search
function BFS(start, end) {
    const queue = [{ location: start, route: [start] }];

    const visited = new Set();

    while (queue.length > 0) {
        const { location, route } = queue.shift();

        if (visited.has(location)) continue;
        visited.add(location);

        if (location === end) {
            return route;
        }

        queue.push(...romaniaMap[location].neighbors.map(({ city, _ } ) => {
            return { location: city, route: [...route, city] };
        }));
    }

    return null;
}

// uniform-cost search
function UCS(start, end) {
    const priorityQueue = [{ location: start, length: 0, route: [start] }];

    const visited = new Set();

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a.length - b.length);
        const { location, length, route } = priorityQueue.shift();

        if (visited.has(location)) continue;
        visited.add(location);

        if (location === end) {
            return route;
        }

        priorityQueue.push(...romaniaMap[location].neighbors.map(({ city, cost } ) => {
            return { location: city, length: length + cost, route: [...route, city] };
        }));
    }

    return null;
}

function haversine(lat1, lon1, lat2, lon2) {
    const toRad = angle => (Math.PI / 180) * angle;
    const R = 6371; // Aarde's straal in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Afstand in kilometers
}

function heuristicScore(location, end) {
    const { lat: lat1, lon: lon1 } = romaniaMap[location];
    const { lat: lat2, lon: lon2 } = romaniaMap[end];

    return haversine(lat1, lon1, lat2, lon2);
}

function greedySearch(start, end) {
    const priorityQueue = [{ location: start, length: 0, route: [start] }];

    const visited = new Set();

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => heuristicScore(a.location, end) - heuristicScore(b.location, end));
        const { location, length, route } = priorityQueue.shift();

        if (visited.has(location)) continue;
        visited.add(location);

        if (location === end) {
            return route;
        }

        priorityQueue.push(...romaniaMap[location].neighbors.map(({ city, cost } ) => {
            return { location: city, length: length + cost, route: [...route, city] };
        }));
    }

    return null;
}

function AStarSearch(start, end) {
    const priorityQueue = [{ location: start, length: 0, route: [start] }];

    const visited = new Set();

    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => (heuristicScore(a.location, end) + a.length) - (heuristicScore(b.location, end) + b.length));
        const { location, length, route } = priorityQueue.shift();

        if (visited.has(location)) continue;
        visited.add(location);

        if (location === end) {
            return route;
        }

        priorityQueue.push(...romaniaMap[location].neighbors.map(({ city, cost } ) => {
            return { location: city, length: length + cost, route: [...route, city] };
        }));
    }

    return null;
}

for (start in romaniaMap) {
    for (end in romaniaMap) {
        if (start === end) continue;

        console.log(`From ${start} to ${end}`);

        console.log(`DFS:    ${DFS(start, end)}`);
        console.log(`BFS:    ${BFS(start, end)}`);
        console.log(`UCS:    ${UCS(start, end)}`);
        console.log(`Greedy: ${greedySearch(start, end)}`);
        console.log(`A*:     ${AStarSearch(start, end)}`);

        console.log('');
    }
}