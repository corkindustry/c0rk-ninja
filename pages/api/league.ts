import { NextApiRequest, NextApiResponse } from "next"
import { IClub } from "./ILeague"

const request = require('postman-request')

const league = (req: NextApiRequest, res: NextApiResponse) => {
    const url = 'https://fantasy.premierleague.com/api/leagues-h2h/566402/standings'

    return new Promise((resolve, reject) => {


        request({ url, json: true }, (error, { body }) => {
            if (error) {
                res.status(400).send({ error })
                resolve(error)
            } else {
                if (body.standings === undefined) {
                    res.status(200).send({ body })
                } else {
                    let clubs: IClub[] = []
                    body.standings.results.forEach((club) => {
                        clubs.push({
                            id: club.entry, 
                            name: club.entry_name,
                            manager: club.player_name,
                            rank: club.rank, 
                            lastRank: club.last_rank, 
                            rankSort: club.rank_sort, 
                            total: club.total, 
                            played: club.matches_played, 
                            wins: club.matches_won,
                            draws: club.matches_drawn, 
                            losses: club.matches_lost, 
                            points: club.points_for
                        })
                    })
                    res.status(200).send({
                        name: body.league.name,
                        clubs: clubs,
                    })
                    resolve(res)
                }
            }
        })
    })
}

export default league