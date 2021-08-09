import { Component } from "react";

class Entry extends Component {

    _getFormattedValue(value) {
        let integer = parseInt(value / 100)
        let decimal = value % 100
        if (decimal < 10) { decimal = "0" + decimal }

        return "R$ " + integer + "," + decimal
    }

    render() {
        return (
            <tr>
                <td>{ this.props.entry['date'] }</td>
                <td>{ this.props.entry['category'] }</td>
                <td>{ this.props.entry['description'] }</td>
                {this.props.accounts.map(account => {
                    if (account['id'] === this.props.entry['account']) {
                        return (<td key={this.props.entry['entry_id'] + account['id']}>{this._getFormattedValue(this.props.entry['value'])}</td>)
                    } else {
                        return (<td key={this.props.entry['entry_id'] + account['id']}></td>)
                    }
                })}
            </tr>
        )
    }
}

export default Entry