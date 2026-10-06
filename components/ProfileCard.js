import styles from './ProfileCard.module.css'
export default function ProfileCard({ name, role, hobby, age, isLeader = false, color = '#ccc' }) {
  return (
    <div className={styles.card} style={{ borderColor: color }}>
      <h3 className={styles.name}>
        {name}
        {isLeader ? ' ★リーダー' : ''}
      </h3>
      <p>{age}歳</p>
      <p>役割：{role}</p>
      <p>趣味：{hobby}</p>
    </div>
  )
}
