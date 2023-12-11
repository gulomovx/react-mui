import { AppBar, Avatar, Box, InputBase, styled, Toolbar, Typography } from "@mui/material";
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import { Badge } from "@mui/base";
import { Mail } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between'
})
const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px', 
    borderRadius: theme.shape.borderRadius,
    width:'40%'
}))
const Icons = styled(Box)(({ theme }) => ({
    Color:'white',
    display: 'flex',
    gap: '20px',
    alignItems:'center'
}))
const Navbar = () => {
  return (
    <AppBar position="stick">
          <StyledToolbar>
              <Typography variant="h4" sx={{display:{xs:'none', sm:'block'}}}>Web</Typography>
              <BrowserUpdatedIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
              <Search><InputBase placeholder="search..."/></Search>
              <Icons>
                  <Badge badgeContent={4} color='error'>
                      <Mail color='action'/>
                  </Badge>
                  <Badge badgeContent={4} color='red'>
                      <Notifications color='red' />
                  </Badge>
                  <Avatar sx={{width:30, height:30}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNuRx7VFqA46pC6I8s1LpHvbbPUCzRPAUMw&usqp=CAU' />
              </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
