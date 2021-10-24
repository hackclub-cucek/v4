import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import image1 from '../../images/roboMan.png';
import image2 from '../../images/iphoneMob.png';
import image3 from '../../images/happyFace.png';
import {COLORS} from '../../styles/Colors';

const OurInitiativesMob = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image1} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            {' '}
            <div className={css(styles.title)}>Learn From Home</div>
            <div className={css(styles.description)}>
              Flagship event of Hack Club CUCEK to learn and work on all cutting
              edge technology.
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
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image2} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            {' '}
            <div className={css(styles.title)}>Hacktoberfest</div>
            <div className={css(styles.description)}>
              One month to promote opensource contributions.
            </div>
            <button className={css(styles.button)}> Know More</button>
          </div>
        </div>
      </div>
      <div className={css(styles.container)}>
        <div className={css(styles.imgDiv)}>
          <img src={image3} alt="robot" className={css(styles.image)} />
        </div>
        <div className={css(styles.textBox)}>
          <div className={css(styles.textContents)}>
            <div className={css(styles.title)}>Happy Hour</div>
            <div className={css(styles.description)}>
              Weekly meetup of hack clubers
            </div>
            <button className={css(styles.button, styles.buttonLast)}>
              Know More
            </button>
          </div>
        </div>
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
    // justifyContent: 'center',
    // alignItems: 'center',
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
