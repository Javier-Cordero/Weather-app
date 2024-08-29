import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Container } from './components/Container';
import axios from 'axios';
const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
export default function App() {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('London')
  const [units, setUnits] = useState('metric')
  const [simbolo, setSimbolo] = useState('°C')
  const [clima, setClima] = useState({})
  const iconMap = {
    '01d': 'Clear.png',
    '01n': 'Clear.png',
    '02d': 'LightCloud.png',
    '02n': 'LightCloud.png',
    '03d': 'HeavyCloud.png',
    '03n': 'HeavyCloud.png',
    '04d': 'HeavyRain.png',
    '04n': 'HeavyRain.png',
    '09d': 'LightRain.png',
    '09n': 'LightRain.png',
    '10d': 'Shower.png',
    '10n': 'Shower.png',
    '11d': 'Thunderstorm.png',
    '11n': 'Thunderstorm.png',
    '13d': 'Snow.png',
    '13n': 'Snow.png',
    '50d': 'Hail.png',
    '50n': 'Hail.png',
};
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
        }, (error) => { setError(error.message) }
      );
    } else setError('Geolocation is not supported by this browser.')
  };
  const fetchWeatherData = async () => {
    let url;
    if (typeof location === 'string') url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}&lang=en`
    else url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=${units}&lang=en`;
    const rs = await axios.get(url)
    setClima({
      icon: iconMap[rs.data.weather[0].icon],
      temperature: Math.round(rs.data.main.temp),
      description: rs.data.weather[0].description,
      city: rs.data.name,
      windSpeed: rs.data.wind.speed,
      windDegree: rs.data.wind.deg,
      humidity: rs.data.main.humidity,
      visibility: rs.data.visibility,
      air: rs.data.main.pressure
    })
  }
  useEffect(() => { fetchWeatherData() }, [location, units]);
  return (
    <div className="w-screen lg:flex">
      <Header handleGetLocation={handleGetLocation} setLocation={setLocation} simbolo={simbolo} icon={clima.icon} temperature={clima.temperature} description={clima.description} city={clima.city} />
      <Container setUnits={setUnits} setSimbolo={setSimbolo} simbolo={simbolo} windSpeed={clima.windSpeed} windDegree={clima.windDegree} humidity={clima.humidity} visibility={clima.visibility} air={clima.air} />
    </div>
  )
}