import Head from 'next/head'
import Image from 'next/image'

import { server } from '../config'
import styles from '../styles/uhh.module.scss'
import footFace from '../public/images/face.jpg'

export async function getServerSideProps(context) {
    const res = await fetch(`${server}/api/league`)
    const data = await res.json()

    if (!data) {
        return {
            props: 'updating...'
        }
    }

    return {
        props: data
    }
}

const uhh = (props) => {
    const unavailableMsg = 'Data currently unavailable'
    return (
        <>
            <Head>
                <title>League Uhh</title>
            </Head>
            <div className={styles.uhh}>
                <div className={styles.header}><Image alt="Fellaini" src={footFace} width="100.5" height="56.5" /> League Uhh</div>
                <div className={styles.container}>
                    <div className={styles.section}>
                        <h3>League Rules</h3>
                        <ul>
                            <li>$20 per club</li>
                            <li>Last place pays an extra $50 at the end of the season</li>
                            <li>Winner take all!</li>
                        </ul>
                        <hr />
                        <h3>Pay 2 Play: Send Jonah $20 --&gt; <a href="https://paypal.me/jponeil" target="_blank" rel="noreferrer">paypal.me/jponeil</a></h3>
                        <p>Money received from:</p>
                        <ol>
                            <li>Jonah</li>
                            <li>Brian</li>
                            <li>Alan W.</li>
                            <li>Alan C.</li>
                            <li>Chris</li>
                            <li>Zach</li>
                        </ol>
                    </div>
                    <div className={styles.section}>
                        <h3>League Table:</h3>
                        <ol>
                            {props.clubs === undefined || props.clubs.length === 0 ? (
                                <p>{unavailableMsg}</p>
                            ) : (

                                props.clubs.map((club) => <li key={club.name}>{club.name} ({club.manager})</li>)
                            )}
                        </ol>
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