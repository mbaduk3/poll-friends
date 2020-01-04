import React from 'react'

const responseMaker = (props) => {

    const resps = props.responses.map((resp, i) => (
        <input 
            key={i}
            type="text" 
            value={resp} 
            onChange={(event) => props.changeRespHandler(event, i)}></input>
    ));

    return ( 
        <React.Fragment>
            {resps}
            <button 
                onClick={props.addRespHandler}>+</button>
        </React.Fragment>
    );
}

export default responseMaker