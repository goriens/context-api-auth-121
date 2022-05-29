import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";

export const Login = () => {
  //  const { handleAuth } = useContext(AuthContext);
  const [token, setToken] = useState();
  const [error, setError] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("https://reqres.in/api/login", userData)
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="App">
      {error && <div>Error...</div>}
      <form
        onSubmit={handleSubmit}
        style={{
          width: "500px",
          margin: "auto",
        }}
      >
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Entre your email"
            variant="standard"
            size="small"
            type="text"
            name="email"
            placeholder="email"
            value={data.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="standard"
            size="small"
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            value="submit"
            variant="contained"
            sx={{ m: 1.5 }}
          >
            Login
          </Button>
        </Stack>
      </form>
      <Box sx={{ padding: "30px", fontSize: "20px" }}>Token:{token}</Box>
    </div>
  );
};
