/* eslint-disable react/prop-types */
import React from 'react';
import HeaderDesktop from '../components/HeaderDesktop';
import {StyleSheet, css} from 'aphrodite';
import '../styles/Global.css';
import FooterDesktop from '../components/FooterDesktop';
import {getImage} from 'gatsby-plugin-image';
import {graphql} from 'gatsby';
import {convertToBgImage} from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import MainPageContentDesktop from '../components/mainPage/MainPageContentDesktop';
import UpcomingEvents from '../components/mainPage/UpcomingEvents';

const Events = ({data}) => {
  const image = getImage(data.file);
  const bgImage = convertToBgImage(image);

  return (
    <div>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={css(styles.rootDesktop)}>
        <HeaderDesktop />
        <MainPageContentDesktop
          title="Events"
          details={
            'A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.'
          }
        />
      </BackgroundImage>

      <UpcomingEvents limit={25} />
      <FooterDesktop />
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    height: '50vh',
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
  query MyQuery2 {
    file(relativePath: {eq: "bgDesktop.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default Events;
