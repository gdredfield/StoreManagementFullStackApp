import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

interface userPageAppBarProps{
  textDisplay: string;
  navBarColor?: "transparent"|"primary"|"secondary";
}

export default function UserPageAppBar({textDisplay, navBarColor}: userPageAppBarProps) {
  // const navBarCustomColor = {background: navBarColor}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={navBarColor}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color = "inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mx: "auto", flexGrow: 0 }}>
            {textDisplay}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
