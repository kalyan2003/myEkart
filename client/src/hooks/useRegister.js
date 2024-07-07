import axios from "axios";
import { useState } from "react";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (username, firstName, lastName, password) => {
    const success = handleInputError({
      username,
      firstName,
      lastName,
      password,
    });

    if (!success) return;

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        firstName,
        lastName,
        password,
      });
      console.log(response.data);

      if (response.data.error) throw new Error(response.data.error);

      alert("Registration is completed");
    } catch (error) {
      console.log("error in useRegister:", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, register };
};

export default useRegister;

function handleInputError(data) {
  const { username, firstName, lastName, password } = data;

  if (!username || !firstName || !lastName || !password) {
    alert("fill all fields");
    return false;
  }
  return true;
}
