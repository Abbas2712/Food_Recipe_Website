import { useLocation } from "react-router-dom";
import styles from "./detailedRecipe.module.css";
import CustomCheckbox from "../components/CustomCheckBox";
import CustomNutritionCard from "../components/CustomNutritionCard";

const DetailedRecipe = () => {
  const location = useLocation();
  const { state } = location;

  const recipeData = state.url;
  const totalNutrients = Object.values(recipeData.totalNutrients);

  const ingredients = recipeData.ingredientLines;
  const recipeTags = recipeData.tags;
  const cautions = recipeData.cautions

  return (
    <div className={styles.detailedRecipeContainer}>
      <h3 className={styles.breadCrumbs}>
        recipe / {recipeData.dishType} recipe
      </h3>
      <div className={styles.recipeContainer}>
        <img className={styles.imageHolder} src={recipeData.image} alt="" />
        <div className={styles.recipeDetails}>
          <h1 className={styles.recipeTitle}>{recipeData.label}</h1>
          {/* Recipe MetaData */}
          <ul className={styles.recipeMeta}>
            <li>{recipeData.dishType}</li>
            <li>{recipeData.mealType}</li>
            <li>{recipeData.dietLabels}</li>
            <li>{recipeData.yield} Servings</li>
            <li>{recipeData.cuisineType} cuisine</li>
          </ul>
          {/* Ingredients */}
          <div className={styles.ingredientListContainer}>
            <h2 className={styles.ingredientTitle}> List of Ingredients</h2>
            <div className={styles.ingedientList}>
              <div className={styles.ingredentContent}>
                {ingredients.map((ingredient, index) => {
                  return (
                    <CustomCheckbox key={index} ingredientLine={ingredient} />
                  );
                })}
              </div>
            </div>
          </div>
          {/* Cautions */}
          <div className={styles.caution}>
            <h2>cautions: </h2>
            {cautions.length === 0 ? <label>No Cautions!</label>: cautions.map((caution)=>( <label>{caution}</label>))}
          </div>
        </div>
      </div>
      {/* Nutritional Information */}
      <div className={styles.nutritionContainer}>
        <h2 className={styles.nutriTitle}>Nutritional Information</h2>
        <div className={styles.nutritionalInformation}>
          {totalNutrients.map((nutrition, index) => {
            return (
              <CustomNutritionCard
                key={index}
                nutriQuantity={nutrition.quantity}
                nutriLabel={nutrition.label}
                nutriUnit={nutrition.unit}
              />
            );
          })}
        </div>
      </div>
      {/* Tags */}
      {recipeTags && recipeTags.length === 0 ? (
        ""
      ) : (
        <div className={styles.tagsContainer}>
          <h2>tags</h2>
          <div className={styles.tagsList}>
            {recipeTags.map((tag, index) => (
              <p className={styles.tagName} key={index}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedRecipe;
