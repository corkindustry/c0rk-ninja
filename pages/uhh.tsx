import Head from 'next/head'
import Image from 'next/image'

import { server } from '../config'
import styles from '../styles/uhh.module.scss'
import footFace from '../public/images/face.jpg'

export async function getStaticProps(context) {
    const res = await fetch(`${server}/api/league`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { data }
    }
}

const uhh = (props) => {

    return (
        <>
            <Head>
                <title>{props.data.league.name}</title>
            </Head>
            <div className={styles.uhh}>
                <div className={styles.header}><Image alt="Fellaini" src={footFace} width="100.5" height="56.5" /> {props.data.league.name}</div>
                <div className={styles.code}>League code: <a href="https://fantasy.premierleague.com/leagues/auto-join/btpymu" target="_blank" rel="noreferrer">btpymu</a></div>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <h3>League Rules</h3>
                        <ul>
                            <li>$20 per club</li>
                            <li>Last place pays an extra $50 at the end of the season</li>
                            <li>Winner take all!</li>
                        </ul>
                        <hr />
                        <h3>Get Set Up:</h3>
                        <ol>
                            <li>Create your squad</li>
                            <li>Join the league using the league code (above)</li>
                            <li>Paypal Jonah $20<br /><a href="https://paypal.me/jponeil" target="_blank" rel="noreferrer">paypal.me/jponeil</a></li>
                            <li>Join the Discord (if you haven&apos;t yet)</li>
                        </ol>
                    </div>
                    <div className={styles.section}>
                        <h3>Confirmed Clubs:</h3>
                        <ul>
                            <li>Goon Gumpas (Jonah O)</li>
                            <li>DrogbasDream (Brian A)</li>
                        </ul>
                    </div>
                    <div>
                        <iframe
                            src="https://discordapp.com/widget?id=607398516360347861&theme=dark"
                            width="350"
                            height="500"
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default uhh