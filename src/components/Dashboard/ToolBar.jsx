import {
  Typography,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Tooltip,
  tooltipClasses,
  styled,
  AppBar,
} from '@mui/material';
import { School } from '@mui/icons-material';
import jFilled from '../../media/icon/JFilled.svg';
import { Link } from 'react-router-dom';

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const ToolBar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: 'rgba(25,27,38,1)', boxShadow: '3px 3px 8px rgba(225,186,8,0.3)' }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box size="large" color="#FFBA08" sx={{ mr: 2 }}>
            <School />
          </Box>
          <Typography
            color={'#FCFCFC'}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: 'block' }}
          >
            @Jhansdelacruz
          </Typography>
          <Box>
            <LightTooltip title="Ver todos los Certificados">
              <Link to="./">
                <IconButton edge="start" color="inherit">
                  <Avatar
                    alt="J-icon"
                    src={jFilled}
                    maxWidth={'1rem'}
                    sx={{ width: '2.2rem', height: '2.2rem' }}
                  />
                </IconButton>
              </Link>
            </LightTooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ToolBar;
