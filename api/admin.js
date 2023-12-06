
import express from 'express';
import bcrypt from 'bcrypt';
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


// CREATE sign up admin



router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    
    try {


        const existingAdmin = await prisma.admin.findUnique({
            where: {
                email: email
            }
        });

          if (existingAdmin) {
            return res.status(409).json({
                 message: "Admin already exists" 
                });

          }

          // hash password

          const hashedPassword = await bcrypt.hash(password, 10);

            
          // create admin

          const newAdmin = await prisma.admin.create({
             data: {

                name: name,
                email: email,
                password: hashedPassword,
                role:"ADMIN"
             },

          })

            return res.status(201).json({
                    message: "Admin is created successfully",
                    admin: newAdmin
                }
            );

            } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    }

);
        



export default router;
