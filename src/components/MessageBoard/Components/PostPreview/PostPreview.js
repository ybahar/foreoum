import React , {Component} from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import Rating from '../Rating/Rating'

export default class PostPreview extends Component{
    componentDidMount(){
        console.log(this.props.post);
        
    }
    onVote(x){
        x.preventDefault();
      console.log('onvote Preview ' , x)
    }
    render(){
        return (
    <section className="post-preview-container">
        <NavLink to={`/${this.props.post.id}`}>
        <h3 className="post-preview-title">{this.props.post.title}</h3>
        <Rating onVote={this.onVote} rating={this.props.post.rating}></Rating>
           <p className="posted-at">{moment().startOf(this.props.post.createdAt).fromNow()}</p>
        </NavLink>
    </section>
        
        )
    }
}