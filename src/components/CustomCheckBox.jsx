import styles from './customcheckbox.module.css'

export default function CustomCheckbox({ingredientLine}) {
  return (
    <>
      <label className={styles.customCheckbox}>
        <input type="checkbox" />
        <span className={styles.checkMark}></span>
        {ingredientLine}
      </label>
    </>
    
  )
}
