const userInformation = require('./information');
const cowsay = require('cowsay');
console.log(cowsay.say({
    text: `Hi, my name is ${userInformation.name} and I'm going to ${userInformation.campus}`
}));