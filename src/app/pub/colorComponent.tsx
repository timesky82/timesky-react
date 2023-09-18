"use client";
import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import Paper from "@mui/material/Paper";
/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://legacy.reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */

export default function ColorComponent() {
  return (
    <ThemeRegistry>
      <h2>Color </h2>
      <ul className="color_list">
        <li>
          <Paper className="color_box bg_white" elevation={3}></Paper>
          <div className="tit ">
            white
            <p className="txt">#fff</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_primary" elevation={3}></Paper>
          <div className="tit ">
            primary
            <p className="txt">#2e9dd1</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_secondary" elevation={3}></Paper>
          <div className="tit ">
            secondary <p className="txt">#26a69a</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_accent" elevation={3}></Paper>
          <div className="tit ">
            accent <p className="txt">#9c27b0</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_positive" elevation={3}></Paper>
          <div className="tit ">
            positive <p className="txt">#339f63</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_negative" elevation={3}></Paper>
          <div className="tit ">
            negative <p className="txt">#ed1c24</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_info" elevation={3}></Paper>
          <div className="tit ">
            info <p className="txt">#31ccec</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_warning" elevation={3}></Paper>
          <div className="tit ">
            warning <p className="txt">#fda306</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_dark" elevation={8}></Paper>
          <div className="tit ">
            dark <p className="txt">#1d1d1d</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_gray-01" elevation={8}></Paper>
          <div className="tit ">
            gray-01 <p className="txt">#eee</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_gray-02" elevation={8}></Paper>
          <div className="tit ">
            gray-02 <p className="txt">#ddd</p>
          </div>
        </li>
        <li>
          <Paper className="color_box bg_gray-03" elevation={8}></Paper>
          <div className="tit ">
            gray-03 <p className="txt">#666</p>
          </div>
        </li>
      </ul>
    </ThemeRegistry>
  );
}
