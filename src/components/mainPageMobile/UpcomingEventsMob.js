import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import image1 from '../../images/googleEvents.png';
import image2 from '../../images/hackFest.png';
import image3 from '../../images/dev.png';
import {COLORS} from '../../styles/Colors';
import {Link} from 'gatsby';

const UpcomingEventsMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image1} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            {' '}
            <div className={css(styles.title)}>Google I/O 2021</div>
            <div className={css(styles.subTitle)}>September 1st Week, 2021</div>
            <div className={css(styles.description)}>
              Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit,
              est, mattis urna. Malesuada amet nisi libero, urna tristique
              aliquam.
            </div>
            <Link to="/" className={css(styles.knowMore)}>
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image2} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            {' '}
            <div className={css(styles.title)}>Hactober Fest</div>
            <div className={css(styles.subTitle)}>Full October, 2021</div>
            <div className={css(styles.description)}>
              Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit,
              est, mattis urna. Malesuada amet nisi libero, urna tristique
              aliquam.
            </div>
            <Link to="/" className={css(styles.knowMore)}>
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image3} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            {' '}
            <div className={css(styles.title)}>DevFest India</div>
            <div className={css(styles.subTitle)}>November, 2021</div>
            <div className={css(styles.description)}>
              Amet, viverra nec sed in massa nibh. Magna dapibus auctor velit,
              est, mattis urna. Malesuada amet nisi libero, urna tristique
              aliquam.
            </div>
            <Link to="/" className={css(styles.knowMore, styles.knowMoreL)}>
              Know More
            </Link>
          </div>
        </div>
      </div>
      <div className={css(styles.buttonDiv)}>
        <button className={css(styles.button)}>View All Events</button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 550,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  imgDiv: {
    textAlign: 'center',
  },
  image: {
    height: 'auto',
    width: '100%',
    marginBottom: 32,
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textContents: {
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  title: {
    color: COLORS.secondary,
    fontSize: 24,
    lineHeight: '29px',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'rgba(0, 2, 73, 0.54)',
    marginTop: 4,
    fontSize: 14,
    lineHeight: '152%',
  },
  description: {
    color: COLORS.primary,
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: '146%',
  },
  knowMore: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '30px',
    marginTop: 12,
    marginBottom: 64,
    textDecoration: 'none',
  },
  knowMoreL: {
    marginBottom: 48,
  },
  buttonDiv: {
    textAlign: 'center',
  },
  button: {
    width: 196,
    height: 59,
    color: COLORS.secondary,
    border: `2px solid ${COLORS.secondary}`,
    backgroundColor: '#FFFFFF',
    borderRadius: 76,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '128.7%',
    letterSpacing: ' 0.0125em',
    marginBottom: 32
  },
});

export default UpcomingEventsMob;
