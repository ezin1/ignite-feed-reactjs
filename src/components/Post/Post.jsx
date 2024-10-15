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
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a>{' '} 
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
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
  }

