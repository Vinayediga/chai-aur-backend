// Define a custom error class named ApiError that extends the built-in Error class
class ApiError extends Error {
    // The constructor for the ApiError class takes four parameters
    constructor(
        statusCode,             // HTTP status code for the error (e.g., 404, 500)
        message="something went wrong", // Optional message to describe the error; defaults to "something went wrong"
        errors = [],            // Optional array of error details; defaults to an empty array
        statck = ""             // Optional stack trace; defaults to an empty string
    ) {
        // Call the parent class (Error) constructor with the provided message
        super(message)
        
        // Assign the status code to the instance property
        this.statusCode = statusCode
        
        // Initialize data as null (this can be used to store additional data related to the error)
        this.data = null
        
        // Reassign the message property to ensure it's set correctly
        this.message = message
        
        // Set success to false to indicate the operation failed
        this.success = false
        
        // Assign the errors array to the instance property
        this.errors = errors

        // Check if a stack trace was provided
        if (statck) {
            // If provided, set the stack property to the provided stack trace
            this.stack = statck
        } else {
            // If not provided, generate a stack trace automatically
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// Export the ApiError class so it can be used in other modules
export { ApiError }
