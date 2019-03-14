const request = require('supertest');

const db = require('../data/dbConfig');
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert()', () => {
        it('should insert the provided hobbit into the db', async () => {
            const hobbit = await Hobbits.insert({ name: 'sam' });

            expect(hobbit.name).toBe('sam');
        })
    })
})
