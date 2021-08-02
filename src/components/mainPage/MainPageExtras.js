import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import TitleWithRect from './TitleWithRect';

const MainPageExtras = () => {
  return (
    <div className={css(styles.root)}>
      <TitleWithRect name="Things we do" />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default MainPageExtras;
