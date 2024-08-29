import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Container } from './components/Container';
import axios from 'axios';
const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
export default function App() {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('London')
  const [units, setUnits] = useState('metric')
  const [clima, setClima] = useState({})
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          // setWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=en`)
          // setForecast(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=en`)
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
      icon: rs.data.weather[0].icon,
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
      <Header handleGetLocation={handleGetLocation} setLocation={setLocation} temperature={clima.temperature} description={clima.description} city={clima.city} />
      <Container setUnits={setUnits} windSpeed={clima.windSpeed} windDegree={clima.windDegree} humidity={clima.humidity} visibility={clima.visibility} air={clima.air} />
    </div>
  )
}