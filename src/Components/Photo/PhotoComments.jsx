import React from "react";
import styles from "./PhotoComments.module.css";
import { Link } from "react-router-dom";

const PhotoComments = ({ id, comments }) => {
  return (
    <div className={styles.comments}>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>
              <span>
                <Link to={`/perfil/${comment.author}`}>{comment.author}</Link>
              </span>
              {comment.comment}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoComments;
