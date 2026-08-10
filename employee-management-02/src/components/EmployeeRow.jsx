function EmployeeRow({ employee }) {

    return (

        <tr>

            <td>{employee.id}</td>

            <td>{employee.name}</td>

            <td>{employee.department}</td>

            <td>{employee.salary}</td>

        </tr>

    );

}

export default EmployeeRow;
