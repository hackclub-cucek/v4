import React, {useRef} from 'react';
import HeaderDesktop from '../components/HeaderDesktop';
import {StyleSheet, css} from 'aphrodite';
import background from '../images/bgDesktop.png';
// import backgroundMob from '../images/bgMobile.png';
import '../styles/Global.css';
import {getDeviceDimention} from '../components/Utility';
import MainPageContentDesktop from '../components/mainPage/MainPageContentDesktop';
import MainPageExtras from '../components/mainPage/MainPageExtras';
import HeaderMobile from '../components/HeaderMobile';
import MainPageMobile from '../components/mainPageMobile/MainPageMobile';
import FooterDesktop from '../components/FooterDesktop';
// import {StaticImage} from 'gatsby-plugin-image';
import ThingsWeDoMob from '../components/mainPageMobile/ThingsWeDoMob';

const IndexPage = () => {
  const extrasRef = useRef();

  // Function to scroll down
  const handleOurVisionPress = () => {
    extrasRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const width = getDeviceDimention().width;
  if (width < 1280) {
    //Mobile page
    return (
      <div>
        <div className={css(styles.rootMobile)}>
          <HeaderMobile />
          <MainPageMobile />
        </div>
        <ThingsWeDoMob />
      </div>
    );
  }

  // Desktop Page
  return (
    <div>
      <div className={css(styles.rootDesktop)}>
        <HeaderDesktop />
        <MainPageContentDesktop pressHandler={handleOurVisionPress} />
      </div>
      <div ref={extrasRef}></div>
      <MainPageExtras ref={extrasRef} />
      <FooterDesktop />
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  rootMobile: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'auto 100vh',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    backgroundPosition: 'left -375px top 0px',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    '@media (min-width: 1080px)': {
      backgroundPosition: 'left 0px top 0px',
    },
  },
});
export default IndexPage;
