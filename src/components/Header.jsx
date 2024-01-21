import { useNavigate } from 'react-router-dom'
import Search from './Search'
import styles from './header.module.css'
export default function Header({setFoodRecipes, query ,setQuery}){
    const navigate = useNavigate()

    return(
        <div className={styles.header}>
            <h2 className={styles.logo} >The Recipe Corner</h2>
            <Search query={query} setQuery={setQuery} setFoodRecipes={setFoodRecipes}/>
            <nav >
                <ul className={styles.navigation}>
                    <li><a href="/">Home</a></li>
                    <li><a href="recipes">Recipes</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    )
}