module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  modularizeImports: {
    ui: {
      transform: "ui/{{member}}",
    },
  },
};
