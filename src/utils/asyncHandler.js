// Define a function named asyncHandler that takes a requestHandler function as an argument
const asyncHandler = (requestHandler) => {
    // Return a new function that takes req, res, and next as arguments
    return (req, res, next) => {
        // Wrap the requestHandler call in a Promise to handle async operations
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => {
                // If an error is caught, pass it to the next middleware (error handler)
                next(err);
            });
    };
};

// Export the asyncHandler function so it can be used in other modules
export { asyncHandler };
