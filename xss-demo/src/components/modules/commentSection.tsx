import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5000/comments";
const API_URL = "";

const CommentSection: React.FC = () => {
  // const [comments, setComments] = useState<{ content: string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setComments(res.data));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post(API_URL, { content: newComment }).then(() => {
      setNewComment("");
      axios.get(API_URL).then((res) => setComments(res.data));
    });
  };

  return (
    <div>
      <h2>Commentaires</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Votre commentaire"
        />
        <button type="submit">Envoyer</button>
      </form>

      <div>
        {/* {comments.map((comment, index) => ( */}
          {/* <p key={index} dangerouslySetInnerHTML={{ __html: comment.content }} /> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default CommentSection;
