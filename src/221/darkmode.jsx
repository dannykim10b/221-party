import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';

export default function Darkmode(props) {
    
    const handleClick = () => {
        props.onToggle()
    }

    const toggleDarkButton = () => {
        return(
            <IconButton>   
                <WbIncandescentIcon onClick={handleClick}></WbIncandescentIcon>
            </IconButton>
        )
    }

    const toggleLightButton = () => {
        return(
            <IconButton>
                <WbIncandescentOutlinedIcon onClick={handleClick}></WbIncandescentOutlinedIcon>
            </IconButton>
        )
    }

    return (
        <div>
            <IconButton>
                {props.value ? toggleLightButton() : toggleDarkButton()}
            </IconButton>
        </div>
    )
}