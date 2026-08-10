import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees }) {

    return (

        <table border="1">

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Name</th>

                    <th>Department</th>

                    <th>Salary</th>

                </tr>

            </thead>

            <tbody>

                {

                    employees.map(employee => (

                        <EmployeeRow

                            key={employee.id}

                            employee={employee}

                        />

                    ))

                }

            </tbody>

        </table>

    );

}

export default EmployeeTable;