import { Component } from "react";

class Entry extends Component {

    _getFormattedValue(value) {
        return "R$ " + (parseInt(value / 100)) + "," + (value % 100)
    }

    render() {
        return (
            <tr>
                <td>{ this.props.entry['date'] }</td>
                <td>{ this.props.entry['category'] }</td>
                <td>{ this.props.entry['description'] }</td>
                {this.props.accounts.map(account => {
                    if (account['id'] === this.props.entry['account']) {
                        return (<td>{this._getFormattedValue(this.props.entry['value'])}</td>)
                    } else {
                        return (<td></td>)
                    }
                })}
            </tr>
        )
    }
}

export default Entry