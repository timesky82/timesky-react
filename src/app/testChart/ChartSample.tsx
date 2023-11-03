// "use client";
// import React, { useEffect } from "react";
// import * as am5 from "@amcharts/amcharts5";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import * as am5percent from "@amcharts/amcharts5/percent";
// import "@/../../public/scss/chart.scss";
// function Pie(props: { chartID: any; chartData: any }) {
//   //const chart = useRef(null);

//   const chartID = props.chartID;
//   const chartData = props.chartData;
//   useEffect(() => {
//     console.log("chartData", props.chartData);
//     var root = am5.Root.new(chartID);
//     // Set themes
//     // https://www.amcharts.com/docs/v5/concepts/themes/

//     root.setThemes([am5themes_Animated.new(root)]);

//     // Create chart
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
//     let chart = root.container.children.push(
//       am5percent.PieChart.new(root, {
//         layout: root.verticalLayout,
//       })
//     );

//     // Create series
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
//     let series = chart.series.push(
//       am5percent.PieSeries.new(root, {
//         alignLabels: true,
//         calculateAggregates: true,
//         valueField: "cap",
//         categoryField: "name",
//       })
//     );

//     series.slices.template.setAll({
//       strokeWidth: 3,
//       stroke: am5.color(0xffffff),
//     });

//     series.labelsContainer.set("paddingTop", 30);

//     // Set up adapters for variable slice radius
//     // https://www.amcharts.com/docs/v5/concepts/settings/adapters/
//     series.slices.template.adapters.add("radius", function (radius, target) {
//       let dataItem = target.dataItem;
//       let high = series.getPrivate("valueHigh");

//       if (dataItem) {
//         let value = target.dataItem.get("valueWorking", 0);
//         return (radius * value) / high;
//       }
//       return radius;
//     });

//     // Set data
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data

