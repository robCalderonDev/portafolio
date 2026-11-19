/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Igual que en el deploy a GitHub Pages: las imágenes se sirven tal cual,
  // así las rutas relativas (assets/...) funcionan también en `next dev`.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
