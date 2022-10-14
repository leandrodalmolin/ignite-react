import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/leandrodalmolin.png',
      name: 'Leandro Dal Molin',
      role: 'Web Developer',      
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
      { type: 'paragraph', content: 'Doloremque laudantium sapiente impedit corporis itaque voluptatibus laboriosam vero temporibus quae explicabo, consequuntur dolores obcaecati aliquid iure sint pariatur adipisci enim ex.' },
      { type: 'link', content: 'test.com' }
    ],
    publishedAt: new Date('2022-10-05 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      name: 'John Doe',
      role: 'Frontend Developer',
    },
    content: [
      { type: 'paragraph', content: 'Recusandae tempora nihil magni suscipit ipsam quidem blanditiis enim voluptates fugit eaque.' },
      { type: 'paragraph', content: 'Doloremque laudantium sapiente impedit corporis itaque voluptatibus laboriosam vero temporibus quae explicabo.' },
      { type: 'link', content: 'aaaaa.com' }
    ],
    publishedAt: new Date('2022-10-10 15:00:00')
  }
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}