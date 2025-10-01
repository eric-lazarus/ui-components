import React from 'react'
import styles from '../styles/MoleTrackingThumbnail.module.css'
import Icon from './Icon'

function MoleTrackingThumbnail(props) {
  const middleImageLinks =
    props.imageLinks.length > 2
      ? props.imageLinks.slice(1, props.imageLinks.length - 1)
      : null
  const lastImageLink =
    props.imageLinks.length !== 1 ? (
      props.imageLinks[props.imageLinks.length - 1]
    ) : (
      <div style={{ height: '100%', width: '6.5em', background: 'grey' }} />
    )
  return (
    <div
      className={
        props.isVisible
          ? `${styles.testThumb} ${styles.expandDown}`
          : `${styles.testThumb} ${styles.collapseUp}`
      }
      style={props.isVisible ? props.style : {}}
    >
      <div className={styles.testThumbInside}>
        {/* <a href={props.link + '0'} className={styles.imageDivWShadow}>
          <img
            className={styles.moleImage}
            src={props.images[0].ImageRef}
            alt='lesion 0'
          />
        </a> */}
        {props.imageLinks[0]}
        <div
          className={
            styles.imageScrollDiv

            // props.images.length > 3
            //   ? styles.imageScrollDiv
            //   : styles.imageScrollDiv2
          }
        >
          {middleImageLinks}
        </div>
        {lastImageLink}
        {/* {props.images.length !== 1 && (
          <a
            href={props.link + `${props.images.length - 1}`}
            className={styles.imageDivWShadow}
          >
            <img
              className={styles.moleImage}
              src={props.images[props.images.length - 1].ImageRef}
              alt='lesion z'
            />
          </a>
        )} */}
      </div>
      <div className={styles.rightDiv}>
        <div>{props.notes && <Icon icon='list-outline' />}</div>
        <div>{props.flag && <Icon icon='flag-outline' />}</div>
      </div>
    </div>
  )
}

export default MoleTrackingThumbnail
