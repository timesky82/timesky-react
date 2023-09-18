"use client";
import * as React from "react";
import { useImmer } from "use-immer";
import { Breakpoint, Theme, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import "@/../../public/scss/main.scss";
type BreakpointOrNull = Breakpoint | null;
const drawerWidth = 240;

const theme = createTheme();
interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(
  { children }: { children: React.ReactNode },
  props: Props
) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(true);

  const handleWithIndex = (index: any) => {
    return (event: any) => {
      event.persist();
      updateDataGnb((draft) => {
        draft[index].open = !draft[index].open;
        
      });
    };
  };

  // dataGnb
  const [dataGnb, updateDataGnb] = useImmer([
    {
      id: 1,
      depth1: "tata",
      icon: "",
      open: true,
      href: null,
      subMenu: [
        { id: "1_1", depth2: "tata", icon: "", href: "pub/aa" },
        { id: "1_2", depth2: "tata", icon: "" },
      ],
    },
    {
      id: 2,
      depth1: "tata",
      icon: "",
      open: false,
      href: null,
      subMenu: [
        { id: "2_1", depth2: "tata", icon: "" },
        { id: "2_2", depth2: "tata", icon: "" },
      ],
    },
    { id: 3, depth1: "tata", icon: "", href: "#" },
  ]);
  const drawer = (
    <div>
      {/* <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component="a" href="#">
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider /> */}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {dataGnb.map((dataGnb, i) => (
          <div key={dataGnb.id} onClick={handleWithIndex(i)}>
            <ListItemButton href={dataGnb.href ? dataGnb.href : ""}>
              <ListItemText primary={i} />

              {dataGnb.subMenu ? (
                dataGnb.open ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )
              ) : null}
            </ListItemButton>
            <Collapse in={dataGnb.open} timeout="auto" >
              {dataGnb.subMenu &&
                dataGnb.subMenu.map((subMenu, index) => {
                  return (
                    <List component="div" disablePadding key={subMenu.id}>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component="a"
                        href={subMenu.href ? subMenu.href : ""}
                      >
                        <ListItemText primary={subMenu.depth2} />
                      </ListItemButton>
                    </List>
                  );
                })}
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  function useWidth() {
    const theme: Theme = useTheme();
    const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
    return (
      keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const matches = useMediaQuery(theme.breakpoints.up(key));
        return !output && matches ? key : output;
      }, null) || "xs"
    );
  }

  const viewWidth = useWidth();
  return (
    <ThemeRegistry>
      <body className={viewWidth}>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
          >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { md: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />

            {children}
          </Box>
        </Box>
      </body>
    </ThemeRegistry>
  );
}
