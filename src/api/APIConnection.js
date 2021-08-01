const API_URL = "http://localhost:5000"
const ALL_ENTRIES_ENDPOINT = "/entries"
const ALL_ACCOUNTS_ENDPOINT = "/accounts"

export default class APIConnection {
    async getAllEntries() {
        const response = await fetch(API_URL + ALL_ENTRIES_ENDPOINT)
        return await response.json()
    }

    async getAllAccounts() {
        const response = await fetch(API_URL + ALL_ACCOUNTS_ENDPOINT)
        return await response.json()
    }
}
