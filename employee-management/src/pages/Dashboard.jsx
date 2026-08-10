import EmployeeCard from "../components/EmployeeCard";

function Dashboard() {

    const employees = [

        {
            id: 101,
            name: "Ganesh",
            department: "Java"
        },

        {
            id: 102,
            name: "Rahul",
            department: "React"
        },

        {
            id: 103,
            name: "Amit",
            department: "Testing"
        }

    ];

    return (

        <div>

            {

                employees.map(employee => (

                    <EmployeeCard

                        key={employee.id}

                        id={employee.id}

                        name={employee.name}

                        department={employee.department}

                    />

                ))

            }

        </div>

    );

}

export default Dashboard;