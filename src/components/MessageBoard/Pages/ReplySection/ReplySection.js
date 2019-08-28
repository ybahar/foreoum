import React, { Component } from "react";
import { boardControlSubject } from "../../Services/MessageBoardService";
import ReplyList from "../../Components/ReplyList/ReplyList";
import NewReply from "../../Components/NewReply/NewReply";
export default class ReplySection extends Component {
  state = { boardControl: null, replies: null };
  componentDidMount() {
    boardControlSubject.subscribe(boardControl =>
      this.setState({ boardControl }, this.loadReplies)
    );
  }
  loadReplies = async () => {
    const { id } = this.props;
    const replies = this.state.boardControl.reply({ type: "load", postId: id });
    console.log(replies,id);
    this.setState({ replies });
  };
  onCreate = (body) => {
    const postId = this.props.id
    const title = this.props.postTitle
    const username = 'Temp user name'
    const userId = 'nope'
    let reply = {
      post : {
         postId,
         title,
      },
      createdAt: Date.now(),
      creator : {
        userId,
        username
      },
      body,
    }
    let payload = {
      type : 'save',
      reply,
      postId
    }
    this.state.boardControl.reply(payload)
  }
  render() {
    return (
      <section>
        <NewReply onCreate={this.onCreate}></NewReply>
        <ReplyList replies={this.state.replies}></ReplyList>
      </section>
    );
  }
}
