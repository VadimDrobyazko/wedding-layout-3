import ReactDOM from 'react-dom'

import styles from './BoardBg.module.css'
const BoardBg = () => {
  return ReactDOM.createPortal(<div className={styles.bottom__gradient}></div>, document.body)
}

export default BoardBg
