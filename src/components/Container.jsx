import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import axios from 'axios';
const apiKey = 'bd9dc44134d81a9ff53c6b13a921e023';
export const Container = ({ units, setUnits, location, setSimbolo, simbolo, iconMap, windSpeed, windDegree, humidity, visibility, air }) => {
    const [pronostico, setProtonostico] = useState([])
    const handleCelcius = () => {
        setUnits('metric')
        setSimbolo('°C')
    }
    const handleFahrenheit = () => {
        setUnits('imperial')
        setSimbolo('°F')
    }
    const getWindDirection = (degree) => {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(degree / 22.5) % 16;
        return directions[index];
    };
    const fetchForecastData = async () => {
        try {
            const url = typeof location === 'string'
                ? `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=${units}&lang=en`
                : `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=${units}&lang=en`;
            const rs = await axios.get(url);
            const data = rs.data.list;
            if (!Array.isArray(data)) throw new Error('Unexpected data format')
            const nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + 1);
            const nextDayStr = nextDay.toISOString().split('T')[0];
            const dailyData = {};
            data.forEach(item => {
                const date = new Date(item.dt * 1000).toISOString().split('T')[0];
                if (date >= nextDayStr) {
                    if (!dailyData[date]) {
                        dailyData[date] = {
                            day: formatDate(item.dt_txt),
                            icon: iconMap[item.weather[0].icon],
                            temp_min: Math.round(item.main.temp_min),
                            temp_max: Math.round(item.main.temp_max),
                        };
                    }
                }
            });

            setProtonostico(Object.values(dailyData) || []);
        } catch (error) {console.error('Error fetching forecast data:', error.message);}
    };

    function formatDate(date) {
        const today = new Date(date);
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        return today.toLocaleString('en-EN', options);
    }
    useEffect(() => { fetchForecastData() }, [location, units]);
    return (
        <main className='bg-[#100E1D] w-screen h-[1360px] lg:w-[70%] lg:h-screen'>
            <section className='h-12 lg:flex lg:justify-end items-center gap-5 pr-20 text-lg lg:font-700 hidden'>
                <Button label="°C" rounded onClick={handleCelcius} className='bg-[#E7E7EB] size-7 text-[#110E3C]' />
                <Button label="°F" rounded onClick={handleFahrenheit} className='bg-[#585676] size-7' />
            </section>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', placeContent: 'center', placeItems: 'center', gap: '20px' }} className='bg-transparent py-5 font-500 text-base lg:px-14'>
                {pronostico.map((day, index) => (
                    <div key={index} className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                        <span className='mx-auto'>{day.day}</span>
                        <Image src={day.icon} alt='icono del clima' width='40' className='mx-auto' />
                        <div className='flex justify-between gap-4'>
                            <span>{`${day.temp_max}${simbolo}`}</span>
                            <span>{`${day.temp_min}${simbolo}`}</span>
                        </div>
                    </div>
                ))}
            </section>
            <h1 className='text-2xl font-700 h-8 flex items-center pl-[6%]'>Today’s Hightlights</h1>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', placeContent: 'center', placeItems: 'center', gap: '20px' }} className='w-full bg-transparent py-5'>
                <div className='w-80 h-40 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Wind status</span>
                    <span className='font-700 text-5xl'>{`${windSpeed} mph`}</span>
                    <span className='font-500 text-base flex gap-5'><img style={{ transform: `rotate(${windDegree}deg)` }} className='size-5' src="map.svg" alt="icon" />{getWindDirection(windDegree)}</span>
                </div>
                <div className='w-80 h-40 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Humidity</span>
                    <span className='font-700 text-5xl'>{`${humidity} %`}</span>
                    <div className='w-[200px] text-[8px]'>
                        <div className='w-full flex justify-between'>
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className='w-full h-1 relative'>
                            <div className='absolute w-full h-1 bg-[#E7E7EB] rounded-lg top-0'></div>
                            <div className='absolute h-1 bg-[#FFEC65] rounded-lg top-0' style={{ width: `${humidity}%` }}></div>
                        </div>
                        <span className='flex justify-end'>%</span>
                    </div>
                </div>
                <div className='w-80 h-36 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Visibility</span>
                    <span className='font-700 text-5xl'>{`${visibility} miles`}</span>
                </div>
                <div className='w-80 h-36 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Air Pressure</span>
                    <span className='font-700 text-5xl'>{`${air} mb`}</span>
                </div>
            </section>
            <h1 className='font-500 text-[14px] text-[#A09FB1] grid place-content-center lg:hidden'>created by username - devChallenges.io</h1>
        </main>
    )
}
