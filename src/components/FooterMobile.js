import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../styles/Colors';
import {StaticImage} from 'gatsby-plugin-image';
import {Link} from 'gatsby';

const FooterMobile = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.hcCucek)}>
        <div className={css(styles.title)}>Hack Club CUCEK</div>
        <div className={css(styles.linkDiv)}>
          <div className={css(styles.links)}>
            <Link to="/" className={css(styles.footerLinks)}>
              Events
            </Link>
            <Link to="/" className={css(styles.footerLinks)}>
              Our Team
            </Link>
            <Link to="/" className={css(styles.footerLinks)}>
              Join Us
            </Link>
          </div>
          <div className={css(styles.links, styles.links2)}>
            <Link to="/" className={css(styles.footerLinks)}>
              Scrapbook
            </Link>
            <Link to="/" className={css(styles.footerLinks)}>
              Gallery
            </Link>
          </div>
        </div>
      </div>
      <div className={css(styles.address)}>
        <div className={css(styles.title)}>Address</div>
        <div className={css(styles.text)}>
          Cochin University College of Engineering Kuttanad(CUCEK), Pulincunnu
          P.O, Alleppey, 688504, Kerala
        </div>
      </div>
      <div className={css(styles.socialLinks)}>
        <div className={css(styles.title)}>Social</div>
        <div className={css(styles.iconsDIv)}>
          <Link to="https://twitter.com/hackclubcucek">
            <StaticImage
              src="../images/icons/twitter.png"
              alt="twitter-social"
              className={css(styles.socialIcons)}
            />
          </Link>
          <Link to="https://github.com/hackclub-cucek">
            <StaticImage
              src="../images/icons/github.png"
              alt="twitter-social"
              className={css(styles.socialIcons)}
            />
          </Link>
          <Link to="https://www.linkedin.com/company/hackclubcucek/">
            <StaticImage
              src="../images/icons/linkedin.png"
              alt="twitter-social"
              className={css(styles.socialIcons)}
            />
          </Link>

          <Link to="https://www.instagram.com/hackclubcucek/">
            <StaticImage
              src="../images/icons/instagram.png"
              alt="twitter-social"
              className={css(styles.socialIcons)}
            />
          </Link>
        </div>
        <div className={css(styles.hcFlag)}>
          <StaticImage
            src="../images/flag.png"
            alt="hackclub-flag"
            className={css(styles.footerFlag)}
          />
        </div>
      </div>
      <div className={css(styles.copyRight)}>
        All Rights Reserved 2021, Hack Club CUCEK, Designed with ❤️️ @akhil__tj
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.primary,
  },
  hcCucek: {
    marginTop: 48,
    marginLeft: 63,
    marginRight: 63,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: 'normal',
    lineHeight: '24px',
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 25.5,
  },
  linkDiv: {
    marginBottom: 23,
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  links2: {
    justifyContent: 'space-evenly',
  },
  footerLinks: {
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '162%',
    color: '#FFFFFF',
  },
  text: {
    marginLeft: 16,
    marginRight: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: '162%',
    marginBottom: 44,
  },
  iconsDIv: {
    marginLeft: 72,
    marginRight: 72,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hcFlag: {
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 56,
  },
  copyRight: {
    fontSize: 16,
    lineHeight: '162%',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginBottom: 48,
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default FooterMobile;
