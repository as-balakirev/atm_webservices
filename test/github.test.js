const axios = require('axios');
const {request} = require("@octokit/request");
const {expect} = require('chai');
const {
    createAppAuth,
    createOAuthAppAuth,
    createTokenAuth,
    createActionAuth,
} = require("@octokit/auth");

describe('Github test suite', function () {

    it('should get a repository', async function () {
        const TOKEN = "5da4fd63feb58424a56cf1a9d6220226ce4a1b07";

        const auth = createTokenAuth("5da4fd63feb58424a56cf1a9d6220226ce4a1b07");
        const authentication = await auth();

        axios.get('https://github.com/as-balakirev/atm_webservices').then(() => axios.post('https://github.com/login/oauth/authorize?client_id=bfa4d04d5d2a49832177'))
        // axios.patch('https://github.com/as-balakirev', {
        //         name: 'TEST name',
        //         description: 'TEST description',
        // },{
        //     headers: {
        //         'Authorization': `token ${TOKEN}`
        //     }
        // })
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //     });



    //    let repository = await axios.get('https://github.com/as-balakirev/atm_webservices');
    //    expect(repository.status).to.be.equal(200);
    // });
    // it('should update repository', async function () {
    //     const auth = createTokenAuth("5da4fd63feb58424a56cf1a9d6220226ce4a1b07");
    //     const authentication = await auth();
    //     const response = await request("POST https://github.com/as-balakirev/atm_webservices", {
    //         host: 'api.github.com',
    //         owner: 'as-balakirev',
    //         repo: 'atm_webservices',
    //         data: {
    //         name: 'TEST name',
    //             description: 'TEST description',
    //     },
    //         headers: authentication.headers
    //     });
    //     console.log(response)


        // axios({
        //     method: 'PATCH',
        //     url: 'https://github.com/as-balakirev/atm_webservices',
        //     headers: authentication,
        //     data: {
        //         name: 'TEST name',
        //         description: 'TEST description',
        //     }
        // }).then(response => expect(response.data.description).to.be.equal('TEST description'));

    });
});

