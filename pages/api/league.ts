import { NextApiRequest, NextApiResponse } from "next"

const request = require('postman-request')

const league = (req: NextApiRequest, res: NextApiResponse) => {
    const url = 'https://fantasy.premierleague.com/api/leagues-h2h/566402/standings'

    return new Promise((resolve, reject) => {


        request({ url, json: true }, (error, { body }) => {
            if (error) {
                res.status(400).send({ error })
                resolve(error)
            } else {
                if (body.new_entries === undefined) {
                    res.status(200).send({ body })
                } else {
                    let clubs = []
                    // let standings = []
                    body.new_entries.results.forEach((club) => {
                        clubs.push({
                            name: club.entry_name,
                            manager: `${club.player_first_name} ${club.player_last_name}`,
                            id: club.entry
                        })
                    })
                    // body.standings.results.forEach((club) => {
                    //     clubs.push({
                    //         name: club.entry_name,
                    //         manager: `${club.player_first_name} ${club.player_last_name}`,
                    //         id: club.entry
                    //     })
                    // })
                    res.status(200).send({
                        name: body.league.name,
                        clubs: clubs,
                        // standings: standings
                    })
                    resolve(res)
                }
            }
        })
    })
}

export default league