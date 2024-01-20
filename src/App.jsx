import { useState } from "react"
import DisplayRecipes from "./components/DisplayRecipes"
import Header from "./Header"
import './components/global.module.css'
import {Routes, Route} from 'react-router-dom'
import DetailedRecipe from "./components/DetailedRecipe"

function App() {
  const [foodRecipes, setFoodRecipes] = useState([])
  const [query, setQuery] = useState('')

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} setFoodRecipes={setFoodRecipes}/>
      <Routes>
        <Route path="/" element={<DisplayRecipes query={query} foodRecipes={foodRecipes}/>}/>
        <Route path="/recipe/:recipeName/detailedRecipe" element={<DetailedRecipe/>}></Route>
      </Routes>
      

    </div>
  )
}

export default App
