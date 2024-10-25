import styles from './Comment.module.css';
import {Trash, HandsClapping} from 'phosphor-react';
import { useState } from 'react';
export function Comment({id, author, content, avatar, onDeleteComment}) {
    
    const [likeCount, setLikeCount] = useState(0);

    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours() - 1);
    let formattedDate = dateTime.toLocaleString('pt-BR');

    function handleDeleteComment() {
        onDeleteComment(id);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }


    return (
        <div className={styles.comment}>
            <img src={avatar}></img>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time dateTime={formattedDate}>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash syze={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <HandsClapping size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>


            </div>
        </div>
    )
}