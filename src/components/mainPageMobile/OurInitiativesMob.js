import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';

const OurInitiativesMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <StaticImage
          src="../../images/roboMan.png"
          alt="robot"
          className={css(styles.image)}
        />
        <div className={css(styles.textContents)}>
          {' '}
          <div className={css(styles.title)}>Id vel varius mauris morbi</div>
          <div className={css(styles.description)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </div>
          <div className={css(styles.uoList)}>
            <ul className={css(styles.listCont)}>
              <li>Eget diam purus, a massa</li>
              <li>Ante ut mauris, dolor interdum</li>
              <li>Proin accumsan</li>
            </ul>
          </div>
          <button className={css(styles.button)}> Live Demo</button>
        </div>
      </div>
      <div className={css(styles.container)}>
        <StaticImage
          src="../../images/iphoneMob.png"
          alt="robot"
          className={css(styles.image)}
        />
        <div className={css(styles.textContents)}>
          {' '}
          <div className={css(styles.title)}>Id vel varius mauris morbi</div>
          <div className={css(styles.description)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </div>
          <button className={css(styles.button)}> Know More</button>
        </div>
      </div>
      <div className={css(styles.container)}>
        <StaticImage
          src="../../images/happyFace.png"
          alt="robot"
          className={css(styles.image)}
        />
        <div className={css(styles.textContents)}>
          {' '}
          <div className={css(styles.title)}>Id vel varius mauris morbi</div>
          <div className={css(styles.description)}>
            In dignissim ut tortor quam. In et convallis suspendisse vel. Urna,
            ante ut mauris, dolor interdum libero, proin accumsan, vitae. In
            risus sit convallis volutpat.
          </div>
          <button className={css(styles.button, styles.buttonLast)}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  image: {
    height: 343,
    width: 343,
    marginBottom: 32,
  },
  textContents: {
    textAlign: 'left',
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
    lineHeight: '29px',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  description: {
    color: COLORS.primary,
    marginTop: 20,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: '146%',
  },
  uoList: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: '146%',
    color: COLORS.primary,
  },
  listCont: {
    paddingLeft: 16,
  },

  button: {
    color: COLORS.secondary,
    border: `2px solid ${COLORS.secondary}`,
    backgroundColor: '#FFFFFF',
    borderRadius: 76,
    width: 159,
    height: 59,
    marginTop: 24,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '128.7%',
    fontStyle: 'normal',
    marginBottom: 83,
  },
  buttonLast: {
    marginBottom: 0,
  },
});

export default OurInitiativesMob;
