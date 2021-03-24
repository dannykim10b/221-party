import React from 'react';
import Button from '@material-ui/core/Button';
import "./221.css"
import door from "../img/221doortestcropped.png"

export default function Door(props) {
    const handleKnock = () => {
        props.onKnock()
    }

    return(
        <div className="doorContainer" >
            {/* <div className="doorContainer center"> */}
                <img className="doorContainer door-image" src={door}></img>
                <div className="doorContainer knock-button">
                    <Button className="doorContainer knock-button" variant="outlined" onClick={handleKnock}>
                        Knock
                    </Button>
                </div>
            {/* </div> */}
        </div>
    )
}