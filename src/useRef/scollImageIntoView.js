import { useRef } from 'react';

export default function ScollImageIntoView() {
    const listRef = useRef(null);

    function scrollToIndex(index) {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            // behavior: 'smooth',
            // block: 'nearest',
            // inline: 'center'
        });
    }

    return (
        <>
            <nav>
                <button onClick={() => scrollToIndex(0)}>
                    Tom
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Maru
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Jellylorum
                </button>
            </nav>
            <div>
                <ul ref={listRef}>
                    <li style={{ marginTop: '120px' }}>
                        <img
                            src="https://placekitten.com/g/200/200"
                            alt="Tom"
                        />
                    </li>
                    <li style={{ marginTop: '420px' }}>
                        <img
                            src="https://placekitten.com/g/300/200"
                            alt="Maru"
                        />
                    </li>
                    <li style={{ marginTop: '420px' }}>
                        <img
                            src="https://placekitten.com/g/250/200"
                            alt="Jellylorum"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}
