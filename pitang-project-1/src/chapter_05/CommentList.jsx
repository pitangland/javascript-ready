import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "pitang",
        comment: "pitang입니다.",
    },
    {
        name: "roommate",
        comment: "roommate 입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;