// module.exports = {
//   plugins: ["tailwindcss", "autoprefixer"]
// };
module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("tailwindcss"),
    require("autoprefixer")
  ]
};
