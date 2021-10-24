import {css, StyleSheet} from 'aphrodite';
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';
import React from 'react';
import {COLORS} from '../../styles/Colors';

const ThingsWeDoMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.iconContainer)}>
          <StaticImage
            className={css(styles.iconsMob)}
            src="../../images/icons/heartIcon.png"
            alt="Heart Icon"
          />
        </div>
        <div className={css(styles.containerTitle)}>Networking</div>
        <div className={css(styles.description)}>
          You can meet amazing people around you. Who are always ready to
          support you.
        </div>
        <Link to="/" className={css(styles.readMore)}>
          Read More
        </Link>
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.iconContainer)}>
          <StaticImage
            className={css(styles.iconsMob)}
            src="../../images/icons/flagIcon.png"
            alt="Heart Icon"
          />
        </div>
        <div className={css(styles.containerTitle)}>Skill Enhancement</div>
        <div className={css(styles.description)}>
          Togather we can develop our skills thorugh various learning
          initiatives.
        </div>
        <Link to="/" className={css(styles.readMore)}>
          Read More
        </Link>
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.iconContainer)}>
          <StaticImage
            className={css(styles.iconsMob)}
            src="../../images/icons/cpuIcon.png"
            alt="Heart Icon"
          />
        </div>
        <div className={css(styles.containerTitle)}>Development</div>
        <div className={css(styles.description)}>
          We can build solutions for real life problems and develop millions of
          lives.
        </div>
        <Link to="/" className={css(styles.readMoreLast)}>
          Read More
        </Link>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    maxWidth: 550,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  iconContainer: {
    textAlign: 'center',
  },
  iconsMob: {
    width: 112,
    height: 112,
    marginBottom: 0,
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: '24px',
    fontStyle: 'normal',
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  description: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: '146%',
    color: COLORS.primary,
  },
  readMore: {
    marginTop: 12,
    marginBottom: 64,
    color: COLORS.secondary,
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '30px',
  },
  readMoreLast: {
    marginTop: 12,
    //marginBottom: 64,
    color: COLORS.secondary,
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '30px',
  },
});
export default ThingsWeDoMob;
