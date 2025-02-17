import React from 'react';
import {lighten, makeStyles} from '@material-ui/core/styles';
import {Card, CardActionArea, CardMedia} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: '0 auto',
        backgroundColor: lighten(theme.palette.background.paper, 0.1),
        borderRadius: 9,
        boxShadow: '0px 4px 2px rgba(255, 0, 0, 0.3), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
    },
    gameItem: {
        transition: 'transform 0.6s ease',
        boxShadow: '0px 4px 2px rgba(255, 0, 0, 0.3), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
        '&:not(:hover)': {
            webkitTransform: 'rotateY(20deg)',
            transform: 'rotateY(20deg)',
            transition: 'transform 0.6s ease',
            transformStyle: 'preserve-3d',
            '& span': {
                background: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
    gameItemReversed: {
        transition: 'transform 0.6s ease',
        boxShadow: '0px 4px 2px rgba(255, 0, 0, 0.3), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)',
        '&:not(:hover)': {
            webkitTransform: 'rotateY(-20deg)',
            transform: 'rotateY(-20deg)',
            transition: 'transform 0.6s ease',
            transformStyle: 'preserve-3d',
            '& span': {
                background: 'rgba(0, 0, 0, 0.5)'
            }
        }
    },
}));

const ImageCard = ({type, vendor, title, background_img, style, changeStyle, clearStyle}) => {
    const classes = useStyles();

    const openPopup = (e) => {
        e.preventDefault();
        window.open('/game?type='+type+'&vendor='+vendor, 'Evolution', 'height='+window.innerHeight+', width='+(window.innerWidth - 200));
    };

    return (
        <Card className={clsx(classes.root, classes[style])} onMouseOver={changeStyle} onMouseLeave={clearStyle} onClick={(e) => openPopup(e)}>
            <CardActionArea className={clsx(classes.img)}>
                <CardMedia
                    component="img"
                    alt="game image"
                    image={background_img}
                    title={title}
                    onClick={() => openPopup}
                />
            </CardActionArea>
            {/*<CardActions>
                <Button size="small" color="primary">
                    Play Game
                </Button>
            </CardActions>*/}
        </Card>
    );
};

export default ImageCard;
