
import { useState } from 'react';

function CountComponent() {
    console.log('countcomponent')
    const [count, setCount] = useState(0)
    const handleCount = () => {
        setCount(pre => pre + 1)
        console.log('count componet')
    }

    return (
        <>
            <div>
                Your counting:
            </div>
            <div>
                {count}
            </div>
            <button type='submit' onClick={handleCount}>Count</button>
        </>

    );
}

export default CountComponent;