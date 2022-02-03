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
import {COLORS} from '../styles/Colors';
import MemberCard from '../components/members/MemberCard';
import FooterMobile from '../components/FooterMobile';
import HeaderMobile from '../components/HeaderMobile';
import MemberPageMobile from '../components/mainPageMobile/MemberPageMobile';
import useDeviceType from '../components/hooks/useDeviceType';

const Members = ({data}) => {
  const deviceType = useDeviceType();
  const image = getImage(data.file);
  const bgImage = convertToBgImage(image);

  if (deviceType === 'mobile') {
    return (
      <div>
        <BackgroundImage
          Tag="section"
          {...bgImage}
          preserveStackingContext
          className={css(styles.rootMobile)}>
          <HeaderMobile />
          <MemberPageMobile />
        </BackgroundImage>

        <div className={css(styles.contents)}>
          <div className={css(styles.cardRow)}>
            {[...Array(9).keys()].map((item, id) => (
              <div key={id}>
                <MemberCard />
              </div>
            ))}
          </div>
          <button className={css(styles.buttonBottom)}> View More</button>
        </div>

        <FooterMobile />
      </div>
    );
  }
  return (
    <div>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
        className={css(styles.rootDesktop)}>
        <HeaderDesktop />
        <MainPageContentDesktop
          pressHandler={() => {}}
          buttonText="Add Your Profile"
          title="Members"
          details={
            'These are the amazing people who are working to make this happen'
          }
        />
      </BackgroundImage>

      <div className={css(styles.contents)}>
        <div className={css(styles.cardRow)}>
          {[...Array(9).keys()].map((item, id) => (
            <div key={id}>
              <MemberCard />
            </div>
          ))}
        </div>
        <button className={css(styles.buttonBottom)}> View More</button>
      </div>
      <FooterDesktop />
    </div>
  );
};

const styles = StyleSheet.create({
  rootDesktop: {
    height: 600,
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
  contents: {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 1240,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1080px)': {
      marginTop: 50,
      width: 'auto',
    },
  },
  cardRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: 1240,
    justifyContent: 'space-between',
    gap: 32,
    '@media (max-width: 1080px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      gap: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  buttonBottom: {
    width: 156,
    height: 64,
    border: `2px solid ${COLORS.secondary}`,
    borderRadius: 76,
    background: COLORS.white,
    color: COLORS.secondary,
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '26px',
    letterSpacing: '.0125em',
    textAlign: 'center',
    marginTop: 64,
    '@media (max-width: 1080px)': {
      width: 160,
      height: 59,
      fontSize: 16,
      marginTop: 56,
      marginBottom: 32,
    },
  },
});

export const pageQuery = graphql`
  query MyQuery4 {
    file(relativePath: {eq: "bgMembers.png"}) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default Members;
