const API_URL = "http://localhost:5000"
const ALL_ENTRIES_ENDPOINT = "/entries"
const ALL_ACCOUNTS_ENDPOINT = "/accounts"
const CREATE_ENTRY_ENDPOINT = "/entries"

export default class APIConnection {
    async getAllEntries() {
        const response = await fetch(API_URL + ALL_ENTRIES_ENDPOINT)
        return await response.json()
    }

    async getAllAccounts() {
        const response = await fetch(API_URL + ALL_ACCOUNTS_ENDPOINT)
        return await response.json()
    }

    async createEntry(entry) {
        const response = await fetch(API_URL + CREATE_ENTRY_ENDPOINT, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });
        const content = await response.json()
        console.log(content)
        return content;
    }
}
