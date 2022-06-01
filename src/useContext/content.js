import React, { useContext } from 'react'
import '../../src/App.css'
import { ThemeContext } from './ThemeContext'

const Content = () => {

    const {theme} = useContext(ThemeContext)
    console.log(theme);
    return (
        <div className={theme}>
            <p>Hello, I am Xuan.</p>
        </div>
    )
}
export default Content;