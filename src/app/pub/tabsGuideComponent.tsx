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
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, similique aliquid numquam voluptatem est aperiam
              deserunt illo distinctio aliquam dolorum iste. Saepe eius veniam
              quibusdam nemo placeat molestiae inventore officiis.
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
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
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              placeat, minus nihil, in excepturi ratione consequatur modi
              nostrum doloribus velit eius error explicabo quisquam sapiente
              deleniti, distinctio odit at aliquid?
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"@https://basicit.co.kr/img/assets/favicon.png"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil,
              quos placeat tempora suscipit fugiat porro necessitatibus vel
              atque quo vitae! Ut aut animi architecto?
            </p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
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
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aut repellendus nisi laborum at sapiente et soluta quae, quam pariatur unde error?</p>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <h3 className="tit">It is Lazy Load Sample</h3>
        <div className="wrap_content_item">
          <div className="img_area">
            <LazyLoadImage
              src={"https://picsum.photos/400/380?random=1"}
              height={"280px"}
              width={"380px"}
              alt="lorempic"
              effect="blur"
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </div>
          <div className="txt_area">
            <p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia distinctio minus hic eum officiis sapiente consectetur non, dignissimos quos reiciendis! Praesentium, ex! Sequi facilis dolores repellat reprehenderit animi iusto nisi est, odio necessitatibus labore laudantium excepturi beatae cum ipsam distinctio et veritatis eum quibusdam. Esse ipsum hic debitis consectetur quibusdam!</p>
          </div>
        </div>
      </CustomTabPanel>
    </div>
  );
}
