import React, { Component } from "react";
import { boardControlSubject } from "../../Services/MessageBoardService";
import ReplyList from "../../Components/ReplyList/ReplyList";
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
    console.log(replies);
    this.setState({ replies });
  };
  render() {
    return (
      <section>
        <ReplyList replies={this.state.replies}></ReplyList>
      </section>
    );
  }
}
