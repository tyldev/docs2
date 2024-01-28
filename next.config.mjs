import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const config = {
  // i18n: {
  //   locales: ['en-US', 'zh-CN'],
  //   defaultLocale: 'en-US',
  // },
};

export default withNextra(config);
