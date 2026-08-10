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
        },

        {
            id:103,
            name:"Amit",
            department:"Testing",
            salary:50000
        }

    ];

    return (

        <div>

            <h2>Employee Dashboard</h2>

            <EmployeeTable employees={employees}/>

        </div>

    );

}

export default Dashboard;