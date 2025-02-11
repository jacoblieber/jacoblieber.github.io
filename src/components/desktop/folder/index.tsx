import { MouseEventHandler } from 'react';
import './index.css'

interface FolderProps {
    children: React.ReactNode;
    title: string;
    onClick?: MouseEventHandler;
    id?: string;
}

const Folder = (props: FolderProps) => {

    return (
        <div className='folder' id={props.id}>
            <div className='folder-title-bar'>
                <div className='folder-title'>{props.title}</div>
                <button className='folder-close' onClick={props.onClick}>X</button>
            </div>
            <div className='folder-contents'>
                {props.children}
            </div>
        </div>
    )
}


export default Folder;
