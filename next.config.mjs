import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true
  }
};

export default withMDX(nextConfig);
