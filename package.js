// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: "ckurisu:iconsfonts", // https://atmospherejs.com/twbs/bootstrap
  summary:
    "The most popular front-end framework for developing responsive, mobile first projects on the web.",
  version: "3.4.0",
  git: "https://github.com/CKurisu/iconsfonts.git",
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use("jquery", "client");
  var assets = [
    "dist/bootstrap/fonts/glyphicons-halflings-regular.eot",
    "dist/bootstrap/fonts/glyphicons-halflings-regular.svg",
    "dist/bootstrap/fonts/glyphicons-halflings-regular.ttf",
    "dist/bootstrap/fonts/glyphicons-halflings-regular.woff",
    "dist/bootstrap/fonts/glyphicons-halflings-regular.woff2",
    "dist/fontawesome/webfonts/fa-brands-400.ttf",
    "dist/fontawesome/webfonts/fa-brands-400.woff2",
    "dist/fontawesome/webfonts/fa-regular-400.ttf",
    "dist/fontawesome/webfonts/fa-regular-400.woff2",
    "dist/fontawesome/webfonts/fa-solid-900.ttf",
    "dist/fontawesome/webfonts/fa-solid-900.woff2",
    "dist/fontawesome/webfonts/fa-v4compatibility.ttf",
    "dist/fontawesome/webfonts/fa-v4compatibility.woff2",
  ];
  if (api.addAssets) {
    api.addAssets(assets, "client");
  } else {
    api.addFiles(assets, "client", { isAsset: true });
  }
  api.addFiles(
    ["dist/bootstrap/css/bootstrap.css", "dist/fontawesome/css/all.css"],
    "client"
  );
});
