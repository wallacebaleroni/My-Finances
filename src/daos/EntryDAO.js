import APIConnection from "../api/APIConnection";
import Entry from "../models/Entry";

export default class EntryDAO {
    async getAll() {
        let apiConnection = new APIConnection();
        const entries = await apiConnection.getAllEntries();
        // set this.entries with these entries
        return entries['entries'].map(entry => this.jsonToObject(entry));
    }

    addEntry(entry_id, account, date, seq, category, value, description, commentary) {
        let newEntry = new Entry(entry_id, account, date, seq, category, value, description, commentary);

        return newEntry
    }

    jsonToObject(entry) {
        return new Entry(
            entry['entry_id'],
            entry['account'],
            entry['date'],
            entry['seq'],
            entry['category'],
            entry['value'],
            entry['description'],
            entry['commentary']
        )
    }
}
