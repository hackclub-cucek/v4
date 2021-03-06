/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import TitleWithRectMob from './TitleWithRectMob';
import ThingsWeDoMob from './ThingsWeDoMob';
import OurInitiativesMob from './OurInitiativesMob';
import UpcomingEventsMob from './UpcomingEventsMob';
import GalleryImages from './GalleryImagesMob';
import GalleryImagesMob from './GalleryImagesMob';

const MainPageExtras = ({ref}) => {
  return (
    <div className={css(styles.root)} ref={ref}>
      <TitleWithRectMob name="Things we do" />
      <ThingsWeDoMob />

      <div className={css(styles.space)} />
      <TitleWithRectMob name="Our Initiatives" />
      <OurInitiativesMob />

      <div className={css(styles.space)} />
      <TitleWithRectMob name="Upcoming Events" />
      <UpcomingEventsMob />

      <div className={css(styles.space)} />
      <TitleWithRectMob name="Gallery" />
      <GalleryImagesMob />
    </div>
  );
};

const styles = StyleSheet.create({
  root: {},
  space: {
    marginTop: 120,
  },
});

export default MainPageExtras;
