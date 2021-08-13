import { Component } from "react";
import NumberFormat from 'react-number-format'

class EntryForm extends Component {
    constructor() {
        super()
        this.state = {
            isATransfer: false,
            formattedValueInput: "R$ 0,00",
            originalValueInput: "",
        }
    }

    _handleIsTransferChange(event) {
        event.stopPropagation();
        this.setState({...this.state, isATransfer: event.target.checked});
    }

    _addEntry(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.addEntry()
    }

    render() {
        let accountsInputField;
        if (this.state.isATransfer) {
            accountsInputField = 
                <div>
                    <div>Conta de origem:
                        <select>
                            {this.props.accounts.map(account => 
                                <option key={account['account_id']}>
                                    {account['name']}
                                </option>
                            )}
                        </select>
                    </div>
                    <div>Conta de destino: 
                        <select>
                            {this.props.accounts.map(account => 
                                <option key={account['account_id']}>
                                    {account['name']}
                                </option>
                            )}
                        </select>
                    </div>
                </div>;
        } else {
            accountsInputField = 
                <div>
                    <div>Conta: 
                        <select>
                            {this.props.accounts.map(account => 
                                <option key={account['account_id']}>
                                    {account['name']}
                                </option>
                            )}
                        </select>
                    </div>
                </div>;
        }

        return (
            <form
                onSubmit={this._addEntry.bind(this)}
            >
                <div>
                    Data: <input type="date"/>
                </div>
                <div>
                    Transferência?:
                    <input
                        type="checkbox"
                        onChange={this._handleIsTransferChange.bind(this)}
                    />
                </div>
                <div>
                    Categoria:
                    <select>
                        <option>Alimentação</option>
                        <option>Aparência</option>
                        <option>Assinatura</option>
                        <option>Doação</option>
                        <option>Imprevistos</option>
                        <option>Lazer</option>
                        <option>Presente</option>
                        <option>Saúde</option>
                        <option>Transporte</option>
                        <option>Remuneração</option>
                        <option>Rendimento</option>
                        <option>Reembolso</option>
                    </select>
                </div>
                <div>
                    Descrição: <input type="text"/>
                </div>
                <div>
                    Commentário: <input type="text"/>
                </div>
                {accountsInputField}
                <div>
                    Valor:
                    <NumberFormat 
                        thousandSeparator={'.'} 
                        decimalSeparator={','}
                        decimalScale={2}
                        fixedDecimalScale={true}
                        allowNegative={true}
                        allowEmptyFormatting={true}
                        prefix={'R$ '}
                        defaultValue={'0'}
                    />
                </div>
                <div>
                    <button>
                        Create entry
                    </button>
                </div>
            </form>
        )
    }
}

export default EntryForm;
