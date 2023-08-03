import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import SeeCertificate from '../Dashboard/SeeCertificate';

const PgCertificate = () => {
  const { id } = useParams();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box minHeight={40}></Box>
      <SeeCertificate id={id}></SeeCertificate>
    </Box>
  );
};
export default PgCertificate;
