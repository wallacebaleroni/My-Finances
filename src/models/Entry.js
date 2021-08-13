export default class Entry {
    constructor(entry_id, account_id, date, seq, category, value, description, commentary) {
        this.entry_id = entry_id
        this.account_id = account_id
        this.date = date
        this.seq = seq
        this.category = category
        this.value = value
        this.description = description
        this.commentary = commentary
    }
}
