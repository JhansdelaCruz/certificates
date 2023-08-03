import { Box } from '@mui/material';
import TracksCert from '../TracksCert/TracksCert';
import Banner from '../Banner/Banner';
import CertFilter from '../CertFilter/CertFilter';

const PgHome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Banner />
      <CertFilter />
      <TracksCert />
    </Box>
  );
};
export default PgHome;
