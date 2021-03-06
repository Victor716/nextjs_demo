import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Modal({ close, addShortcutHome }) {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const addShortcut = (name, url) => {
        if (!name || !url) return;
        addShortcutHome({
            name: name,
            url: url
        });
        close();
    }
    const change = e => {
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "url":
                setUrl(e.target.value);
                break;
            default:
                break;
        }
    }
    return (
        <div className={styles.modal}>
            <div className={styles.backdrop}></div>
            <div className={styles.modalContainer}>
                <div className={styles.modalBox}>
                    <div className={styles.modalHeader}> Add shortcut </div>
                    <div className={styles.modalBody}>
                        <span className={styles.option}>Name</span>
                        <input className={styles.modalInput} name="name" value={name} type="text" onChange={(event)=>{change(event)}}></input>
                        <span className={styles.option}>URL</span>
                        <input className={styles.modalInput} name="url" value={url} type="text" onChange={(event)=>{change(event)}}></input>
                    </div>
                    <div className={styles.modalFooter}>
                        <button className={styles.modalCancelBtn} onClick={close}>Cancel</button>
                        <button className={styles.modalBtn} onClick={() => addShortcut(name, url)}>Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}