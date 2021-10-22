import { Response, Request } from 'express'

export default async function deleteUser(req: Request, res: Response): Promise<Response> {
    try {
        return res.status(200).json({ message: 'berhasil delete user' })
    }
    catch (e: any) {
        return res.status(200).json({ message: 'gagal delete user' })
    }
}