import React from 'react';

export default function Button(props){
    return(
    <button
        className={props.classprop}
        onClick={() => props.randomize()}
    >
        Randomize
    </button>)
}