/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  webpack: (config, options) => {
    config.externals = config.externals || {};
    config.externals["paypal-checkout"] = "PayPalCheckout";
    return config;
  },
};

module.exports = {
  env: {
    REACT_APP_PAYPAL_CLIENT_ID: 'AYPN8WNSbTbfPxA9i51ji0UCTCmIMCppvDdm4KDDROEJH54lx0towQ99TBzzMq-gICoNVQ30U_UY69HK',
  },
};