let seed = 1;

const getRandomSeed = () => seed;

const setRandomSeed = (newSeed) => {
    if(isNaN(newSeed)) {
        throw `Seed must be a number. Given: ${newSeed}`;
    }
    const float = parseFloat(newSeed);
    if (!Number.isInteger(float)) {
        throw `Seed must be an integer. Given: ${newSeed}`;
    }
    const int = parseInt(float);
    if (int <= 0) {
        throw `Seed must be positive. Given: ${newSeed}`;
    }
    seed = int;
}

// https://stackoverflow.com/a/19303725
const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}
Math.random = random;

// https://underscorejs.org/docs/modules/random.html
const randomInt = (min, max) => {
    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(random() * (max - min + 1));
}
_.random = randomInt;