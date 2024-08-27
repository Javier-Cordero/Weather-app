import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
export const Main = () => {
    return (
        <main className='bg-[#100E1D] w-screen h-[1718px] lg:w-[70%] lg:h-screen'>
            <section className='h-12 lg:flex lg:justify-end items-center gap-5 pr-20 text-lg lg:font-700 hidden'>
                <Button label="°C" rounded className='bg-[#E7E7EB] size-7 text-[#110E3C]' />
                <Button label="°F" rounded className='bg-[#585676] size-7' />
            </section>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', placeContent: 'center', placeItems: 'center', gap: '20px' }} className='bg-transparent py-5 font-500 text-base lg:px-14'>
                <div className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                    <span>Tomorow</span>
                    <Image src='Shower.png' alt='icono del clima' width='40' className='mx-auto' />
                    <div className='flex justify-between'>
                        <span>16°C</span>
                        <span>11°C</span>
                    </div>
                </div>
                <div className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                    <span>Tomorow</span>
                    <Image src='Shower.png' alt='icono del clima' width='40' className='mx-auto' />
                    <div className='flex justify-between'>
                        <span>16°C</span>
                        <span>11°C</span>
                    </div>
                </div>
                <div className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                    <span>Tomorow</span>
                    <Image src='Shower.png' alt='icono del clima' width='40' className='mx-auto' />
                    <div className='flex justify-between'>
                        <span>16°C</span>
                        <span>11°C</span>
                    </div>
                </div>
                <div className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                    <span>Tomorow</span>
                    <Image src='Shower.png' alt='icono del clima' width='40' className='mx-auto' />
                    <div className='flex justify-between'>
                        <span>16°C</span>
                        <span>11°C</span>
                    </div>
                </div>
                <div className='rounded-lg w-[120px] h-[160px] bg-[#1E213A] grid place-content-center gap-2'>
                    <span>Tomorow</span>
                    <Image src='Shower.png' alt='icono del clima' width='40' className='mx-auto' />
                    <div className='flex justify-between'>
                        <span>16°C</span>
                        <span>11°C</span>
                    </div>
                </div>
            </section>
            <h1 className='text-2xl font-700 h-8 flex items-center pl-[6%]'>Today’s Hightlights</h1>
            <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', placeContent: 'center', placeItems: 'center', gap: '20px' }} className='w-full bg-transparent py-5'>
                <div className='w-80 h-40 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Wind status</span>
                    <span className='font-700 text-5xl'>7 mph</span>
                    <span className='font-500 text-base flex gap-5'><img className='size-5' src="map.svg" alt="icon" />WSW</span>
                </div>
                <div className='w-80 h-40 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Humidity</span>
                    <span className='font-700 text-5xl'>84 %</span>
                    <div className='w-[200px] text-[8px]'>
                        <div className='w-full flex justify-between'>
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className='w-full h-1 relative'>
                            <div className='absolute w-full h-1 bg-[#E7E7EB] rounded-lg top-0'></div>
                            <div className='absolute h-1 bg-[#FFEC65] rounded-lg top-0' style={{ width: `${84}%` }}></div>
                        </div>
                        <span className='flex justify-end'>%</span>
                    </div>
                </div>
                <div className='w-80 h-36 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Visibility</span>
                    <span className='font-700 text-5xl'>6,4 miles</span>
                </div>
                <div className='w-80 h-36 bg-[#1E213A] grid place-content-center place-items-center gap-5 rounded-lg'>
                    <span className='font-500 text-base'>Air Pressure</span>
                    <span className='font-700 text-5xl'>998 mb</span>
                </div>
            </section>
            <h1 className='font-500 text-[14px] text-[#A09FB1] grid place-content-center lg:hidden'>created by username - devChallenges.io</h1>
        </main>
    )
}
