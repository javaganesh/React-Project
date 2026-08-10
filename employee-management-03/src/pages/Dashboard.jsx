import { useState } from "react";

function Dashboard() {

    const [count, setCount] = useState(0);

    return (

        <div>

            <h2>Counter : {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
            <button
                onClick={() => setCount(count - 1)}
            >
                decrement
            </button>

        </div>

    );

}

export default Dashboard;