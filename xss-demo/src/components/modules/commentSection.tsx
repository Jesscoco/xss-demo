import React, { useState } from "react";

const XSSExampleForm = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { content: comment }]);
    setComment(""); // Réinitialiser le champ du formulaire
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Écrivez un commentaire..."
        />
        <button type="submit">Ajouter Commentaire</button>
      </form>

      {comments.map((comment, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: comment.content }} />
      ))}
    </div>
  );
};

export default XSSExampleForm;
