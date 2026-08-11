import {useMemo,useState} from "react";

function App() {
    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("");
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

    const totalSalary = useMemo(() => {

        console.log("Calculating total salary...");

        return employees.reduce(
            (total, employee) =>
                total + employee.salary,
            0
        );

    }, [employees]);

    const filteredEmployees = useMemo(() => {
        console.log("Filtering employees...");
        return employees.filter(employee =>
            employee.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [employees, search]);

    return (
        <div>
            <h1>Employee Management</h1>
            <hr />
            <h2>
                Total Salary: ₹{totalSalary}
            </h2>
            <input
                type="text"
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
                placeholder="Search employee"
            />
            <hr />
            <h2>Employee List</h2>
            {filteredEmployees.map(employee => (
                <div key={employee.id}>
                    <p>
                        Name: {employee.name}
                    </p>
                    <p>
                        Salary: ₹{employee.salary}
                    </p>
                    <hr />

                </div>

            ))}

            <h2>
                Count: {count}
            </h2>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>

        </div>
    );
}

export default App;