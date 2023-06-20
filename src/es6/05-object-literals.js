// enable object Literals
function newUser(user, age, country) {
    return {
        user,
        age,
        country, 
        id: uId 
    }
}

console.log("Andres", 34, "MX");