import React, { useEffect, useState } from 'react';

// import Typography from '@material-ui/core/Typography';
// import { Box } from '@material-ui/core';
import PointOfInterestCard from '../pointOfInterestCard';
import { PointOfInterest } from '../../types/pointOfInterest';
import { fetchFeatured } from '../../repo/pointOfInterest';

// export default function FeaturedPoi() {
//   const [poiData, setPoiData] = useState<PointOfInterest[]>([]);

//   useEffect(() => {
//     fetchFeatured().then((resp: any) => {
//       setPoiData(resp.data);
//     });
//   }, []);

//   return (
//     <Box display="flex">
//       <Typography color="primary">Featured</Typography>
//       <Box display="flex" alignItems="center" >
//         {poiData.length > 0 && poiData.map((poi, index) => <PointOfInterestCard key={index} poi={poi} />)}
//       </Box>
//     </Box>
//   );
// }

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      style: { overflowY: 'scroll' }
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    }
  })
);

export default function FeaturedPoi() {
  const [poiData, setPoiData] = useState<PointOfInterest[]>([]);

  useEffect(() => {
    fetchFeatured().then((resp: any) => {
      setPoiData(resp.data);
    });
  }, []);

  const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value) as GridSpacing);
  };

  return (
    <Box display="flex" justifyContent="flex-start" flexDirection="column">
      <Typography color="primary">Featured</Typography>
      <Box>
        <Grid container className={classes.root} spacing={2} justify="flex-start">
          <Grid item xs={12}>
            <Grid container justify="center" spacing={1}>
              {
                //  poiData.length > 0 && poiData.map((poi, index) => <PointOfInterestCard key={index} poi={poi} />)
                poiData.length > 0 &&
                  poiData.map((poi, index) => (
                    <Grid key={index}>
                      <PointOfInterestCard key={index} poi={poi} />
                    </Grid>
                  ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
