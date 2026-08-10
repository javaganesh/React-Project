import { useEffect, useState } from "react";

import AddEmployee from "../components/AddEmployee";

import EmployeeTable from "../components/EmployeeTable";

import { getEmployees } from "../services/employeeService";

function Dashboard() {

    const [employees,setEmployees]=useState([]);

    const [loading,setLoading]=useState(true);

    const [error,setError]=useState("");

    useEffect(()=>{

        getEmployees()

        .then(response=>{

            setEmployees(response.data);

        })

        .catch(()=>{

            setError("Unable to load employees.");

        })

        .finally(()=>{

            setLoading(false);

        });

    },[]);

    function addEmployee(employee){

        setEmployees([...employees,employee]);

    }

    if(loading){

        return <h2>Loading...</h2>;

    }

    if(error){

        return <h2>{error}</h2>;

    }

    return(

        <div>

            <h1>Employee Management System</h1>

            <AddEmployee

                onAddEmployee={addEmployee}

            />

            <hr/>

            <EmployeeTable

                employees={employees}

            />

        </div>

    );

}

export default Dashboard;