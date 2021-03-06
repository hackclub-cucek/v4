import {Link} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../styles/Colors';

const routes = [
  {
    name: 'Events',
    path: '/events',
  },
  {
    name: 'Our Team',
    path: '/members',
  },
  {
    name: 'Join US',
    path: '/join',
  },
  {
    name: 'Scrapbook',
    path: '/scrapbook',
  },
  {
    name: 'Gallery',
    path: '/gallery',
  },
];

const HeaderDesktop = () => {
  return (
    <div className={css(styles.root)}>
      <Link to="/">
        <StaticImage
          height={96}
          src="../images/hackClubFlag.png"
          quality={95}
          // formats={['AUTO', 'WEBP', 'AVIF']}
          alt="flag"
          imgClassName={css(styles.flag)}
          style={{marginLeft: 40}}
          imgStyle={{maxHeight: 96}}
        />
      </Link>

      <div className={css(styles.navBar)}>
        {routes.map((item, id) => (
          <Link key={id} className={css(styles.item)} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>

      <div className={css(styles.socialContainer)}>
        <StaticImage
          onClick={() => {
            window.location.href = 'https://twitter.com/hackclubcucek';
          }}
          src="../images/icons/twitter.png"
          alt="twitter-social"
          className={css(styles.socialIcons)}
        />
        <StaticImage
          onClick={() => {
            window.location.href = 'https://github.com/hackclub-cucek';
          }}
          src="../images/icons/github.png"
          alt="github-social"
          className={css(styles.socialIcons)}
        />
        <StaticImage
          onClick={() => {
            window.location.href =
              'https://www.linkedin.com/company/hackclubcucek/';
          }}
          src="../images/icons/linkedin.png"
          alt="linkedin-social"
          className={css(styles.socialIcons)}
        />
        <StaticImage
          onClick={() => {
            window.location.href = 'https://www.instagram.com/hackclubcucek';
          }}
          src="../images/icons/instagram.png"
          alt="instagram-social"
          className={css(styles.socialIcons)}
        />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    color: COLORS.white,
    maxHeight: 96,
    alignItems: 'center',
  },
  flag: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
  },
  navBar: {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 100,
    marginRight: 100,
    minWidth: 650,
  },
  item: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '29px',
    textDecoration: 'none',
    marginLeft: 18,
    marginRight: 18,
    color: COLORS.white,
    marginTop: 64,
  },
  socialContainer: {
    marginTop: 64,
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: 50,
  },
  socialIcons: {
    marginLeft: 8,
    marginRight: 8,
    // marginBottom: 20,
    maxWidth: 28,
    maxHeight: 28,
    cursor: 'pointer',
  },
});

export default HeaderDesktop;
