import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Leandro"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolore ab iure necessitatibus, tempore nobis, exercitationem optio cumque magnam dolorem ipsum aspernatur quisquam omnis non sequi repellat eveniet molestias corrupti!"
      />
    </>
  )
}