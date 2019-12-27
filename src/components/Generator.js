import React from 'react'
import '../App.css'

class Generator extends React.Component {

    constructor() {
        super();
        this.state={
            user: "defaultUser",
            title: "testForm",
            questions: []
        };
    }

    render() {
        return (
            <div class="generator-div">
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Generator