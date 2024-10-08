import "dotenv/config";
import { init } from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN;

init({
  dsn: SENTRY_DSN, // when undefined, sentry is disabled by default
  sampleRate: 1,
});
