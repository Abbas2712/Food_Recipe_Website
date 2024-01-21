import styles from "../Pages/detailedRecipe.module.css";
export default function CustomNutritionCard({nutriQuantity, nutriLabel, nutriUnit}) {
   
    const removedec = Math.round(nutriQuantity)
 return (
    <div>
        <p className={styles.nutriCount}>{removedec} <span>{nutriUnit}</span></p>
        <p className={styles.nutriType}>{nutriLabel}</p>
    </div>
    
  )
}