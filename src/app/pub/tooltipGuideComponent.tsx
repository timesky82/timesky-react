"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Badge from "@mui/material/Badge";
import Snackbar from "@mui/material/Snackbar";
export default function PositionedTooltips() {
  const [stateTootip_1, setStateTootip_1] = React.useState(false);

  const clTooltip = () => {
    setStateTootip_1(false);
  };

  const openTooltip = () => {
    setStateTootip_1(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <i className="ion ion-ios-close text_24"></i>
        <span className="a11y">닫기</span>
      </Button>
    </React.Fragment>
  );
  return (
    <>
      <h3 className="text_h3">툴팁</h3>
      <div className="row">
        <ClickAwayListener onClickAway={clTooltip}>
          <Tooltip
            className="ma10"
            title="툴팁입니다."
            placement="bottom"
            onClose={clTooltip}
            open={stateTootip_1}
          >
            <Button
              variant="outlined"
              size="large"
              onMouseEnter={openTooltip}
              onClick={openTooltip}
            >
              툴팁
            </Button>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <h3 className="txt_h3 mt20">뱃지</h3>
      <div className="row">
        <Badge badgeContent={4} color="secondary" className="ma10">
          <i className="ion ion-md-mail text_dark text_24"></i>
        </Badge>
        <Badge badgeContent={4} color="error" className="ma10">
          <i className="ion ion-md-umbrella text_24 text_primary"></i>
        </Badge>
        <Badge badgeContent={4} color="info" className="ma10 text_dark">
          <i className="ion ion-md-trophy text_24"></i>
        </Badge>
      </div>
      <h3 className="txt_h3 mt20">스낵바</h3>
      <div className="row">
        <Button className="text_dark mt10" onClick={handleClick} variant="outlined" size="large">
          스낵바 열기
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="스낵바입니다."
          action={action}
        />
      </div>
    </>
  );
}
