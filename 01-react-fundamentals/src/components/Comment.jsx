import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://www.github.com/leandrodalmolin.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leandro Dal Molin</strong>
              <time title="24 September 2022, 00:24" dateTime="2022-09-24 00:24:00">Approx. 1h ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Really good. Congrats!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Clap <span>10</span>
          </button>
        </footer>
      </div>
    </div>
  );
}