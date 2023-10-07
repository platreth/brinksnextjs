import Head from 'next/head';
import Layout, { siteTitle } from '../components/header/header';
import utilStyles from '../styles/utils.module.css';
import Carousel from "../components/carousel/carousel";
import Description from "../components/description/description";
import BackgroundText from "../components/backgroundText/backgroundText";


export default function Home() {
  return (
    <>
      <Layout />
      <Carousel />
      <Description />
      <Carousel />
      <BackgroundText title="true"/>
    </>
  );
}