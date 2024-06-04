import styles from './AdBlock.module.scss'

export default function AdBlock({ img, num, text }) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<img src={img} alt='__' className={styles.icon} />
				<h2 className={styles.num}>{num}</h2>
				<h5 className={styles.text}>{text}</h5>
			</div>
		</div>
	)
}
