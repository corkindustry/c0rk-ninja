import styles from '../components/uhh.module.scss'

const uhh = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>League Uhh</div>
            <iframe
                src="https://discordapp.com/widget?id=607398516360347861&theme=dark"
                width="350"
                height="500"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
        </div>
    )
}

export default uhh