import React from "react";

export const PostDetail = ({post}) => {
  return (
      
        <div style={{margin: "10px",
        alignItems: "Center"}}>
          <span>{post.title}</span>
          <p>{post.content}</p>
          <button>Delete</button>
        </div>
  );
}

export default PostDetail