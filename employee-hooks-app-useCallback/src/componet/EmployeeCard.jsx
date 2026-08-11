import { memo } from "react";

function EmployeeCard({ employee, onDelete }) {

    console.log(
        "EmployeeCard rendered:",
        employee.name
    );

    return (
        <div>

            <p>Name: {employee.name}</p>

            <p>Salary: ₹{employee.salary}</p>

            <button
                onClick={() =>
                    onDelete(employee.id)
                }
            >
                Delete
            </button>

            <hr />

        </div>
    );
}

export default memo(EmployeeCard);