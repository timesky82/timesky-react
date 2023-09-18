"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
export default function UseRadioGroup() {
  return (
    <>
      <h3 className="mb10 text_h3">라디오</h3>
      <Box component="form" className="mb20">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">라디오</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="female"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <h3 className="mb10 text_h3">체크박스</h3>
      <Box component="form" className="mb20">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel control={<Checkbox size="small" />} label="small" />
        <FormControlLabel
          control={<Checkbox checked={true} readOnly />}
          label="readOnly"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={
                <i className="text_24 ion ion-ios-bookmark text-gray-01"></i>
              }
              checkedIcon={
                <i className="text_24 ion ion-ios-bookmark text-primary"></i>
              }
            />
          }
          label="icon"
        />
      </Box>
    </>
  );
}
