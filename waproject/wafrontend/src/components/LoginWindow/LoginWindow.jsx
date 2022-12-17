import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { redirect, useNavigate } from "react-router-dom";
import * as api from "../../api";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const LoginWindow = ({ onLogin }) => {
  const [isRegister, setIsRegister] = React.useState(false);
  const [error, setError] = React.useState(undefined);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    const paramlogin = {
      name: dataForm.get("name").toString(),
      password: dataForm.get("password").toString(),
    };
    if (!isRegister) {
      const { data } = await api.loginUser(paramlogin);
      if (data === "Login Successful") {
        const { data } = await api.getUserObj(paramlogin);
        onLogin(data);
        navigate("/chats");
      } else {
        setError("Wrong password / Name");
        console.log("Login Failed");
      }
    } else {
      const { data } = await api.registerUser(paramlogin);
      if (data === "new user has been added") {
        const { data } = await api.getUserObj(paramlogin);
        onLogin(data);
        navigate("/chats");
      } else {
        console.log("user with same name existed");
        setError("user with same name existed");
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isRegister ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography color="red" variant="body2">
              {error ? error : ""}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isRegister ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() => {
                    setIsRegister(!isRegister);
                  }}
                  variant="body2"
                >
                  {isRegister
                    ? "Already Have Account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default LoginWindow;
