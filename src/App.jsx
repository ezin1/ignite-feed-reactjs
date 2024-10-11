import { Header } from './components/Header';
import { Post } from './Post';  
import './global.css';
export function App() {
  return (
    <div>
      <Header/>
      <Post 
        author="Ézio" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et recusandae magnam tempora debitis ducimus ut saepe dolore, omnis necessitatibus possimus numquam dolores eveniet harum nobis a accusamus, molestiae porro."
      />
      <Post 
        author="Altair" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et recusandae magnam tempora debitis ducimus ut saepe dolore, omnis necessitatibus possimus numquam dolores eveniet harum nobis a accusamus, molestiae porro."
      />
    </div>
  )
}



