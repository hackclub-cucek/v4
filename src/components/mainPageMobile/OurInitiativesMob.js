import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import image1 from '../../images/roboMan.png';
import image2 from '../../images/iphoneMob.png';
import image3 from '../../images/happyFace.png';
import {COLORS} from '../../styles/Colors';

const OurInitiativesMob = () => {
  const initiatives = [
    {
      id: 1,
      title: 'Learn From Home',
      description:
        'Flagship event of Hack Club CUCEK to learn and work on all cutting edge technology.',
      image: image1, 
    },
    {
      id: 2,
      title: 'Hacktoberfest',
      description: 'One month to promote opensource contributions.',
      image: image2 
    },
    {
      id: 3,
      title: 'Happy Hour',
      description: 'Weekly meetup of hack clubers.',
      image: image3
    },
  ];

  return (
    <div className={css(styles.root)}>
      {initiatives.map(init => (
        <div className={css(styles.container)} key={initiatives.id}>
          <div className={css(styles.imgDiv)}>
            <img src={init.image} alt="robot" className={css(styles.image)} />
          </div>
          <div className={css(styles.textBox)}>
            <div className={css(styles.textContents)}>
              {' '}
              <div className={css(styles.title)}>{init.title}</div>
              <div className={css(styles.description)}>{init.description}</div>
              {/* <div className={css(styles.uoList)}>
              <ul className={css(styles.listCont)}>
                <li>Eget diam purus, a massa</li>
                <li>Ante ut mauris, dolor interdum</li>
                <li>Proin accumsan</li>
              </ul>
            </div> */}
              <button className={css(styles.button)}> Know More</button>
            </div>
          </div>
        </div>
      ))}
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
    rowGap: 83
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    // textAlign: 'center',
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // textAlign: 'center',
  },
  textContents: {
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.primary,
    fontSize: 24,
    lineHeight: '29px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left'
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
  },
});

export default OurInitiativesMob;
