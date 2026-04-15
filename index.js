require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    for (let i = 0; i < args.length; i++) {
        combinedObject.users = [...combinedObject.users, ...args[i]];
    }

    combinedObject.merge_date = new Date().toString('M/d/yyyy');

    return combinedObject;
}

module.exports = { combineUsers }; // ✅ FIXED EXPORT