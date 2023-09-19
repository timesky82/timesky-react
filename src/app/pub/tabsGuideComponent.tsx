"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="btn_tab_panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="tab_content">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="wrap_tab">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item four" {...a11yProps(3)} />
        <Tab label="Item five" {...a11yProps(4)} />
        <Tab label="Item six" {...a11yProps(5)} />
        <Tab label="Item seven" {...a11yProps(6)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Image
        
          src="https://picsum.photos/500/300?random=1"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Image
          src="https://picsum.photos/500/300?random=2"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Image
          src="https://picsum.photos/500/300?random=3"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Image
          src="https://picsum.photos/500/300?random=4"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Image
          src="https://picsum.photos/500/300?random=5"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Image
          src="https://picsum.photos/500/300?random=6"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Image
          src="https://picsum.photos/500/300?random=7"
          width={500}
          height={300}
          style={{ objectFit: "contain" }}
          alt="lorempic"
        />
      </CustomTabPanel>
    </div>
  );
}
