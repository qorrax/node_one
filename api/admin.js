
import express from 'express';

import prisma   from  "./lib/index.js"
const router = express.Router();




// get all admins

router.get("/", async (req, res) => {
    try {
        const admins = await prisma.admin.findMany();
        return res.status(200).json(admins);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
);



export default router;
