import {PrismaClient} from "@/generated/client";

export default async function handler(req: any, res: any) {
    const email = req.body.email
    const password = req.body.password

    if (email && password) {
        const prisma = new PrismaClient();

        const user = await prisma.user.create({
            data: {
                email,
                password,
            },
        });

        res.status(200).json({email: email, password: password, user: user});
    }
}