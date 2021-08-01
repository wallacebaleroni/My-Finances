export default class Entry {
    constructor(entry_id, account, date, seq, category, value, description, commentary) {
        this.entry_id = entry_id
        this.account = account
        this.date = date
        this.seq = seq
        this.category = category
        this.value = value
        this.description = description
        this.commentary = commentary
    }
}
