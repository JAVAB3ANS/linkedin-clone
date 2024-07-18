// next.config.js

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        // other properties if needed
      },
      {
        hostname: 'picsum.photos',
        // other properties if needed
      },
      {
        hostname: 'images.pexels.com',
        // other properties if needed
      },
      {
        hostname: 'media.licdn.com',
        // other properties if needed
      },
      {
        hostname: 'www.salesforce.com'
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com'
      },
      {
        hostname: 'cdn.mos.cms.futurecdn.net'
      }
    ],
  },
  // other configurations...
};
