
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';  
import { Sidebar } from './components/Sidebar/Sidebar';

import './global.css';
import styles from './App.module.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAT: Date
// content: String


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ezin1.png",
      name: "Ézio Feitosa",
      role: "Fullstack Developer",
      
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu github. É um projeto que fiz com React. O nome do projeto é Ignite Feed 🚀"},
      {type: "link", content: "https://ezin1.github.io/ignite-feed-reactjs"},
    ],
    publishedAt: new Date('2024-10-20 22:40:00'),
    
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ezin1.png",
      name: "Ézio Feitosa",
      role: "Fullstack Developer",
      
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu github. É um projeto que fiz com React. O nome do projeto é Ignite Feed 🚀"},
      {type: "link", content: "https://ezin1.github.io/ignite-feed-reactjs"},
    ],
    publishedAt: new Date('2024-10-20 22:40:00'),
    
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div> 
  )
}



