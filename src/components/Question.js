import React from 'react'
import '../App.css'

// Question types: short ans, multiple choice (radio), checkbox

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            prompt: this.props.prompt,
            responses: this.props.responses,
            value: "null"
        }
    }

    renderShortAns() {
       return (
            <input type="text" placeholder={this.state.value}></input>
       )
    }

    renderMultipleChoice() {
        const multipleJsx = 
            this.state.responses.map(res => {
                    return (
                        <div 
                            className="choice-div"
                            key={res}>
                            <input 
                                key={res}
                                type="radio" 
                                id={res} 
                                name={this.state.prompt} 
                                value={res}>
                            </input>
                        <label htmlFor={res}>{res}</label>
                        </div>
                    )
                }
            )
        return multipleJsx

    }

    renderCheckbox() {
        return (
            this.state.responses.map(res => {
                return (
                    <input  
                        key={res}
                        type="checkbox"
                        id={res}
                        name={this.state.prompt}
                        value={res}>
                    </input>
                )
            })
        )
    }

    render() {

        let res;

        switch(this.state.type) {
            default:
                break
            case "shortAns":
                res = this.renderShortAns();
                break;
            case "multipleChoice":
                res = this.renderMultipleChoice();
                break;
            case "checkbox":
                res = this.renderCheckbox();
                break;
        }

        return (
            <div className="question-div">
                <h3>{this.state.prompt}</h3>
                <div className="response-div">{res}</div>
            </div>
        )
    }
}

export default Question