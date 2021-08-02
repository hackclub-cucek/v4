import * as React from 'react';
import HeaderDesktop from '../components/HeaderDesktop';
import {StyleSheet, css} from 'aphrodite';
import background from '../images/bgDesktop.png';
import '../styles/Global.css';
import {getDeviceDimention} from '../components/Utility';
import MainPageContentDesktop from '../components/mainPage/MainPageContentDesktop';
import MainPageExtras from '../components/mainPage/MainPageExtras';

const IndexPage = () => {
  const width = getDeviceDimention().width;
  if (width < 1280) {
    return <div>Mobile view</div>;
  }

  // Desktop Page
  return (
    <div>
      <div className={css(styles.rootDesktop)}>
        <HeaderDesktop />
        <MainPageContentDesktop />
      </div>
      <MainPageExtras />
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    backgroundImage: `url(${background})`,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
});
export default IndexPage;
