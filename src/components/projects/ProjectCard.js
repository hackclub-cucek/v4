import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import Image from '../../images/roboMan.png';

const ProjectCard = () => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.contents)}>
        <div className={css(styles.leftContent)}>
          <img src={Image} alt="" className={css(styles.image)} />
          <span className={css(styles.name)}> akhil-tj</span>
        </div>
        <div className={css(styles.righContent)}>
          <div className={css(styles.textContents)}>
            <div className={css(styles.title)}>Wade Warren</div>
            <div className={css(styles.description)}>
              Amet, viverra nec sed in massa nibh. Ma gna velit sop, est, mattis
              urna.
            </div>
          </div>
          <div className={css(styles.bottomContent)}>
            <span>Dart</span>
            <span>
              <i className="ri-star-line"></i>42
            </span>
            <span>
              <i className="ri-git-branch-fill"></i>6
            </span>
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
      width: '91.5vw',
      maxWidth: 485,
    },
  },
  contents: {
    margin: 12,
    display: 'inline-flex',
    flexDirection: 'row',
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  image: {
    width: 108,
    height: 108,
    borderRadius: 8,
  },
  name: {
    marginTop: 12,
    color: COLORS.secondary,
  },
  righContent: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    width: 227,
    '@media (max-width: 1080px)': {
      minWidth: 179,
      width: 'auto',
    },
  },
  textContents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 108,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: '24px',
    color: COLORS.secondary,
    width: 215,
    '@media (max-width: 1080px)': {
      width: 'auto',
    },
  },

  description: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '24px',
    color: COLORS.primary,
  },
  bottomContent: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: COLORS.secondary,
    marginTop: 12,
    maxWidth: 170,
  },
});

export default ProjectCard;
