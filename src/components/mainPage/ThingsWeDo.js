import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';

const ThingsWeDo = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/heartIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Networking</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/flagIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Skill Enhancement</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>
      </div>

      <div className={css(styles.itemContainer)}>
        <StaticImage
          src="../../images/icons/cpuIcon.png"
          alt="heartIcon"
          className={css(styles.icon)}
        />
        <p className={css(styles.title)}>Development</p>
        <p className={css(styles.text)}>
          Bibendum etiam nec massa ok ok bendum etiam nec massa ok ok posuere
          neque diam. Mattis molestie feugiat nisi.
        </p>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginLeft: 80,
    marginRight: 80,
    marginTop: 72,
    justifyContent: 'space-evenly',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 350,
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: 20,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: 24,
  },
});

export default ThingsWeDo;
