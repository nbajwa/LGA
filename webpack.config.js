// var css = require("!raw!sass!./file.scss");
// var precss       = require('precss');
// var autoprefixer = require('autoprefixer');
// require("../styles/site.css");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
              test: /\.css$/,
              loader: "style!css" 
            },
            {
              test: /\.html$/,
              name: "mandrillTemplates",
              loader: 'raw!html-minify'
            },
            {
              test: /.*\/app\/.*\.js$/,
              exclude: /.spec.js/,
              loader: "uglify"
            }
        ]
    },

    csso:{
      restructure:false
    },

    'uglify-loader': {
      mangle: true
    },

    'html-minify-loader': {
     empty: true,        // KEEP empty attributes
     cdata: true,        // KEEP CDATA from scripts
     comments: true,     // KEEP comments
     dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
            lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
     }
   }
};