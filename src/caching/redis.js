const redis = require('redis');
const { promisify } = require('util')

const redisClient = redis.createClient(
    16275,
    'redis-16275.c85.us-east-1-2.ec2.cloud.redislabs.com',
    { no_ready_check: true }
);
redisClient.auth('wRvCa6a7wL0L7MwRXBOOtFvaFWsX2y7X', (err) => {
    if (err) throw err;
});
redisClient.on('connect', async () => {
    console.log('Redis is connected.')
});

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient)
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient)

module.exports = { SET_ASYNC, GET_ASYNC };
