import { ImageList, ImageListItem, ImageListItemBar, Container } from '@mui/material';

import ModalCert from './ModalCert';
import data from '../../data/data.json';
const datos = data;
const urlImage = require.context('../../media/imgCertificates/xs/', true);

const TracksCert = () => {
  return (
    <Container
      sx={{ paddingLeft: { xs: '4rem', sm: '2rem' }, paddingRight: { xs: '3rem', sm: '2rem' } }}
    >
      <ImageList
        variant="masonry"
        gap={'4rem'}
        sx={{
          columnCount: {
            xs: '1 !important',
            sm: '2 !important',
            md: '3 !important',
          },
          borderRadius: '13px',
        }}
      >
        {datos.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{
              boxShadow: '10px 10px 20px rgba(25,27,38,0.8)',
              borderRadius: '13px',
            }}
          >
            <img
              src={urlImage(`./${item.img}`)}
              srcSet={urlImage(`./${item.img}`)}
              alt={item.title}
              loading="lazy"
              style={{ borderTopLeftRadius: '13px', borderTopRightRadius: '13px' }}
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
