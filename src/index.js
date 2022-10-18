import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Page = () => {
    const date = new Date();
    const [year, setYear] = useState(date.getFullYear());
    const increase = () => setYear(year + 1);
    const decrease = () => setYear(year - 1);
    return (
        <div class="wrapper">
            <h2>{year}年の抱負</h2>
            <h1>「{year + 1}年はきっと」</h1>
            <div class="buttons">
                <Button handle={ decrease }>
                    ←去年の抱負
                </Button>
                    
                <Button handle={ increase }>
                    →来年の抱負
                </Button>
            </div>
            
            <div class="SNSs">
                <SNS url="https://twitter.com/OJun46225932">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
               <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
                </SNS>
            </div>
        </div>
    );
}

const Button = (props) => {
    return (
        <button class="move" onClick={ props.handle }>
            { props.children }
        </button>
    );
}

const SNS = (props) => {
    return (
        <button class="SNS" onClick={ () => window.open(props.url) }>
            { props.children }
        </button>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page/>);

