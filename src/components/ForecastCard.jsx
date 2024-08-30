import { Image } from 'primereact/image';
export const ForecastCard = ({ pronostico, simbolo }) => {
    return (
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
    )
}
