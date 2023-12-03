import express from 'express';
const server = express();
server.use(express.json());


import adminRouter from './admin.js';


server.use('/api/admin', adminRouter);





export default server;