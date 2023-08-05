import { Box, Grid, Typography } from '@mui/material';
import imgmdBanner from '../../media/imgBanner/imgBanner11520-4400.jpg';
import imgsmBanner from '../../media/imgBanner/imgBanner1920-550.jpg';
import imgxsBanner from '../../media/imgBanner/imgBanner640-427.jpg';

const Banner = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      <Grid
        item
        sx={{ gridRow: '1', gridColumn: '1 / 2', display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <img src={imgmdBanner} alt="Banner" style={{ maxWidth: '100%', objectFit: 'cover' }} />
      </Grid>
      <Grid
        item
        sx={{ gridRow: '1', gridColumn: '1 / 2', display: { xs: 'none', sm: 'block', md: 'none' } }}
      >
        <img src={imgsmBanner} alt="Banner" style={{ maxWidth: '100%', objectFit: 'cover' }} />
      </Grid>
      <Grid
        item
        sx={{ gridRow: '1', gridColumn: '1 / 2', display: { xs: 'block', sm: 'none', md: 'none' } }}
      >
        <img src={imgxsBanner} alt="Banner" style={{ maxWidth: '100%', objectFit: 'cover' }} />
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
        <Box sx={{ placeSelf: 'center' }} color={'#FFFFFF'} maxWidth={'95%'}>
          <Typography
            variant="h1"
            textAlign={'center'}
            fontWeight={'600'}
            sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' }, paddingBottom: '1.1rem' }}
          >
            CERTIFICADOS
          </Typography>
          <Typography
            textAlign={'center'}
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              display: { xs: 'none', md: 'block' },
            }}
          >
            Hola, soy Jhans, un apasionado por el desarrollo fullstack. <br></br>En este sitio
            encontrarás una lista de algunas de mis certificaciones y cursos realizados.
          </Typography>
          <Typography
            textAlign={'center'}
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              display: { xs: 'block', md: 'none' },
            }}
          >
            Hola, soy Jhans, un apasionado por el desarrollo fullstack.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};
export default Banner;
