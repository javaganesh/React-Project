import { useState } from "react";
import EmployeeCard from "./componet/EmployeeCard";
function App() {

    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Ganesh",
            salary: 50000
        },
        {
            id: 2,
            name: "Rahul",
            salary: 60000
        },
        {
            id: 3,
            name: "Amit",
            salary: 70000
        }
    ]);

    const [count, setCount] = useState(0);

    function handleDelete(id) {

        setEmployees(previousEmployees =>
            previousEmployees.filter(
                employee => employee.id !== id
            )
        );
    }

    return (
        <div>

            <h1>Employee Management</h1>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Count: {count}
            </button>

            <EmployeeList
                employees={employees}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default App;