import {StyleSheet, css} from 'aphrodite';
import React from 'react';
import {COLORS} from '../../styles/Colors';
import Badge from '../../images/icons/badge.png';
import {Link} from 'gatsby';
import {getEvents} from '../../api/event';
import {useState, useEffect} from 'react';
import {start} from 'xstate/lib/actions';
import useDeviceType from '../hooks/useDeviceType'

const GenerateCard = ({item}) => {
  const devtype = useDeviceType();
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.containerItems)}>
        <div className={css(styles.imageDiv)}>
        <img
          src={item.Photo_Link_1}
          alt="robot"
          className={css(styles.image)}
        />
        </div>
        <img
          src={Badge}
          alt="Badge"
          className={
            item.Label === 'upcoming'
              ? css(styles.badgeActive)
              : css(styles.badge)
          }
        />

        <p className={css(styles.title)}>{item['Event_Headline ']}</p>
        <p className={css(styles.date)}>{item.Date}</p>
        <p className={css(styles.text)}>{item['Event_Description ']}</p>
      </div>

      <div>
        <Link to="/" className={css(styles.knowMoreContainer)}>
          <p className={css(styles.moreText)}>Know More</p>

          <i className={
            devtype === 'mobile'
              ? css(styles.hideArrow)
                : 'ri-arrow-right-line'
          }
          style={{marginLeft: 6}}></i>
        </Link>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState();

  useEffect(() => {
    getEvents().then(data => {
      setUpcomingEvents(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div className={css(styles.root)}>
        <div className={css(styles.cards)}>
          {upcomingEvents &&
            upcomingEvents.map(item => {
              return <GenerateCard item={item} />;
            })}
        </div>
      </div>
      <div className={css(styles.centerDiv)}>
        <button className={css(styles.viewMoreButton)}>View All Events</button>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    marginLeft: 102,
    marginRight: 102,
    paddingTop: 96,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    '@media screen and (max-width: 1120px)': {
      marginLeft: '16px',
      marginRight: '16px',
      paddingTop: 32,
    },
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    rowGap: 80,
    columnGap: 83,
    '@media screen and (max-width: 1120px)': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      rowGap: 0,
      columnGap: 0
    }
  },

  container: {
    width: 357,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    '@media screen and (max-width: 1120px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  },
  containerItems: {
    '@media screen and (max-width: 1120px)': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  imageDiv: {
    width: '100%',
    height: 'auto',
    margin: '0 auto'
  },
  image: {
    width: 357,
    height: 357,
    zIndex: 1,
    borderRadius: 8,
    '@media screen and (max-width: 1120px)': {
      // height: 'auto',
      // width: '100%',
      width: '100%',
      height: 'auto',
      minHeight: '343px',
    },
  },
  badgeActive: {
    position: 'absolute',
    top: 1,
    left: 1,
    zIndex: 2,
  },
  badge: {
    display: 'none',
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: COLORS.secondary,
    marginBottom: 0,
    '@media screen and (max-width: 1120px)': {
      fontSize: '24px',
      lineHeight: '29px'
    }
  },
  date: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '152%',
    color: 'rgba(0, 2, 73, 0.54)',
    marginTop: 4,
    '@media screen and (max-width: 1120px)': {
      fontSize: '14px',
      lineHeight: '152%',
      marginBottom: 0,
    marginTop: 4,

    }
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    color: COLORS.primary,
    maxHeight: 120,
    height: 120,
    '@media screen and (max-width: 1120px)': {
      fontSize: '18px',
      lineHeight: '146%',
      textAlign: 'left',
      height: 'max-content',
      maxHeight: 'max-content',
      marginTop: 20,
    }
  },
  knowMoreContainer: {
    display: 'flex',
    alignItems: 'center',
    color: COLORS.secondary,
    marginTop: 16,
    textDecoration: 'none',
    '@media screen and (max-width: 1120px)': {
      marginTop: 0,
    }
  },
  moreText: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'center',
    '@media screen and (max-width: 1120px)': {
      marginTop: 0,
      marginBottom: 64,
    }
  },

  centerDiv: {
    width: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  viewMoreButton: {
    background: '#FFFFFF',
    border: `2px solid ${COLORS.secondary}`,
    boxSizing: 'border-box',
    borderRadius: '76px',
    padding: 12,
    color: COLORS.secondary,
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '128.7%',
    letterSpacing: '0.0125em',
    marginTop: 5,
    marginBottom: 32,
    '@media screen and (max-width: 1120px)': {
      fontSize: '16px',
      padding: '19px 38px'
    }
  },
  space: {
    width: 82,
  },
});

export default UpcomingEvents;
