const API_URL = "http://localhost:5000"
const ALL_ENTRIES_ENDPOINT = "/entries"
const ALL_ACCOUNTS_ENDPOINT = "/accounts"
const CREATE_ENTRY_ENDPOINT = "/entries"

export default class APIConnection {
    async getAllEntries() {
        // return Promise.resolve({'entries': [{'entry_id' : 1, 'account': 1, 'date': "12/08/2021", 'value': "200"}]})
        console.log("Request:")
        console.log(API_URL + ALL_ENTRIES_ENDPOINT)

        const response = await fetch(API_URL + ALL_ENTRIES_ENDPOINT)
        const content = await response.json();

        console.log("Response:")
        console.log(content)

        return await content
    }

    async getAllAccounts() {
        // return Promise.resolve({'accounts': [{'id': 1, 'name': 'Conta1'}, {'id': 2, 'name': 'Conta2'}]})
        console.log("Request:")
        console.log(API_URL + ALL_ACCOUNTS_ENDPOINT)

        const response = await fetch(API_URL + ALL_ACCOUNTS_ENDPOINT)
        const content = await response.json();

        console.log("Response:")
        console.log(content)

        return await content
    }

    async createEntry(entry) {
        console.log("Request:")
        console.log(API_URL + CREATE_ENTRY_ENDPOINT)
        console.log(JSON.stringify(entry))

        const response = await fetch(API_URL + CREATE_ENTRY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });
        const content = await response.json()

        console.log("Response:")
        console.log(content)

        return content;
    }
}
