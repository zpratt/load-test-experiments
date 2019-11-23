const {toFile} = require('./render-utils');
const {Chance} = require('chance');
const times = require('lodash.times');
const async = require('async');
const uuid = require('uuid/v4');

const chance = new Chance();

const numberOfRecords = 200;

const templateFileCallbacks = [];
const mustacheTemplate = './template-transactions/pizza.mustache';
const migrationOutputPath = `./output/V1__insert-pizza.sql`;

function generatePizza() {
    const id = uuid();
    const description = chance.word();

    return {
        id,
        description
    };
}

times(numberOfRecords, (index) => {
    templateFileCallbacks.push((done) => {
        const address = generatePizza();

        toFile(mustacheTemplate, address, migrationOutputPath, done);
    });
});

async.parallel(templateFileCallbacks, (err) => {
    console.log('error', err);
    if (!err) {
        console.log('done with files son');
    }
});
