import React from 'react'
import styles from '../styles/OrgMemberThumb.module.css'
import Pill from './Pill'
import Avatar from './Avatar'

/*
  props: {
    onClick: f(),
    image: (optional),
    icon: element,
    isSelected: boolean,
    orgMember: {
      Info: {
        Name: 'string',
        Email: 'string'
      },
      Membership: {
        Auth: 'string'
      }
    }
  }
*/

function OrgMemberThumb(props) {
  return (
    <div
      className={`
          ${styles.orgMemberThumb}
          ${props.isSelected ? styles.selected : ''}
          ${props.theme === 'dark' ? styles.dark : styles.light}
        `}
      onClick={props.onClick}
    >
      {props.icon ? (
        <Avatar theme={props.theme} icon={props.icon} />
      ) : (
        <Avatar theme={props.theme} image={props.image} name={props.name} />
      )}
      <div className={styles.infoDiv}>
        <p>{props.orgMember.Info.Name}</p>
        <p className={styles.email}>{props.orgMember.Info.Email}</p>
      </div>
      <Pill text={props.orgMember.Membership.Auth} />
    </div>
  )
}

export default OrgMemberThumb
