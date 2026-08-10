import { useState } from "react";

function EmployeeForm() {

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    // Validation errors
    const [errors, setErrors] = useState({});

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate form
    const validateForm = () => {

        const newErrors = {};

        // Name validation
        if (!name.trim()) {
            newErrors.name = "Employee name is required";
        }

        // Email validation
        if (!email.trim()) {

            newErrors.email = "Email is required";

        } else if (!emailPattern.test(email)) {

            newErrors.email = "Please enter a valid email";
        }

        // Address validation
        if (!address.trim()) {
            newErrors.address = "Address is required";
        }

        return newErrors;
    };

    // Form submit
    const handleSubmit = (event) => {

        event.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        // Stop submission if errors exist
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        const employee = {
            name,
            email,
            address
        };

        console.log("Employee:", employee);
    };

    return (
        <div>

            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit}>

                {/* ================= NAME ================= */}

                <div>
                    <label>Employee Name</label>

                    <input
                        type="text"
                        placeholder="Enter employee name"
                        value={name}
                        onChange={(event) => {

                            setName(event.target.value);

                            // Clear name error
                            if (errors.name) {
                                setErrors({
                                    ...errors,
                                    name: ""
                                });
                            }

                        }}
                    />

                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>

                <br />

                {/* ================= EMAIL ================= */}

                <div>
                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => {

                            setEmail(event.target.value);

                            // Clear email error
                            if (errors.email) {
                                setErrors({
                                    ...errors,
                                    email: ""
                                });
                            }

                        }}
                    />

                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                </div>

                <br />

                {/* ================= ADDRESS ================= */}

                <div>
                    <label>Address</label>

                    <input
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(event) => {

                            setAddress(event.target.value);

                            // Clear address error
                            if (errors.address) {
                                setErrors({
                                    ...errors,
                                    address: ""
                                });
                            }

                        }}
                    />

                    {errors.address && (
                        <p>{errors.address}</p>
                    )}
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
