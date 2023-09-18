"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [select1, setSelect1] = React.useState("30");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect1(event.target.value as string);
  };
  const [select2, setSelect2] = React.useState("10");

  const handleChange2 = (event: SelectChangeEvent) => {
    setSelect2(event.target.value as string);
  };

  return (
    <>
      <h3 className="mb10 text_h3">셀렉트</h3>
      <Box component="form" className="mb20">
        
        <div className="wrap_input_basic">
          <InputLabel id=" select">basic 셀렉트</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId=" select"
              id=" select"
              label="Age"
              value={select1}
              onChange={handleChange}
              className="outlabel_input"
              size="small"
            >
              <MenuItem value={10}>셀렉트 1</MenuItem>
              <MenuItem value={20}>셀렉트 2</MenuItem>
              <MenuItem value={30}>셀렉트 3셀렉트 3셀렉트 3셀렉트 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="wrap_input_basic">
          <InputLabel id=" select_err"> select_err</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId=" select_err"
              id=" select_err"
              label="Age"
              error
              value={select1}
              onChange={handleChange}
              className="outlabel_input"
              size="small"
            >
              <MenuItem value={10}>셀렉트 1</MenuItem>
              <MenuItem value={20}>셀렉트 2</MenuItem>
              <MenuItem value={30}>셀렉트 3셀렉트 3셀렉트 3셀렉트 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="wrap_input_basic">
          <InputLabel id=" select_readonly">select_readonly</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId=" select_readonly"
              id=" select_readonly"
              label="Age"
              readOnly
              value={select1}
              onChange={handleChange}
              className="outlabel_input"
              size="small"
            >
              <MenuItem value={10}>셀렉트 1</MenuItem>
              <MenuItem value={20}>셀렉트 2</MenuItem>
              <MenuItem value={30}>셀렉트 3셀렉트 3셀렉트 3셀렉트 3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="wrap_input_basic">
          <InputLabel id=" select_disabled">select_disabled</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId=" select_disabled"
              id=" select_disabled"
              label="Age"
              disabled
              value={select1}
              onChange={handleChange}
              className="outlabel_input"
              size="small"
            >
              <MenuItem value={10}>셀렉트 1</MenuItem>
              <MenuItem value={20}>셀렉트 2</MenuItem>
              <MenuItem value={30}>셀렉트 3셀렉트 3셀렉트 3셀렉트 3</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="wrap_input_basic">
          <FormControl fullWidth>
            <InputLabel className="inner_label" id="demo-simple-select-label">inner 라벨</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select2}
              label="inner 라벨"
              onChange={handleChange2}
              size="small"
            >
              <MenuItem value={10}>셀렉트 1</MenuItem>
              <MenuItem value={20}>셀렉트 2</MenuItem>
              <MenuItem value={30}>셀렉트 3셀렉트 3셀렉트 3셀렉트 3</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>
    </>
  );
}
