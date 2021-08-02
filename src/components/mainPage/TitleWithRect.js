import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/Colors';
import PropTypes from 'prop-types';

const TitleWithRect = ({name}) => {
  return (
    <div className={styles.root}>
      <p className={styles.title}>{name}</p>
      <div className={styles.rectangle}></div>
    </div>
  );
};

TitleWithRect.propTypes = {
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  root: {
    width: 'max-content',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '126.78%',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: COLORS.primary,
  },
  rectangle: {
    height: 12,
    width: '70%',
    backgroundColor: COLORS.secondary,
  },
});

export default TitleWithRect;
