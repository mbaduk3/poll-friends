import React from 'react'
import Popup from 'reactjs-popup'
import ResponseMaker from './ResponseMaker'

class QuestionModal extends React.Component {

    state = {
        id: this.props.id,
        type: "",
        prompt: "defaultPrompt",
        responses: ["Hello", "World"]
    }

    promptChangeHandler = (event) => {
        this.setState({prompt: event.target.value})
    }

    typeChangeHandler = (event) => {
        this.setState({type: event.target.value})
    }
    
    addRespHandler = () => {
        const oldResps = [...this.state.responses];
        oldResps.push("");
        this.setState({responses: oldResps});
    }

    changeResponseHandler = (event, index) => {
        const oldResps = [...this.state.responses];
        oldResps[index] = event.target.value;
        this.setState({responses: oldResps});
    }

    render() {
        return <Popup 
            trigger={<button>Press</button>}
            position="bottom left">
                <React.Fragment>
                    <label htmlFor="questionPrompt">Question Prompt:</label> 
                    <input 
                        type="text" 
                        id="questionPrompt" 
                        onChange={this.promptChangeHandler}
                        value={this.state.prompt}></input>
                    <label htmlFor="questionType">Question Type:</label>
                    <select 
                        name="questionSelector" 
                        id="questionType"
                        value={this.state.type}
                        onChange={this.typeChangeHandler}>
                        <option value="multipleChoice">Multiple Choice</option>
                        <option value="shortAns">Short Answer</option>
                        <option value="checkbox">Checkbox</option>
                    </select>
                    <ResponseMaker 
                        type={this.state.type}
                        responses={this.state.responses}
                        addRespHandler={this.addRespHandler}
                        changeRespHandler={this.changeResponseHandler}/>
                    <button 
                        onClick={() => this.props.addQHandler(this.state)}>
                            Add Question
                    </button>
                </React.Fragment>
        </Popup>
    }
}

export default QuestionModal