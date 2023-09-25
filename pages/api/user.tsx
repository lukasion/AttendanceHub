import { PrismaClient } from "@/generated/client";
const bcrypt = require('bcryptjs');

export default async function handler(req: any, res: any) {
    const email = req.body.email
    const password = req.body.password ? bcrypt.hashSync(req.body.password, 8) : null

    if (email && password) {
        const prisma = new PrismaClient();

        const user = await prisma.user.create({
            data: {
                email,
                password,
            },
        });

        res.status(200).json({user: user});
    }
}