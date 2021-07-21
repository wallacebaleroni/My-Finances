import { Component } from 'react';
import EntryTable from "./components/EntryTable"

class App extends Component {
  constructor() {
    super()
    this.accounts = { "accounts": [{ "color": "#8e7cc3", "id": 1, "name": "Cartão", "type": "CREDIT_CARD" }, { "color": "#e06666", "id": 2, "name": "Santander", "type": "CHECKING_ACCOUNT" }, { "color": "#8e7cc3", "id": 3, "name": "NuConta", "type": "CHECKING_ACCOUNT" }, { "color": "#6aa84f", "id": 4, "name": "PicPay", "type": "CHECKING_ACCOUNT" }, { "color": "#a694d3", "id": 5, "name": "NuGuardado", "type": "INVESTMENT" }, { "color": "#6d9eeb", "id": 6, "name": "TesouroDireto", "type": "INVESTMENT" }] }
    this.entries = { "entries": [{ "account": 3, "category": "YIELD", "commentary": "", "date": "09/07/2021", "description": "Rendimento NuConta", "entry_id": 1, "seq": 0, "value": 118 }, { "account": 4, "category": "YIELD", "commentary": "", "date": "09/07/2021", "description": "Rendimento PicPay", "entry_id": 2, "seq": 1, "value": 253 }, { "account": 5, "category": "YIELD", "commentary": "", "date": "09/07/2021", "description": "Rendimento NuConta", "entry_id": 3, "seq": 2, "value": 263 }] }
  }

  render() {
    return (
      <section className="conteudo">
        <EntryTable accounts={this.accounts['accounts']} entries={this.entries['entries']} />
      </section>
    );
  }
}

export default App;
