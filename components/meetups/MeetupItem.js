import { useContext } from 'react';

// import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        price: props.price,
      });
    }
  }

  return (
    // <li className={classes.item}>
    //   <Card>
    //     <div className={classes.image}>
    //       <img src={props.image} alt={props.title} />
    //     </div>
    //     <div className={classes.content}>
    //       <h3>{props.title}</h3>
    //       <address>{props.price}</address>
    //       <p>{props.description}</p>
    //     </div>
    //     <div className={classes.actions}>
    //       <button onClick={toggleFavoriteStatusHandler}>
    //         {itemIsFavorite ? 'Unlike 👎' : 'Like 👍'}
    //       </button>
    //     </div>
    //   </Card>
    // </li>
    <Card sx={{ maxWidth: 600 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image={props.image}
      alt="Paella dish"
    />
    <CardContent>
    <Typography variant="h6">
{props.title}
      </Typography>
      <Typography variant="h6">
{props.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton onClick={toggleFavoriteStatusHandler}>
        <FavoriteIcon sx={{ color: red[500] }}/>
        {itemIsFavorite ? 'Unlike' : 'Like'}
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    
    </CardActions>
  </Card>
  );
}

export default MeetupItem;