import styles from '../styles/Home.module.css'
export default function Shortcut({ type, item, openModal, color, removeIconHome, index }) {
    const openUrl = item => {
        window.open(item.url)
    }
    const getCapitalLetter = (name) => {
        return name.substring(0, 1).toUpperCase();
    }
    const getRandomColor = colors => {
        let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    const removeIcon = (e, item) => {
        e.stopPropagation();
        removeIconHome(index);
    }
    return (
        <>
            {
                type && type === 'add' ?
                    (
                        <div className={styles.shortcut} onClick={openModal}>
                            <div className={styles.titleIcon}>
                                <div className={styles.addShortcutIcon} draggable="false"></div>
                            </div>
                            <div className={styles.titleText}>
                                <span>Add shortcut</span>
                            </div>
                        </div>
                    ) :
                    (
                        <div className={styles.shortcut} onClick={() => openUrl(item)}>
                            <span className={styles.removeIcon} onClick={event => removeIcon(event, index)}>&#xd7;</span>
                            <div className={styles.titleIcon}>
                                <div className={styles.shortcutIcon} style={{backgroundColor: color}} draggable="false">{getCapitalLetter(item.name)}</div>
                            </div>
                            <div className={styles.titleText}>
                                <span>{item.name}</span>
                            </div>
                        </div>
                    )
            }
        </>

    )
}