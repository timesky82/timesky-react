"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLottie } from "lottie-react";
import ani_loading from "@/../../public/lottie/ani_loading.json";

export default function TasksPage() {
  const [loading, setLoading] = useState(true);
  const [xrpData, setXrpData] = useState({
    USD: 0,
    JPY: 0,
    KRW: 0,
  });
  const options = {
    animationData: ani_loading,
    loop: true,
  };

  const { View } = useLottie(options);

  useEffect(() => {
    console.log("Loading...");
    const fetchData = async (params: any) => {
      try {
        const { data } = await axios.get(
          "https://min-api.cryptocompare.com/data/price",
          {
            params: params,
          }
        );

        {
          data.Response
            ? console.log(data.Response, ":", data.Message)
            : (console.log(data),
              setTimeout(() => {
                setLoading(false);
              }, 0),
              setXrpData(data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData({
      fsym: "XRP",
      tsyms: "USD,JPY,KRW",
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>{View}</div>
      ) : (
        <div>
          {xrpData.KRW}원,{xrpData.USD}$,{xrpData.JPY}엔
        </div>
      )}
    </div>
  );
}
