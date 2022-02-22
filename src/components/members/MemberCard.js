import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import Image from '../../images/roboMan.png';

const MemberCard = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.contents)}>
        <div className={css(styles.image)}>
          <img src={Image} alt="" className={css(styles.image)} />
        </div>
        <div className={css(styles.textContents)}>
          <div>
            <div className={css(styles.name)}>Wade Warren</div>
            <div className={css(styles.designation)}>Member</div>
            <div className={css(styles.batch, styles.designation)}>
              2018-2022
            </div>
          </div>
          <div className={css(styles.icons)}>
            <div className={css(styles.socialIcons)}>
              <i class="ri-twitter-fill"></i>
            </div>
            <div className={css(styles.socialIcons)}>
              <i class="ri-github-fill"></i>
            </div>
            <div className={css(styles.socialIcons)}>
              <i class="ri-linkedin-fill"></i>
            </div>
            <div className={css(styles.socialIcons)}>
              <i class="ri-instagram-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    border: `1px solid ${COLORS.secondary}`,
    borderRadius: 8,
    '@media (max-width: 1080px)': {
    display: 'flex',
      height: 'auto',
      width: '90vw',
      marginLeft: 16,
      marginRight: 16
    }
  },
  contents: {
    margin: 16,
    display: 'inline-flex',
    flexDirection: 'row',
    '@media (max-width: 1080px)': {
      display: 'flex',
      }
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  textContents: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 24,
    justifyContent: 'space-between',
  },
  name: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: '24px',
    color: COLORS.secondary,
    width: 215,
    '@media (max-width: 1080px)': {
      width: 'auto'
    }
  },

  designation: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '24px',
    color: COLORS.primary,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    width: 122,
    justifyContent: 'space-between',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    width: 23,
    height: 23,
    borderRadius: '50%',
  },
});

export default MemberCard;
