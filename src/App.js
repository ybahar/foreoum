import React from 'react';
import './App.css';
import MessageBoard from './components/MessageBoard/MessageBoard'
import initBoards from './components/MessageBoard/Services/MessageBoardService';
class App extends React.Component {
  boardControls ={
    post : {
      load(boardId){
        console.log('post Load' , `boardID ${boardId}`); // used to load posts using the board id
        return [{
          id : 'm101',
          title : 'title',
          body : 'body',
          creator : {
            userId : 'u102',
              username: ' not an admin '
            }, 
            createdAt : Date.now(),
            isOpen : true,
            board : 'b101', 
            replies : ['r101']
          },
          {
          id : 'm102',
          title : 'title2',
          body : 'body2',
          creator : {
            userId : 'u103',
              username: ' not an admin 2'
            }, 
            createdAt : Date.now(),
            isOpen : true,
            board : 'b101', 
            replies : ['r102' , 'r103']
          }
        ]
      },
      create(post , boardId){
        console.log('post Create');
        return post // +_id from server
      },
      delete(postId,boardId){
        console.log('post Delete');
      },
      update(post){
        console.log('post Update');
        
      }
    },
    reply: {
      load(replyIds){ //post.replies
        console.log('reply load')
        return [{ 
          id : 'r101',
          post : {
              title : 'title',
              id : 'm101',
          },
          createdAt : Date.now(),
           creator : {
               userId : 'u101',
               username : 'admin1',
           },
      }
      ]
      },
      create(reply){
        console.log('reply Create');
        return reply // +_id from server
      },
      delete(postId,boardId){
        console.log('reply Delete');
        return {}
      },
      update(reply){
        console.log('post Update');
        return reply;
      },
    }
  }
  componentDidMount(){
    initBoards(this.boardControls)
  }
  boardData ={
    _id : 'b101' ,
    name : 'string',
    admins : [{username : 'admin1',userId:'u101'}]
}
 userData = {
   _id : 'u101',
   username:'WizardOfOzery'
 }
  render(){
    return (
      <div className="App">
     <MessageBoard boardData={this.boardData} user={this.userData}></MessageBoard>
    </div>
  );
}
}

export default App;




