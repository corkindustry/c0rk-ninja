import Head from 'next/head'
import Image from 'next/image'
// import { FunctionComponent } from 'react'

import { server } from '../config'
import styles from '../styles/uhh.module.scss'
import footFace from '../public/images/face.jpg'

export async function getServerSideProps(context) {
    const league = await fetch(`${server}/api/league`)
    const leagueData = await league.json()

    const fpl = await fetch(`${server}/api/fpl`)
    const fplData = await fpl.json()

    if (!league) {
        return {
            props: 'updating...'
        }
    }

    return {
        props: { leagueData, fplData }
    }
}


const uhh = (props) => {
    const unavailableMsg = 'Data currently unavailable'
    const deadline = new Date(props.fplData.deadline)

    return (
        <>
            <Head>
                <title>League Uhh</title>
            </Head>
            <div className={styles.uhh}>
                <div className={styles.header}><Image alt="Fellaini" src={footFace} width="100.5" height="56.5" /> League Uhh 22-23</div>
                {/* <div className={styles.subHeader}>{props.fplData.name} deadline: {deadline.toLocaleString()}</div> */}
                <div className={styles.container}>
                    {/* <div className={styles.section}>
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
                    </div> */}
                    <div className={styles.sectionNoBorder}>
                        {/* {props.leagueData.clubs === undefined || props.leagueData.clubs.length === 0 ? (
                            <p>{unavailableMsg}</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Club</th>
                                        <th>W-D-L</th>
                                        <th>Score</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.leagueData.clubs.map((club) => (
                                        <tr key={club.id}>
                                            <td>{club.rankSort}</td>
                                            <td>{club.name}<div className={styles.managerName}>{club.manager}</div></td>
                                            <td className={styles.num}>{club.wins}-{club.draws}-{club.losses}</td>
                                            <td className={styles.num}>{club.score}</td>
                                            <td className={styles.num}>{club.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )} */}
                        <h1>The draft is Monday, August 1st @ 9pm EST!</h1>
                        <h3><a href="https://discord.gg/BWwrPKps?event=1000027343080923136" target="_blank" rel="noreferrer">Join the Discord Event</a></h3>
                        <h3><a href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2Rjam04YjJyanFjOHZma2gxZDM3OGVlZW0gZmFsc2VmcmllbmQxM0Bt&tmsrc=falsefriend13%40gmail.com" target="_blank" rel="noreferrer">Add to Google Calendar</a></h3>
                        <div>
                            <h2 style={{paddingTop: '40px'}}>League info:</h2>
                            <ul>
                                <li>FPL Draft</li>
                                <li>$20 to play</li>
                                <li>$50 penalty to the last-place club at the end of the season</li>
                            </ul>
                            <hr />
                            <h2 style={{paddingTop: '40px'}}>Get set up:</h2>
                            <ol>
                                <li>Join the discord, if you haven&apos;t already.</li>
                                <li>Set your name on Discord to your team name.</li>
                                <li>Go to the <strong>#rules-and-info</strong> channel. The info on how to pay me is there.</li>
                                <li>Send me $20.<br/>Once I receive your payment, i&apos;ll add you to the <strong>#join-the-league</strong> channel which has the league code.</li>
                                <li>Join the league and set up your watchlist!</li>
                            </ol>
                        </div>
                    </div>
                    <div className={styles.sectionNoBorder}>
                        <iframe
                        src="https://discordapp.com/widget?id=607398516360347861&theme=dark"
                        width="350"
                        height="500"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default uhh