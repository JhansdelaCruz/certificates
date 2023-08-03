import { AppBar, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ToolBar from '../Dashboard/ToolBar';
import SeeCertificate from '../Dashboard/SeeCertificate';

const PgCertificate = () => {
  const { id } = useParams();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'Primary' }}>
        <ToolBar />
      </AppBar>
      <SeeCertificate id={id}></SeeCertificate>
    </Box>
  );
};
export default PgCertificate;
