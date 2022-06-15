export function saveUser(user) {
    localStorage.setItem("user", JSON.stringify({ email: user.email }))
}

export function getUser() {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user)
    return null
}

export function loggedIn() {
    return getUser() !== null;
}

export function destroyUser() {
    localStorage.removeItem("user");
}