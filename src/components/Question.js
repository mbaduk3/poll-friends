import React from 'react'
import '../App.css'

// Question types: short ans, multiple choice (radio), checkbox, dropdown

class Question extends React.Component {

    constructor() {
        super();
        this.state = {
            type: "shortAns",
            prompt: "defaultPrompt",
            choices: []
        }
    }

    renderShortAns() {
        
    }

    renderMultipleChoice() {

    }

    renderCheckbox() {

    }

    renderDropdown() {

    }

    render() {

        let res;

        switch(this.state.type) {
            case "shortAns":
                res = this.renderShortAns();
                break;
            case "multipleChoice":
                res = this.renderMultipleChoice();
                break;
            case "checkbox":
                res = this.renderCheckbox();
                break;
            case "dropdown":
                res = this.renderDropdown();
                break;
        }

        return (
            <div class="question-div">
                <h3>{this.state.prompt}</h3>
                <p>{res}</p>
            </div>
        )
    }
}