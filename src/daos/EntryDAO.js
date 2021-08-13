import APIConnection from "../api/APIConnection";
import Entry from "../models/Entry";

export default class EntryDAO {
    async getAll() {
        let apiConnection = new APIConnection();
        const entries = await apiConnection.getAllEntries();
        // set this.entries with these entries
        return entries['entries'].map(entry => this.jsonToObject(entry));
    }

    async add(entry) {
        let apiConnection = new APIConnection();
        let createdEntry = await apiConnection.createEntry(entry)
        return createdEntry
    }

    jsonToObject(entry) {
        return new Entry(
            entry['entry_id'],
            entry['account_id'],
            entry['date'],
            entry['seq'],
            entry['category'],
            entry['value'],
            entry['description'],
            entry['commentary']
        )
    }
}
