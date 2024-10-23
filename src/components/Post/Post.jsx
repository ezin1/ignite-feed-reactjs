import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from '../Comment/Comment';



export function Post({author, publishedAt, content, id}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
    });
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={author.avatarUrl}/>
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
        {content.map((line) => {
            if (line.type === 'paragraph') {
              return <p key={id}>{line.content}</p>
            } else if (line.type === 'link') {
              return (
                <p key={id}>
                  <a href="#">{line.content}</a>
                </p>
              )
            } else {
              return null;
            }
        })}
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

