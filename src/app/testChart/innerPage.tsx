"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLottie } from "lottie-react";
import loading_draw from "@/../../public/lottie/loading_draw.json";
import "@/../../public/scss/sample.scss";
;
export default function TasksPage() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([] as any[]);
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
              setTimeout(() => {
                setLoading(false);
              }, 2000),
              setCoinData(data.Data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData({
      limit: 50,
      tsym: "KRW",
    });
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ minWidth: "280px", width: "50vw", margin: "100px auto" }}>
          {View}
        </div>
      ) : (
        <div >
          test
        </div>
      )}
    </>
  );
}