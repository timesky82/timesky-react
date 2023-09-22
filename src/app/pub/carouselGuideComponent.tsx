"use client";
import React, { useRef, useState } from "react";
import { useImmer } from "use-immer";
import { Swiper, SwiperSlide } from "swiper/react";
import "@/../../public/scss/swiper.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectFade,
} from "swiper/modules";


export default function CarouselComponent() {
  // dataTab
  const [dataTab, updateDataTab] = useImmer([
    {
      id: 1,
      label: "Item 1",
      tit: "It is Lazy Load Sample1",
      imgSrc: "https://picsum.photos/380/280?random=1",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio obcaecati impedit sequi, amet facilis mollitia magni rerum quaerat dolore porro.",
    },
    {
      id: 2,
      label: "Item 2",
      tit: "It is Lazy Load Sample2",
      imgSrc: "https://picsum.photos/380/280?random=2",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit error vel hic modi animi itaque, asperiores possimus ipsa? Vitae, cupiditate. Culpa autem saepe incidunt. Quaerat maxime fugit repudiandae magni, veritatis corporis accusantium rem recusandae! Alias porro, ipsam voluptates possimus illum nostrum laudantium esse tenetur repellat eaque, praesentium qui quis.",
    },
    {
      id: 3,
      label: "Item 3",
      tit: "It is Lazy Load Sample3",
      imgSrc: "https://picsum.photos/380/280?random=3",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum libero ut ducimus quam nemo quis ipsum.",
    },
    {
      id: 4,
      label: "Item 4",
      tit: "It is Lazy Load Sample4",
      imgSrc: "https://picsum.photos/380/280?random=4",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse explicabo minima sapiente ipsum, reprehenderit recusandae rerum aliquid molestiae veniam, quidem inventore nemo?",
    },
    {
      id: 5,
      label: "Item 5",
      tit: "It is Lazy Load Sample5",
      imgSrc: "https://picsum.photos/380/280?random=5",
      txt: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 6,
      label: "Item 6",
      tit: "It is Lazy Load Sample6",
      imgSrc: "https://picsum.photos/380/280?random=6",
      txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolor quo non architecto perspiciatis nemo porro eos reprehenderit molestiae voluptas, maxime sed quibusdam in. Eos nobis quaerat, minima voluptatibus sapiente cupiditate dicta laborum porro repellat provident ex in impedit debitis deserunt ipsum quidem earum possimus?",
    },
    {
      id: 7,
      label: "Item 7",
      tit: "It is Lazy Load Sample77",
      imgSrc: "https://picsum.photos/380/280?random=7",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus delectus eaque.",
    },
  ]);
  return (
    <Swiper
      // cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={false}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, EffectFade]}
      effect={"fade"}
      className="sample_swiper "
    >
      {dataTab.map((dataTab, i) => {
        return (
          <SwiperSlide key={dataTab.id}>
            <h3 className="tit">{dataTab.tit}</h3>
            <div className="slide_item">
              <div className="img_area">
                <LazyLoadImage
                  src={dataTab.imgSrc}
                  height={"280px"}
                  width={"400px"}
                  alt="lorempic"
                  effect="blur"
                  placeholderSrc={
                    "https://basicit.co.kr/img/assets/favicon.png"
                  }
                />
              </div>
              <div className="txt_area">
                <p className="txt">{dataTab.txt}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
