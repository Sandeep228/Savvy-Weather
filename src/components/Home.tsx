import React, { useState } from "react";
import { TextField, Grid, Button, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStateContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [input, setInput] = useState("");
  const { setPlace } = useStateContext();
  const navigate = useNavigate();

  const submitCity = () => {
    if (!input.trim()) {
      toast.error("Please enter a city name.");
      return;
    }
  
    setPlace(input.trim());
    setInput("");
  
    setTimeout(() => {
      navigate("/details");
    }, 3000);
  };
  

  return (
    <div
      style={{
        backgroundColor: "#FFF3C7",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          sx={{
            marginBottom: "20px",
            fontSize: "60px",
            "@media (max-width:700px)": {
              padding: "20px",
              fontSize: "50px",
            },
          }}
          color="primary"
        >
          Weather Forecasting
        </Typography>
        <Box
          boxShadow={3}
          borderRadius={8}
          padding={2}
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <TextField
                fullWidth
                variant="standard"
                placeholder="Search city"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    submitCity();
                  }
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={submitCity}
                style={{
                  borderRadius: "23px",
                }}
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
