import { contentData } from '../../constants/content-data'

const handler = (req, res) => {
  res.status(200).json(contentData)
}

export default handler
