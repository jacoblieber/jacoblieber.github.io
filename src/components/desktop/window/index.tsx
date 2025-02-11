import { forwardRef, MouseEventHandler, TouchEventHandler } from 'react';
import { ReactNode } from 'react';
import './index.css'

interface WindowProps {
    key: string;
    titleBar: string;
    title?: string;
    link?: string;
    linkText?: string;
    clickHere?: string;
    clickHereText?: string;
    image?: string;
    text?: string;
    style?: {};
    imageStyle?: {};
    className?: string;
    list?: {
        header: string;
        items: string[];
    }[];
    children?: ReactNode;
    onMouseUp?: MouseEventHandler;
    onMouseDown?: MouseEventHandler;
    onTouchEnd?: TouchEventHandler;
}

const Window = forwardRef<HTMLDivElement, WindowProps>((props: WindowProps, ref) => {

    return (
        <div
            key={props.key}
            style={{...props.style}}
            className={['window', props.className].join(' ')}
            onMouseUp={props.onMouseUp}
            onMouseDown={props.onMouseDown}
            onTouchEnd={props.onTouchEnd}
            ref={ref}
        >
            <div className='window-title-bar'>
                <div className='window-URL'>
                    {props.titleBar}
                </div>
                <button className='window-close'>X</button>
            </div>
            <div className='window-body' style={props.list ? {alignItems:'left', paddingLeft:'5px', paddingRight:'5px'} : {alignItems:'center'}}>
                {props.image && <img className='window-image' src={props.image} style={{alignSelf: 'center', ...props.imageStyle}}></img> }
                {props.title && <div className='window-title'>{props.title}</div> }
                {props.link && 
                    <a
                        href={props.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='window-title'
                    >
                        {props.linkText}
                    </a> 
                }
                {props.clickHere &&
                    <div className='window-text'>
                        click <a href={props.clickHere} target='_blank' rel='noopener noreferrer'>here</a> to {props.clickHereText}
                    </div>
                }
                {props.text && <div className='window-text'>{props.text}</div> }
                {props.list &&
                    <>
                        {props.list.map((list) => 
                            <div className='window-list'>
                            <div className='window-list-header'>{list.header}</div>
                                <ul className='window-list-items'>
                                    {list.items.map((item) =>
                                        <li>{item}</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </>
                }
            </div>
            {props.children}
        </div>
    );
})

export default Window;
