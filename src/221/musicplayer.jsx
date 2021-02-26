import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./221.css"
import Card from '@material-ui/core/Card';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress'


export default function MusicPlayer() {
    return(
    <div className="musicplayer">
        <Card>
            <Grid container alignItems="center">
                <Grid item align="center" xs={3}>
                </Grid>
                <Grid item align="center" xs={6}>
                <Typography component="h5" variant="h5">
                    Hi
                </Typography>
                <Typography color="textSecondary" variant="subtitle1">
                    Wassup
                </Typography>
                <div>
                    <IconButton>
                        <PauseIcon />
                    </IconButton>
                    <IconButton >
                        <SkipNextIcon />
                    </IconButton>
                </div>
                </Grid>
                <Grid item align="center" xs={3}>
                </Grid>
            </Grid>
            {/* <LinearProgress variant="determinate"  /> */}
        </Card>
    </div>
    )
}