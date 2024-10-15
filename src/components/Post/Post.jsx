import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';

export function Post(){
  let dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 1);
  let formattedDate = dateTime.toLocaleString('pt-BR');

console.log(formattedDate);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ezin1.png"/>
          <div className={styles.authorInfo}>
            <strong>Ézio Feitosa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title={formattedDate} dateTime={dateTime}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu github. É um projeto que fiz com React. O nome do projeto é Ignite Feed 🚀</p>
        <p>👉{' '}<a href='#'>janhttps://ezin1.github.io/ignite-feed-reactjs</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#react</a>{' '} 
          <a href='#'>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Escreva um comentário..."
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}> 
        <Comment 
          author="José Alencar" 
          content="Muito legal!" 
          avatar="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2"
        />
        <Comment 
          author="Maria Silva" 
          content="Gostei muito da interface!" 
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        />
        <Comment 
          author="Ruan Kaio" 
          content="Projeto bem estruturado, parabéns!" 
          avatar="https://images.unsplash.com/photo-1584999734482-0361aecad844"
        />
      </div>
    </article>
  )
  }

