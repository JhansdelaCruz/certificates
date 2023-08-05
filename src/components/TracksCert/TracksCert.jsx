import { ImageList, ImageListItem, ImageListItemBar, Container } from '@mui/material';

import ModalCert from './ModalCert';
import data from '../../data/data.json';
const datos = data;
const urlImage = require.context('../../media/imgCertificates/sm/', true);

const TracksCert = () => {
  return (
    <Container maxWidth="lg">
      <ImageList
        variant="masonry"
        gap={'2.2rem'}
        sx={{
          columnCount: {
            xs: '1 !important',
            sm: '2 !important',
            md: '3 !important',
          },
        }}
      >
        {datos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={urlImage(`./${item.img}`)}
              srcSet={urlImage(`./${item.img}`)}
              alt={item.title}
              loading="lazy"
            />

            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{ backgroundColor: 'rgba(25,27,38,0.8)' }}
              actionIcon={<ModalCert item={item}></ModalCert>}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};
export default TracksCert;
