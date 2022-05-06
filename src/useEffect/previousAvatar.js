import React, { useEffect, useState } from "react";

function PreviousAvatar() {

    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.imagUrl)
    }, [avatar])

    const handelFileChange = (e) => {
        const file = e.target.files[0];
        file.imagUrl = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <>
            <input 
                type={'file'}
                onChange={handelFileChange} 
            />
            {avatar && (<img src={avatar.imagUrl} alt='' width={'50%'}/>)}
        </>
        
    )
}
export default PreviousAvatar;