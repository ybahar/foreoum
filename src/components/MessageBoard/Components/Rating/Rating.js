import React , {Component} from 'react'

export default function Rating(props){
    return(
        <section>
            <button data-vote="1" onClick={props.onVote}>Up</button>
            <p>{props.rating}</p>
            <button data-vote="-1" onClick={props.onVote}>Down</button>
        </section>
    )
}