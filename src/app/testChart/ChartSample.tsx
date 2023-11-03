"use client";
import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import "@/../../public/scss/chart.scss";
function Pie(props: { chartID: any; chartData: any }) {
  //const chart = useRef(null);

  const chartID1 = props.chartID;
  //   const chartData = props.chartData;
  useEffect(() => {
    console.log("chartData", props.chartData);
    var root = am5.Root.new(chartID1);
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/

    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        alignLabels: true,
        calculateAggregates: true,
        valueField: "cap",
        categoryField: "name",
      })
    );

    series.slices.template.setAll({
      strokeWidth: 3,
      stroke: am5.color(0xffffff),
    });

    series.labelsContainer.set("paddingTop", 30);

    // Set up adapters for variable slice radius
    // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
    series.slices.template.adapters.add("radius", function (radius, target) {
      let dataItem = target.dataItem;
      let high = series.getPrivate("valueHigh");

      //   if (dataItem) {
      //     let value = target.dataItem.get("valueWorking", 0);
      //     return (radius * value) / high;
      //   }
      return radius;
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

    series.data.setAll([
      {
        name: "Bitcoin",
        id: "1182",
        price: "₩ 46,932,397.0",
        cap: 916663630980931,
        img: "/media/37746251/btc.png",
      },
      {
        name: "Ethereum",
        id: "7605",
        price: "₩ 2,425,406.5",
        cap: 291699559012372.44,
        img: "/media/37746238/eth.png",
      },
      {
        name: "Solana",
        id: "934443",
        price: "₩ 52,859.6",
        cap: 29676661150122.06,
        img: "/media/37747734/sol.png",
      },
      {
        name: "XRP",
        id: "5031",
        price: "₩ 809.03",
        cap: 80893385788457.11,
        img: "/media/38553096/xrp.png",
      },
      {
        name: "USD Coin",
        id: "925809",
        price: "₩ 1,356.00",
        cap: 33188419152985.137,
        img: "/media/34835941/usdc.png",
      },
      {
        name: "Chainlink",
        id: "309621",
        price: "₩ 14,503.8",
        cap: 14503809587456.602,
        img: "/media/37746242/link.png",
      },
      {
        name: "Dogecoin",
        id: "4432",
        price: "₩ 90.68",
        cap: 12846863490786.814,
        img: "/media/37746339/doge.png",
      },
      {
        name: "Tether",
        id: "171986",
        price: "₩ 1,356.58",
        cap: 119935010443686.19,
        img: "/media/37746338/usdt.png",
      },
      {
        name: "Cardano",
        id: "321992",
        price: "₩ 429.99",
        cap: 19349497490574.777,
        img: "/media/37746235/ada.png",
      },
      {
        name: "Binance Coin",
        id: "204788",
        price: "₩ 311,100.0",
        cap: 49119215331566.4,
        img: "/media/40485170/bnb.png",
      },
      {
        name: "Arbitrum",
        id: "952987",
        price: "₩ 1,277.97",
        cap: 12779705600703.78,
        img: "/media/44081950/arb.png",
      },
      {
        name: "Uniswap Protocol Token",
        id: "936630",
        price: "₩ 6,190.00",
        cap: 6190000000000,
        img: "/media/37746885/uni.png",
      },
      {
        name: "Aave",
        id: "936952",
        price: "₩ 120,489.3",
        cap: 1927828084687.0127,
        img: "/media/37747534/aave.png",
      },
    ]);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 30,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
  }, [chartID1]);

  return <div className="wrap_chart" id={chartID1}></div>;
}
export default Pie;
