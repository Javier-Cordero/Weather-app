import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
export const Header = ({ handleGetLocation,temperature,description,city }) => {
    const [visible, setVisible] = useState(false)
    const today = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const formatDate = today.toLocaleString('en-EN', options);
    return (
        <>
            <header className='bg-[#1E213A] w-screen h-[800px] lg:w-[30%] lg:h-screen'>
                <div className='w-full h-[14%] flex justify-between items-center px-[5%]'>
                    <Button label='Seach for places' onClick={() => setVisible(true)} className='bg-[#62636F] w-[150px] h-[40px] font-500 text-white' />
                    <Image src="location.svg" alt="icono de localizacion" className='size-10' onClick={handleGetLocation} />
                </div>
                <div className='w-full h-[30%] flex items-center justify-center relative'>
                    <img className='w-full h-full opacity-5 object-cover' src='Cloud-background.png' alt="Cloud background" />
                    <img className='size-[40%] absolute' src='Shower.png' alt="Weather icon" />
                </div>
                <div className='w-full h-[20%] flex justify-center items-center font-500'>
                    <span className='text-8xl'>{temperature}</span>
                    <span className='text-5xl'>°C</span>
                </div>
                <div className='w-full h-[15%] flex justify-center items-center'>
                    <span className='text-4xl font-600 text-[#88869D]'>{description}</span>
                </div>
                <div className='w-full h-[13%] flex justify-center items-center'>
                    <span className='font-500 text-lg text-[#88869D]'>{`Today • ${formatDate}`}</span>
                </div>
                <div className='w-full h-[8%] flex justify-center items-center text-lg'>
                    <span className='pi pi-map-marker h-[20%]'>{city}</span>
                </div>
            </header>
            <Dialog visible={visible} className='bg-[#1E213A] absolute left-0 top-0 w-screen h-[600px] lg:w-[30%]' onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <InputText type="search" placeholder="search location" className='h-10 w-[60%] pl-5' />
                    <Button label="Search" className='bg-[#3C47E9] h-10 w-[30%]' />
                </div>
            </Dialog>
        </>
    )
}
