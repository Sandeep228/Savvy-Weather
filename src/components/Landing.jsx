import { Grid } from "@mui/material";
import { BackgroundLayout, WeatherCard, MiniCard } from "../components";
import sunriseIcon from "../assets/icons/sunr.png"
import sunsetIcon from "../assets/icons/suns.png"
import { useStateContext } from "../Context";
import { Typography} from "@mui/material";

function Landing() {
  const { weather, thisLocation, values, sun } = useStateContext();

  const formatTime = (time) => {
    if (time) {
      const originalTime = new Date(time);
      const adjustedTime = new Date(
        originalTime.getTime() - 5 * 60 * 60 * 1000 - 30 * 60 * 1000
      );

      return adjustedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } else {
      return "Loading...";
    }
  };

  return (
    <div>
      <BackgroundLayout />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
          dew={weather.dew}
          visibility={weather.visibility}
          maxt={weather.maxt}
          mint={weather.mint}
          pressure={weather.sealevelpressure}
          uvindex={weather.uvindex}
        />

        <Grid container justifyContent="center" spacing={2} className="w-[60%]">
          {values?.slice(1, 7).map((curr) => (
            <Grid item key={curr.datetime}>
              <MiniCard
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            </Grid>
          ))}
        </Grid>
      </main>
      <div className="flex justify-around space-x-4 back mt-12" style={{
         background: "rgba(225, 225, 225, 0.18)",
         boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
         backdropFilter: "blur(8px)", 
         borderRadius: "10px",
         border: "1px solid rgba(225, 225, 225, 0.18)"
      }}>
        <div className="flex items-center space-x-2 sunrise-container">
          <img src={sunriseIcon} alt="Sunrise Logo" height={100} width={100} />
          <Typography 
           sx={{
            color:"orange",
            fontSize:"34px",
            "@media (max-width:850px)": {
              fontSize:"24px",
            }
          }} >{formatTime(sun.sunrise)}
          </Typography>
        </div>
        <div className="flex items-center space-x-2 sunset-container">
          <img src={sunsetIcon} alt="Sunset Logo" height={100} width={100} />
          <Typography  sx={{
            color:"orange",
            fontSize:"34px",
            margin:"auto",
            "@media (max-width:850px)": {
              fontSize:"24px",
            }
          }}>
            {formatTime(sun.sunset)}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Landing;
