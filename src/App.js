import { Component } from 'react';
import EntryForm from "./components/EntryForm"
import EntryTable from "./components/EntryTable"
import AccountDAO from './daos/AccountDAO';
import EntryDAO from './daos/EntryDAO';

import Entry from './models/Entry';

class App extends Component {
  constructor() {
    super()

    this.state = {
      accounts: [],
      entries: []
    }
  }

  componentDidMount() {
    let entryDAO = new EntryDAO()
    entryDAO.getAll().then(entryList => {
      console.log("Entry result:")
      console.log(entryList)
      this.setState({...this.state, entries: entryList})
    })

    let accountDAO = new AccountDAO()
    accountDAO.getAll().then(accountList => {
      console.log("AccountDAO result:")
      console.log(accountList)
      this.setState({...this.state, accounts: accountList})
    })
  }

  _addEntry() {
    let new_entry = new Entry(2, 2, "12/08/2021", 0, "YIELD", "500")

    let entryDAO = new EntryDAO()
    entryDAO.add(new_entry).then(added_entry => {
      let new_state_entries = [...this.state.entries, added_entry]
      this.setState({...this.state, entries: new_state_entries})
    })
  }

  render() {
    return (
      <section className="conteudo">
        <EntryForm
          accounts={this.state.accounts}
          addEntry={this._addEntry.bind(this)}
        />
        <EntryTable
          accounts={this.state.accounts}
          entries={this.state.entries}
        />
      </section>
    );
  }
}

export default App;
