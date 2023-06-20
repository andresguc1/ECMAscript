const user = { username: 'andres', age: 38, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);
console.log(user);