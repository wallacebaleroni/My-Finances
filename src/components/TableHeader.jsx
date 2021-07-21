import { Component } from "react";

class TableHeader extends Component {
    render() {
        return (
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                {this.props.accounts.map(account => {
                    return (
                        <th>{account['name']}</th>
                    )
                })}
            </tr>
        )
    }
}

export default TableHeader