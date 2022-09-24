module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/gunstars/marketplace',
        permanent: true,
      },
    ]
  },
}
