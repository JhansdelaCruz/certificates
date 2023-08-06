import * as React from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
  HistoryEdu,
  IntegrationInstructionsOutlined,
  Translate,
  SailingOutlined,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';
let styFilter = {
  display: 'flex',
  flexBasis: '45px',
  maxWidth: '168px',
};

const CertFilter = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{ paddingBottom: '60px' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <BottomNavigation
        sx={{
          paddingTop: '20px',
          paddingBottom: '20px',
          display: 'flex',
          width: '100%',
          backgroundColor: '#FCFCFC',
          boxShadow: '1px 1px 30px rgba(25,27,38,0.2)',
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={styFilter} label="Todos" icon={<HistoryEdu />} />
        <BottomNavigationAction
          style={styFilter}
          label="Desarrollador"
          icon={<IntegrationInstructionsOutlined />}
        />
        <BottomNavigationAction style={styFilter} label="Ingles" icon={<Translate />} />
        <BottomNavigationAction style={styFilter} label="Marin" icon={<SailingOutlined />} />
        <BottomNavigationAction
          style={styFilter}
          label="Otros"
          icon={<WorkspacePremiumOutlined />}
        />
      </BottomNavigation>
    </Box>
  );
};
export default CertFilter;
