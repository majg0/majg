export default function graphiql(req, res) {
  if (process.env.NODE_ENV !== 'development') {
    return res.status(401).json({ message: 'Only valid during development' })
  }
  res.writeHead(307, {
    Location: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/explore?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })
  res.end()
}
