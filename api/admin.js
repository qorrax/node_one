
import express from 'express';

// import prisma from './lib/index.js';
const router = express.Router();




router.get('/', (req, res) => {
    res.send({mesage: "hello from admin"})
}
);



export default router;
