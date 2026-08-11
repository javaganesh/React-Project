import { useState } from "react";

function EmployeeForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState(0);

    function handleSubmit() {

        console.log("Employee Name:", name);
        console.log("Employee Email:", email);
        console.log("Employee Salary:", salary);
    }

    return (
        <div>

            <h2>Employee Form</h2>

            <div>
                <label>Employee Name: </label>

                <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Employee Email: </label>

                <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                />
            </div>

            <br />

            <div>
                <label>Employee Salary: </label>

                <input
                    type="number"
                    value={salary}
                    onChange={(event) =>
                        setSalary(event.target.value)
                    }
                />
            </div>

            <br />

            <button onClick={handleSubmit}>
                Save Employee
            </button>

            <hr />

            <h3>Employee Details</h3>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Salary: ₹{salary}</p>

        </div>
    );
}

export default EmployeeForm;