import { Button } from 'primereact/button';
export const Convert = ({ handleCelcius, handleFahrenheit }) => {
    return (
        <section className='h-12 lg:flex lg:justify-end items-center gap-5 pr-20 text-lg lg:font-700 hidden'>
            <Button label="°C" rounded onClick={handleCelcius} className='bg-[#E7E7EB] size-7 text-[#110E3C]' />
            <Button label="°F" rounded onClick={handleFahrenheit} className='bg-[#585676] size-7' />
        </section>
    )
}
