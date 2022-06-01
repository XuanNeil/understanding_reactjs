import React, { useContext } from "react";
import Content from "./content";
import { ThemeContext } from "./ThemeContext";


/*
* 1. Create Context
* 2. Provider
* 3. Consumer
*/

const DemoContext = () => {

    const {handleToggleTheme}  = useContext(ThemeContext)

    return (
        <div>
            <button onClick={handleToggleTheme}>Toggle</button>
            <Content />
        </div>
    )
}
export default DemoContext;