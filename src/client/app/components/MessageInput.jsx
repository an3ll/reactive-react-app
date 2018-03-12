import Formsy from 'formsy-react';
import React from 'react';
import InputForm from "./InputForm";

class MessageInput extends React.Component {

    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = { canSubmit: false };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit(model) {
        fetch('http://example.com/', {
            method: 'post',
            body: JSON.stringify(model)
        });
    }

    render() {
        return (
            <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>

                <label>
                    Produktnamn
                </label>
                <InputForm
                    name="Produktnamn"
                    validations="isExisty"
                    validationError="May not be empty"
                    required />

                <label>
                    Produktnamn
                </label>
                <InputForm
                    name="email"
                    validations="isExisty"
                    validationError="May not be empty"
                    required />

                <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
            </Formsy>
        );
    }
}

export default MessageInput