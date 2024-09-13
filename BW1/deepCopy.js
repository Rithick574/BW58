//structred clone and circular refference
const lodash = require('lodash')

const car = {
    make:'Toyota'
};

const deep = lodash.cloneDeep(car)
console.log("🚀 ~ file: deepCopy.js:9 ~ deep:", deep)



const cloned = structuredClone(car)

// circular refference
car.basedOn=car;
console.log("🚀 ~ file: deepCopy.js:6 ~ cloned:", cloned)
console.log(car === car.basedOn);
console.log(car.basedOn === cloned.basedOn);
