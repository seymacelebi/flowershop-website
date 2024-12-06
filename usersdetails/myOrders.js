if (typeof loggedInUser === 'undefined') {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
}

