import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {Link} from 'gatsby';
import {COLORS} from '../styles/Colors';

const HeaderMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className={css(styles.rootHeader)}>
      <Link to='/'>
      <StaticImage
        src="../images/hackClubFlag.png"
        quality={95}
        // formats={['AUTO', 'WEBP', 'AVIF']}
        alt="flag"
        className={css(styles.flag)}
      />
      </Link>

      <div>
        <StaticImage
          src="../images/icons/menubar.png"
          alt="menu bar"
          className={css(styles.menuBar)}
          onClick={showSidebar}
        />

        <div className={css(styles.rootNavBar)}>
          <nav
            className={
              sidebar ? css(styles.navMenuActive) : css(styles.navMenu)
            }>
            <div className={css(styles.menuHeader)}>
              <StaticImage
                src="../images/hackClubFlag.png"
                quality={95}
                // formats={['AUTO', 'WEBP', 'AVIF']}
                alt="flag"
                className={css(styles.flag)}
              />

              <StaticImage
                src="../images/icons/menubarCross.png"
                alt="menu bar"
                className={css(styles.crossIcon)}
                onClick={showSidebar}
              />
            </div>
            <div className={css(styles.navBarContents)}>
              <div className={css(styles.text)}>
                <Link className={css(styles.links)} to='/events'>Events</Link>
                <Link className={css(styles.links)}>Our Team</Link>
                <Link className={css(styles.links)}>Join Us</Link>
                <Link className={css(styles.links)}>Scrapbook</Link>
                <Link className={css(styles.links)}>Gallery</Link>
              </div>
              <div className={css(styles.icons)}>
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  rootHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flag: {
    height: 69,
    left: 16,
    width: 124,
  },
  menuBar: {
    height: 16,
    right: 22,
    top: 22,
    width: 18,
  },

  /*----Navbar---*/

  navMenu: {
    overflowY: 'hidden',
    top: 0,
    height: '100vh',
    width: '100%',
    right: '-100%',
    position: 'fixed',
    transition: '450ms',
  },
  navMenuActive: {
    top: 0,
    zIndex: 1,
    right: 0,
    transition: '350ms',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    backgroundColor: COLORS.primary,
  },
  menuHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crossIcon: {
    width: 13,
    height: 13,
    marginRight: 19,
    marginTop: 27,
  },

  navBarContents: {
    marginLeft: 16,
  },

  text: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 273,
    justifyContent: 'space-between',
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '29px',
    fontStyle: 'normal',
  },

  links: {
    textDecoration: 'none',
    color: COLORS.white,
    ':hover': {
      color: COLORS.secondary,
    },
  },
  icons: {
    marginTop: 40,
    maxWidth: 240,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HeaderMobile;
