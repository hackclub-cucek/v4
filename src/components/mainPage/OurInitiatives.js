import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';

const OurInitiatives = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/roboMan.png"
          alt="robot"
          className={css(styles.img)}
        />

        <div className={css(styles.space)} />
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Learn From Home</p>
          <p className={css(styles.text)}>
            Flagship event of Hack Club CUCEK to learn and work on all cutting
            edge technology.
          </p>

          {/* <ul className={css(styles.text)}>
            <li>GG wp nt</li>
            <li>Doom slayer</li>
            <li>For the emperor</li>
          </ul> */}
          <button className={css(styles.button)}>Live Demo</button>
        </div>
      </div>

      <div className={css(styles.itemContainer)}>
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Hacktoberfest</p>
          <p className={css(styles.text)}>
            One month to promote opensource contributions.
          </p>
          <button className={css(styles.button)}>Know More</button>
        </div>

        <div className={css(styles.space)} />
        <StaticImage
          src="../../images/iphone.png"
          alt="robot"
          className={css(styles.img)}
        />
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/ihih.png"
          alt="robot"
          className={css(styles.img)}
        />

        <div className={css(styles.space)} />
        <div className={css(styles.textContainer)}>
          <p className={css(styles.heading)}>Happy Hour</p>
          <p className={css(styles.text)}>Weekly meetup of hack clubers</p>
          <button className={css(styles.button)}>Know More</button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  itemContainer: {
    display: 'flex',
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'max-content',
    marginBottom: 40,
  },
  img: {
    borderRadius: 8,
  },
  space: {
    marginLeft: 120,
  },
  textContainer: {
    maxWidth: 600,
  },
  heading: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: COLORS.primary,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    color: COLORS.primary,
  },
  button: {
    background: '#FFFFFF',
    border: `2px solid ${COLORS.secondary}`,
    boxSizing: 'border-box',
    borderRadius: '76px',
    padding: 12,
    color: COLORS.secondary,
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    marginTop: 32,
  },
});

export default OurInitiatives;
