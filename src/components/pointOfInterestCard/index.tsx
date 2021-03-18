import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { PointOfInterest } from '../../types/pointOfInterest';
import LocationIcon from '@material-ui/icons/LocationOn';
import { Box } from '@material-ui/core';
import colors from '../../themes/colors';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    style: { background: `${colors.LIGHT_BACKGROUND_1}` }
  }
  // style: { paddingLeft: 2, background: `${colors.LIGHT_BACKGROUND_1}` }
});
interface Props {
  poi: PointOfInterest;
}

export default function PointOfInterestCard({ poi }: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" alt="POI" height="150" image={poi.img} title={poi.title} />
        <CardContent>
          <Box>
            <Box display="flex" alignItems="left" flexWrap="wrap">
              <Typography gutterBottom variant="body2" component="h2" color="textPrimary">
                <strong>{poi.title}</strong>
              </Typography>
            </Box>
            <Box display="flex" alignItems="left" flexWrap="wrap">
              <LocationIcon />
              <Typography variant="body2" color="textSecondary" component="p">
                {poi.location}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
