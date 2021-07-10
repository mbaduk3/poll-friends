import React from 'react'
import '../App.css'
import Question from './Question'
import QuestionModal from './QuestionModal'
import Spinner from '../UI/Spinner/Spinner'
import axios from 'axios'

class Generator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            title: null,
            questions: null,
            showModal: false,
            loading: true,
            error: false,
            msg: null,
            pollId: null
        };
    }

    componentDidMount() {
        const { pollId } = this.props.match.params;
        axios.get('https://poll-friends.firebaseio.com/polls/' + pollId + '.json')
            .then(res => {
                console.log(res);
                if (res.data == null) {
                    this.setState({
                        user: null, 
                        title: 'Untitled',
                        questions: [],
                        loading: false,
                        pollId: pollId,
                        error: false
                    });
                }
                else {
                    this.setState({
                        user: res.data.user,
                        title: res.data.title,
                        questions: res.data.questions,
                        loading: false,
                        pollId: pollId,
                        error: false
                    });
                }
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
                delHandler={() => this.deleteHandler(q.id)}
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
        if (questionsCpy.length !== 0) {
            qCpy.id = questionsCpy[questionsCpy.length - 1].id + 1;
        } else {
            qCpy.id = 0;
        }
        questionsCpy.push(qCpy);
        this.setState({questions: questionsCpy})
    }

    deleteHandler = (id) => {
        const questionsCpy = [];
        for (const q in this.state.questions) {
            const ques = this.state.questions[q];
            if (ques.id !== id) questionsCpy.push(ques);
        }
        this.setState({questions: questionsCpy});
    }

    savePollHandler = () => {
        axios.put('https://poll-friends.firebaseio.com/polls/' + this.state.pollId + '/questions.json', this.state.questions)
            .then(res => this.setState({ msg: "Saved!" }))
            .catch(err => this.setState({ msg: "Could not save..."}));
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        let output = <Spinner />;
        if (!this.state.loading) output = (
            <div className="generator-div">
            <p>{this.state.msg}</p>
            <h1>{this.state.title}</h1>
            <form onSubmit={this.submitHandler}>
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