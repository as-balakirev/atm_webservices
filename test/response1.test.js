const axios = require('axios');
const {expect} = require('chai');

describe('Webservices test suite', function() {

    it('GET task #1', async function() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      //  console.log(response);
        expect(response.status).to.be.equal(200);
    });

    it('GET task #2', async function() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8');
    });
    it('GET task #3', async function() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let arrayOfUsers = response.data;
        expect(arrayOfUsers).to.have.lengthOf(10);
    });
    it('GET task #3 extended', async function() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        let arrayOfUsers = response.data;
        expect(arrayOfUsers[Math.floor(Math.random() * arrayOfUsers.length)]).to.have.all.keys('id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company');
    });
});
