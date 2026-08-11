import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadEmployees = async () => {

            try {

                const data = await getEmployees();

                setEmployees(data);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);
            }
        };

        loadEmployees();

    }, []);

    if (loading) {
        return <h3>Loading employees...</h3>;
    }

    if (error) {
        return <h3>{error}</h3>;
    }

    return (
        <div>

            <h2>Employee List</h2>

            <table border="1">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>

                </thead>

                <tbody>

                    {employees.map((employee) => (

                        <tr key={employee.id}>

                            <td>{employee.id}</td>

                            <td>{employee.name}</td>

                            <td>{employee.email}</td>

                            <td>{employee.department}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default EmployeeList;