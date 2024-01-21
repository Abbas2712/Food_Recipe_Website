import { useState } from "react"
import DisplayRecipes from "./Pages/DisplayRecipes"
import Header from "./components/Header"
import './global.module.css'
import {Routes, Route} from 'react-router-dom'
import DetailedRecipe from "./Pages/DetailedRecipe"

function App() {
  const [foodRecipes, setFoodRecipes] = useState([])
  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} setFoodRecipes={setFoodRecipes}/>
      <Routes>
        <Route path="/" element={<DisplayRecipes query={query} foodRecipes={foodRecipes}/>}/>
        {/*  /recipe/:recipeName/detailedRecipe*/}
        <Route path="recipe/:label/detailedRecipe" element={<DetailedRecipe/>}></Route>
      </Routes>
      

    </div>
  )
}

export default App
