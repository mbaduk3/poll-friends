import React from 'react'
import '../App.css'
import Question from './Question'
import QuestionModal from './QuestionModal'
import Spinner from '../UI/Spinner/Spinner'
import axios from 'axios'

class Generator extends React.Component {

    constructor(props) {
        console.log("[Generator] constructor()");
        super(props);
        this.state = {
            user: null,
            title: null,
            questions: null,
            showModal: false,
            loading: true,
            error: false,
            msg: null
        };
    }

    componentDidMount() {
        axios.get('https://poll-friends.firebaseio.com/polls/testPoll.json')
            .then(res => {
                console.log(res);
                this.setState({
                    user: res.data.user,
                    title: res.data.title,
                    questions: res.data.questions,
                    loading: false,
                    error: false});
            })
            .catch(err => {
                console.log(err);
                this.setState({ loading: false, error: true });
            })
    }

    generateQuestions(questions) {
        if (this.state.error) return <p>Couldnt load questions</p>
        return questions.map(q => 
            <Question 
                id={q.id}
                key={q.id}
                type={q.type}
                prompt={q.prompt}
                responses={q.responses} 
                ans={1}
            />
        )
    }

    showModalHandler = () => this.setState((prevState) => {
        return ({showModal: !prevState.showModal});
    })

    addQHandler = (newQ) => {
        const questionsCpy = [...this.state.questions];
        const qCpy = {...newQ};
        qCpy.id = questionsCpy.length + 1;
        questionsCpy.push(qCpy);
        this.setState({questions: questionsCpy})
    }

    savePollHandler = () => {
        axios.put('https://poll-friends.firebaseio.com/polls/testPoll/questions.json', this.state.questions)
            .then(res => this.setState({ msg: "Saved!" }))
            .catch(err => this.setState({ msg: "Could not save..."}));
    }

    render() {
        let output = <Spinner />;
        if (!this.state.loading) output = (
            <div className="generator-div">
            <p>{this.state.msg}</p>
            <h1>{this.state.title}</h1>
            <form>
                {this.generateQuestions(this.state.questions)}
                <button onClick={this.showModalHandler}>Add a question</button>
                <QuestionModal 
                    show={this.state.showModal}
                    addQHandler={this.addQHandler}/>
            </form>
            <button onClick={this.savePollHandler}>Save Poll</button>
            </div>);
        return output
    }
}

export default Generator