import axios from "axios";

export const findAll = async () => {
  try {
    return await axios.get("http://localhost:8080/users");
  } catch (error) {
    console.log(error);
  }
  return null;
};
