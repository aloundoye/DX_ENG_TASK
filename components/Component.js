import Link from "next/link";
import { useState } from "react";
import Modal from "../components/Modal";
import styles from "../styles/Component.module.css";

export default function Component({ content }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.component}>
      <div className={styles.content}>
        <div className={styles.wrap}>{content}</div>
      </div>

      <div className={styles.link}>
        <button className="btn" onClick={() => setShowModal(true)}>
          Edit
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <textarea rows="25" cols="60">{content}</textarea>
      </Modal>
    </div>
  );
}
