import { Request, Response } from 'express'

export default async function updateUser(req: Request, res: Response): Promise<Response> {
    try {
        return res.status(200).json({ message: 'berhasil update user' })
    }
    catch (e) {
        return res.status(200).json({ message: 'gagal update user' })
    }
}