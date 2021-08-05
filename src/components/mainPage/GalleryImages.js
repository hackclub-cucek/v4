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

  const get3Images = () => {
    const offSet = imageIndex + 3;
    if (offSet >= images.length) {
      return [
        ...images.slice(imageIndex),
        ...images.slice(0, offSet - images.length),
      ];
    }

    return images.slice(imageIndex, offSet);
  };

  return (
    <div className={css(styles.root)}>
      {get3Images().map((item, id) => (
        <motion.img
          className={css(styles.images)}
          key={id}
          src={item}
          animate={{
            // x: -420 * imageIndex,
            scale: id === 1 ? 1.2 : 1,
          }}
        />
      ))}
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
    justifyContent: 'space-evenly',
  },

  images: {
    width: 400,
    height: 400,
    marginLeft: 50,
    marginTop: 100,
  },
});

export default GalleryImages;
