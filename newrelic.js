'use strict';
require('dotenv').config()
/**
 * New Relic agent configuration.
 *
 * See lib/config/default.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
    /**
     * Array of application names.
     */
    app_name: [`test-app-newrelic-sentry-v8`],
    /**
     * Your New Relic license key.
     */
    license_key: process.env.NEW_RELIC_LICENSE_KEY, // provided by ENV Variable
    /**
     * This setting controls distributed tracing.
     * Distributed tracing lets you see the path that a request takes through your
     * distributed system. Enabling distributed tracing changes the behavior of some
     * New Relic features, so carefully consult the transition guide before you enable
     * this feature: https://docs.newrelic.com/docs/transition-guide-distributed-tracing
     * Default is false.
     */
    distributed_tracing: {
        /**
         * Enables/disables distributed tracing.
         *
         * @env NEW_RELIC_DISTRIBUTED_TRACING_ENABLED
         */
        enabled: true,
    },
    logging: {
        /**
         * Level at which to log. 'trace' is most useful to New Relic when diagnosing
         * issues with the agent, 'info' and higher will impose the least overhead on
         * production applications.
         */
        // more: https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#log
        // We don't want to create any file in the docker image - 'newrelic_agent.log', redirect output to stdout,
        // that a log can be collected by Kibana
        filepath: 'stdout',
    },
    /**
     * When true, all request headers except for those listed in attributes.exclude
     * will be captured for all traces, unless otherwise specified in a destination's
     * attributes include/exclude lists.
     */
    allow_all_headers: true,
    error_collector: {
        /**
         * https://docs.newrelic.com/docs/apm/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration/#error_ignore
         */
        ignore_status_codes: [404, 410],
    },
};
