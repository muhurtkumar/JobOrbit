// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://0dd123c2561f573877bc9df6b5f44d42@o4509561395740672.ingest.us.sentry.io/4509561401835520",
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // tracesSampleRate: 1.0, // Adjust this value to control the amount of trace data sent to Sentry

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});