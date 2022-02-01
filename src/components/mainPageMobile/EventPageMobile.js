import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import { COLORS } from '../../styles/Colors';

const MainPageMobile = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.mainTitle)}>EVENTS</div>
      <div className={css(styles.subTiile)}>
        A nonprofit network of high school coding clubs and makers around the
        world, for the students, by the students.
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '161px 16px 100px 16px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 900,
    fontStyle: 'normal',
    // height: 118,
    marginBottom: 6,
    lineHeight: '59px',
    letterSpacing: '0.045em',
    textTransform: 'uppercase',
    textAlign: 'center',
    WebkitTextFillColor: 'rgba(255, 255, 255,0)',
    WebkitTextStrokeWidth: 1.5,
  },
  subTiile: {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: '146%',
    textAlign: 'center',
    top: 6,
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    cursor: 'pointer',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    border: 0,
    borderRadius: 128,
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 16,
    height: 59,
    width: 157,
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    marginTop: 44,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '19px 36px',
  },
});

export default MainPageMobile;
