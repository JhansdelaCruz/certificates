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
    <AppBar position="fixed" sx={{ backgroundColor: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box size="large" color="inherit" sx={{ mr: 2 }}>
            <School />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
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
