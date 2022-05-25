/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/test",
        destination: "https://www.figma.com/",
      },
    ];
  }
  return {
    rewrites,
  };
};


module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)?', // Matches all pages
        headers: [
          {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
          {key: 'Access-Control-Allow-Credentials', value:'true'},
          {key: 'Access-Control-Allow-Origin', value:'*'},
          {key: 'Access-Control-Allow-Methods', value:'PUT,GET,DELETE,OPTIONS,PATCH,PROPFIND,PROPPATCH,MKCOL,COPY,MOVE,LOCK'},
          {key: 'Access-Control-Allow-Headers', value:'X-CSRF-Token, X-Frame-Options'},
        ]
      }
    ]
  }
}
