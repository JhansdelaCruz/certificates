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
  flexBasis: '86px',
  maxWidth: '168px',
};

const CertFilter = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{ paddingTop: '20px', paddingBottom: '50px' }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <BottomNavigation
        sx={{ gap: '1rem', flexWrap: 'wrap', display: 'flex', width: '80%' }}
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
        <BottomNavigationAction style={styFilter} label="Marino" icon={<SailingOutlined />} />
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
