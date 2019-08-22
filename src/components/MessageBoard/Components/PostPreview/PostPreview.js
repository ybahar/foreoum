import React , {Component} from 'react'
import moment from 'moment'
export default class PostPreview extends Component{
    componentDidMount(){
        console.log(this.props.post);
        
    }
    render(){
        return (
    <section className="post-preview-container">
        <h3 className="post-preview-title">{this.props.post.title}</h3>
        <section className="rating">
             <button className="vote">Up</button>
             <p>rating</p>
             <button className="vote">Down</button>
        </section>
           <p className="posted-at">{moment().startOf(this.props.post.createdAt).fromNow()}</p>
    </section>
        
        )
    }
}