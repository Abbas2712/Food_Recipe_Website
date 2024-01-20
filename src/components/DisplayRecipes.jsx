import DisplaySingleRecipe from "./DisplaySingleRecipe";
import styles from './displayRecipes.module.css'


const DisplayRecipes = ({foodRecipes, query})=>{    
    return (
        <div>
            {/* Map through the food recipe array and create a div for each recipe */}
            <h1 className={styles.categoryTitle}>{query === ''? 'Search Your Favorite Recipe!': `Results for: ${query}`}</h1>
            <div className={styles.recipeContainer}>
            {
                foodRecipes.map((recipe, index) =>
                    <DisplaySingleRecipe key={index}
                    label={recipe.recipe.label}
                    image={recipe.recipe.image}
                    source={recipe.recipe.source}
                    detailedRecipeURL={recipe.recipe}/>
                )
                // console.log(singlerecipe.recipe.images.LARGE)
                // console.log(foodrecipes[0].recipe.images.LARGE)
            }
            </div>

        </div>
    )
}

export default DisplayRecipes;