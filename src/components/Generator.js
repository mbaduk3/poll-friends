import React from 'react'
import '../App.css'
import Question from './Question'
import QuestionModal from './QuestionModal'

class Generator extends React.Component {

    constructor(props) {
        console.log("[Generator] constructor()");
        super(props);
        let data = this.props.data;
        this.state = {
            user: data.user,
            title: data.title,
            questions: data.questions,
            ipQuestion: null
        };
    }

    generateQuestions(questions) {
        return questions.map(q => 
            <Question 
                key={q.id}
                type={q.type}
                prompt={q.prompt}
                responses={q.responses} 
            />
        )
    }

    addQuestionHandler = () => {
        const setter = (prevState, prevProps) => {
            const questionsCpy = [...prevState.questions];
            questionsCpy.push({
                "id": (prevState.questions.length + 1),
                "type": "multipleChoice",
                "prompt": "defaultPrompt" + (prevState.questions.length + 1),
                "responses": [
                    "defaultChoice1",
                    "defaultChoice2", 
                    "defaultChoice3"
                ]
            });
            return {questions: questionsCpy};
        }
        this.setState((prevState, prevProps) => setter(prevState, prevProps));
    }

    openModalHandler = () => {

    }

    addQHandler = () => {
        
    }

    render() {
        return (
            <div className="generator-div">
                <h1>{this.state.title}</h1>
                <form>
                    {this.generateQuestions(this.state.questions)}
                    <button 
                        onClick={this.addQuestionHandler}>
                            Add Question
                    </button>
                    <QuestionModal />
                </form>
            </div>
        )
    }
}

export default Generator