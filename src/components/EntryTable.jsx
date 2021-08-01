import { Component } from "react";
import Entry from "./Entry"
import TableHeader from "./TableHeader";

class EntryTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <TableHeader accounts={this.props.accounts} />
                </thead>
                <tbody>
                    {this.props.entries.map(entry => {
                        return (
                            <Entry key={entry.entry_id} accounts={this.props.accounts} entry={entry} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default EntryTable