import SocialMediaButton from '../SocialMediaButton'
import styles from './styles.module.scss'

function active(profile) {
  return profile && profile !== ''
}

export default function TwitterButton({profile}) {
  return <SocialMediaButton
    url={`https://twitter.com/${profile}`}
    icon="fa-twitter-square"
    active={active(profile)}
    className={styles.twitterButton}
  />
}
