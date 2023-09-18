"use client";
// import type { Metadata } from "next";
import * as React from "react";
import { useImmer } from "use-immer";
import Link from "next/link";
import { Breakpoint, Theme, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import "@/../../public/scss/global.scss";
import "@/../../public/scss/main.scss";

// export const metadata: Metadata = {
//   title: "Pub Guide",
//   openGraph: {
//     title: "Pub Guide",
//   },
// };
// theme;
const theme = createTheme();
interface Props {
  window?: () => Window;
}
//  Breakpoint
type BreakpointOrNull = Breakpoint | null;
const drawerWidth = 240;

export default function ResponsiveDrawer(
  { children }: { children: React.ReactNode },
  props: Props
) {
  //  반응형 클래스
  const { window } = props;
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
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // dataGnb
  const [dataGnb, updateDataGnb] = useImmer([
    {
      id: 1,
      depth1: "depth1-1",
      icon: "",
      open: false,
      href: "#",
      subMenu: [
        { id: "1_1", depth2: "depth1-1", icon: "", href: "pub/" },
        { id: "1_2", depth2: "depth1-2", icon: "" },
      ],
    },
    {
      id: 2,
      depth1: "depth1-2",
      icon: "",
      open: false,
      href: null,
      subMenu: [
        { id: "2_1", depth2: "depth2-1", icon: "" },
        { id: "2_2", depth2: "depth2-2", icon: "" },
      ],
    },
    {
      id: 3,
      depth1: "depth1-3",
      icon: "",

      subMenu: [
        { id: "2_1", depth2: "depth3-1", icon: "" },
        { id: "2_2", depth2: "depth3-2", icon: "" },
      ],
    },
  ]);

  //  handleDrawerToggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = React.useState(true);
  //  drawerSubBtnToggle
  const drawerSubBtnToggle = (index: any) => {
    return (event: any) => {
      event.persist();
      updateDataGnb((draft) => {
        draft[index].open = !draft[index].open;
      });
    };
  };

  const drawer = (
    <div>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {dataGnb.map((dataGnb, i) => (
          <div key={dataGnb.id}>
            <ListItemButton
              href={dataGnb.href ? dataGnb.href : ""}
              onClick={drawerSubBtnToggle(i)}
            >
              <ListItemText primary={dataGnb.depth1} />

              {dataGnb.subMenu ? (
                dataGnb.open ? (
                  <i className="ion ion-ios-arrow-up"></i>
                ) : (
                  <i className="ion ion-ios-arrow-down"></i>
                )
              ) : null}
            </ListItemButton>
            <Collapse in={dataGnb.open} timeout="auto" unmountOnExit>
              {dataGnb.subMenu &&
                dataGnb.subMenu.map((subMenu, index) => {
                  return (
                    <List component="div" disablePadding key={subMenu.id}>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={Link}
                        href={subMenu.depth2}
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

  return (
    <ThemeRegistry>
      <title>pubguide</title>
      <body className={viewWidth}>
        <Box sx={{ display: "flex" }}>
          <AppBar position="fixed">
            <Toolbar className="justify-between">
              <Typography variant="h6" noWrap component="div">
                베이직 인터네셔널 퍼블리싱 가이드
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 0, display: { md: "none" },width:'24px' }}
              >
                {mobileOpen ? (
                  <i className="ion ion-ios-close"></i>
                ) : (
                  <i className="ion ion-ios-menu"></i>
                )}
              </IconButton>
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
              anchor="left"
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
            className="main_content"
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
