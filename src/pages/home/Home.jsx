import React from "react"
import YoutubeNews from "../../components/blog/YoutubeNews"
import { useParams } from 'react-router';

export const Home = () => {
    const { id } = useParams();
  return (
    <>
      {/*  <Slider /> <Category/> */}
      <YoutubeNews newstype={id}/>
    </>
  )
}
