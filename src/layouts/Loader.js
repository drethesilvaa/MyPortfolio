import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import GifAnimated from "../assets/1476.gif"

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const headerElement = document.querySelector('header');
        if (headerElement) {
            headerElement.style.zIndex = -1;
        }

        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
        }, 10);

        return () => {
            clearInterval(interval);

            if (headerElement) {
                headerElement.style.zIndex = '';
            }
        };
    }, []);

    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            {/* <CircularProgress color="inherit" variant="determinate" value={progress} /> */}
            <div className='rounded-full p-3 bg-white'>
                <img src={GifAnimated} alt="Animated Favicon" />
            </div>
        </Backdrop>
    );
};

export default Loader;