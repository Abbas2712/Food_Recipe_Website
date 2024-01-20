import data from "../../single_recipe_api_data .json";
import styles from '../DisplaySingleRecipe.module.css'
import { useNavigate} from 'react-router-dom';
export default function DisplaySingleRecipe ({label, image, source,detailedRecipeURL}){
    const navigate = useNavigate()
    return (
        <div className={styles.recipeCard} onClick={()=>{navigate(`recipe/${label}/detailedRecipe`,{state:{'url':detailedRecipeURL }})}} >
            <img src={image} alt="" className={styles.recipeImage} />
            <h5 className={styles.recipeSource} htmlFor="source">{source}</h5>
            <h3 className={styles.recipeLable}  htmlFor="label">{label}</h3> 
        </div>
    )
}