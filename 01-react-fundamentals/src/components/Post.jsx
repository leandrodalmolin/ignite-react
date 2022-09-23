import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://www.github.com/leandrodalmolin.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Leandro Dal Molin</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 September 2022, 22:46" dateTime="2022-09-23 22:46:00">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Doloremque laudantium sapiente impedit corporis itaque voluptatibus laboriosam vero temporibus quae explicabo, consequuntur dolores obcaecati aliquid iure sint pariatur adipisci enim ex.</p>
        <p>Visit <a href="www.test.com" target="_blank">test.com</a></p>
        <p><a href="#">#newproject</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea placeholder="Leave your comment" />
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}