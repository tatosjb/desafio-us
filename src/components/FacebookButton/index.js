import SocialMediaButton from '../SocialMediaButton'
import styles from './styles.module.scss'

function active(profile) {
  return profile && profile !== ''
}

export default function FacebookButton({profile}) {
  return <SocialMediaButton
    url={`https://facebook.com/${profile}`}
    icon="fa-facebook-square"
    active={active(profile)}
    className={styles.facebookColor}
  />
}
