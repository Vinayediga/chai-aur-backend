// Define a class named ApiRespons for handling API responses
class ApiRespons {
    // The constructor for the ApiRespons class takes three parameters
    constructor(
        statusCode,      // HTTP status code for the response (e.g., 200, 404)
        data,            // Data to be sent in the response
        message = "Success" // Optional message to describe the response; defaults to "Success"
    ) {
        // Assign the status code to the instance property
        this.statusCode = statusCode

        // Assign the data to the instance property
        this.data = data

        // Assign the message to the instance property
        this.message = message

        // Determine success based on the status code
        // Success is true if the status code is less than 400 (e.g., 200, 201, etc.)
        // Success is false if the status code is 400 or higher (e.g., 400, 500, etc.)
        this.success = statusCode < 400
    }
}
