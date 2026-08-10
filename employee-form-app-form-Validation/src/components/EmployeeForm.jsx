import { useState } from "react";
function EmployeeForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Employee Name:", name);
        console.log("Email:", email);
        console.log("Address:", address);
    };

    return (
        <div>
            <h2>Employee Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Employee Name */}
                <div>
                    <label>Employee Name</label>

                    <input
                        type="text"
                        placeholder="Enter employee name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <br />

                {/* Email */}
                <div>
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <br />

                {/* Address */}
                <div>
                    <label>Address</label>

                    <input
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>

                <br />

                <button type="submit">
                    Save Employee
                </button>

            </form>

        </div>
    );
}

export default EmployeeForm;