import styles from "./Comment.module.css";
import { Trash, HandsClapping } from "phosphor-react";
import { useState } from "react";

interface CommentProps {
  id: number;
  author: string;
  content: string;
  avatar: string;
  onDeleteComment: (commentId: number) => void;
}

export function Comment({
  id,
  author,
  content,
  avatar,
  onDeleteComment,
}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dateTime = new Date();
  dateTime.setHours(dateTime.getHours() - 1);
  const formattedDate = dateTime.toLocaleString("pt-BR");

  function handleDeleteComment() {
    onDeleteComment(id);
    setIsModalOpen(false); // Fechar modal após deletar
  }

  function handleOpenModalDeleteComment() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1);
  }

  return (
    <div className={styles.comment}>
      <img src={avatar} alt={`Avatar de ${author}`} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>
              <time dateTime={formattedDate}>Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleOpenModalDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
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

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalDeleteComment}>
            <h1>Excluir comentário</h1>
            <p>Você tem certeza que deseja excluir este comentário?</p>
            <div className={styles.modalButtons}>
              <button onClick={handleCloseModal}>Cancelar</button>
              <button onClick={handleDeleteComment}>Sim, excluir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
