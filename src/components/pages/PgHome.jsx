import { Box, AppBar } from '@mui/material';
import TracksCert from '../TracksCert/TracksCert';
import Banner from '../Banner/Banner';
import CertFilter from '../CertFilter/CertFilter';
import ToolBar from '../Dashboard/ToolBar';

const PgHome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent' }}>
        <ToolBar />
      </AppBar>
      <Banner />
      <CertFilter />
      <TracksCert />
    </Box>
  );
};
export default PgHome;
