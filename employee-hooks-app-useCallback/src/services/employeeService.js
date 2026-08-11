export async function getEmployees() {

    const response = await fetch(
        "http://localhost:8080/api/employees"
    );

    if (!response.ok) {

        throw new Error(
            "Failed to fetch employees"
        );
    }

    return response.json();
}