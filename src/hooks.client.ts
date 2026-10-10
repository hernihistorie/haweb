import { Temporal } from "@js-temporal/polyfill";

// devalue serializes Temporal values in page data as `Temporal.PlainDate.from(...)`,
// which is evaluated against the global during hydration. Install the polyfill
// globally (overriding any native implementation) so that the hydrated values are
// instances of the same classes our code imports, keeping `instanceof` checks working.
(globalThis as unknown as { Temporal: typeof Temporal }).Temporal = Temporal;
