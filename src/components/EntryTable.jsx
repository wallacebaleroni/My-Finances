import { Component } from "react";
import Entry from "./Entry"
import TableHeader from "./TableHeader";

class EntryTable extends Component {
    render() {
        return (
            <table>
                <TableHeader accounts={this.props.accounts} />
                {this.props.entries.map(entry => {
                    return (
                        <Entry accounts={this.props.accounts} entry={entry} />
                    )
                })}
            </table>
        )
    }
}

export default EntryTable