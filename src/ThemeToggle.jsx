import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useGlobalContext } from '../Context'


const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (

        <section className='toggle-container'>
            <button className='dark-toggle' onClick={toggleDarkTheme} draggable={true}>
                {isDarkTheme ? (
                    <BsFillMoonFill className="toggle-icon" style ={{color:'white'}} />
                    ) :(
                    <BsFillSunFill className="toggle-icon" />
                    )}

            </button>

        </section>
    )
}

export default ThemeToggle