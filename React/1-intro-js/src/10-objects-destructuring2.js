const user = {
  username: "andres",
  email: "andres@mail.com",
  age: 20,
  ranking: 9,
};

const detail = ({ username, email }) => {
  console.log(`user detail ${username} with email ${email}`);
};

detail(user);
