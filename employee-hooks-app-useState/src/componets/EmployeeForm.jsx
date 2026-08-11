import { useState } from "react";

function EmployeeForm() {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setEmployee({
            ...employee,
            [name]: value
        });
    }

    return (
        <div>

            <h2>Employee Form</h2>

            <div>
                <label>Employee Name: </label>

                <input
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Employee Email: </label>

                <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                />
            </div>

            <br />

            <div>
                <label>Employee Salary: </label>

                <input
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                />
            </div>

            <hr />

            <h3>Employee Details</h3>

            <p>Name: {employee.name}</p>

            <p>Email: {employee.email}</p>

            <p>Salary: ₹{employee.salary}</p>

        </div>
    );
}

export default EmployeeForm;