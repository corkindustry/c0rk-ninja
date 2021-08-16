import { NextApiRequest, NextApiResponse } from 'next'
import request from 'postman-request'

import { IGameweek } from '../../types/IFpl'


const fpl = (req: NextApiRequest, res: NextApiResponse) => {
    const url: string = 'https://fantasy.premierleague.com/api/bootstrap-static/'

    return new Promise((resolve, reject) => {
        request({ url, json: true }, (error, { body }) => {
            if (error) {
                res.status(400).send({ error })
                resolve(error)
            } else {
                let data: IGameweek = { name: '', deadline: null }
                body.events.forEach(i => {
                    if (i.is_next) {
                        let deadlineTime = new Date(i.deadline_time)
                        data = { name: i.name, deadline: deadlineTime }
                    }
                });
                res.status(200).send(data)
                resolve(res)
            }
        })
    })
}

export default fpl