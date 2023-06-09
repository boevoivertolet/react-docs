import logo from './logo.svg';
import './App.css';
import React from "react";
import Table from "./Table";
import Form from "./Form";

class App extends React.Component {
    state = {
        characters: [],
    }
    removeCharacter = (index) => {
        const {characters} = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {

        return (
            <div className = "container">
                <Table characterData = {this.state.characters} removeCharacter = {this.removeCharacter} />
                <Form />
            </div>
        )
    }
}

export default App;
