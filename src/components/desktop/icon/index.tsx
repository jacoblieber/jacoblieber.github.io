import { MouseEventHandler } from 'react'
import './index.css'

interface IconProps {
    imgSrc: string;
    title: string;
    textColor?: string;
    onClick: MouseEventHandler;
}

const Icon = (props: IconProps) => {

    return (
        <div className='icon' onClick={props.onClick}>
            <img className='icon-image' src={props.imgSrc} alt='Icon' height='64px' width='64px'/>
            <div className='icon-title' style={{ color: props.textColor }}>{props.title}</div>
        </div>
    )
}



export default Icon;
