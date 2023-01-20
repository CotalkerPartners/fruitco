import { Request, Response } from 'express'

export async function hello(req: Request, res: Response) {
  try {
    console.log(req.baseUrl)
    return res.json({
      message: 'Hello World'
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: 'Internal Server Error'
    })
  }
}