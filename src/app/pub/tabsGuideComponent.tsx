"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <h3 className="tit">It is Sample Tab</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"/favicon.ico"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              molestiae vitae molestias eaque distinctio dolorem aliquam
              repellendus provident, illo facere corrupti quibusdam minus
              quaerat sunt mollitia deserunt. Maxime, omnis obcaecati excepturi
              vel rerum quaerat quas molestiae totam placeat ratione. Nulla
              optio vel beatae non numquam blanditiis ducimus, magnam aut
            </p>
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
}
