/*httpClient
  .then((response) => response.json())
  .then((data) => console.log(data));*/

const findAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const users = await findAllUsers();
console.log(users);
console.log("Hello world");
