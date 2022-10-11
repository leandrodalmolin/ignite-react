import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "d LLLL HH:mm'h'");
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(row => {
          if (row.type === 'paragraph') {
            return <p>{row.content}</p>
          } else if (row.type === 'link') {
            return <p><a href="" target="_blank">{row.content}</a></p>
          }
        })}
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