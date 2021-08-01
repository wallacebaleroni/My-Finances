import { Component } from "react";
import Entry from "./Entry"
import TableHeader from "./TableHeader";

class EntryTable extends Component {
    are_props_valid() {
        return (this.props.accounts != null && this.props.accounts.length !== 0 && this.props.entries != null && this.props.entries.length !== 0)
    }

    render() {
        if (!this.are_props_valid()) {
            return (
                <p>Loading info, please wait...</p>
            )
        }
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