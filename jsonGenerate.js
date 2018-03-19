const fs = require('fs');
const faker = require('faker');

const jsonData = {};


const createJsonFile = function (filename, jsonData) {
    fs.writeFileSync(filename, JSON.stringify(jsonData), 'utf-8');

    if (fs.statSync(filename)) {
        console.log(filename + " has been generated!");
    }
};

const createJsonData = function (key, createParamsFunc, range, useId = true) {
    jsonData[key] = [];

    for(let i = 1; i <= range; i++) {
        jsonData[key].push(Object.assign(useId ? {id: i} : {}, createParamsFunc()));
    }

};

createJsonData('posts', function() {
    return {
        title: faker.name.title(),
        author: faker.name.firstName()
    }
}, 100);

createJsonData('comments', function() {
    return {
        body: faker.lorem.text(),
        postId: faker.random.uuid()
    }
}, 100);

createJsonData('profile', function() {
    return {
        name: faker.name.firstName()
    }
}, 100);

createJsonFile('faker.json', jsonData);
