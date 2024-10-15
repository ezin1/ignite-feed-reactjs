import styles from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react';
export function Comment() {
    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours() - 1);
    let formattedDate = dateTime.toLocaleString('pt-BR');

    return (
        <div className={styles.comment}>
            <img src='https://github.com/ezin1.png'></img>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ézio Feitosa</strong>
                            <time dateTime={formattedDate}>Cerca de 1h atrás</time>

                        </div>

                        <button title="Deletar comentário">
                            <Trash syze={24} />
                        </button>
                    </header>

                    <p>Muito bom Ézio, parabéns!! 👏👏</p>
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