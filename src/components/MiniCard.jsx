 /* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { Avatar, Card,  Typography } from '@mui/material';
import SunIcon from '../assets/icons/sun.png';
import CloudIcon from '../assets/icons/cloud.png';
import FogIcon from '../assets/icons/fog.png';
import RainIcon from '../assets/icons/rain.png';
import SnowIcon from '../assets/icons/snow.png';
import StormIcon from '../assets/icons/storm.png';
import WindIcon from '../assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(CloudIcon);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(RainIcon);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(SunIcon);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(StormIcon);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(FogIcon);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(SnowIcon);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(WindIcon);
      }
    }
  }, [iconString]);

  return (
    <Card sx={{ width: '10rem', height: '10rem', p: 4, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" align="center">
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </Typography>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Avatar src={icon} alt="forecast not available" sx={{ width: '4rem', height: '4rem' }} />
      </div>
      <Typography variant="subtitle1" align="center" fontWeight="bold">
        {temp}&deg;C
      </Typography>
    </Card>
  );
};

export default MiniCard;
