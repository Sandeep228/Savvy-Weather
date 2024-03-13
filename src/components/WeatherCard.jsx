/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Avatar, Card, Typography, Grid, Divider, Box } from "@mui/material";
import SunIcon from "../assets/icons/sun.png";
import CloudIcon from "../assets/icons/cloud.png";
import FogIcon from "../assets/icons/fog.png";
import RainIcon from "../assets/icons/rain.png";
import SnowIcon from "../assets/icons/snow.png";
import StormIcon from "../assets/icons/storm.png";
import WindIcon from "../assets/icons/windy.png";
import VisIcon from "../assets/icons/gh.png";
import MaxIcon from "../assets/icons/max.png";
import MinIcon from "../assets/icons/min.png";
import UvIcon from "../assets/icons/uv.png";
import useDate from "../Utils/useDate";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
  dew,
  visibility,
  maxt,
  mint,
  pressure,
  uvindex,
}) => {
  const [icon, setIcon] = useState(SunIcon);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(CloudIcon);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(RainIcon);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(SunIcon);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(StormIcon);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(FogIcon);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(SnowIcon);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(WindIcon);
      }
    }
  }, [iconString]);
  return (
    <Box
      sx={{
        display: "flex",
        gap: 15,
        padding: "60px",
        backdropFilter: "blur(8px)",
        "@media (max-width:850px)": {
          flexDirection: "column",
          gap: 2,
        },
      }}
    >
      <Card
        style={{
          width: "22rem",
          minWidth: "22rem",
          height: "30rem",
          padding: "1rem",
          background: "rgba(225, 225, 225, 0.18)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          border: "1px solid rgba(225, 225, 225, 0.18)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Avatar src={icon} alt="weather_icon" />
              </Grid>
              <Grid item>
                <Typography variant="h2" style={{ fontWeight: "bold" }}>
                  {temperature} &deg;C
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              {place}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={6}>
                <Typography variant="body1" align="center">
                  {new Date().toDateString()}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="center">
                  {time}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider color="pink" />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#2196f3",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  Wind Speed
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontWeight: "normal" }}
                  >
                    {windspeed} km/h
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#4caf50",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  Humidity
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontWeight: "normal" }}
                  >
                    {humidity} gm/m&#179;
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", marginTop: "1rem" }}
                >
                  Heat Index
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ fontSize: "1.25rem" }}>
                  {heatIndex ? heatIndex : "N/A"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider color="pink" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="center"
              style={{ fontWeight: "bold", marginTop: "1rem" }}
            >
              {conditions}
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card
        style={{
          width: "22rem",
          minWidth: "22rem",
          height: "30rem",
          padding: "1rem",
          background: "rgba(225, 225, 225, 0.18)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          border: "1px solid rgba(225, 225, 225, 0.18)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} mb={6}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={6}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <Avatar src={VisIcon} alt="visibility_icon" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                      {visibility}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={MaxIcon} alt="max_icon" />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {maxt}
                </Typography>
              </Grid>
              <Grid item>
                <Avatar src={MinIcon} alt="min_icon" />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {mint}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} mb={6}>
            <Grid container spacing={2} justifyContent="space-between">
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#2196f3",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  Sea Level
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontWeight: "normal" }}
                  >
                    {pressure}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  align="center"
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#4caf50",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                >
                  Dew
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ fontWeight: "normal" }}
                  >
                    {dew}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
       
          <Grid item xs={12} mb={6}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Avatar src={UvIcon} alt="uv_icon" />
              </Grid>
              <Grid item>
                <Typography variant="h4" style={{ fontWeight: "bold" }}>
                  {uvindex}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default WeatherCard;
