"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLottie } from "lottie-react";
import loading_draw from "@/../../public/lottie/loading_draw.json";
import "@/../../public/scss/sample.scss";

import SampleChart from "./ChartSample";
export default function TasksPage() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([] as any[]);
  const [mapData, setmapData] = useState([] as any[]);
  const lottieOptions = {
    animationData: loading_draw,
    loop: true,
  };

  const { View } = useLottie(lottieOptions);

  useEffect(() => {
    console.log("Loading...");
    const fetchData = async (params: any) => {
      try {
        const { data } = await axios.get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull",
          {
            params: params,
          }
        );
        {
          data.Response
            ? console.log(data.Response, ":", data.Message)
            : (console.log(data.Data),
              setCoinData(data.Data),
              setTimeout(() => {
                setLoading(false);
              }, 2000));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData({
      limit: 50,
      tsym: "KRW",
    });

    const dataTreeMap = coinData.map((data) => {
      return {
        name: data.CoinInfo.FullName,
        id: data.CoinInfo.Id,
        price: data.DISPLAY?.KRW.PRICE,
        cap: data.RAW?.KRW.MKTCAP,
        img: data.CoinInfo.ImageUrl,
      };
    });
    setmapData(dataTreeMap);
  }, [loading]);
  console.log("mapData", mapData[0]);
  return (
    <>
      {loading ? (
        <div style={{ minWidth: "280px", width: "50vw", margin: "100px auto" }}>
          {View}
        </div>
      ) : (
        <div>
          test
          <SampleChart chartID="tree-map" chartData={mapData}></SampleChart>
        </div>
      )}
    </>
  );
}
