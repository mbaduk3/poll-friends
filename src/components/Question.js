import React from 'react'
import '../App.css'

// Question types: short ans, multiple choice (radio), checkbox

const question = (props) => {

    const renderShortAns = () => {
       return (
            <input type="text" placeholder={props.responses[props.ans]}></input>
       )
    }

    const renderMultipleChoice = () => {
        const multipleJsx = 
            props.responses.map((res, i) => {
                    return (
                        <div 
                            className="choice-div"
                            key={res + "_" + i}>
                            <input 
                                key={"question" + props.id + res + "_" + i}
                                type="radio" 
                                id={"question" + props.id + res + "_" + i}
                                name={props.prompt} 
                                value={res}>
                            </input>
                        <label htmlFor={res}>{res}</label>
                        </div>
                    )
                }
            )
        return multipleJsx

    }

    const renderCheckbox = () => {
        return (
            props.responses.map(res => {
                return (
                    <input  
                        key={res}
                        type="checkbox"
                        id={res}
                        name={props.prompt}
                        value={res}>
                    </input>
                )
            })
        )
    }


    let res;

    switch(props.type) {
        default:
            break
        case "shortAns":
            res = renderShortAns();
            break;
        case "multipleChoice":
            res = renderMultipleChoice();
            break;
        case "checkbox":
            res = renderCheckbox();
            break;
    }

        return (
            <div className="question-div">
                <div className="prompt-div">
                    <h3>{props.prompt}</h3>
                    <button onClick={props.delHandler}>X</button>
                </div>
                <div className="response-div">{res}</div>
            </div>
        )
}

export default question