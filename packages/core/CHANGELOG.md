# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **agent:** reduce log level for sending data from debug to trace ([8b57a71](https://github.com/instana/nodejs/commit/8b57a71eb9818f83acbdc8f9bf63623a7e415d07))
* **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))
* **aws-sdk/v3:** added support for @aws-sdk/* 3.4x ([61cc179](https://github.com/instana/nodejs/commit/61cc17945279f4f0996f87e2d955fc4daf519d24))
* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))
* **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))
* **collector:** mysql2/promise not working with ESM ([f059047](https://github.com/instana/nodejs/commit/f059047d8be41230a9bf5ec9fb320a58c055c630))
* **collector:** resolved elasticsearch legacy error ([ea4f59f](https://github.com/instana/nodejs/commit/ea4f59f37a57e2fc88855bc89ac47775dd1048b4))
* **db2:** redact password also from the end of the connection string ([ac4c46d](https://github.com/instana/nodejs/commit/ac4c46db11298dcdcc12017e4543972a93263f84)), closes [#614](https://github.com/instana/nodejs/issues/614)
* **dependency:** pinned lru-cache to 6.0.0 ([0ceb372](https://github.com/instana/nodejs/commit/0ceb372709bd53d0c6cab2060d8cdaf431133706))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1)), closes [/github.com/npm/node-semver/blob/v7.3.3/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.3/package.json/issues/L39) [/github.com/npm/node-semver/blob/v7.3.5/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.5/package.json/issues/L39)
* **fargate, google-cloud-run:** filter environment variables secrets ([43f1624](https://github.com/instana/nodejs/commit/43f1624ed87f1eec6e9db192ae8d7e23873ad9ad))
* **grpc-js:** capture the correct destination host per grpc-js client ([5bc3188](https://github.com/instana/nodejs/commit/5bc31889f45b98e927f97ffebbda238a226494fb))
* **grpc-js:** do not mark cancelled calls as erroneous ([fea8b80](https://github.com/instana/nodejs/commit/fea8b80d51ab928c70efb884ac6cbfc24e7c46a5))
* **http:** only capture response status/headers when they have been sent ([850b8e4](https://github.com/instana/nodejs/commit/850b8e43f93749e422e9923c10cef9a8d1e2f3ea)), closes [#548](https://github.com/instana/nodejs/issues/548)
* **kafkajs:** use long trace IDs with new Kafka message headers ([5674b08](https://github.com/instana/nodejs/commit/5674b086b1481e0aaf7c352924fbd45634456461))
* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)
* **opentracing:** default to type entry when no parent is referenced ([712048d](https://github.com/instana/nodejs/commit/712048dde5ded956aead41a381f835f68aef7813))
* **rdkafka:** use long trace IDs with new Kafka message headers ([9c47349](https://github.com/instana/nodejs/commit/9c47349b5de214828c075eded71242a32c1f26c8))
* **redis:** suppress error for unsupported redis@4 ([ffad2c2](https://github.com/instana/nodejs/commit/ffad2c2f09ae3672d158bb141c98c38c82a59139))
* **sdk:** run original fn in SDK wrappers when tracing is not active ([555fdf1](https://github.com/instana/nodejs/commit/555fdf1a8b28043770374b67267a30c2e95ccf7a))
* **sdk:** work around memory leak with recursive SDK usage ([c9b35eb](https://github.com/instana/nodejs/commit/c9b35eb37f1e41f7b11442dd408ca53f5cb2ac13))
* **shared-metrics:** package.json not being found ([#590](https://github.com/instana/nodejs/issues/590)) ([d36369e](https://github.com/instana/nodejs/commit/d36369e7cdbb90e5e9ac377a794bab7cec898809)), closes [#581](https://github.com/instana/nodejs/issues/581)
* **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))
* **tracing:** cancel sqs entry span sync when no messages are available ([8a66277](https://github.com/instana/nodejs/commit/8a662773716832469aeb1b512b5225043c5f344f))
* **tracing:** fix log4js message format call ([29c11fa](https://github.com/instana/nodejs/commit/29c11fa803811d91b435bb6e1261fb5fe3c0f9d6))
* fix duplicated logger names and prevent them ([9d576c5](https://github.com/instana/nodejs/commit/9d576c54b97e9999820e0c597ec3fd10d3c660e2))
* **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)
* **tracing:** implement updateConfig for Kafka instrumentations ([c386ee6](https://github.com/instana/nodejs/commit/c386ee6c01e96a605c39c54c464f41e5c8ee65af))
* add back core methods that had been removed with 1.127.0 ([b249c33](https://github.com/instana/nodejs/commit/b249c33622c4ba1b959cde2634a6494d837d4c31))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
* removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))
* **tracing:** avoid false positive warning about initializing too late ([8020e01](https://github.com/instana/nodejs/commit/8020e0129f8d633ec681356851540524cdb298f3))
* **tracing:** capture HTTP status code for GraphQL requests ([c68bc5e](https://github.com/instana/nodejs/commit/c68bc5ea986738e2e19d07f409357b5df22bb805))
* **tracing:** fix support for multi commands in redis@0.12.1 ([#377](https://github.com/instana/nodejs/issues/377)) ([332703e](https://github.com/instana/nodejs/commit/332703e1eeeba62a6487b4099c600b99409a9dcd))
* **tracing:** fix TypeError in @elastic/elasticsearch instrumentation ([f695b92](https://github.com/instana/nodejs/commit/f695b924db75f4ca484ac5f82517cff99f281ca1))
* **tracing:** fix vendored version of emitter-listener ([ebc9c17](https://github.com/instana/nodejs/commit/ebc9c17e348808d2afcb6bd09661bfdfa22c8c34))
* **tracing:** fix vendoring of emitter-listener for legacy cls context ([440fd32](https://github.com/instana/nodejs/commit/440fd3218a37bc333da26c2365bfc1116a931b9b))
* **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)
* **tracing:** ignore correlation part if level is 0 ([c8eac9b](https://github.com/instana/nodejs/commit/c8eac9bbaf9100ef728cfd253aa299a148327050))
* **tracing:** let instrumented grpc ServiceClient inherit from Client ([218d5cf](https://github.com/instana/nodejs/commit/218d5cf2d2876fb443d6472694f5e52054c84648))
* **tracing:** reject trace ID/parent span ID with all bytes zero ([a11f933](https://github.com/instana/nodejs/commit/a11f9333190d4af257291a7ccc37597ab2563fa4))
* **tracing:** removed duplicated instrumentation of receiveMessage ([2e248a5](https://github.com/instana/nodejs/commit/2e248a57c69369f8f43ab4c1af99567383fb8d85))
* **tracing:** rename process.namespaces to process.instanaNamespaces ([6c63434](https://github.com/instana/nodejs/commit/6c634341d2d8f9ef09ef6b1e5ce8e2d082dcb960))
* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))
* **tracing:** start a new trace if W3C correlation is disabled ([fc8bdce](https://github.com/instana/nodejs/commit/fc8bdcefe521921110991567da7a94fb8697f95b))
* **tracing:** vendor fixed version of emitter-listener ([5caa128](https://github.com/instana/nodejs/commit/5caa128f639671d3c012a50168444eaa36366ceb))
* bring back obsolete polyfill for Buffer.fromString ([900082f](https://github.com/instana/nodejs/commit/900082f7feec3e64a2140f0b55f2cd90983d1ea3))
* improve heuristic for detecting yarn/npm ([26065d4](https://github.com/instana/nodejs/commit/26065d448953cf95c44e6a35b83482366e92f09f))
* **agent:** exponential backoff retries for failed announce attempts ([31a4be6](https://github.com/instana/nodejs/commit/31a4be6ec3c4e6b9ddce9321978768435e33aa35))
* **announce:** enforce min delay of 1 sec before sending first span ([e4f1a6d](https://github.com/instana/nodejs/commit/e4f1a6d76bbc701bfa0aa62818cf173f4dd11a34))
* **api:** fix annotate method for paths to nested data attributes ([d40aa1a](https://github.com/instana/nodejs/commit/d40aa1a9154b9a7587600e335e5b3864868b4198))
* **lambda:** stop sending to back end when a request has already failed ([9f3a227](https://github.com/instana/nodejs/commit/9f3a227728412e8e69573b23bbb7f070353b3fa2))
* **metrics:** provide name and dependencies when package.json is missing ([63a17a2](https://github.com/instana/nodejs/commit/63a17a2fd640b7aeba10f7a639c981422ae94003))
* **tracing:** add data.rpc.host and data.rpc.port to GRPC exits ([f5372b8](https://github.com/instana/nodejs/commit/f5372b8f8e0b33530cc6a1af21eb5833f1794563))
* **tracing:** add missing cls.ns.exit calls to mongodb instrumentation ([48612d5](https://github.com/instana/nodejs/commit/48612d5b50e8d2553d114a326209b7adbbfe8663))
* **tracing:** add mongo command details for update/replace/delete ([cd71592](https://github.com/instana/nodejs/commit/cd7159212c46e259af69d94635b50ce8c567e8d1))
* **tracing:** add more mongodb command names ([3bbaea4](https://github.com/instana/nodejs/commit/3bbaea4feaa646c2fd87b4420dfd6be50564a79d))
* **tracing:** allow tracing GraphQL over other protocols, not only HTTP ([f4ce179](https://github.com/instana/nodejs/commit/f4ce179f74d78d80f63c3206eeb093714c5989f8))
* **tracing:** always capture graphql resolver duration ([577dc1f](https://github.com/instana/nodejs/commit/577dc1ff3f90ec6c0d932bff9967e3b4c31268ea))
* **tracing:** amqp: read incoming headers case insensitive ([b3a2058](https://github.com/instana/nodejs/commit/b3a2058fb338e94da2d85ccb673f07c94a5ffaaf))
* **tracing:** annotate path template on all entries, not only root spans ([0d26ce6](https://github.com/instana/nodejs/commit/0d26ce6b08d28404820b716a9f54625ed0c4ef22))
* **tracing:** capture error message/stack with SDK spans ([bb60320](https://github.com/instana/nodejs/commit/bb603200639232a05e0e041ed9fcc953ffe917b8))
* **tracing:** capture spans for HTTP entries that time out client side ([0e53a50](https://github.com/instana/nodejs/commit/0e53a50bd54df02229d9f8eff3c99a3edfc24d7c))
* **tracing:** do not add tracing headers to signed aws-sdk requests ([cc3a99b](https://github.com/instana/nodejs/commit/cc3a99b738c9058e2abf713cb33622f4cb23d1d2))
* **tracing:** do not remove tags from lower priority spans ([f0861b0](https://github.com/instana/nodejs/commit/f0861b0b122415e93dbb4fa85971d07a8b196852))
* **tracing:** don't overwrite graphql.server's ec in http server finish ([eee7593](https://github.com/instana/nodejs/commit/eee75939d7e79ab31985e24e0519db463f6d6d80))
* **tracing:** Fastify: handle array of beforeHandle functions correctly ([4a9e07f](https://github.com/instana/nodejs/commit/4a9e07fbc46db384f312d6139e2d6679423b28ef))
* **tracing:** fix handling of server-timing header for edge cases ([1b4ba5d](https://github.com/instana/nodejs/commit/1b4ba5d8bfc3a9cef1e814ee2205e1d6b67468ff))
* **tracing:** fix instrumentation of https client for Node.js 8.9.0 ([3f8bf3b](https://github.com/instana/nodejs/commit/3f8bf3b4794282ca65038be8e040a41b3f640824))
* **tracing:** fix require cycle when client code also uses cls-bluebird ([9bd015e](https://github.com/instana/nodejs/commit/9bd015e40eb900d13ea72da72fd639ba3ed0acbf))
* **tracing:** fix stack trace capturing for Winston log calls. ([4cf4078](https://github.com/instana/nodejs/commit/4cf407865691c73bd0d8a08c11ff1f83db073fcf))
* **tracing:** fix tracing for outdated versions of mongodb package ([ab3c388](https://github.com/instana/nodejs/commit/ab3c388f9d38bf04ae74ead9385a56c8fd0cd1f6))
* **tracing:** freeze custom path template annotation ([cb8d466](https://github.com/instana/nodejs/commit/cb8d466b272b3dddc5fd66c5694dbfe8c62860f5))
* **tracing:** fully cover Winston 3.x API surface ([ac87672](https://github.com/instana/nodejs/commit/ac87672ac522e1dfb0947e0f6e543fc33560e5c5))
* **tracing:** handle koa routes defined by regular expressions ([7c0bf95](https://github.com/instana/nodejs/commit/7c0bf95256f16dba904cba5a16d497a2342d695c)), closes [#140](https://github.com/instana/nodejs/issues/140)
* **tracing:** make activation robust against exotic Array.find override ([c66ea57](https://github.com/instana/nodejs/commit/c66ea5700f48f77803e2e7a8378eb827345e8339))
* **tracing:** only use X-Instana-Service when agent captures it ([0143260](https://github.com/instana/nodejs/commit/0143260a0a029448722d622020a8aa50d8413f54))
* **tracing:** port upstream cls-hooked fixes ([04241fe](https://github.com/instana/nodejs/commit/04241feff5d3ccc54d6c5ee0a8391cc5936e0521))
* **tracing:** propagate X-INSTANA-L: 0 downstream with AMQP headers ([d845b78](https://github.com/instana/nodejs/commit/d845b78ed5ef470633ae6d5aad42df88b71a39ba))
* **tracing:** remove overaggressive validation warning for HTTP spans ([80040d9](https://github.com/instana/nodejs/commit/80040d901f1da254e25613b46c973893d1bfffd6))
* **tracing:** remove superfluous argument ([8f9d10c](https://github.com/instana/nodejs/commit/8f9d10cdf21a1079e26c889fa6da72a453378612))
* **tracing:** remove unused attribute tracer from trace metrics ([88547ef](https://github.com/instana/nodejs/commit/88547ef81eee8c43fa9fad187afb130cc3ad1689))
* **tracing:** remove wrong warning for http entry span validation ([16d32e8](https://github.com/instana/nodejs/commit/16d32e8239be3f4325c6ba85f51958a8b42c8339))
* **tracing:** set span.data.service only on first span ([ef7fd77](https://github.com/instana/nodejs/commit/ef7fd774e5cbcc2c41e880ebeb39824a404bcf00))
* **tracing:** support pino log calls with mergingObject only ([e46b1c3](https://github.com/instana/nodejs/commit/e46b1c3c82a328ad1a269c1feb89152e24113fd3))
* fix bogus warning ([edced80](https://github.com/instana/nodejs/commit/edced804beadd8a177b000f656178aa44add4114))
* log file name if JSON.parse fails for main package.json ([4cee926](https://github.com/instana/nodejs/commit/4cee9269abb2561540eeb60a226c5de5f145fa6b))
* **tracing:** stop sending deprecated attribute span.ta: "node" ([88a21a9](https://github.com/instana/nodejs/commit/88a21a9044d30f29304095cea681f98b3a68739d))
* **tracing:** trace mongodb aggregate calls ([978e64e](https://github.com/instana/nodejs/commit/978e64edb789070dda8bf320660b5e3e90c14308))
* **tracing:** trace through graphql-subscription pubsub async iterator ([76031d3](https://github.com/instana/nodejs/commit/76031d331d8534e4ed3ccead34ecbb1c560ef8a2))
* **tracing:** update for `@elastic/elasticsearch@7.9.1` ([1f337d3](https://github.com/instana/nodejs/commit/1f337d30cd53c10cd3c0d90b71cb3cce8eada00c))
* **tracing:** use original args in graphql when another span is active ([ae5ac13](https://github.com/instana/nodejs/commit/ae5ac139dd08c1878af39bbf2e5f23a489c18c12))
* **tracing:** use query._callback for ending a mysql call if available ([321c98e](https://github.com/instana/nodejs/commit/321c98e83a82954c5dd676899318ff4c60ec952d))
* add additional check in requireHook ([428ae35](https://github.com/instana/nodejs/commit/428ae35987149cb12b32c954c76e5843501b95bd))
* update to shimmer@1.2.1 to be able to patch async functions ([e712197](https://github.com/instana/nodejs/commit/e71219748c6bd6602befbdb97bd60360afd540c7))
* **tracing:** warn instead of info when Node.js version is not supported ([8c0ee1e](https://github.com/instana/nodejs/commit/8c0ee1e0b1a2a792de7ec899acb1094d1181ceb3))


### Features

* **collector:** added instrumentation for @grpc/grpc-js ([d12e386](https://github.com/instana/nodejs/commit/d12e386e95ced2c68d2d549dff83ea3ecfe51735)), closes [#87653](https://github.com/instana/nodejs/issues/87653)
* **collector:** added support for @elastic/elasticsearch v8 ([#707](https://github.com/instana/nodejs/issues/707)) ([dae00bb](https://github.com/instana/nodejs/commit/dae00bb329a95efcdab1e49401958383703427e2))
* **collector:** added support for @google-cloud/storage@6 ([#727](https://github.com/instana/nodejs/issues/727)) ([efcd4f1](https://github.com/instana/nodejs/commit/efcd4f1859ce0107976908658dda1e2113108a1c))
* **collector:** added support for amqplib 0.10.x ([b56a827](https://github.com/instana/nodejs/commit/b56a82791a1b62eed57232df9c2df699b0a4f863))
* **collector:** added support for nats 2.x including trace correlation ([#702](https://github.com/instana/nodejs/issues/702)) ([86a2685](https://github.com/instana/nodejs/commit/86a2685cfaa6e75dc855527714f50960e7d3504a))
* **collector:** added support for redis v4 ([#627](https://github.com/instana/nodejs/issues/627)) ([ad00255](https://github.com/instana/nodejs/commit/ad00255c73bc7ec080a1a91172a8878febe274b2))
* **collector:** added support for sqs-consumer@6.2.0 ([#691](https://github.com/instana/nodejs/issues/691)) ([f8bf9e7](https://github.com/instana/nodejs/commit/f8bf9e79d856a9c449161e76783fd36d02c3ffb0))
* **collector:** tracing all spans when client app is using ES modules ([#672](https://github.com/instana/nodejs/issues/672)) ([7d471ff](https://github.com/instana/nodejs/commit/7d471ff751fbd29ce1c96a752304ec3399d0c78c))
* **core:** added ability to complete specific intermediate spans ([#564](https://github.com/instana/nodejs/issues/564)) ([480ee46](https://github.com/instana/nodejs/commit/480ee4693e91bbcfd11824f42dff31ca7898cba3)), closes [#561](https://github.com/instana/nodejs/issues/561)
* **dynamodb:** capture region as annotation ([4ba64f4](https://github.com/instana/nodejs/commit/4ba64f4d8155b365c0fd4540c1abdbe15b572fb5))
* **fastify:** Added support for 2.x and 3.x ([#395](https://github.com/instana/nodejs/issues/395)) ([4c7d6ee](https://github.com/instana/nodejs/commit/4c7d6eeb0d8beff6b8c6f27816e0f874af0c3d90))
* **kafka:** use kafka header format 'both' by default ([b2585cf](https://github.com/instana/nodejs/commit/b2585cf7e4c6f31b38d486505699309cb9d759d6))
* **kafkajs:** remove Instana headers on arrival ([f65bc75](https://github.com/instana/nodejs/commit/f65bc753667c8aaf636b0c0c6100f772338e639c))
* **lambda:** add trace correlation when triggered by SQS message ([381c064](https://github.com/instana/nodejs/commit/381c0642c38a43e8af920386eb154c2a9ff6050d))
* **lambda:** W3C trace context support for Lambda tracing ([5b3904e](https://github.com/instana/nodejs/commit/5b3904e7bdbea80a372a0fbc7b32a1262766ac0d))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **metrics:** load native dependencies lazily if necessary (plus retry) ([d6af8e4](https://github.com/instana/nodejs/commit/d6af8e4a519bdcff183ea1c5f02f4479a3bfeb02))
* **otel:** Instana Exporter for OpenTelemetry ([#388](https://github.com/instana/nodejs/issues/388)) ([529ff2a](https://github.com/instana/nodejs/commit/529ff2ae024e944ede21cbe7ab053135ae526689))
* **sdk:** add methods to set the EUM correlation ID/type on the span ([727916c](https://github.com/instana/nodejs/commit/727916c7398219c292faad6e374d57a3838472d2))
* **sdk:** expose span.cancel method ([d60571f](https://github.com/instana/nodejs/commit/d60571f680c8d9c2b68ece84930a6aa91bd77b6a))
* **tracing:** added console.warn & console.error instrumentation ([#391](https://github.com/instana/nodejs/issues/391)) ([6c19b44](https://github.com/instana/nodejs/commit/6c19b447f1d1d8bc6e502a387a9db3b24b2e65c3))
* **tracing:** added instrumentation for ibm db2  ([#532](https://github.com/instana/nodejs/issues/532)) ([0d0b1e0](https://github.com/instana/nodejs/commit/0d0b1e0d4409795206613c4c2cdcf1e270772dd8))
* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))
* **tracing:** AWS DynamoDB instrumentation ([#294](https://github.com/instana/nodejs/issues/294)) ([4c00dbf](https://github.com/instana/nodejs/commit/4c00dbf8cbf6b2388fa07aa0fcfbdc61c40943c4))
* **tracing:** AWS S3 instrumentation ([#288](https://github.com/instana/nodejs/issues/288)) ([aa1a6ac](https://github.com/instana/nodejs/commit/aa1a6ac8c9f1228782c30c66c41502e94368ffac))
* **tracing:** batch very short/high frequency database exits ([1b967e9](https://github.com/instana/nodejs/commit/1b967e99f472494650421dbcbc8031db433ae8e2))
* **tracing:** improve robustness of custom service naming ([aadcbff](https://github.com/instana/nodejs/commit/aadcbff6f4c2a4264f9920a26723d3e2530c0c73))
* **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))
* **tracing:** instrument AWS Kinesis ([3efb2fa](https://github.com/instana/nodejs/commit/3efb2fa94f9fcf7c332f9a486f312bd94f2331e1))
* **tracing:** instrument AWS SQS ([01e0d14](https://github.com/instana/nodejs/commit/01e0d141ce3f3af78fd305afb424a710d5eae539))
* **tracing:** instrument MongoDB native driver unified topology ([b75e04d](https://github.com/instana/nodejs/commit/b75e04ddab998f83965a38c688646b512c15c78c))
* **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))
* **tracing:** instrument sqs-consumer ([b6aebd9](https://github.com/instana/nodejs/commit/b6aebd97c1d92f4845965a040524d4746beddf11))
* **tracing:** prepare Kafka header migration ([0c0be2d](https://github.com/instana/nodejs/commit/0c0be2df1d3d2230e55cf7e3ccfd0a825ad4936c))
* **tracing:** redact embedded credentials from URLs ([7bd506d](https://github.com/instana/nodejs/commit/7bd506d77ed5bf4afb709045516d67549ed5bec7)), closes [#327](https://github.com/instana/nodejs/issues/327)
* **tracing:** trace correlation for SNS-to-SQS ([1d901b8](https://github.com/instana/nodejs/commit/1d901b8a57bb37973ff50fc1d30cbda28c8385b3))
* **tracing:** update handling of W3C trace context headers ([e98a856](https://github.com/instana/nodejs/commit/e98a856ae9130b369cfde587a76d4679369db6fe))
* **tracing:** use new common tracing config from from agent response ([7f8825f](https://github.com/instana/nodejs/commit/7f8825f4eddb585595457378cfb2fb36eb868a37))
* **tracing, fetch:** instrument native fetch ([1a48168](https://github.com/instana/nodejs/commit/1a48168d32b5325041542cfbb41c84775ff1e518))
* added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))
* do not instrument npm or yarn ([4091f52](https://github.com/instana/nodejs/commit/4091f5228e6df1df1d9232656ef441326782fb90))
* **api:** annotate auto-trace spans ([79975c0](https://github.com/instana/nodejs/commit/79975c0b2ce96630de31b9fcb62c119a0ce0d21e))
* **fargate:** add support for Fargate via @instana/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **google cloud run:** experimental support ([64b34e4](https://github.com/instana/nodejs/commit/64b34e4e7f11f0205bdba53a521ab819470e4286))
* **lambda:** add Server-Timing header for EUM/back end correlation ([d7d5c85](https://github.com/instana/nodejs/commit/d7d5c8562a5b5285ab4cb699b4561c91b24f0f21))
* **lambda:** make standard Instana Node.js API available for Lambdas ([ec4177b](https://github.com/instana/nodejs/commit/ec4177b51563853f918e1deb3e982453c1931fb9))
* **lambda, fargate:** support for INSTANA_SECRETS ([8a1347a](https://github.com/instana/nodejs/commit/8a1347a4f9dee03ae6c713b69e99ffc55f57c209))
* **metric:** support npm install deployment scenario ([f7d8257](https://github.com/instana/nodejs/commit/f7d825709d3aa49eb6599a572bbeeb9945aebe71))
* **sdk:** add API to restore the async context manually ([20d0f89](https://github.com/instana/nodejs/commit/20d0f8997683c52b2d8336b18daa5877b42f4484))
* **tracing:** add ability to disable individual tracers ([135f67c](https://github.com/instana/nodejs/commit/135f67c64eb39c7a062b5db23ed908a30f130471))
* **tracing:** add log4js instrumentation ([5f7b1bd](https://github.com/instana/nodejs/commit/5f7b1bd00514e49ec21d056e7e3327783a512754))
* **tracing:** add pg-native instrumentation ([bcec198](https://github.com/instana/nodejs/commit/bcec1988cee03c4aad539c7c2b3cf81479a72d13))
* **tracing:** add runPromiseOrRunAndReturn to core/clsHooked ([47e99cd](https://github.com/instana/nodejs/commit/47e99cd4e7d247aacc7d7dd5cf02eff3d97e65a1))
* **tracing:** add support for INSTANA_EXTRA_HTTP_HEADERS ([e055cde](https://github.com/instana/nodejs/commit/e055cdedccdbf2f4edf42ef63d9c66d76ba1897c))
* **tracing:** allow early init ([52b7c39](https://github.com/instana/nodejs/commit/52b7c39c440b514da6cdc7ba7793ce95db44d75b))
* **tracing:** avoid triggering fastify's basePath deprecation warning ([efb7063](https://github.com/instana/nodejs/commit/efb7063265757a566a3c52868c02b4998fdba50d))
* **tracing:** Bunyan: support for capturing nested error object msgs ([56accb7](https://github.com/instana/nodejs/commit/56accb7f41925e14adaf8080982e7777ef70be1f))
* **tracing:** capture HTTP response headers for entry spans ([6931f66](https://github.com/instana/nodejs/commit/6931f66b6a017e1a36e1ac7cc6c562bf216f79dc))
* **tracing:** capture request and response headers on HTTP exits ([bbb288a](https://github.com/instana/nodejs/commit/bbb288ada7f12033ef65ac13c16c10296e38f3ac))
* **tracing:** create, parse and manipulate W3C trace context headers ([f7c8c6e](https://github.com/instana/nodejs/commit/f7c8c6e82ea0f3e90aa02c5e76e548493a9ccb2a))
* **tracing:** Google Cloud Storage client instrumentation ([c206b56](https://github.com/instana/nodejs/commit/c206b564af0852e0d3d628b64de4db4909fc42ed))
* **tracing:** instrument Apigee edgemicro package ([269a68a](https://github.com/instana/nodejs/commit/269a68a02b027a4ed6892a33b8e61314dbab3062))
* **tracing:** instrument graphql ([942000a](https://github.com/instana/nodejs/commit/942000a322911bc0e06afba1cea1662071ccf452))
* **tracing:** instrument kafkajs ([7afec29](https://github.com/instana/nodejs/commit/7afec29e987540be816f79da8951bb41986ab423))
* **tracing:** instrument modern ES client @elastic/elasticsearch ([ecf8621](https://github.com/instana/nodejs/commit/ecf86215be316484445b32efad970e8264619611))
* **tracing:** instrument nats and node-nats-streaming ([a987e00](https://github.com/instana/nodejs/commit/a987e005bd2cd1573b88512b56c31c549c218889))
* **tracing:** instrument superagent ([09e5c25](https://github.com/instana/nodejs/commit/09e5c257677442ad9f705b8e092154b3e28cf0e4))
* **tracing:** instrument Winston versions <= 2.x ([f19ed13](https://github.com/instana/nodejs/commit/f19ed1333d804b0cd8565d69f5c285d66d5d865d))
* **tracing:** instrumenting @apollo/gateway to capture errors ([04de499](https://github.com/instana/nodejs/commit/04de4991ceb7a29357b2f349eb509ce525e4a7f0))
* **tracing:** manage W3C trace context headers for HTTP ([ef6fdf3](https://github.com/instana/nodejs/commit/ef6fdf3b365ca7258afa14af45c55721093e69d7))
* **tracing:** process correlation info from X-INSTANA-L ([c11dfb0](https://github.com/instana/nodejs/commit/c11dfb01006154c9a3c7147b5dc87df87f2d9c09))
* **tracing:** provide internal tracing metrics ([ea712db](https://github.com/instana/nodejs/commit/ea712db12b0e4358a83db1e87ec9b9df85766633))
* **tracing:** record hapi.js path templates when tracing HTTP entries ([78df856](https://github.com/instana/nodejs/commit/78df85684c8863ebf6158defa81c30fefe88de2e))
* **tracing:** redact secrets instead of removing the whole query param ([1f20acd](https://github.com/instana/nodejs/commit/1f20acd229f49a36ed305440c1252f32bbb1fb66))
* **tracing:** support for kafka-node >= 4.0.0 ([e5a2daf](https://github.com/instana/nodejs/commit/e5a2daf18b7f18a42ee7914f4ad8fa859d6cb9aa)), closes [#158](https://github.com/instana/nodejs/issues/158)
* **tracing:** support INSTANA_SERVICE_NAME/config.serviceName ([855252d](https://github.com/instana/nodejs/commit/855252db87f77b6f6722db859c97661a08cabcaa))
* **tracing:** support tracing of deferred HTTP exits ([55db775](https://github.com/instana/nodejs/commit/55db775df23d0d28d342552ff7e8dfcb4051a3b6))
* **tracing:** support X-INSTANA-SYNTHETIC ([8f30931](https://github.com/instana/nodejs/commit/8f309318c4bd39132b26d3a6e1dd135d90cc9a82))
* **tracing:** trace http2 communication ([1d0b52c](https://github.com/instana/nodejs/commit/1d0b52cba7b126a56207f58b8036d183caf2dc0c))
* **tracing:** warn when @instana/collector is initalized too late ([38df614](https://github.com/instana/nodejs/commit/38df614215b9b82ce67cefc0988a681fdb601437))
* support Node.js 12 ([1eaa662](https://github.com/instana/nodejs/commit/1eaa66229140f1bbdc9e6572f6d29e3d10e9439e))


### BREAKING CHANGES

* Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
                 Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* Removed "disableAutomaticTracing" config option.
                 Use `instana({ automaticTracingEnabled: Boolean })`.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)


### Bug Fixes

* **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)


### Features

* **collector:** added support for amqplib 0.10.x ([b56a827](https://github.com/instana/nodejs/commit/b56a82791a1b62eed57232df9c2df699b0a4f863))





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)


### Features

* **collector:** added support for @google-cloud/storage@6 ([#727](https://github.com/instana/nodejs/issues/727)) ([efcd4f1](https://github.com/instana/nodejs/commit/efcd4f1859ce0107976908658dda1e2113108a1c))





## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)


### Bug Fixes

* **grpc-js:** capture the correct destination host per grpc-js client ([5bc3188](https://github.com/instana/nodejs/commit/5bc31889f45b98e927f97ffebbda238a226494fb))
* **grpc-js:** do not mark cancelled calls as erroneous ([fea8b80](https://github.com/instana/nodejs/commit/fea8b80d51ab928c70efb884ac6cbfc24e7c46a5))





# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)


### Features

* **collector:** added support for @elastic/elasticsearch v8 ([#707](https://github.com/instana/nodejs/issues/707)) ([dae00bb](https://github.com/instana/nodejs/commit/dae00bb329a95efcdab1e49401958383703427e2))
* **tracing:** improve robustness of custom service naming ([aadcbff](https://github.com/instana/nodejs/commit/aadcbff6f4c2a4264f9920a26723d3e2530c0c73))





# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)


### Features

* **collector:** added support for nats 2.x including trace correlation ([#702](https://github.com/instana/nodejs/issues/702)) ([86a2685](https://github.com/instana/nodejs/commit/86a2685cfaa6e75dc855527714f50960e7d3504a))





# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)


### Features

* **collector:** added support for sqs-consumer@6.2.0 ([#691](https://github.com/instana/nodejs/issues/691)) ([f8bf9e7](https://github.com/instana/nodejs/commit/f8bf9e79d856a9c449161e76783fd36d02c3ffb0))





# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)


### Features

* **tracing, fetch:** instrument native fetch ([1a48168](https://github.com/instana/nodejs/commit/1a48168d32b5325041542cfbb41c84775ff1e518))





## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)

**Note:** Version bump only for package @instana/core





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)


### Bug Fixes

* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))
* **collector:** mysql2/promise not working with ESM ([f059047](https://github.com/instana/nodejs/commit/f059047d8be41230a9bf5ec9fb320a58c055c630))





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)


### Features

* **collector:** tracing all spans when client app is using ES modules ([#672](https://github.com/instana/nodejs/issues/672)) ([7d471ff](https://github.com/instana/nodejs/commit/7d471ff751fbd29ce1c96a752304ec3399d0c78c))





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)

**Note:** Version bump only for package @instana/core





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)


### Bug Fixes

* **collector:** resolved elasticsearch legacy error ([ea4f59f](https://github.com/instana/nodejs/commit/ea4f59f37a57e2fc88855bc89ac47775dd1048b4))





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)


### Bug Fixes

* **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)

**Note:** Version bump only for package @instana/core





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)


### Bug Fixes

* **sdk:** work around memory leak with recursive SDK usage ([c9b35eb](https://github.com/instana/nodejs/commit/c9b35eb37f1e41f7b11442dd408ca53f5cb2ac13))





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)


### Features

* **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)


### Features

* **collector:** added support for redis v4 ([#627](https://github.com/instana/nodejs/issues/627)) ([ad00255](https://github.com/instana/nodejs/commit/ad00255c73bc7ec080a1a91172a8878febe274b2))
* **kafka:** use kafka header format 'both' by default ([b2585cf](https://github.com/instana/nodejs/commit/b2585cf7e4c6f31b38d486505699309cb9d759d6))





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)

**Note:** Version bump only for package @instana/core





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)


### Bug Fixes

* **redis:** suppress error for unsupported redis@4 ([ffad2c2](https://github.com/instana/nodejs/commit/ffad2c2f09ae3672d158bb141c98c38c82a59139))





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)


### Bug Fixes

* **db2:** redact password also from the end of the connection string ([ac4c46d](https://github.com/instana/nodejs/commit/ac4c46db11298dcdcc12017e4543972a93263f84)), closes [#614](https://github.com/instana/nodejs/issues/614)


### Features

* **dynamodb:** capture region as annotation ([4ba64f4](https://github.com/instana/nodejs/commit/4ba64f4d8155b365c0fd4540c1abdbe15b572fb5))





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)


### Bug Fixes

* **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))





# 2.7.0 (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)





## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @instana/core





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)

**Note:** Version bump only for package @instana/core





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)

**Note:** Version bump only for package @instana/core





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)


### Features

* **core:** added ability to complete specific intermediate spans ([#564](https://github.com/instana/nodejs/issues/564)) ([480ee46](https://github.com/instana/nodejs/commit/480ee4693e91bbcfd11824f42dff31ca7898cba3)), closes [#561](https://github.com/instana/nodejs/issues/561)
* **sdk:** add methods to set the EUM correlation ID/type on the span ([727916c](https://github.com/instana/nodejs/commit/727916c7398219c292faad6e374d57a3838472d2))





# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)


### Features

* added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))





# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)


### Bug Fixes

* **http:** only capture response status/headers when they have been sent ([850b8e4](https://github.com/instana/nodejs/commit/850b8e43f93749e422e9923c10cef9a8d1e2f3ea)), closes [#548](https://github.com/instana/nodejs/issues/548)
* **kafkajs:** use long trace IDs with new Kafka message headers ([5674b08](https://github.com/instana/nodejs/commit/5674b086b1481e0aaf7c352924fbd45634456461))
* **rdkafka:** use long trace IDs with new Kafka message headers ([9c47349](https://github.com/instana/nodejs/commit/9c47349b5de214828c075eded71242a32c1f26c8))


### Features

* **kafkajs:** remove Instana headers on arrival ([f65bc75](https://github.com/instana/nodejs/commit/f65bc753667c8aaf636b0c0c6100f772338e639c))





# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)


### Bug Fixes

* **agent:** reduce log level for sending data from debug to trace ([8b57a71](https://github.com/instana/nodejs/commit/8b57a71eb9818f83acbdc8f9bf63623a7e415d07))


### Features

* **tracing:** added instrumentation for ibm db2  ([#532](https://github.com/instana/nodejs/issues/532)) ([0d0b1e0](https://github.com/instana/nodejs/commit/0d0b1e0d4409795206613c4c2cdcf1e270772dd8))





# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)


### Bug Fixes

* **tracing:** cancel sqs entry span sync when no messages are available ([8a66277](https://github.com/instana/nodejs/commit/8a662773716832469aeb1b512b5225043c5f344f))
* fix duplicated logger names and prevent them ([9d576c5](https://github.com/instana/nodejs/commit/9d576c54b97e9999820e0c597ec3fd10d3c660e2))
* **tracing:** implement updateConfig for Kafka instrumentations ([c386ee6](https://github.com/instana/nodejs/commit/c386ee6c01e96a605c39c54c464f41e5c8ee65af))


### Features

* **sdk:** expose span.cancel method ([d60571f](https://github.com/instana/nodejs/commit/d60571f680c8d9c2b68ece84930a6aa91bd77b6a))
* **tracing:** use new common tracing config from from agent response ([7f8825f](https://github.com/instana/nodejs/commit/7f8825f4eddb585595457378cfb2fb36eb868a37))





# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)


### Bug Fixes

* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
* removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))


### BREAKING CHANGES

* Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
                 Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* Removed "disableAutomaticTracing" config option.
                 Use `instana({ automaticTracingEnabled: Boolean })`.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)


### Bug Fixes

* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))


### Features

* **collector:** added instrumentation for @grpc/grpc-js ([d12e386](https://github.com/instana/nodejs/commit/d12e386e95ced2c68d2d549dff83ea3ecfe51735)), closes [#87653](https://github.com/instana/nodejs/issues/87653)
* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))


### Features

* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)


### Bug Fixes

* **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @instana/core





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)


### Bug Fixes

* **tracing:** fix vendoring of emitter-listener for legacy cls context ([440fd32](https://github.com/instana/nodejs/commit/440fd3218a37bc333da26c2365bfc1116a931b9b))





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)


### Bug Fixes

* **aws-sdk/v3:** added support for @aws-sdk/* 3.4x ([61cc179](https://github.com/instana/nodejs/commit/61cc17945279f4f0996f87e2d955fc4daf519d24))
* **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)


### Bug Fixes

* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)


### Bug Fixes

* **dependency:** pinned lru-cache to 6.0.0 ([0ceb372](https://github.com/instana/nodejs/commit/0ceb372709bd53d0c6cab2060d8cdaf431133706))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1))
