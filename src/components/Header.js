/* eslint-disable react/prop-types */
import {Link} from 'gatsby';
import React, {useEffect, useState} from 'react';
import {getDeviceDimention} from './Utility';
import {MdMenu} from 'react-icons/md';
import {IconContext} from 'react-icons';
import {StyleSheet, css} from 'aphrodite';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Links',
    path: '/links',
  },
];

const mobileHeader = (isVisible, setVisible, getLinkStyle) => {
  const header = (
    <div className={css(styles.containerMobile)}>
      {routes.map((item, id) => (
        <Link key={id} className={getLinkStyle(item.name)} to={item.path}>
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <div className={css(styles.root)}>
      <IconContext.Provider value={{className: css(styles.icon)}}>
        <div className={css(styles.iconContainer)}>
          <MdMenu
            onClick={() => {
              setVisible(!isVisible);
              console.log('clicker');
            }}
          />
        </div>
      </IconContext.Provider>
      {isVisible && header}
    </div>
  );
};

const desktopHeader = getLinkStyle => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.container)}>
        {routes.map((item, id) => (
          <Link key={id} className={getLinkStyle(item.name)} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Header = ({curPage}) => {
  const getLinkStyle = name => {
    return name === curPage ? css(styles.linkActive) : css(styles.link);
  };

  const [header, setHeader] = useState(
    getDeviceDimention().width > 600
      ? desktopHeader(getLinkStyle)
      : mobileHeader(false, null, getLinkStyle),
  );
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const dimention = getDeviceDimention();
    if (dimention.width < 600) {
      setHeader(mobileHeader(headerVisible, setHeaderVisible, getLinkStyle));
    }
  }, [headerVisible]);

  return header;
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'lightblue',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'fit-content',
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  link: {
    textDecoration: 'none',
    fontSize: '24px',
    marginLeft: '20px',
    marginRight: '10px',
    color: '#DA0037',
    padding: '10px',
  },
  linkActive: {
    textDecoration: 'none',
    fontSize: '24px',
    marginLeft: '20px',
    marginRight: '10px',
    backgroundColor: '#DA0037',
    padding: '10px',
  },
  iconContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'fit-content',
  },
  icon: {
    height: 40,
    width: 40,
  },
});

export default Header;
