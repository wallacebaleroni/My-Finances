import APIConnection from "../api/APIConnection";
import Entry from "../models/Entry";

export default class EntryDAO {
    async getAll() {
        let apiConnection = new APIConnection();
        const entries = await apiConnection.getAllEntries();
        return entries['entries'].map(entry => this.jsonToObject(entry));
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
