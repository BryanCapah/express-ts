import { Request, Response } from 'express'

export default async function createUser(req: Request, res: Response): Promise<Response> {
    try {
        return res.status(200).json({ message: 'create user berhasil' })
    }
    catch (e: any) {
        return res.status(500).json({ message: 'gagal create user' })
    }
}