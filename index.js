/// Import datejs to extend Date prototype with formatting
require('datejs');

/**
 * Merges an arbitrary number of username arrays into a single array
 * and returns an object containing the merged users and today's date.
 * @param {...Array<string>} args - An indefinite number of username arrays
 * @returns {{users: string[], merge_date: string}}
 */
function combineUsers(...args) {
    // Initialize the return object with an empty users array
    const combinedObject = {
        users: []
    };

    // Merge all input arrays using the spread operator
    for (const arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Add today's date in M/d/yyyy format using datejs
    const today = new Date();
    combinedObject.merge_date = today.toString('M/d/yyyy');

    return combinedObject;
}

// Export the function so the test suite can access it
module.exports = combineUsers;