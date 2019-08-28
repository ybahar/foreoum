import React, { Component } from "react";

export default class ReplyDetails extends Component {
  componentDidMount() {
    console.log(this.props.reply);
  }
  render() {
    const { reply } = this.props;
    return (
      <section>
        <h1>{reply.body}</h1>
      </section>
    );
  }
}
