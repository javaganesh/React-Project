import axios from "axios";

const BASE_URL = "http://localhost:8080/employees";

export const getEmployees = () => {

    return axios.get(BASE_URL);

};