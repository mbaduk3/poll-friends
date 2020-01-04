import React from 'react'
import Popup from 'reactjs-popup'
import ResponseMaker from './ResponseMaker'

class QuestionModal extends React.Component {

    state = {
        type: "multipleChoice",
        prompt: "defaultPrompt",
        responses: ["Hello", "World"]
    }

    submit = () => {
        this.props.addQHandler(this.state);
        this.resetState();
    }

    resetState = () => {
        this.setState({
            type: "multipleChoice",
            prompt: "defaultPrompt",
            responses: ["Hello", "World"]
        });
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
                    modal
                    open={this.props.show}>
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
                        {/* <option value="shortAns">Short Answer</option>
                        <option value="checkbox">Checkbox</option> */}
                    </select>
                    <ResponseMaker 
                        type={this.state.type}
                        responses={this.state.responses}
                        addRespHandler={this.addRespHandler}
                        changeRespHandler={this.changeResponseHandler}/>
                    <button 
                        onClick={this.submit}>
                            Add Question
                    </button>
                </React.Fragment>
        </Popup>
    }
}

export default QuestionModal