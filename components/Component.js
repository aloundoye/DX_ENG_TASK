import {useState} from "react";
import Modal from "../components/Modal";
import styles from "../styles/Component.module.css";
import EditText from "./EditText";

export default function Component({component, story}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <div className={styles.wrap}>{component.content}</div>
            </div>

            <div className={styles.link}>
                <button className={styles.btn} onClick={() => setShowModal(true)}>
                    Edit
                </button>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <EditText
                    content={component.content}
                    story={story}
                    uid={component._uid}
                    onClose={() => setShowModal(false)}
                />
            </Modal>
        </div>
    );
}
