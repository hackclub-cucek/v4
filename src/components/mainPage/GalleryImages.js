import React, {useEffect, useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GatsbyImage, getImage, StaticImage} from 'gatsby-plugin-image';
import iphoneImg from '../../images/iphone.png';
import ihiImg from '../../images/ihih.png';
import roboImg from '../../images/roboMan.png';
import {AnimatePresence, motion} from 'framer-motion';

const GalleryImages = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([
    iphoneImg,
    ihiImg,
    roboImg,
    iphoneImg,
    ihiImg,
    roboImg,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex(imageIndex + 1 == images.length ? 0 : imageIndex + 1);
    }, 2000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [imageIndex]);

  const variants = {
    initial: {x: 420},
    animate: {
      x: 0,
      scale: 1,
    },
    middle: {
      scale: 1.2,
    },
  };

  return (
    <div className={css(styles.root)}>
      <AnimatePresence>
        {images.map((item, id) => (
          <motion.img
            className={css(styles.images)}
            key={id}
            src={item}
            variants={variants}
            animate={id === imageIndex ? 'middle' : 'animate'}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginTop: 96,
    overflowX: 'hidden',
    overflowY: 'hidden',
    flex: 1,
    marginBottom: 100,
  },

  images: {
    width: 400,
    height: 400,
    marginLeft: 50,
    marginTop: 100,
  },
});

export default GalleryImages;
