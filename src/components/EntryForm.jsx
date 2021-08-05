import { Component } from "react";
import "./EntryForm.css"
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

    _handleValueChange(event) {
        event.stopPropagation()
        console.log(event.target.value)
        this.setState({...this.state, valueInput: "R$ " + event.target.value})
    }

    render() {
        let accountsInputField;
        if (this.state.isATransfer) {
            accountsInputField = 
                <div>
                    <div>Conta de origem:
                        <select>
                            {this.props.accounts.map(account => 
                                <option key={account['id']}>
                                    {account['name']}
                                </option>
                            )}
                        </select>
                    </div>
                    <div>Conta de destino: 
                        <select>
                            {this.props.accounts.map(account => 
                                <option key={account['id']}>
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
                                <option key={account['id']}>
                                    {account['name']}
                                </option>
                            )}
                        </select>
                    </div>
                </div>;
        }

        return (
            <form>
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
                        prefix={'R$'}
                        defaultValue={'0'}
                    />
                </div>
            </form>
        )
    }
}

export default EntryForm;
