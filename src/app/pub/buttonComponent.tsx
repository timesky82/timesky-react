"use client";
import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function buttonComponent() {
  return (
    <ThemeRegistry>
      <h3 className="mb10 text_h3">text 버튼</h3>

      <Box sx={{ width: "100%" }} className="mb20">
        <Button className="ma10" variant="text">
          Text
        </Button>
        <Button className="ma10" variant="text" disabled>
          Disabled
        </Button>
        <Button className="ma10" variant="text" href="#">
          #Link top
        </Button>
      </Box>
      <h3 className="mb10 text_h3">Contained 버튼</h3>

      <Box sx={{ width: "100%" }} className="mb20">
        <Button className="ma10" variant="contained" disableElevation>
          쉐도우 없음
        </Button>
        <Button className="ma10" variant="contained">
          contained 버튼
        </Button>
        <Button className="ma10" variant="contained" disabled>
          Disabled
        </Button>
        <Button className="ma10 text_white" variant="contained" href="#">
          Link
        </Button>
      </Box>
      <h3 className="mb10 text_h3">Outlined 버튼</h3>

      <Box sx={{ width: "100%" }} className="mb20">
        <Button className="ma10" variant="outlined">
          Outlined 버튼
        </Button>
        <Button className="ma10" variant="outlined" disabled>
          Disabled
        </Button>
        <Button className="ma10 text_primary" variant="outlined" href="#">
          Link
        </Button>
      </Box>
      <h3 className="mb10 text_h3">Size 버튼</h3>
      <Box className="mb20" sx={{ "& button": { m: 1 } }}>
        <div>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
        <div className="row">
          <Button variant="outlined" size="small">
            Small
          </Button>
          <Button variant="outlined" size="medium">
            Medium
          </Button>
          <Button variant="outlined" size="large">
            Large
          </Button>
        </div>
        <div className="row">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
      </Box>
      <h3 className="mb10 text_h3">Color 버튼</h3>
      <Box className="mb20" sx={{ "& button": { m: 1 } }}>
        <div className="row">
          <Button className="text_primary">primary</Button>
          <Button className="text_secondary">secondary</Button>
          <Button className="text_accent">accent</Button>
          <Button className="text_positive">positive</Button>
          <Button className="text_negative">negative</Button>
          <Button className="text_info">info</Button>
        </div>
        <div className="row">
          <Button className="text_white bg_primary">primary</Button>
          <Button className="text_white bg_secondary">secondary</Button>
          <Button className="text_white bg_accent">accent</Button>
          <Button className="text_white bg_positive">positive</Button>
          <Button className="text_white bg_negative">negative</Button>
          <Button className="text_white bg_info">info</Button>
        </div>
        <div className="row">
          <Button variant="outlined" className="text_primary">
            primary
          </Button>
          <Button variant="outlined" className="text_secondary">
            secondary
          </Button>
          <Button variant="outlined" className="text_accent">
            accent
          </Button>
          <Button variant="outlined" className="text_positive">
            positive
          </Button>
          <Button variant="outlined" className="text_negative">
            negative
          </Button>
          <Button variant="outlined" className="text_info">
            info
          </Button>
        </div>
      </Box>
      <h3 className="mb10 text_h3">Icon 버튼</h3>
      <Box sx={{ "& button": { m: 1 } }} className="mb20">
        <div className="row">
          <Button variant="contained" className="bg_negative width_icon">
            <i className="ion ion-ios-arrow-down"></i>
            <span>ICON</span>
          </Button>
          <Button
            disableElevation
            variant="outlined"
            className="bg_white text_warning width_icon"
          >
            <i className="ion ion-ios-save"></i>
            <span>ICON</span>
          </Button>
          <Button disableElevation variant="contained" className="width_icon">
            <i className="ion ion-ios-cloud-circle"></i>
            <span>ICON</span>
          </Button>
        </div>
      </Box>
    </ThemeRegistry>
  );
}
