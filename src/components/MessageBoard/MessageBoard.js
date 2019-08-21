import React , {Component} from 'react'
import { boardControlSubject } from './Services/MessageBoardService';

export default class MessageBoard extends Component {
    state = {
        topics : [],
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
        const topics = await this.state.boardControl.topic.load(_id);
        this.setState({topics})
    }
    componentWillUnmount(){
        boardControlSubject.unsubscribe();
    }
    render(){
      return (
          <div>
              {this.state.topics.map(topic => <h3>{topic.title}</h3>)}
          </div>
      )    
    }
}
