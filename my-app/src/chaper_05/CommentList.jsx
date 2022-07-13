import React from "react";
import Comment from "./Comment";

function CommentList() {
  const comments = [
    { name: "수리", comment: "안녕하세요. 수리입니다!" },
    { name: "레오", comment: "하루종일 비가 오니까 파전이 먹고싶네요" },
    { name: "보리", comment: "내일은 산책을 가고 싶네요..." },
    { name: "후추", comment: "리액트, 먹는건가요??" },
  ];
  return (
    <div>
      {comments.map((el) => (
        <Comment name={el.name} comment={el.comment} />
      ))}
    </div>
  );
}
export default CommentList;
