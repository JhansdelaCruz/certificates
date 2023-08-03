import { Box, Grid, Typography } from '@mui/material';
import imgxlBanner from '../../media/imgBanner/imgBanner11520-4400.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Grid item sx={{ gridRow: '1', gridColumn: '1 / 2' }}>
        <img src={imgxlBanner} alt="Banner" style={{ maxWidth: '100%', objectFit: 'cover' }} />
      </Grid>
      <Grid
        item
        style={{ background: 'linear-gradient(0deg,rgba(25,27,38,0.45),rgba(25,27,38,0.6))' }}
        sx={{
          gridRow: '1',
          gridColumn: '1 / 2',
        }}
      ></Grid>

      <Grid
        item
        sx={{
          gridRow: '1',
          gridColumn: '1 / 2',
          display: 'grid',
        }}
      >
        <Box sx={{ placeSelf: 'center' }} color={'#FFFFFF'}>
          <Typography variant="h1" fontWeight={'600'} fontSize={'5rem'}>
            CERTIFICADOS
          </Typography>
          <Typography variant="p">
            Hola! Soy Jhans, un desarrollador Jr con pasión por el desarrollo fullstack
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
export default Banner;
