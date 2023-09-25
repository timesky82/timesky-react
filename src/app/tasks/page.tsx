"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "@mui/material/Container";

interface User {
  id: number;
  name: string;
}
const prams = {
  fsym: "BTC",
};
export default function TasksPage() {
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
            ? console.log(data.Response ,':', data.Message)
            : console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData({
      fsym: "XRPaaa",
      tsyms: "USD,JPY,KRW",
    });
  }, []);

  return <div className="App">See console</div>;

  return <Container></Container>;
}
