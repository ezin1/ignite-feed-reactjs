import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react';
export function Comment({id, author, content, avatar, onDeleteComment}) {
    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours() - 1);
    let formattedDate = dateTime.toLocaleString('pt-BR');

    function handleDeleteComment() {
        onDeleteComment(id);
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
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>


            </div>
        </div>
    )
}