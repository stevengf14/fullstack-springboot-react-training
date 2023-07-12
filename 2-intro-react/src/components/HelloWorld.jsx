export const HelloWorld = ({ user, id, title = "Hello World!" }) => {
  console.log(title);
  return (
    <>
      <h1>{title}</h1>
      <div>
        Whats up {user.name} {user.lastName}! Your id is {id}
      </div>
    </>
  );
};
