**IMPORTANT: THIS LIBRARY IS A FORKED VERSION OF THE @tludlow-instana-fork/collector LIBRARY TO ADD WINSTON INFO LEVEL LOGGING TO THE COLLECTOR**

# How to use the forked version

Establish your instana collector as normal and set the logger to winston.
I have added the custom formatter to allow for traceIds to be logged into our other log sources too.

```js
import instana from '@tludlow-instana-fork/collector';
instana({
  serviceName: 'graphql-api-apollo',
  level: 'info'
});

import winston, { format } from 'winston';

const addTraceFormat = format((info, opts) => {
  const span = instana.currentSpan();
  info.message = `(traceId: ${span.getTraceId()}) ${info.message}`;
  return info;
});

export const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'graphql-api' },
  transports: [new winston.transports.Console({ format: winston.format.simple() })],
  format: addTraceFormat()
});

instana.setLogger(logger);
```

Then use winston logging as normal throughout your app, making sure to use the `logger` defined above as your winston logging source!

# @tludlow-instana-fork/collector &nbsp; [![OpenTracing Badge](https://img.shields.io/badge/OpenTracing-enabled-blue.svg)](http://opentracing.io)

Monitor your Node.js applications with Instana!

**[Installation](#installation-and-usage) |**

**[Configuration](CONFIGURATION.md) |**

**[API](API.md) |**

**[Changelog](https://github.com/instana/nodejs/blob/main/CHANGELOG.md)**

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Server Only](#server-only)

- [Installation And Usage](#installation-and-usage)

- [CPU Profiling, Garbage Collection And Event Loop Information](#cpu-profiling-garbage-collection-and-event-loop-information)

- [API](#api)

- [Filing Issues](#filing-issues)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Most of this document has been moved to the [Node.js page](https://www.ibm.com/docs/de/obi/current?topic=technologies-monitoring-nodejs) of the [Instana documentation portal](https://www.ibm.com/docs/de/obi/current). The following sections mostly serve as redirects for people having arrived here following outdated links.

## Server Only

**PSA**: This package is for monitoring _Node.js server applications_ with Instana. If you want to monitor JavaScript applications running in a browser, check out our docs on [website monitoring](https://www.ibm.com/docs/de/obi/current?topic=instana-monitoring-websites).

## Installation And Usage

The installation of the Instana Node.js collector is a simple two step process. First, install the `@tludlow-instana-fork/collector` package in your application via:

```javascript



npm  install  --save @tludlow-instana-fork/collector



```

Now that the collector is installed, it needs to be activated from within the application. Do this by requiring and initializing it as the _first statement_ in your application. Please take care that this is the first statement as the collector will otherwise not be able to access certain information.

```javascript
require('@tludlow-instana-fork/collector')();

// All other require statements must be done after the collector is initialized.

// Note the () after the require statement of the collector which initializes it.

// const express = require('express');
```

For more in-depth information, refer to the [installation page](https://www.ibm.com/docs/de/obi/current?topic=nodejs-collector-installation).

## CPU Profiling, Garbage Collection And Event Loop Information

The Node.js collector uses Native addons for some metrics. Check out the [native addons documentation](https://www.ibm.com/docs/de/obi/current?topic=nodejs-collector-installation#native-addons) for details.

## API

In most cases it is enough to require and initialize `@tludlow-instana-fork/collector` and let it do its work. However, there is an [API](https://www.ibm.com/docs/de/obi/current?topic=nodejs-instana-api) for more advanced use cases.

## Filing Issues

If something is not working as expected or you have a question, instead of opening an issue in this repository, please open a ticket at <https://support.instana.com/hc/requests/new> instead. Please refrain from filing issues or tickets if your audit tool (npm audit, Snyk, etc.) reported a CVE for a dependency or a transitive dependency of `@tludlow-instana-fork/collector` -- we run these audits with every build and take appropriate action automatically.
