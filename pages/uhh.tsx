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
                        <iframe 
                        width="640px" 
                        height="1200px" 
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAK0JLUJUM1ZFWkFXQUlGT0QxUDA1TU0wWFZaT1NFNS4u&embed=true" 
                        // frameBorder="0" 
                        // marginwidth="0" 
                        // marginheight="0" 
                        // styles="border: none; max-width:100%; max-height:100vh" 
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        // webkitallowfullscreen 
                        // mozallowfullscreen 
                        // msallowfullscreen 
                        />
                    </div>
                    {/* <div className={styles.sectionNoBorder}>
                        <iframe
                        src="https://discordapp.com/widget?id=607398516360347861&theme=dark"
                        width="350"
                        height="500"
                        />
                    </div> */}
                    <p><a href="https://forms.office.com/r/kzzWiH2FL7">Click here</a> if the form looks weird.</p>
                </div>
            </div>
        </>
    )
}

export default uhh