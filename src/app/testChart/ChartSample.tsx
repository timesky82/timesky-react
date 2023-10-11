"use client";
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import "@/../../public/scss/chart.scss";
function MultilevelTreeMap(props: { chartID: any; chartData:any}) {
  //const chart = useRef(null);
  const chartID = props.chartID;
  const chartData = props.chartData;
  console.log({ chartData });

  useLayoutEffect(() => {

    
    //var root = am5.Root.new("chartdiv2");
    var root = am5.Root.new(chartID);

    const myTheme = am5.Theme.new(root);

    myTheme
      .rule("RoundedRectangle", ["hierarchy", "node", "shape", "depth1"])
      .setAll({
        strokeWidth: 2,
      });

    myTheme
      .rule("RoundedRectangle", ["hierarchy", "node", "shape", "depth2"])
      .setAll({
        fillOpacity: 0,
        strokeWidth: 1,
        strokeOpacity: 0.2,
      });

    myTheme.rule("Label", ["node", "depth1"]).setAll({
      forceHidden: true,
    });

    myTheme.rule("Label", ["node", "depth2"]).setAll({
      fontSize: 10,
    });

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    // Create wrapper container
    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        sort: "descending",
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 2,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        nodePaddingOuter: 0,
        nodePaddingInner: 0,
      })
    );

    series.get("colors").set("step", 1);
    // Generate and set data
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
    var mapData = {
      Acura: {
        ILX: 11757,
        MDX: 54886,
        NSX: 581,
        RDX: 51295,
        RLX: 1237,
        TLX: 34846,
      },
      "Alfa Romeo": { "4C": 407, Giulia: 8903, Stelvio: 2721 },
      Audi: {
        A3: 20733,
        "A3 e-tron": 2877,
        A4: 37674,
        A5: 21301,
        A6: 16304,
        A7: 4810,
        A8: 3127,
        Q3: 20633,
        Q5: 57640,
        Q7: 38346,
        R8: 772,
        TT: 2294,
      },
      Bentley: {
        Bentayga: 1152,
        "Continental GT": 898,
        "Flying Spur": 257,
        Mulsanne: 98,
      },
      BMW: {
        "2-Series": 11737,
        "3-Series": 59449,
        "4-Series": 39634,
        "5-Series": 40658,
        "6-Series": 3355,
        "7-Series": 9276,
        i3: 6276,
        i8: 488,
        X1: 30826,
        X3: 40691,
        X4: 5198,
        X5: 50815,
        X6: 6780,
        Z4: 502,
      },

      Hyundai: {
        Accent: 58955,
        Azera: 3060,
        Elantra: 198210,
        Equus: 20,
        Genesis: 1152,
        Ioniq: 11197,
        "Santa Fe": 133171,
        Sonata: 131803,
        Tucson: 114735,
        Veloster: 12658,
      },

      Kia: {
        Cadenza: 7249,
        Forte: 117596,
        K900: 455,
        Niro: 27237,
        Optima: 107493,
        Rio: 16760,
        Sedona: 23815,
        Sorento: 99684,
        Soul: 115712,
        Sportage: 72824,
        Stinger: 843,
      },
      "Land Rover": {
        "Discovery / LR4": 6398,
        "Discovery Sport": 14187,
        "Range Rover": 16869,
        "Range Rover Evoque": 11979,
        "Range Rover Sport": 19153,
        "Range Rover Velar": 6153,
      },

      Maserati: {
        Ghibli: 5531,
        GranTurismo: 1018,
        Levante: 5448,
        Quattroporte: 1700,
      },
      "Mercedes-Benz": {
        "B-Class": 744,
        "C-Class": 77447,
        "CLA-Class": 20669,
        "E / CLS-Class": 51312,
        "G-Class": 4188,
        "GLA-Class": 24104,
        "GLC-Class": 48643,
        "GLE-Class": 54595,
        "GLS-Class": 32248,
        Metris: 7579,
        "S-Class": 15888,
        "SLC-Class": 2860,
        "SL-Class": 2940,
        Sprinter: 27415,
      },
      Mini: { Cooper: 32232, Countryman: 14864, Paceman: 9 },

      Nissan: {
        "370Z": 4614,
        Altima: 254996,
        Armada: 35667,
        Frontier: 74360,
        "GT-R": 578,
        Juke: 10157,
        Leaf: 11230,
        Maxima: 67627,
        Murano: 76732,
        NV: 17858,
        NV200: 18602,
        Pathfinder: 81065,
        Quest: 4950,
        Rogue: 403465,
        Sentra: 218451,
        Titan: 52924,
        Versa: 106772,
        Xterra: 1,
      },
      Porsche: {
        911: 8970,
        Boxster: 2287,
        Cayenne: 13203,
        Cayman: 2800,
        Macan: 21429,
        Panamera: 6431,
      },

      Tesla: { "Model 3": 2320, "Model S †": 28800, "Model X †": 24000 },
      Toyota: {
        "4Runner": 128296,
        "86/Scion FR-S": 6846,
        Avalon: 32583,
        Camry: 387081,
        "C-HR": 25755,
        Corolla: 329196,
        "FJ Cruiser": 4,
        Highlander: 215775,
        "Land Cruiser": 3100,
        Mirai: 1838,
        Prius: 108662,
        RAV4: 407594,
        Sequoia: 12156,
        Sienna: 111489,
        Tacoma: 198124,
        Tundra: 116285,
        Venza: 14,
        Yaris: 44380,
      },
      Volkswagen: {
        Atlas: 27119,
        Beetle: 15166,
        CC: 1355,
        Eos: 1,
        Golf: 68978,
        Jetta: 115807,
        Passat: 60722,
        Tiguan: 46983,
        Touareg: 3545,
      },
    };
    // var mapData={

    // }

    function processData(mapData) {
      var treeData = [];

      var smallBrands = { name: "Other", children: [] };

      am5.object.eachOrdered(
        mapData,
        (brand) => {
          var brandData = { name: brand, children: [] };
          var brandTotal = 0;
          for (var model in mapData[brand]) {
            brandTotal += mapData[brand][model];
          }

          for (var model in mapData[brand]) {
            // do not add very small
            if (mapData[brand][model] > 100) {
              brandData.children.push({
                name: model,
                value: mapData[brand][model],
              });
            }
          }

          // only bigger brands
          if (brandTotal > 200000) {
            treeData.push(brandData);
          }
        },
        (a, b) => {
          let aval = 0;
          let bval = 0;
          am5.object.each(mapData[a], (key, val) => (aval += val));
          am5.object.each(mapData[b], (key, val) => (bval += val));
          if (aval > bval) return -1;
          if (aval < bval) return 1;
          return 0;
        }
      );

      return [
        {
          name: "Root",
          children: treeData,
        },
      ];
    }

    //series.data.setAll(processData(data));
    series.data.setAll(processData(mapData));

    series.set("selectedDataItem", series.dataItems[0]);

    /*
    series.bullets.push(function (root, series, dataItem) {
      var depth = dataItem.get("depth");

      if (depth === 1) {
        var picture = am5.Picture.new(root, {
          src:"",
          centerX: am5.p50,
          centerY: am5.p50,
          width: am5.percent(30),
          isMeasured: true
        });

        picture.states.lookup("default").setAll({ opacity: 0.15 });

        return am5.Bullet.new(root, { sprite: picture });
      }

    });
*/
  }, [chartID]);

  return <div className="wrap_chart" id={chartID}>
    
  </div>;
}
export default MultilevelTreeMap;
