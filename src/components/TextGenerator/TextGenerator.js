import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './TextGenerator.module.scss';

const cx = classNames.bind(styles);

function TextGenerator() {
    const [message,setMessage] = useState('')
    const [change,setChange] = useState()
    const handleClick = () => {
        console.log(Math.random()*10);
        setChange(Math.random()*10);
    }

    useEffect(()=>{
        const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
        };
        const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
        fetch(apiURL,options).then(result => result.json()).then(
            data => setMessage(data[0].joke)
        )
    },[change])
    return (
        <div className={cx("container")}>
            <h1 className={cx("heading")}>Dad Joke Generator</h1>
            <p className={cx("joke")} id="joke">
                {message}
            </p>
            <button className={cx("btn")} id="btn" onClick={handleClick}>
                Tell me a joke
            </button>
        </div>
    );
}



export default TextGenerator;
