const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public'),
  webpack(config, options) {
    return config
  }
})

// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// const withSass = require("@zeit/next-sass");
// const withCSS = require("@zeit/next-css");
// const withFonts = require("next-fonts");
// // const webpack = require("webpack");
// const path = require("path");

// module.exports = withFonts(
//   withCSS(
//     withImages(
//       withReactSvg(
//         withSass({
//           include: path.resolve(__dirname, 'public'),
//           webpack(config, options) {
//             config.module.rules.push({
//               test: /\.(eot|ttf|woff|woff2)$/,
//               use: {
//                 loader: "url-loader",
//               },
//             });
//             config.resolve.modules.push(path.resolve("./"));
//             return config;
//           },
//         })
//       )
//     )
//   )
// );
