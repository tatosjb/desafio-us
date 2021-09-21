import styles from './styles.module.scss'

function buildHref(active, url) {
  return active ? { href: url } : {}
}

export default function SocialMediaButton({ url, icon, active, className='' }) {
  return (
    <a
      {...buildHref(active, url)}
      className={`${styles.icon} ${className} ${(!active && styles.disabled) || ''}`}
      target="_blank"
    >
      <i className={`fab ${icon}`}></i>
    </a>
  )
}
