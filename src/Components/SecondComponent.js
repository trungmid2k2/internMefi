
import { useState } from 'react';

function SecondComponent() {
    const styleSecond = {
        margin: '50px auto 0'
    }
    const [count, setCount] = useState(0)
    console.log('two component')
    const handleCount = () => {
        setCount(pre => pre + 1)
        console.log('two component')
    }

    return (
        <>
            <div style={styleSecond}>
                Below here is SecondComponent
            </div>
            <div>
                {count}
            </div>
            <button type='submit' onClick={handleCount}>Count</button>
        </>

    );
}

export default SecondComponent;