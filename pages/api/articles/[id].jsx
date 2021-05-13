import {articles} from '../../../data'

const handler = ({ query: { id } }, res) => {
   const filtered = articles.filter(article => article.id === id)

   if (filtered.length > 0) {
      res.status(200).json(filtered[0])
   }
   else {
      res.status(404).json({message: `Article With The Id Of ${id} Was Not Found`})
   }
}

export default handler
