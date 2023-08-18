import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";

export const HelloWorldApp = ({ user, id, title, book }) => {
  console.log(title);
  return (
    <>
      <Title title={title} />
      <UserDetails user={user} id={id} />
      <Book book={book} />
    </>
  );
};

HelloWorldApp.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  book: PropTypes.string.isRequired,
};

HelloWorldApp.defaultProps = {
  title: "Hello World!",
  book: "UML got a gota",
};
