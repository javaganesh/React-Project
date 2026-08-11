import { useEffect, useState } from "react";
import { getEmployees } from "./services/employeeService";

function App() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchEmployees() {

            try {

                setLoading(true);
                setError("");

                const data = await getEmployees();

                setEmployees(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);
            }
        }

        fetchEmployees();

    }, []);

    return (
        <div>

            <h1>Employee Management</h1>

            {loading && (
                <p>Loading employees...</p>
            )}

            {error && (
                <p>Error: {error}</p>
            )}

            {!loading && !error && (
                <div>

                    {employees.map(employee => (

                        <div key={employee.id}>

                            <p>
                                Name: {employee.name}
                            </p>

                            <p>
                                Email: {employee.email}
                            </p>

                            <hr />

                        </div>

                    ))}

                </div>
            )}

        </div>
    );
}

export default App;