//     series.data.setAll([
//       {
//         name: "Bitcoin",
//         id: "1182",
//         price: "₩ 46,932,397.0",
//         cap: 916663630980931,
//         img: "/media/37746251/btc.png",
//       },
//       {
//         name: "Ethereum",
//         id: "7605",
//         price: "₩ 2,425,406.5",
//         cap: 291699559012372.44,
//         img: "/media/37746238/eth.png",
//       },
//       {
//         name: "Solana",
//         id: "934443",
//         price: "₩ 52,859.6",
//         cap: 29676661150122.06,
//         img: "/media/37747734/sol.png",
//       },
//       {
//         name: "XRP",
//         id: "5031",
//         price: "₩ 809.03",
//         cap: 80893385788457.11,
//         img: "/media/38553096/xrp.png",
//       },
//       {
//         name: "USD Coin",
//         id: "925809",
//         price: "₩ 1,356.00",
//         cap: 33188419152985.137,
//         img: "/media/34835941/usdc.png",
//       },
//       {
//         name: "Chainlink",
//         id: "309621",
//         price: "₩ 14,503.8",
//         cap: 14503809587456.602,
//         img: "/media/37746242/link.png",
//       },
//       {
//         name: "Dogecoin",
//         id: "4432",
//         price: "₩ 90.68",
//         cap: 12846863490786.814,
//         img: "/media/37746339/doge.png",
//       },
//       {
//         name: "Tether",
//         id: "171986",
//         price: "₩ 1,356.58",
//         cap: 119935010443686.19,
//         img: "/media/37746338/usdt.png",
//       },
//       {
//         name: "Cardano",
//         id: "321992",
//         price: "₩ 429.99",
//         cap: 19349497490574.777,
//         img: "/media/37746235/ada.png",
//       },
//       {
//         name: "Binance Coin",
//         id: "204788",
//         price: "₩ 311,100.0",
//         cap: 49119215331566.4,
//         img: "/media/40485170/bnb.png",
//       },
//       {
//         name: "Arbitrum",
//         id: "952987",
//         price: "₩ 1,277.97",
//         cap: 12779705600703.78,
//         img: "/media/44081950/arb.png",
//       },
//       {
//         name: "Uniswap Protocol Token",
//         id: "936630",
//         price: "₩ 6,190.00",
//         cap: 6190000000000,
//         img: "/media/37746885/uni.png",
//       },
//       {
//         name: "Aave",
//         id: "936952",
//         price: "₩ 120,489.3",
//         cap: 1927828084687.0127,
//         img: "/media/37747534/aave.png",
//       },
//       {
//         name: "Polygon",
//         id: "930246",
//         price: "₩ 878.91",
//         cap: 8786339670336.307,
//         img: "/media/37746047/matic.png",
//       },
//       {
//         name: "Mask Network",
//         id: "939507",
//         price: "₩ 4,528.23",
//         cap: 452823395161.1538,
//         img: "/media/37746334/mask.png",
//       },
//       {
//         name: "Avalanche",
//         id: "935805",
//         price: "₩ 15,701.2",
//         cap: 6791173218645.745,
//         img: "/media/43977160/avax.png",
//       },
//       {
//         name: "First Digital USD",
//         id: "953803",
//         img: "/media/44154091/fdusd.png",
//       },
//       {
//         name: "Litecoin",
//         id: "3808",
//         price: "₩ 92,480.1",
//         cap: 6827891540627.88,
//         img: "/media/37746243/ltc.png",
//       },
//       {
//         name: "FileCoin",
//         id: "213663",
//         price: "₩ 5,345.00",
//         cap: 2478146991440,
//         img: "/media/37747014/fil.png",
//       },
//       {
//         name: "Sushi",
//         id: "936306",
//         price: "₩ 1,410.79",
//         cap: 352618765244.65796,
//         img: "/media/37746894/sushi.png",
//       },
//       {
//         name: "Near",
//         id: "937105",
//         price: "₩ 1,981.10",
//         cap: 2300574486053.1987,
//         img: "/media/37458963/near.png",
//       },
//       {
//         name: "Polkadot",
//         id: "935731",
//         price: "₩ 6,090.17",
//         cap: 8028634163333.162,
//         img: "/media/39334571/dot.png",
//       },
//       {
//         name: "TRON",
//         id: "310829",
//         price: "₩ 133.00",
//         cap: 11806402336534.465,
//         img: "/media/37746879/trx.png",
//       },
//       {
//         name: "Bitcoin Cash",
//         id: "202330",
//         price: "₩ 316,666.4",
//         cap: 6190373856604.207,
//         img: "/media/37746245/bch.png",
//       },
//       {
//         name: "Aptos",
//         id: "951233",
//         price: "₩ 8,713.47",
//         cap: 9265972771021.428,
//         img: "/media/43881360/apt.png",
//       },
//       {
//         name: "Cosmos",
//         id: "199107",
//         price: "₩ 10,308.8",
//         cap: 3841704447341.5317,
//         img: "/media/37746867/atom.png",
//       },
//       {
//         name: "Binance USD",
//         id: "932135",
//         price: "₩ 1,355.74",
//         cap: 2640758935107.734,
//         img: "/media/37746248/busd.png",
//       },
//       {
//         name: "PancakeSwap",
//         id: "936880",
//         price: "₩ 2,068.00",
//         cap: 801807981140.1707,
//         img: "/media/37747616/cake.png",
//       },
//       {
//         name: "Ethereum Classic",
//         id: "5324",
//         price: "₩ 22,938.2",
//         cap: 3299100870711.5586,
//         img: "/media/37746862/etc.png",
//       },
//       {
//         name: "Gas",
//         id: "213532",
//         price: "₩ 8,200.00",
//         cap: 820000002920.2739,
//         img: "/media/37747638/gas.png",
//       },
//       {
//         name: "Shiba Inu",
//         id: "940776",
//         price: "₩ 0.01042",
//         cap: 6143107821314.193,
//         img: "/media/37747199/shib.png",
//       },
//       {
//         name: "Decentraland",
//         id: "199148",
//         price: "₩ 526.99",
//         cap: 1155778107065.133,
//         img: "/media/37746665/mana.png",
//       },
//       {
//         name: "Gala",
//         id: "936750",
//         price: "₩ 24.12",
//         cap: 663469731693.0933,
//         img: "/media/39500762/gala.png",
//       },
//       {
//         name: "Curve DAO Token",
//         id: "936137",
//         price: "₩ 678.38",
//         cap: 1378360897996.4429,
//         img: "/media/37747537/crv.png",
//       },
//       {
//         name: "Hedera Hashgraph",
//         id: "932121",
//         price: "₩ 73.30",
//         cap: 3665000000000,
//         img: "/media/38553139/hbar.png",
//       },
//       {
//         name: "dYdX",
//         id: "943395",
//         price: "₩ 2,938.55",
//         cap: 2938549177006.541,
//         img: "/media/43717493/dydx.png",
//       },
//       {
//         name: "Monero",
//         id: "5038",
//         price: "₩ 230,011.8",
//         cap: 4221404327423.8936,
//         img: "/media/37746883/xmr.png",
//       },
//       {
//         name: "EOS",
//         id: "166503",
//         price: "₩ 852.50",
//         cap: 999123478688.2064,
//         img: "/media/40485146/eos.png",
//       },
//       {
//         name: "Pepe",
//         id: "953245",
//         img: "/media/44082118/pepe.png",
//       },
//       {
//         name: "Stellar",
//         id: "4614",
//         price: "₩ 159.14",
//         cap: 7957091690083.798,
//         img: "/media/37746346/xlm.png",
//       },
//       {
//         name: "Sui",
//         id: "953119",
//         price: "₩ 600.26",
//         cap: 6002563195642.058,
//         img: "/media/44082045/sui.png",
//       },
//       {
//         name: "Injective",
//         id: "937043",
//         price: "₩ 19,199.8",
//         cap: 1919984981388.9502,
//         img: "/media/43687858/inj.png",
//       },
//       {
//         name: "The Sandbox",
//         id: "936179",
//         price: "₩ 480.67",
//         cap: 1441998799436.3374,
//         img: "/media/37746667/sand.png",
//       },
//       {
//         name: "Optimism",
//         id: "948958",
//         price: "₩ 1,812.06",
//         cap: 7782737778181.945,
//         img: "/media/40219338/op.png",
//       },
//       {
//         name: "True USD",
//         id: "844139",
//         price: "₩ 1,355.02",
//         cap: 4116627317590.424,
//         img: "/media/38554125/tusd.png",
//       },
//       {
//         name: "Maker",
//         id: "41192",
//         price: "₩ 1,748,967.2",
//         cap: 1709805410934.3494,
//         img: "/media/1382296/mkr.png",
//       },
//       {
//         name: "ARK",
//         id: "32699",
//         price: "₩ 1,310.00",
//         cap: 231422889140,
//         img: "/media/37746978/ark.png",
//       },
//       {
//         name: "Mantle",
//         id: "953741",
//         price: "₩ 543.01",
//         cap: 3377137733875.669,
//         img: "/media/44154179/mantle.png",
//       },
//       {
//         name: "Osmosis",
//         id: "945993",
//         price: "₩ 555.50",
//         cap: 347281567814.5,
//         img: "/media/39500918/osmo.png",
//       },
//       {
//         name: "Trust Wallet Token",
//         id: "934995",
//         price: "₩ 1,520.97",
//         cap: 1520462434167.5505,
//         img: "/media/37747700/twt.png",
//       },
//     ]);

//     // Create legend
//     // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
//     let legend = chart.children.push(
//       am5.Legend.new(root, {
//         centerX: am5.p50,
//         x: am5.p50,
//         marginTop: 15,
//         marginBottom: 15,
//       })
//     );

//     legend.data.setAll(series.dataItems);

//     // Play initial series animation
//     // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
//     series.appear(3000, 100);
//   }, [chartID]);

//   return <div className="wrap_chart" id={chartID}></div>;
// }
// export default Pie;
