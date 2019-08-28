import React from "react";
import ReplyDetails from "../ReplyDetails/ReplyDetails";
export default function ReplyList(props) {
  return (
    <section>
      {props.replies ? (
        props.replies.map(reply => (
          <ReplyDetails reply={reply} key={reply.id}></ReplyDetails>
        ))
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
}
