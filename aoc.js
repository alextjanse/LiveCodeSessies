import { readFileSync } from 'fs';

const file = readFileSync('./aoc_input.txt', 'utf-8').split('\n');

function count(item, list)
{
    let result = 0;
    for (let i = 0; i < list.length; i++)
    {
        if (item === list[i]) result++;
    }
    return result;
}

const leftList = [];
const rightList = [];

for (let i = 0; i < file.length; i++)
{
    const line = file[i];

    const [left, right] = line.split('   ');

    leftList.push(parseInt(left));
    rightList.push(parseInt(right));
}

// input ingelezen

leftList.sort();
rightList.sort();

let total_diff = 0;

for (let i = 0; i < leftList.length; i++)
{
    const left = leftList[i];
    const right = rightList[i];

    total_diff += Math.abs(left - right);
}

console.log(total_diff);

let total_similarity = 0;

for (let i = 0; i < leftList.length; i++)
{
    const left = leftList[i];

    const occurrences = rightList.count(left);

    total_similarity += left * occurrences;
}

console.log(total_similarity);
