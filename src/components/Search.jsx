import { useEffect, useState } from "react"

const URL = 'https://api.edamam.com/api/recipes/v2'
const API_ID = '04bc8fd4'
const APP_KEY = '600f1884d4b81c7af0b83f94234e975c'
const TYPE = 'public'
export default function Search ({setFoodRecipes, query, setQuery}){
    useEffect(()=>{
        const fetchRecipes = async()=>{
            // checking the search Input for empty input
            if(query.trim() === '') return;

            const res = await fetch(`${URL}?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}&type=${TYPE}`)
            const recipes = await res.json()
            setFoodRecipes(recipes.hits)
        }

        fetchRecipes()
    },[query])

    const handleChange=(e)=>{
        setQuery(e.target.value)
    }

    return(
        <input value={query} onChange={handleChange} type="text" name="search_recipe" id="" placeholder="try salad!" />
    )
}