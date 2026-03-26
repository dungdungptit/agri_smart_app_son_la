// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Ensure fonts are included in the bundle
config.resolver.assetExts.push('ttf', 'otf', 'woff', 'woff2');

module.exports = config;
