const { performance } = require("perf_hooks");

// Helpers
function getRandomNumbers(n) {
  return Array.from({ length: n }, () => Math.random() * 100);
}

// Lazy utilities
function* zip(a, b) {
  const ita = a[Symbol.iterator]();
  const itb = b[Symbol.iterator]();

  while (true) {
    const ra = ita.next();
    const rb = itb.next();

    if (ra.done || rb.done) break;

    yield [ra.value, rb.value];
  }
}

function* map(iter, fn) {
  for (const val of iter) {
    yield fn(val);
  }
}

function* map2(iter, fn) {
  for (const [a, b] of iter) {
    yield fn(a, b);
  }
}

function* toArray(iter) {
  const result = [];
  for (const val of iter) {
    result.push(val);
  }
  return result;
}

// Eager version
function eager(xs, ys) {
  const tStart = performance.now();

  const x_squared = xs.map(x => x * x);
  const y_squared = ys.map(y => y * y);
  const summed = x_squared.map((x, i) => x + y_squared[i]);
  const lengths = summed.map(Math.sqrt);

  const tEnd = performance.now();

  console.log(`Eager evaluation took ${(tEnd - tStart) / 1000} seconds`);
  return lengths;
}

// Lazy version
function lazy(xs, ys) {
  const tStart = performance.now();

  const xx = map(xs, x => x * x);
  const yy = map(ys, y => y * y);
  const zipped = zip(xx, yy);
  const summed = map2(zipped, (x, y) => x + y);
  const lengths = map(summed, s => Math.sqrt(s));
  const result = Array.from(lengths);  // force evaluation

  const tEnd = performance.now();

  console.log(`Lazy evaluation took ${(tEnd - tStart) / 1000} seconds`);
  return result;
}

// Run
const n = 50_000_000;
const xs = getRandomNumbers(n);
const ys = getRandomNumbers(n);

eager(xs, ys);
lazy(xs, ys);
