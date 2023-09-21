"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function PositionedTooltips() {
  return (
    <div className="row">
      <Tooltip className="ma10" title="top" placement="top">
        <Button variant="outlined" size="large">
          top
        </Button>
      </Tooltip>
      <Tooltip className="ma10" title="bottom" placement="bottom">
        <Button variant="outlined" size="large">
          bottom
        </Button>
      </Tooltip>
      <Tooltip className="ma10" title="left" placement="left">
        <Button variant="outlined" size="large">
          left
        </Button>
      </Tooltip>
      <Tooltip className="ma10" title="right" placement="right">
        <Button variant="outlined" size="large">
          right
        </Button>
      </Tooltip>
    </div>
  );
}
