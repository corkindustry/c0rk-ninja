const request = require('postman-request')

const league = (req, res) => {
    const url = 'https://fantasy.premierleague.com/api/leagues-h2h/566402/standings'

    request({ url, json: true }, (error, {body}) => {
            if (error) {
                res.status(400).send({error})
            } else {
                res.status(200).send(body)
            }
    })
}

export default league