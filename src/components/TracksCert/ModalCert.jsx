import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Chip, Fab, Modal, Stack } from '@mui/material';
import { Visibility, Close, PageviewOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#EBF3F5',
  border: '2px solid rgb(225,186,8)',
  borderRadius: '10px',
  boxShadow: '10px 10px 18px rgba(225,186,8,0.35)',
  p: { xs: 2, sm: 3 },
  width: { xs: '80%', sm: '70%', md: '60%', lg: 'auto' },
};

const urlImage = require.context('../../media/imgCertificates/sm', true);

const ModalCert = (pronps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Fab onClick={handleOpen} edge="start" size="small" sx={{ backgroundColor: '#191B26' }}>
        <Visibility sx={{ fill: '#FFBA08' }} />
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
            component="img"
            sx={{
              maxHeight: '55vh',
              borderWidth: '3px 3px 7px',
              borderStyle: 'solid',
              borderColor: '#FCFCFC',
              backgroundColor: '#FCFCFC',
            }}
            image={urlImage(`./${pronps.item.img}`)}
            title="Certificado"
            style={{ objectFit: 'scale-down', maxWidth: '100%' }}
          />
          <CardContent>
            <Stack
              sx={{ paddingTop: '1rem' }}
              direction="row"
              flexWrap={'wrap'}
              gap={'0.5rem'}
              spacing={1}
            >
              {pronps.item.skills.map((skills) => (
                <Chip key={skills} label={skills} color="primary" variant="outlined" />
              ))}
            </Stack>
          </CardContent>
          <CardActions
            sx={{
              flexDirection: 'row-reverse',
              gap: '1.5rem',
              padding: '1rem 1.5rem 2rem 1.5rem',
            }}
          >
            <Link to={`/search/${pronps.item.id}`}>
              <Fab
                color="primary"
                disableFocusRipple="true"
                onClick={handleClose}
                edge="start"
                size="medium"
                variant="extended"
              >
                <PageviewOutlined sx={{ mr: 1 }} />
                Ver
              </Fab>
            </Link>

            <Fab color="error" onClick={handleClose} edge="start" size="medium" variant="extended">
              <Close sx={{ mr: 0 }} />
              Cerrar
            </Fab>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
};
export default ModalCert;
