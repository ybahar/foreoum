import React , {Component} from 'react'
import moment from 'moment'
import { boardControlSubject } from '../../Services/MessageBoardService';
import Rating from '../../Components/Rating/Rating'
export default class PostDetails extends Component {
    state= {boardControl : null , post : null}
    componentDidMount(){
        boardControlSubject.subscribe((boardControl)=>{
            this.setState({boardControl},this.loadPost)
        })
    }
    loadPost = async () => {
        if(this.state.boardControl){
            let post = await this.state.boardControl.post.loadById(this.props.id);
            this.setState({post})
        }
    }
    onVote(x){
        x.preventDefault();
        console.log('voting' , x.target.dataset.vote)
    }
     render(){
         let {post} = this.state
         return (
             post && <section>
                 <Rating onVote={this.onVote} rating={post.rating}></Rating>
                 <h1>{post.title}</h1> 
                  <p>post.body</p>
                  <h6>{moment().startOf(post.createdAt).fromNow()}</h6>
                  <section>
                      <h4>{post.creator.username}</h4>
                  </section>
                
             </section>
         )
     }
} 