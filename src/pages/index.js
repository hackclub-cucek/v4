import * as React from 'react';
import HeaderDesktop from '../components/HeaderDesktop';
import {StyleSheet, css} from 'aphrodite';
import background from '../images/bgDesktop.png';
import '../styles/Global.css';
import {getDeviceDimention} from '../components/Utility';
import {COLORS} from '../styles/Colors';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  const width = getDeviceDimention().width;
  if (width < 1280) {
    return <div>Mobile view</div>;
  }

  // Desktop Page
  return (
    <div className={css(styles.rootDesktop)}>
      <HeaderDesktop />

      <div className={css(styles.container)}>
        <p className={css(styles.title)}>Hack Club CUCEK</p>
        <p className={css(styles.details)}>
          A nonprofit network of high school coding clubs and makers around the
          world, for the students, by the students.
        </p>
        <button className={css(styles.button)}>
          Our Vision
          <StaticImage src="../images/icons/nextIcon.png" alt="next-icon" />
        </button>
      </div>
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 250,
    marginBottom: 'auto',
    width: 'max-content',
    height: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: '85.3333px',
    lineHeight: '126.78%',
    textAlign: 'center',
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
    textShadow: '3.08px solid #FFFFFF',
    color: '#FFFFFF',
    margin: 0,
  },
  details: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '152%',
    textAlign: 'center',
    color: '#FFFFFF',
    maxWidth: 840,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 4,
  },
  button: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26.6667px',
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    color: '#FFFFFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: COLORS.secondary,
    borderRadius: '170.667px',
    padding: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 270,
    marginTop: 54,
    borderTopStyle: 'hidden',
    borderRightStyle: 'hidden',
    borderLeftStyle: 'hidden',
  },
});
export default IndexPage;
