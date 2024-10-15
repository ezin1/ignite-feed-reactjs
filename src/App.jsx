import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';  
import { Sidebar } from './components/Sidebar/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Ézio" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et recusandae magnam tempora debitis ducimus ut saepe dolore, omnis necessitatibus possimus numquam dolores eveniet harum nobis a accusamus, molestiae porro."
          />
          <Post 
            author="Altair" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et recusandae magnam tempora debitis ducimus ut saepe dolore, omnis necessitatibus possimus numquam dolores eveniet harum nobis a accusamus, molestiae porro."
          />
        </main>
      </div>
    </div>
  )
}



