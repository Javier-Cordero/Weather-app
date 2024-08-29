import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Container } from './components/Container';
import axios from 'axios';
const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
export default function App() {
  const [error, setError] = useState(null)
  const [location, setLocation] = useState('London')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${units}&lang=en`)
  const [forecast, setForecast] = useState(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}&lang=en`);
  const [pronostico, setPronostico] = useState({})
  const [clima, setClima] = useState({})
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=en`)
          setForecast(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}&lang=en`)
        }, (error) => { setError(error.message) }
      );
    } else setError('Geolocation is not supported by this browser.')
  };
  const fetchWeatherData = async () => {
    const rs = await axios.get(weather)
    setClima({
      id: rs.data.weather[0].id,
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
  useEffect(() => { fetchWeatherData() }, [weather, units]);
  return (
    <div className="w-screen lg:flex">
      <Header handleGetLocation={handleGetLocation} temperature={clima.temperature} description={clima.description} city={clima.city} />
      <Container setUnits={setUnits} pronostico={pronostico} windSpeed={clima.windSpeed} windDegree={clima.windDegree} humidity={clima.humidity} visibility={clima.visibility} air={clima.air} />
    </div>
  )
}