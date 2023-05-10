import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://www.github.com/leandrodalmolin.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leandro Dal Molin</strong>
              <time title="24 September 2022, 00:24" dateTime="2022-09-24 00:24:00">Approx. 1h ago</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}