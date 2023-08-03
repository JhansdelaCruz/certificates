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
            image={pronps.item.img}
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
            <Button
              href={`https://jhansdelacruz.github.io/certificates/#/search/${pronps.item.id}`}
              size="small"
              variant="outlined"
              startIcon={<PictureAsPdf />}
            >
              Google Drive
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};
export default ModalCert;
