import  { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { useStateContext } from '../Context';
import Clear from '../assets/images/Clear.jpg';
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';

const Img = styled('img')({
  height: '100vh',
  width: '100%',
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: -10,
});

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  console.log(image)

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes('cloud')) {
        setImage(Cloudy);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      } else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return <Img src={image} alt="weather_image" />;
};

export default BackgroundLayout;






