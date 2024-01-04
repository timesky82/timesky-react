"use client";
import * as React from "react";
//
import ColorGuideComponent from "./colorComponent";
import TypoGuideComponent from "./typoComponent";
import IconGuideComponent from "./ioniconComponent";
import ButtonGuideComponent from "./buttonComponent";
import InputGuideComponent from "./inputComponent";
import SelectGuideComponent from "./selectComponent";
import RadioGuideComponent from "./radioGuideComponent";
import ToggleSwitchGuideComponent from "./toggleSwitchGuideComponent";
import ModalGuideComponent from "./modalGuideComponent";
import TabsGuideComponent from "./tabsGuideComponent";
import TooltipGuideComponent from "./tooltipGuideComponent";
import TableGuideComponent from "./tableGuideComponent";
import TableVirtualGuideComponent from "./tableVirtualGuideComponent";
import GallayGuideComponent from "./gallayGuideComponent";
import CarouselGuideComponent from "./carouselGuideComponent";
//
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useImmer } from "use-immer";
import "@/../../public/scss/pub_guide.scss";
export default function GuidePage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  // dataGnb
  const [dataAcc, updateDataAcc] = useImmer([
    { id: 0, open: false },
    { id: 1, open: false },
    { id: 2, open: false },
    { id: 3, open: false },
    { id: 4, open: false },
    { id: 5, open: false },
    { id: 6, open: false },
    { id: 7, open: false },
    { id: 8, open: false },
    { id: 9, open: false },
    { id: 10, open: false },
    { id: 11, open: false },
    { id: 12, open: false },
    { id: 13, open: true },
  ]);
  const accToggle = (index: any) => {
    return (event: any) => {
      event.persist();
      updateDataAcc((draft) => {
        draft[index].open = !draft[index].open;
      });
    };
  };
  return (
    <React.StrictMode>
      <div className="acc_list_basic">
        <Accordion
          disableGutters={true}
          expanded={dataAcc[0].open}
          onChange={accToggle(dataAcc[0].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit"> 타이포 그래피</h3>
            {dataAcc[0].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <TypoGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[1].open}
          onChange={accToggle(dataAcc[1].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">컬러가이드</h3>
            {dataAcc[1].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <ColorGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[2].open}
          onChange={accToggle(dataAcc[2].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">아이콘가이드</h3>
            {dataAcc[2].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <IconGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[3].open}
          onChange={accToggle(dataAcc[3].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">버튼 가이드</h3>
            {dataAcc[3].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <ButtonGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[4].open}
          onChange={accToggle(dataAcc[4].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">Input 가이드</h3>
            {dataAcc[4].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <InputGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[5].open}
          onChange={accToggle(dataAcc[5].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">Select 가이드</h3>
            {dataAcc[5].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <SelectGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[6].open}
          onChange={accToggle(dataAcc[6].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">Radio Checkbox 가이드</h3>
            {dataAcc[6].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <RadioGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[7].open}
          onChange={accToggle(dataAcc[7].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">토글,스위치</h3>
            {dataAcc[7].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <ToggleSwitchGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[8].open}
          onChange={accToggle(dataAcc[8].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">모달(dialog)</h3>
            {dataAcc[8].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <ModalGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[9].open}
          onChange={accToggle(dataAcc[9].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">Tabs</h3>
            {dataAcc[9].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <TabsGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[10].open}
          onChange={accToggle(dataAcc[10].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">툴팁, 뱃지, 스낵바</h3>
            {dataAcc[10].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <TooltipGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[11].open}
          onChange={accToggle(dataAcc[11].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">테이블</h3>
            {dataAcc[11].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <TableGuideComponent />
            <TableVirtualGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[12].open}
          onChange={accToggle(dataAcc[12].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">갤러리</h3>
            {dataAcc[12].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <GallayGuideComponent />
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters={true}
          expanded={dataAcc[13].open}
          onChange={accToggle(dataAcc[13].id)}
          elevation={0}
        >
          <AccordionSummary aria-controls="panel1bh-content">
            <h3 className="tit">캐러셀(carousel, swiper)</h3>
            {dataAcc[13].open ? (
              <i className="ion ion-ios-arrow-up"></i>
            ) : (
              <i className="ion ion-ios-arrow-down"></i>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <CarouselGuideComponent />
          </AccordionDetails>
        </Accordion>
      </div>
    </React.StrictMode>
  );
}
