import { Component } from 'react';
import EntryTable from "./components/EntryTable"
import AccountDAO from './daos/AccountDAO';
import EntryDAO from './daos/EntryDAO';

class App extends Component {
  constructor() {
    super()

    this.state = {
      accounts: [],
      entries: []
    }
  }

  componentDidMount() {
    let entryListDAO = new EntryDAO()
    entryListDAO.getAll().then(entryList => {
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

  render() {
    return (
      <section className="conteudo">
        <EntryTable accounts={this.state.accounts} entries={this.state.entries} />
      </section>
    );
  }
}

export default App;
