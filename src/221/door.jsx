import React from 'react';
import Button from '@material-ui/core/Button';
import "./221.css"

export default function Door(props) {
    const handleKnock = () => {
        props.onKnock()
    }

    return(
        <div className="door-bg">
            <div className="knock-button">
                <Button variant="outlined" onClick={handleKnock}>
                    Knock
                </Button>
            </div>
        </div>
    )
}