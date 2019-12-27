import React from 'react'
import '../App.css'
import Question from './Question'

class Generator extends React.Component {

    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            user: data.user,
            title: data.title,
            questions: data.questions
        };
    }

    generateQuestions(questions) {
        return questions.map(q => 
            <Question 
                type={q.type}
                prompt={q.prompt}
                responses={q.responses} 
            />
        )
    }

    render() {
        return (
            <div class="generator-div">
                <h1>{this.state.title}</h1>
                <form>
                    {this.generateQuestions(this.state.questions)}
                </form>
            </div>
        )
    }
}

export default Generator