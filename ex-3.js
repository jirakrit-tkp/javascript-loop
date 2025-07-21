// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let eachScore of scores) {
    if (minScore) {
        if (eachScore < minScore) {
            minScore = eachScore;
        }
    } else {
        minScore = eachScore;
    }
}

console.log(minScore);
