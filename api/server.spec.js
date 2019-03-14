const request = require('supertest');

const server = require('./server');

describe('server', () => {
    it('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    });
});

describe('Get /', () => {
    it('should return 200 ok', () => {
        return request(server)
        .get('/')
        .then(res => {
            expect(res.status).toBe(200)
        }).catch()
    });

    // using the squad
    it('should return 200 ok using the squad', async () => {
        const res = await request(server).get('/');
        
        expect(res.status).toBe(200);
    })

    it('should return JSON', async () => {
        const res = await request(server).get('/');

        expect(res.type).toBe('application/json')
    })

    it('should return {api: "up"}', async () => {
        const res = await request(server).get('/');

        expect(res.body).toEqual({api: "up"})
    })
});
