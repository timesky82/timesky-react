"use client";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function StandardImageList() {
    const itemData = [
      {
        img: "https://picsum.photos/380/280?random=1",
        title: "Breakfast",
      },
      {
        img: "https://picsum.photos/380/280?random=2",
        title: "Burger",
      },
      {
        img: "https://picsum.photos/380/280?random=3",
        title: "Camera",
      },
      {
        img: "https://picsum.photos/380/280?random=4",
        title: "Coffee",
      },
      {
        img: "https://picsum.photos/380/280?random=5",
        title: "Hats",
      },
      {
        img: "https://picsum.photos/380/280?random=6",
        title: "Honey",
      },
      {
        img: "https://picsum.photos/380/280?random=7",
        title: "Basketball",
      },
      {
        img: "https://picsum.photos/380/280?random=8",
        title: "Fern",
      },
      {
        img: "https://picsum.photos/380/280?random=9",
        title: "Mushrooms",
      },
      {
        img: "https://picsum.photos/380/280?random=10",
      },
      {
        img: "https://picsum.photos/380/280?random=11",
        title: "Sea star",
      },
      {
        img: "https://picsum.photos/380/280?random=12",
        title: "Bike",
      },
    ];
    const masonryData = [
      {
        img: "https://picsum.photos/380/640?random=1",
        title: "Breakfast",
      },
      {
        img: "https://picsum.photos/280/280?random=2",
        title: "Burger",
      },
      {
        img: "https://picsum.photos/180/280?random=3",
        title: "Camera",
      },
      {
        img: "https://picsum.photos/480/280?random=4",
        title: "Coffee",
      },
      {
        img: "https://picsum.photos/580/280?random=5",
        title: "Hats",
      },
      {
        img: "https://picsum.photos/780/280?random=6",
        title: "Honey",
      },
      {
        img: "https://picsum.photos/380/480?random=7",
        title: "Basketball",
      },
      {
        img: "https://picsum.photos/380/580?random=8",
        title: "Fern",
      },
      {
        img: "https://picsum.photos/380/680?random=9",
        title: "Mushrooms",
      },
      {
        img: "https://picsum.photos/380/280?random=10",
      },
      {
        img: "https://picsum.photos/380/280?random=11",
        title: "Sea star",
      },
      {
        img: "https://picsum.photos/380/280?random=12",
        title: "Bike",
      },
    ];
  return (
    <>
      <h3 className="mb10">기본 갤러리</h3>
      <ImageList cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="mb30">
            <LazyLoadImage
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              effect="blur"
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <h3 className="mb10">masonry 갤러리</h3>
      <ImageList cols={3} gap={8} variant="masonry">
        {masonryData.map((item) => (
          <ImageListItem key={item.img} className="">
            <LazyLoadImage
              srcSet={`${item.img}`}
              effect="blur"
              src={`${item.img}`}
              alt={item.title}
              placeholderSrc={"https://basicit.co.kr/img/assets/favicon.png"}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}


