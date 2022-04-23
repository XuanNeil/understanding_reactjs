/**
 * 1 Usage:
 *  - Adding state to a component.
 *  - Updating state based on the previous state.
 *  - Updating object and arrays in state.
 *  - Avoiding recreating the initial state.
 *  - Resetting state with a key.
 *  - Storing information from previous renders.
 * 
 * 2.Pitfall
 *  1**
 *      ``` 
 *          Khi `call set function` khong thay doi current state trong code da thuc thi. 
 *          No chi anh huong den nhung gi useState se return ve bat dau tu lan next render.            
 *      ```
 */

import { useState } from "react";

const UnderstandUseState = () => {
    const [name, setName] = useState('Intial State');

    const handleClick = () => {
        setName('No Name'); // set state
        console.log('Name: ', name); // Name: Intial State
    }
    return (
        <div>
            <h1>Understand useState</h1>
            <li onClick={handleClick}>{name}</li>
        </div>
    )
}
export default UnderstandUseState;