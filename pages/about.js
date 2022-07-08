import  styles from '../styles/About.module.css'
import Image from 'next/image'
import Title from '../components/Title'
export default function about() {
  return (
<>
<Title title="About" />

<h2>Our Team</h2>
<div className={styles.row}>
  <div className={styles.column}>
    <div className={styles.card}>
      <Image src="/images/img1.jpg" height={50} width={50} alt="Jane" />
      <div className={styles.container}>
        <h2 className={styles.title}>Jane Doe</h2>
        <p className={styles.title}>CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>
</div>
</>
    
  )
}
