import { RequestHandler } from 'express'
import { cotalkerAPI } from '../libs/CotalkerAPI'

interface Fruit extends COTProperty {
  propertyType: 'fruits'
  schemaInstance: {
    color: string
    emoji: string
    stock: number
  }
}

const getAllFruits = async () => {
  const fruits: Fruit[] = await cotalkerAPI.getAllFromPropertyType<Fruit>('fruits')
  console.log(`There are ${fruits.length} fruit types in the company`)
  return fruits
}

export const fruitList: RequestHandler = async (req, res) => {
  try {
    console.log(req.query)
    const fruits = await getAllFruits()
    return res.json({ fruits })    
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: 'INTERNAL ERROR'
    })
  }
}
