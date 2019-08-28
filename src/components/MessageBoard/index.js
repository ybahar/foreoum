import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import initBoards from "./Services/MessageBoardService";
import MessageBoard from "./MessageBoard";
import PostDetails from "./Pages/PostDetails/PostDetails";

export const init = initBoards;

export class Freoum extends Component {
  render() {
    return (
      <section>
        <BrowserRouter basename={this.props.basename}>
          <Link to="/"> pop </Link>{" "}
          <Switch>
            <Route exact path="/">
              {" "}
              <MessageBoard boardData={{ _id: "lo" }}> </MessageBoard>
            </Route>
            <Route
              exact
              path="/:id"
              render={({ match }) => (
                <PostDetails id={match.params.id}> </PostDetails>
              )}
            ></Route>
          </Switch>{" "}
        </BrowserRouter>{" "}
      </section>
    );
  }
}
