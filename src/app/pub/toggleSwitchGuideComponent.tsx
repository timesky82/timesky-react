"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Switch from "@mui/material/Switch";

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="right" key="right">
      <i className="ion ion-md-skip-backward"></i>
    </ToggleButton>,
    <ToggleButton value="left" key="left">
      <i className="ion ion-ios-play"></i>
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <i className="ion ion-md-pause"></i>
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <i className="ion ion-md-skip-forward"></i>
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <>
      <h3 className="mb10 text_h3">text 버튼</h3>
      <Box sx={{ width: "100%" }} className="mb20">
        <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
          {children}
        </ToggleButtonGroup>
      </Box>
      <h3 className="mb10 text_h3">Swicth</h3>
      <Box sx={{ width: "100%" }} className="mb20">
        <Switch defaultChecked />
        <Switch defaultChecked color="secondary" />
        <Switch defaultChecked color="warning" />
        <Switch defaultChecked color="default" />
      </Box>
    </>
  );
}
