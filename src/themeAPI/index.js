const faker = require('faker')
const { getRandomInt } = require('./getRandom')

const theme = ['red', 'purple', 'gray']

const cards = []

for (let index = 0; index < 20; index++) {
    const Cards = {
        theme: theme[getRandomInt(0, theme.length - 1)]
    }
    cards.push(newcolor)

}

