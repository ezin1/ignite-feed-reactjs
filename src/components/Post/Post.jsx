import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from '../Comment/Comment';
import { useState } from 'react';


export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
      {author: "José Alencar", content: "Muito legal!", avatar: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2"},
      {author: "Maria Silva", content: "Gostei muito da interface!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      {author: "Ruan Kaio", content: "Projeto bem estruturado, parabéns!", avatar: "https://images.unsplash.com/photo-1584999734482-0361aecad844"}
    ]);

    const [newCommentText, setNewCommentText] = useState("");
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

    function generateRandomAvatarAndName() {
      const avatars = [
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        "https://images.unsplash.com/photo-1584999734482-0361aecad844"
      ];

      const names = ["José Alencar", "Maria Silva", "Ruan Kaio"];

      const randomIndex = Math.floor(Math.random() * 3);

      return {avatar: avatars[randomIndex], name: names[randomIndex]};
    }

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true
    });

    function handleCreateNewComment (event) {

      if(newCommentText.trim() === "") {
        return;
      }

      event.preventDefault();
      console.log(event.target.commentArea.value, 'target');
      const randomAvatarandName = generateRandomAvatarAndName();

      const newComment = [
          {author: randomAvatarandName.name, content: newCommentText, avatar: randomAvatarandName.avatar}        
      ]
      
      setComments([...comments, ...newComment]);

      setNewCommentText("");
    
    }

    function handleNewCommentChange(event) {
      setNewCommentText(event.target.value);
    }



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
        {content.map((line, index) => {
            if (line.type === 'paragraph') {
              return <p key={index}>{line.content}</p>
            } else if (line.type === 'link') {
              return (
                <p key={index}>
                  <a href="#">{line.content}</a>
                </p>
              )
            } else {
              return null;
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='commentArea'
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}> 
        {/* <Comment 
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
        /> */}
        {
          comments.map(comment => {
            return <Comment key={comment.author} author={comment.author} content={comment.content}avatar={comment.avatar}/>
          })
        }
      </div>
    </article>
  )
  }

