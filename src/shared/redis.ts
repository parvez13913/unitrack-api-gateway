import { createClient } from 'redis';
import logger from './logger';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (error) => logger.error('Redis error', error));
redisClient.on('connect', (error) => logger.error('Redis connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
