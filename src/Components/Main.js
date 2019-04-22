import React from 'react';

class Main extends React.Component {
    constructor() {
        super();
        this.state={
            value: '',
        }
    }

    handleClick = () => {
        alert(this.state.value);
    }

    changeValue = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <p>This is the main Component</p>
                <input defaultValue={this.state.value} onChange={this.changeValue} type="text"/>
                <br/>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default Main;