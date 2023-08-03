import { Button, Container } from '@mui/material';
import { PictureAsPdf } from '@mui/icons-material';
import data from '../../data/data.json';
const datos = data;

const urlImage = require.context('../../media/imgCertificates/', true);

const SeeCertificate = (pronps) => {
  let item,
    existeItem = false;

  for (let i = 0; i < datos.length; i++) {
    if (datos[i].id === pronps.id) {
      item = datos[i];
      existeItem = true;
      break;
    } else {
      existeItem = false;
    }
  }

  return (
    <main>
      <Container maxWidth="xl" sx={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        {existeItem && (
          <div>
            <img
              style={{ maxWidth: '100%', objectFit: 'cover' }}
              src={urlImage(`./${item.img}.jpg`)}
              srcSet={urlImage(`./${item.img}.jpg`)}
              loading="lazy"
            />
            <Button
              target="_black"
              href={item.pdf}
              size="small"
              variant="outlined"
              startIcon={<PictureAsPdf />}
            >
              Google Drive
            </Button>
          </div>
        )}
        {!existeItem && <p>no encontrado</p>}
      </Container>
    </main>
  );
};
export default SeeCertificate;
