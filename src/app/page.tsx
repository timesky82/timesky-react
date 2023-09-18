"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import "@/../../public/scss/global.scss";
import "@/../../public/scss/main.scss";
export default function MenuAppBar() {
  //  아바타
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  // 아바타 메뉴
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAbatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 햄버거
  const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorMenu);
  const menuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMenu(event.currentTarget);
    console.log(anchorMenu);
  };
  const menuClose = () => {
    setAnchorMenu(null);
      console.log(anchorMenu);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup className="dev_temp_btn">
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          {auth && (
            <>
              <IconButton
                id="fade-button"
                aria-controls={openMenu ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={menuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorMenu}
                open={Boolean(anchorMenu)}
                onClose={menuClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={menuClose}>aa</MenuItem>
                <MenuItem onClick={menuClose}>My aa</MenuItem>
                <MenuItem onClick={menuClose}>aa</MenuItem>
              </Menu>
            </>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
