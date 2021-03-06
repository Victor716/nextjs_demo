import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Shortcut from '../components/shortcut'
import Modal from '../components/Modal'
const data = [
  {id: 1, url: "https://www.baidu.com", name: 'baidu'},
  {id: 2, url: "https://www.npmjs.com", name: 'npm'},
  {id: 3, url: "https://sports.qq.com", name: 'tencent'},
  {id: 4, url: "https://gitlab.com", name: 'gitlab'}
]
export default function Home() {
  const colors = ["#1a73e8", "#3d0c2f", "#aadddd", "#ef5350", "#188038"];
  const [showModal, setShowModal] = useState(false);
  const [shortcuts, setShortcuts] = useState(data);
  const openModal = () => {
    setShowModal(true);
  } 
  const closeModal = () => {
    setShowModal(false);
  }
  const addShortcutHome = (shortcut) => {
    setShortcuts([
      ...shortcuts,
      {
        id: shortcuts.length + 1,
        url: shortcut.url,
        name: shortcut.name
      }
    ])
  }
  const removeShortcut = index => {
    setShortcuts(shortcuts.filter((_, i) => i !== index));
  }

  const genIndex = (index, arr) => {
    if (index < arr.legnth) return index;
    return arr.length % 5;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/google_logo.svg"></img>
        <input className={styles.search} />
        <div className={styles.addContainer}>
          { shortcuts.map((item, i) => {
            return  (
              <Shortcut item={item} key={item.id} color={colors[genIndex(i, shortcuts)]} index={i} removeIconHome={removeShortcut}></Shortcut>
            )
          }) }
          <Shortcut type={"add"} openModal={openModal} removeIconHome={removeShortcut}></Shortcut>
        </div>
      </main>
      {
        showModal ? <Modal close={closeModal} addShortcutHome={addShortcutHome}/> : <></>
      }
    </div>

  )
}

