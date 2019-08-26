import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import './App.css';

import initBoards from './components/MessageBoard/Services/MessageBoardService';
import { Freoum } from './components/MessageBoard';

class App extends React.Component {

  boardControls = {
    post(payload){
    switch (payload.type){
      case 'load' : 
        return mockMsgs ;
      case 'save': 
        console.log('in save post');
        ;
        break;
      case 'getById':
        return mockMsgs.find(msg => msg.id === payload.postId);
      case 'delete' : 
        console.log('delete post');
        break;
      case 'create' : 
      console.log('create');
      break;

    }
  },
    reply(payload){
      switch (payload.type){
        case 'load' : 
          return mockReplies ;
        case 'save': 
          console.log('in save reply');
          ;
          break;
        case 'getById':
          return mockReplies.find(reply => reply._id === payload.replyId);
        case 'delete' : 
          console.log('delete reply');
          break;
          case 'create':
            console.log('create')
          break;
      }
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
      <BrowserRouter>
      <Switch>
      <Route  path="/" render={()=><Freoum basename="/"></Freoum>  }></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;




const mockReplies = [{ 
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
   body:'body'
},{ 
id : 'r102',
post : {
    title : 'title2',
    id : 'm102',
},
createdAt : Date.now(),
 creator : {
     userId : 'u101',
     username : 'admin1',
 },
 body: 'body2'
}]
const mockMsgs = [{
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
},{
id : 'm102',
title : 'title2',
body : 'body2',
creator : {
    userId : 'u103',
    username: ' myBobo '
}, 
createdAt : Date.now(),
isOpen : true,
board : 'b101', 
replies : ['r102']
}]; 
