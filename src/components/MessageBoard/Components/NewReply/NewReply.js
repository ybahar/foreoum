import React, { Component } from "react";

export default class NewReply extends Component {
  state = { body: "" };
  onInput = ev => {
    let body = ev.target.value;
    this.setState({ body });
  };
  createReply = (ev) => {
    ev.preventDefault();  
    this.props.onCreate(this.state.body);
      
  }
  render() {
    return (
      <section>
        <form onSubmit={this.createReply}>
          <textarea
            placeholder="Leave a reply"
            value={this.state.body}
            onChange={this.onInput}
          />
          <button type="submit">Send</button>
        </form>
      </section>
    );
  }
}
