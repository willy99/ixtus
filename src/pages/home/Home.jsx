import React from "react"
import YoutubeNews from "../../components/blog/YoutubeNews"
import { useParams } from 'react-router';
import { Category } from "../../components/category/Category"

export const Home = () => {
    const { id } = useParams();
  return (
    <>
      {/*  <Slider /> <Category/> */}
      <YoutubeNews newstype={id}/>
    </>
  )
}
