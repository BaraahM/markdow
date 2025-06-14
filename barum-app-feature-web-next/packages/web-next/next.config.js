/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'platejs',
    '@platejs/core',
    '@platejs/basic-nodes',
    '@platejs/basic-styles',
    '@platejs/code-block',
    '@platejs/comment',
    '@platejs/date',
    '@platejs/emoji',
    '@platejs/excalidraw',
    '@platejs/floating',
    '@platejs/layout',
    '@platejs/link',
    '@platejs/math',
    '@platejs/media',
    '@platejs/mention',
    '@platejs/slash-command',
    '@platejs/suggestion',
    '@platejs/table',
    '@platejs/toggle',
    '@platejs/utils',
    'slate',
    'slate-react'
  ],
  experimental: {
    esmExternals: true
  }
};

module.exports = nextConfig;

//222