import Layout, { siteTitle } from '../components/header/header';
import Carousel from "../components/carousel/carousel";
import DesktopCarousel from "../components/carousel/desktopCarousel";
import Description from "../components/description/description";
import BackgroundText from "../components/backgroundText/backgroundText";
import useCheckMobileScreen from "../utils/useCheckDesktopScreen";
export default function Home() {
  const isDesktop = useCheckMobileScreen();

  return (
    <>
      <Layout />
      <Carousel />
      <Description />
      {isDesktop ? <DesktopCarousel /> : <Carousel />}
      <BackgroundText />
    </>
  );
}