import React , {Component} from 'react';

import { boardControlSubject } from './Services/MessageBoardService';
import PostList from './Components/PostList/PostList';
export default class MessageBoard extends Component {
    state = {
        posts : [],
        boardControl :null,
    }
    async componentDidMount(){
        boardControlSubject.subscribe(boardControl=>{
             this.setState({boardControl},this.loadTopics)

        })
    }
    loadTopics = async () => {
        if(!this.state.boardControl) return;
        const {_id} = this.props.boardData
        const posts = await this.state.boardControl.post({type:'load',boardId:_id});
        this.setState({posts})
    }


    render(){
      return (
          <div>
              <section><h1>Filter goes here</h1></section>
              <PostList posts={this.state.posts}></PostList>
              </div>
      )    
    }
}
