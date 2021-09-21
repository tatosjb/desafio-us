import SocialMediaButton from '../SocialMediaButton'
import styles from './styles.module.scss'

function active(profile) {
  return profile && profile !== ''
}

export default function YoutubeButton({profile}) {
  return <SocialMediaButton
    url={`https://youtube.com/user/${profile}`}
    icon="fa-youtube-square"
    active={active(profile)}
    className={styles.youtubeButton}
  />
}
