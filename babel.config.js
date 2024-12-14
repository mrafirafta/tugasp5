module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // Plugin Reanimated
      [
        '@babel/plugin-transform-class-properties',
        { loose: true }, // Tambahkan pengaturan loose
      ],
      [
        '@babel/plugin-transform-private-methods',
        { loose: true }, // Tambahkan pengaturan loose
      ],
      [
        '@babel/plugin-transform-private-property-in-object',
        { loose: true }, // Tambahkan pengaturan loose
      ],
    ],
  };
  