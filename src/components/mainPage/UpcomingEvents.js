import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image';
import {COLORS} from '../../styles/Colors';
import {useStaticQuery, graphql, Link} from 'gatsby';

function getEvents(data) {
  const edges = data.allFile.edges;

  let events = [];

  for (let i of edges) {
    const frontmatter = i.node.childMarkdownRemark.frontmatter;
    events.push(frontmatter);
  }

  return events;
}

const UpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: {eq: "posts"}
          relativeDirectory: {eq: "events"}
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                slug
                date
                brief
                previewImg
              }
            }
          }
        }
      }
    }
  `);

  const events = getEvents(data);
  return (
    <div>
      <div className={css(styles.root)}>
        {events.map((item, id) => (
          <div className={css(styles.container)} key={id}>
            <img
              src={item.previewImg}
              alt="robot"
              className={css(styles.image)}
            />

            <p className={css(styles.title)}>{item.title}</p>
            <p className={css(styles.date)}>{item.date}</p>
            <p className={css(styles.text)}>{item.brief}</p>

            <Link to={item.slug} className={css(styles.knowMoreContainer)}>
              <p className={css(styles.moreText)}>Know More</p>
              <i className="ri-arrow-right-line" style={{marginLeft: 6}}></i>
            </Link>
          </div>
        ))}
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
  },
  container: {
    width: 357,
    marginBottom: 80,
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    width: 357,
    height: 357,
  },
  title: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '34px',
    color: COLORS.secondary,

    marginBottom: 0,
  },
  date: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '152%',
    color: 'rgba(0, 2, 73, 0.54)',
    marginTop: 4,
  },
  text: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '152%',
    color: COLORS.primary,
  },
  knowMoreContainer: {
    display: 'flex',
    alignItems: 'center',
    color: COLORS.secondary,
    marginTop: 16,
    textDecoration: 'none',
  },
  moreText: {
    fontFamily: 'Libre Franklin',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    textAlign: 'center',
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
  },
  space: {
    width: 82,
  },
});

export default UpcomingEvents;
