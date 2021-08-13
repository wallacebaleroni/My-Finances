import APIConnection from "../api/APIConnection";
import Account from "../models/Account";

export default class AccountDAO {
    async getAll() {
        let apiConnection = new APIConnection();
        const accounts = await apiConnection.getAllAccounts();
        return accounts['accounts'].map(account => this.jsonToObject(account));
    }

    jsonToObject(account) {
        return new Account(
            account['account_id'],
            account['name'],
            account['type'],
            account['color']
        )
    }
}
