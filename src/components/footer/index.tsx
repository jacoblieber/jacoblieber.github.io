import { useState, useEffect } from 'react';
import './index.css';

const Taskbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setCurrentTime(new Date()), 1000);
    })

    return (
        <footer id='taskbar' className='taskbar'>
            <button className='start-button'>
                <img className='start-button-image' src='/assets/Initial Logo.png'/>
                Start
            </button>
            <div className='time'>
                {currentTime.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})} 
            </div>
        </footer>
    )
}

export default Taskbar;
