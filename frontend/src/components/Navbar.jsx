import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ForestIcon from '@mui/icons-material/Forest';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FoundationIcon from '@mui/icons-material/Foundation';
import FactoryIcon from '@mui/icons-material/Factory';
import MailIcon from '@mui/icons-material/Mail';
import {Link,useLocation} from 'react-router-dom';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';

const drawerWidth = 240;

export default function Navbar({content}) {
    const location = useLocation()
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Visualization Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {/* <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider /> */}
          
            
              <ListItem key={1} disablePadding>
                <ListItemButton component={Link} to="/" selected={"/" === location.pathname}>
                  <ListItemIcon>
                    { <PodcastsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={"Information Technology"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding>
                <ListItemButton  component={Link} to="/dashboard2" selected={"/dashboard2" === location.pathname}>
                  <ListItemIcon>
                    { <ApartmentIcon />}
                  </ListItemIcon>
                  <ListItemText primary={"Construction"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding>
                <ListItemButton  component={Link} to="/dashboard3" selected={"/dashboard3" === location.pathname}>
                  <ListItemIcon>
                    { <ForestIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={"Environment"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding>
                <ListItemButton  component={Link} to="/dashboard4" selected={"/dashboard4" === location.pathname}>
                  <ListItemIcon>
                    { <FoundationIcon />}
                  </ListItemIcon>
                  <ListItemText primary={"Government"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding>
                <ListItemButton  component={Link} to="/dashboard5" selected={"/dashboard5" === location.pathname}>
                  <ListItemIcon>
                    { <FactoryIcon />}
                  </ListItemIcon>
                  <ListItemText primary={"Manufacturing"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding>
                <ListItemButton  component={Link} to="/dashboard6" selected={"/dashboard6" === location.pathname}>
                  <ListItemIcon>
                    { <ElectricalServicesIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={"Support services"} />
                </ListItemButton>
              </ListItem>
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
               {content}
      </Box>
    </Box>
  );
}
