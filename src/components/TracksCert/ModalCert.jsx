import * as React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Fab,
  Modal,
  Stack,
} from '@mui/material';
import { Visibility, PictureAsPdf } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  width: 800,
  p: 3,
};

const urlImage = require.context('../../media/imgCertificates/', true);

const ModalCert = (pronps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Fab onClick={handleOpen} edge="start" size="small" sx={{ backgroundColor: '#7532fa' }}>
        <Visibility sx={{ fill: '#fcfcfc' }} />
      </Fab>

      <Modal
        open={open}
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardMedia
            sx={{ height: 440 }}
            image={urlImage(`./${pronps.item.img}.jpg`)}
            title="Certificado"
            style={{ objectFit: 'cover', maxWidth: '100%' }}
          />
          <CardContent>
            <Stack direction="row" spacing={1}>
              {pronps.item.skills.map((skills) => (
                <Chip key={skills} label={skills} color="primary" />
              ))}
            </Stack>
          </CardContent>
          <CardActions sx={{ flexDirection: 'row-reverse' }}>
            <Link to={`/search/${pronps.item.id}`}>
              <Button size="small" variant="outlined" startIcon={<PictureAsPdf />}>
                Google Drive
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};
export default ModalCert;
