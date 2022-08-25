// https://www.youtube.com/watch?v=DglTMyY1i5I&ab_channel=IOsonoTAN
const fastify = require('fastify')

const nodeEnv = process.env.NODE_ENV || 'development'

const app = fastify({
    logger: true
})

app.get('/', async () => {
    return {
        status: 'OK KUB',
        nodeEnv
    }
})

app.listen(3000, '0.0.0.0')