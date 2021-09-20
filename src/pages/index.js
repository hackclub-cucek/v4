/* eslint-disable react/prop-types */
import React, {useRef} from 'react';
import HeaderDesktop from '../components/HeaderDesktop';
import {StyleSheet, css} from 'aphrodite';
import '../styles/Global.css';
import MainPageContentDesktop from '../components/mainPage/MainPageContentDesktop';
import MainPageExtras from '../components/mainPage/MainPageExtras';
import MainPageExtrasMob from '../components/mainPageMobile/MainPageExtrasMob';
import HeaderMobile from '../components/HeaderMobile';
import MainPageMobile from '../components/mainPageMobile/MainPageMobile';
import FooterDesktop from '../components/FooterDesktop';
import useDeviceType from '../components/hooks/useDeviceType';
import {getImage} from 'gatsby-plugin-image';
import {graphql} from 'gatsby';
import {convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import FooterMobile from '../components/FooterMobile';

const IndexPage = ({data}) => {
  const extrasRef = useRef();
  const deviceType = useDeviceType();

  // Function to scroll down
  const handleOurVisionPress = () => {
    extrasRef.current.scrollIntoView({behavior: 'smooth'});
  };

  const image = getImage(data.file);
  const bgImage = convertToBgImage(image);

  if (deviceType === 'mobile') {
    //Mobile page
    return (
      <div>
        <BackgroundImage
          Tag="section"
          {...bgImage}
          preserveStackingContext
          className={css(styles.rootMobile)}>
          <HeaderMobile />
          <MainPageMobile />
        </BackgroundImage>
        <MainPageExtrasMob />
        <FooterMobile />
      </div>
    );
  }

  // Desktop Page
  return (
    <div>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={css(styles.rootDesktop)}>
        <HeaderDesktop />
        <MainPageContentDesktop
          pressHandler={handleOurVisionPress}
          title="Hackclub Cucek"
          details={
            'A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.'
          }
          buttonText="Our Vision"
        />
      </BackgroundImage>
      <div ref={extrasRef}></div>
      <MainPageExtras ref={extrasRef} />
      <FooterDesktop />
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'left 0px top 0px',
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'left 0px top 0px',
    '@media (max-width: 1080px)': {
      backgroundPosition: 'left -375px top 0px',
    },
  },
});

export const pageQuery = graphql`
  query MyQuery {
    file(relativePath: {eq: "bgDesktop.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default IndexPage;
