import React, { useEffect, useState } from "react";

export default function ScrollToTop(){
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        }

        window.addEventListener('scroll', handleScroll)

        return ()=> {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div>
            <h1>kkkkk</h1>
            {showGoToTop && (
                <button style={{position: 'fixed', right: "20px", bottom: '120px'}}>Go To Top</button>
            )}
        </div>
    )
}