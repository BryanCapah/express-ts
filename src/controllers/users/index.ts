import { Response, Request } from 'express'

export default function getUser(req: Request, res: Response): any {
    try {
        res.status(200).json({ tes: 'berhasil show user' })
    }
    catch (e: any) {
        res.status(500).json({ tes: 'gagal show user' })
    }
}