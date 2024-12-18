import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from '../Comment/Comment';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


interface PostProps {
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  publishedAt: Date;
  content: {
    type: string;
    content: string;
  }[];
}

export function Post({author, publishedAt, content}: PostProps) {
    const [comments, setComments] = useState([
      {id: 1, author: "José Alencar", content: "Muito legal!", avatar: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2"},
      {id: 2, author: "Maria Silva", content: "Gostei muito da interface!", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
      {id: 3, author: "Ruan Kaio", content: "Projeto bem estruturado, parabéns!", avatar: "https://images.unsplash.com/photo-1584999734482-0361aecad844"}
    ]);

    const [newCommentText, setNewCommentText] = useState('');
    
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

    function handleCreateNewComment (event: FormEvent) {

      event.preventDefault();
      
      const randomAvatarandName = generateRandomAvatarAndName();
      const id = comments.length + 1;
      const newComment = [
          {id: id, author: randomAvatarandName.name, content: newCommentText, avatar: randomAvatarandName.avatar}        
      ]
      
      setComments([...comments, ...newComment]);

      setNewCommentText("");
    
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('');
      setNewCommentText(event.target.value);
    }

    function deleteComment(commentId: number) {
      const commentsWithoutDeletedOne = comments.filter(comment => comment.id !== commentId);
      
      setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
      event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    
    const isNewCommentEmpty = newCommentText.length === 0;

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
        {content.map((line ) => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return (
                <p key={line.content}>
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
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}> 
        {
          comments.map(comment => {
            return (
              <Comment 
                key={comment.id} 
                id={comment.id}
                author={comment.author} 
                content={comment.content}
                avatar={comment.avatar} 
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
  }

