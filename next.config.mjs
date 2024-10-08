import 'dotenv/config'
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true
  }
};

export default withSentryConfig(nextConfig, {
  authToken: process.env.SENTRY_AUTH_TOKEN
});
