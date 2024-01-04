"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLottie } from "lottie-react";
import ani_loading from "@/../../public/lottie/ani_loading.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "@/../../public/scss/sample.scss";
// import { SampleType } from "@/components/Type";

export default function TasksPage() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([] as any[]);
  const lottieOptions = {
    animationData: ani_loading,
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
    <div>
      {loading ? (
        <div style={{ minWidth: "280px", width: "50vw", margin: "100px auto" }}>
          {View}
        </div>
      ) : (
        <div>
          <TableContainer
            sx={{
              maxHeight: "100vh",
              margin: "0 auto",
            }}
          >
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align={"center"}>
                    <strong className="text_h3">인덱스</strong>
                  </TableCell>
                  <TableCell align={"center"}>
                    <strong className="text_h3">로고</strong>
                  </TableCell>
                  <TableCell align={"right"}>
                    <strong className="text_h3">가격</strong>
                  </TableCell>
                  <TableCell align={"center"}>
                    <strong className="text_h3">Full Name</strong>
                  </TableCell>
                  <TableCell align={"center"}>
                    <strong className="text_h3">평가</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coinData.map((coinData, i) => (
                  <TableRow key={i}>
                    <TableCell component="td" scope="row" align="center">
                      {i}
                    </TableCell>
                    <TableCell align="center">
                      <LazyLoadImage
                        src={
                          "https://www.cryptocompare.com/" +
                          coinData.CoinInfo.ImageUrl
                        }
                        height={"30px"}
                        width={"30px"}
                        alt="lorempic"
                        effect="blur"
                        placeholderSrc={
                          "https://basicit.co.kr/img/assets/favicon.png"
                        }
                      />
                    </TableCell>
                    <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
                      {coinData.DISPLAY?.KRW.PRICE}
                    </TableCell>

                    <TableCell align="center">
                      {coinData.CoinInfo.FullName}
                    </TableCell>

                    <TableCell align="center">
                      {coinData.CoinInfo.Rating.Weiss.Rating}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}
