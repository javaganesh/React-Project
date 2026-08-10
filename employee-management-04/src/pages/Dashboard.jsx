import AddEmployee from "../components/AddEmployee";
import EmployeeTable from "../components/EmployeeTable";

function Dashboard() {

    const employees = [

        {
            id:101,
            name:"Ganesh",
            department:"Java",
            salary:70000
        },

        {
            id:102,
            name:"Rahul",
            department:"React",
            salary:65000
        }

    ];

    return (

        <div>

            <AddEmployee/>

            <EmployeeTable employees={employees}/>

        </div>

    );

}

export default Dashboard;