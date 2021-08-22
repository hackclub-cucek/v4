import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import gImage1 from '../../images/Galleryimage1.png';
import gImage2 from '../../images/iphone.png';
import gImage3 from '../../images/ihih.png';
import gImage4 from '../../images/roboMan.png';
import {COLORS} from '../../styles/Colors';
import {useState, useEffect} from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import {images} from 'min-document';
import {auto} from 'async';

const GalleryImagesMob = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState([
    gImage1,
    gImage2,
    gImage3,
    gImage4,
    gImage2,
    gImage3,
    gImage4,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex(imageIndex + 1 == images.length ? 0 : imageIndex + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [imageIndex]);

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        <div className={css(styles.galleryImage)}>
          <img
            src={images[imageIndex]}
            alt="gallery-image"
            className={css(styles.gImage)}
          />
        </div>

        <div className={css(styles.navDots)}>
          {images.map((item, id) => {
            return (
              <div
                className={css(
                  imageIndex == id ? styles.dotsActive : styles.dots,
                )}
                key={id}>
                {id === imageIndex && (
                  <div className={css(styles.dotSelected)}></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 550,
  },
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  galleryImage: {
    margin: '40px 0px 24px 0px',
    textAlign: 'center',
  },
  navDots: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 110,
    marginRight: 110,
    marginBottom: 32,
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gImage: {
    textAlign: 'center',
    width: '100%',
    height: 'auto',
  },
  dots: {
    width: 8,
    height: 8,
    background: COLORS.primary,
    borderRadius: 4,
    justifyContent: 'center',
    maxWidth: 130,
  },
  dotsActive: {
    width: 20,
    height: 20,
    borderRadius: 10,
    border: `1px solid ${COLORS.secondary}`,
  },
  dotSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    background: COLORS.secondary,
  },
});

export default GalleryImagesMob;
