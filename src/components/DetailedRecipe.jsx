import { useLocation } from "react-router-dom";

const DetailedRecipe = ()=> {
    const location = useLocation();
    const {state} = location
    return(
        <div>
            <h1>Detailed Recipe</h1>
            {console.log(state)}
        </div>
    )
}

export default DetailedRecipe;

