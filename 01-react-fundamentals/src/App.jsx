import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Leandro"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ab iure necessitatibus, tempore nobis, exercitationem optio cumque magnam dolorem ipsum aspernatur quisquam omnis non sequi repellat eveniet molestias corrupti!"
          />
        </main>
      </div>
    </>
  )
}