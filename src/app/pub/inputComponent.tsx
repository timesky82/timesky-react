"use client";
import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";


export default function inputComponent() {
  return (
    <ThemeRegistry>
      <h3 className="mb10 text_h3">Input state</h3>
      <Box component="form" className="mb20">
        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_basic">input_basic</InputLabel>
          <OutlinedInput
            id="input_basic"
            size="small"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="input_basic"
          />
        </div>

        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_disabled">input_disabled</InputLabel>
          <OutlinedInput
            id="input_disabled"
            size="small"
            disabled
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "input_disabled",
            }}
            placeholder="input_disabled"
          />
        </div>
        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_err">input_err</InputLabel>
          <OutlinedInput
            id="input_err"
            error
            size="small"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "input_err",
            }}
            placeholder="input_err"
          />
        </div>
        <div className="wrap_input_basic">
          <TextField
            id="outlined-basic"
            label="inner label"
            variant="outlined"
            size="small"
          />
        </div>
      </Box>
      <h3 className="mb10 text_h3">Inputsize</h3>
      <Box component="form" className="mb20">
        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_small">input_small</InputLabel>
          <OutlinedInput
            id="input_small"
            size="small"
            aria-describedby="outlined-weight-helper-text"
            placeholder="input_small"
          />
        </div>
        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_medium">input_medium</InputLabel>
          <OutlinedInput
            id="input_medium"
            size="medium"
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "input_medium",
            }}
            placeholder="input_medium"
          />
        </div>
      </Box>
      <h3 className="mb10 text_h3">Input multiline</h3>
      <Box component="form" className="mb20">
        <div className="wrap_input_basic">
          <InputLabel htmlFor="input_multiline">input_multiline</InputLabel>
          <OutlinedInput
            id="input_multiline"
            size="small"
            multiline
            rows={4}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "input_multiline",
            }}
            placeholder="멀티라인 멀티라인"
          />
        </div>
      </Box>
    </ThemeRegistry>
  );
}
