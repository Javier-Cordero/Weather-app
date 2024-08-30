export const WeatherCard = ({ title, value, unidad }) => {
    return (
        <div className='w-80 h-36 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
            <span className='font-500 text-base'>{title}</span>
            <span className='font-700 text-5xl'>{`${value} ${unidad}`}</span>
        </div>
    )
}
