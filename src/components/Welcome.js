import React, { useState }from 'react'
import { Link, useHistory } from 'react-router-dom'
import md5 from 'md5'
import axios from 'axios'

function Welcome(props) {

    const [ pollId, setPollId ] = useState('null');
    const [ msg, setMsg ] = useState('');
    const history = useHistory();

    const submitHandler = async (type) => {
        let resData = null;
        await axios.get('https://poll-friends.firebaseio.com/polls/' + pollId + '.json')
            .then(res => {
                resData = res.data;
            }
            )
            .catch(err => {
                console.log(err);
            }
            )
        console.log(resData);
        if (resData !== null) {
            switch (type) {
                case ("consumer"):
                    history.push("/consumer/" + pollId);
                    break;
                case ("generator"):
                    history.push("/generator/" + pollId);
                    break;
                default:
                    break;
            }
        } else {
            setMsg("Invalid poll id");
        }
    }

    // This should be a dynamically generated hash. 
    const genHash = () => md5(new Date().toLocaleString()).substr(0, 5);

    const res = (
        <React.Fragment>
        <h1>Choose an option:</h1>
        <label>Edit an existing poll: </label>
        <input 
            type="text" 
            name="poll_id"
            onChange={(e) => setPollId(e.target.value)}
            placeholder="Poll ID">
        </input>
        <button onClick={() => submitHandler("generator")}>
                Enter
        </button>
        <p style={{color: 'red'}}>{msg}</p>
        <label>Fill out a poll: </label>
        <input 
            type="text" 
            onChange={(e) => setPollId(e.target.value)}
            placeholder="Poll ID"></input>
        <button onClick={() => submitHandler("consumer")}>
                Enter
        </button>
        <br />
        <Link to={"/generator/" + genHash()}>Make a new poll</Link>
        </React.Fragment>
    )

	return res;
}

export default Welcome;