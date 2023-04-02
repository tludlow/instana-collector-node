# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)

### Bug Fixes

- **agent:** exponential backoff retries for failed announce attempts ([31a4be6](https://github.com/instana/nodejs/commit/31a4be6ec3c4e6b9ddce9321978768435e33aa35))
- **agent:** improve agent lookup log messages ([6e8a256](https://github.com/instana/nodejs/commit/6e8a256b77a973931a9497d365f351b71f0d5303))
- **agent:** reduce log level for sending data from debug to trace ([8b57a71](https://github.com/instana/nodejs/commit/8b57a71eb9818f83acbdc8f9bf63623a7e415d07))
- **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))
- **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
- **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))
- **collector:** prevent initializing @tludlow-instana-fork/collector multiple times ([b3261b7](https://github.com/instana/nodejs/commit/b3261b7a653b406cbe2eeaaf9050134bbeedfac9))
- **collector:** work around Bazel's node-patches module ([d06e9be](https://github.com/instana/nodejs/commit/d06e9be187e9f97c43e4a129ebb2f5e18f82ef8c))
- **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1)), closes [/github.com/npm/node-semver/blob/v7.3.3/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.3/package.json/issues/L39) [/github.com/npm/node-semver/blob/v7.3.5/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.5/package.json/issues/L39)
- **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))
- **events:** handle nulls properly when reporting exceptions/rejections ([4aaa22b](https://github.com/instana/nodejs/commit/4aaa22bb0351823cf1349250d3624dedd3f66bc7))
- **grpc-js:** capture the correct destination host per grpc-js client ([5bc3188](https://github.com/instana/nodejs/commit/5bc31889f45b98e927f97ffebbda238a226494fb))
- **grpc-js:** do not mark cancelled calls as erroneous ([fea8b80](https://github.com/instana/nodejs/commit/fea8b80d51ab928c70efb884ac6cbfc24e7c46a5))
- **http:** only capture response status/headers when they have been sent ([850b8e4](https://github.com/instana/nodejs/commit/850b8e43f93749e422e9923c10cef9a8d1e2f3ea)), closes [#548](https://github.com/instana/nodejs/issues/548)
- **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)
- **metrics:** register gc stats loader listener immediately ([fb99f84](https://github.com/instana/nodejs/commit/fb99f84194fd8d5ddd8d72d94e8268d0880ebec9))
- **opentracing:** default to type entry when no parent is referenced ([712048d](https://github.com/instana/nodejs/commit/712048dde5ded956aead41a381f835f68aef7813))
- **rdkafka:** use long trace IDs with new Kafka message headers ([9c47349](https://github.com/instana/nodejs/commit/9c47349b5de214828c075eded71242a32c1f26c8))
- **sdk:** run original fn in SDK wrappers when tracing is not active ([555fdf1](https://github.com/instana/nodejs/commit/555fdf1a8b28043770374b67267a30c2e95ccf7a))
- **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))
- **tests:** skip http2 tests in Node.js 8 ([ba526c0](https://github.com/instana/nodejs/commit/ba526c09698101d5f519049ca83f8882e220635a)), closes [#1](https://github.com/instana/nodejs/issues/1) [#0](https://github.com/instana/nodejs/issues/0) [#1](https://github.com/instana/nodejs/issues/1) [#2](https://github.com/instana/nodejs/issues/2) [#3](https://github.com/instana/nodejs/issues/3) [#4](https://github.com/instana/nodejs/issues/4) [#5](https://github.com/instana/nodejs/issues/5) [#6](https://github.com/instana/nodejs/issues/6) [#7](https://github.com/instana/nodejs/issues/7) [#8](https://github.com/instana/nodejs/issues/8) [#9](https://github.com/instana/nodejs/issues/9) [#10](https://github.com/instana/nodejs/issues/10) [#11](https://github.com/instana/nodejs/issues/11) [#12](https://github.com/instana/nodejs/issues/12) [#13](https://github.com/instana/nodejs/issues/13) [#14](https://github.com/instana/nodejs/issues/14) [#15](https://github.com/instana/nodejs/issues/15) [#16](https://github.com/instana/nodejs/issues/16) [#17](https://github.com/instana/nodejs/issues/17) [#1](https://github.com/instana/nodejs/issues/1) [#0](https://github.com/instana/nodejs/issues/0) [#1](https://github.com/instana/nodejs/issues/1) [#2](https://github.com/instana/nodejs/issues/2) [#3](https://github.com/instana/nodejs/issues/3) [#4](https://github.com/instana/nodejs/issues/4) [#5](https://github.com/instana/nodejs/issues/5) [#6](https://github.com/instana/nodejs/issues/6) [#7](https://github.com/instana/nodejs/issues/7) [#8](https://github.com/instana/nodejs/issues/8) [#9](https://github.com/instana/nodejs/issues/9) [#10](https://github.com/instana/nodejs/issues/10) [#11](https://github.com/instana/nodejs/issues/11) [#12](https://github.com/instana/nodejs/issues/12) [#13](https://github.com/instana/nodejs/issues/13) [#14](https://github.com/instana/nodejs/issues/14) [#15](https://github.com/instana/nodejs/issues/15) [#16](https://github.com/instana/nodejs/issues/16) [#17](https://github.com/instana/nodejs/issues/17)
- **tracing:** cancel sqs entry span sync when no messages are available ([8a66277](https://github.com/instana/nodejs/commit/8a662773716832469aeb1b512b5225043c5f344f))
- **tracing:** fix log4js message format call ([29c11fa](https://github.com/instana/nodejs/commit/29c11fa803811d91b435bb6e1261fb5fe3c0f9d6))
- depend on exact versions of [@tludlow-instana-fork](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))
- dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
- fix duplicated logger names and prevent them ([9d576c5](https://github.com/instana/nodejs/commit/9d576c54b97e9999820e0c597ec3fd10d3c660e2))
- remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
- removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
- removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
- removed support for passing parent logger during initialisation ([bd96791](https://github.com/instana/nodejs/commit/bd9679151388cd8c865df8910b35f7f00e1ca6de))
- removed uncaught exception config ([fb6570a](https://github.com/instana/nodejs/commit/fb6570a862dbdec776eb78b840dcdc4184cd5f00))
- self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))
- **test:** unflaky batching test ([9f546bf](https://github.com/instana/nodejs/commit/9f546bf560f693cb2cba4b1ac673c2ae70ceade2))
- **tracing:** capture HTTP status code for GraphQL requests ([c68bc5e](https://github.com/instana/nodejs/commit/c68bc5ea986738e2e19d07f409357b5df22bb805))
- **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)
- **tracing:** fix support for multi commands in redis@0.12.1 ([#377](https://github.com/instana/nodejs/issues/377)) ([332703e](https://github.com/instana/nodejs/commit/332703e1eeeba62a6487b4099c600b99409a9dcd))
- **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)
- **tracing:** let instrumented grpc ServiceClient inherit from Client ([218d5cf](https://github.com/instana/nodejs/commit/218d5cf2d2876fb443d6472694f5e52054c84648))
- **tracing:** reject trace ID/parent span ID with all bytes zero ([a11f933](https://github.com/instana/nodejs/commit/a11f9333190d4af257291a7ccc37597ab2563fa4))
- update to shimmer@1.2.1 to be able to patch async functions ([e712197](https://github.com/instana/nodejs/commit/e71219748c6bd6602befbdb97bd60360afd540c7))
- **announce:** enforce min delay of 1 sec before sending first span ([e4f1a6d](https://github.com/instana/nodejs/commit/e4f1a6d76bbc701bfa0aa62818cf173f4dd11a34))
- **announce:** poll for "agent ready" once a second ([0ae53a1](https://github.com/instana/nodejs/commit/0ae53a1da6c6a277779756636ed271059a2279f3))
- **api:** fix annotate method for paths to nested data attributes ([d40aa1a](https://github.com/instana/nodejs/commit/d40aa1a9154b9a7587600e335e5b3864868b4198))
- **docs:** fix link to changelog ([9c0d588](https://github.com/instana/nodejs/commit/9c0d588b300ad670fde03026323d917f1f843c7c)), closes [#243](https://github.com/instana/nodejs/issues/243)
- **example-app:** do not use popular port 3000 in example app ([e5529d4](https://github.com/instana/nodejs/commit/e5529d4e68e37cf9ad34a8fc5937856c7459adfd))
- **metrics:** move event-loop-lag from optionalDeps to dependencies ([e5ebc68](https://github.com/instana/nodejs/commit/e5ebc68fa7377ffe5547082a265061756d0f163f))
- **profiling:** warn when agent does not support Node.js profiling ([b9c91da](https://github.com/instana/nodejs/commit/b9c91da7cabdc6e8985f44afb99112f5a0409a39))
- **test:** fix test for uncaught exception ([d48f580](https://github.com/instana/nodejs/commit/d48f580646a4c51964dda2549e9ab65af9049763))
- **tests:** fix http client url expectation ([da3f176](https://github.com/instana/nodejs/commit/da3f176d81872f566a75db6a88fdb5503a9c352a))
- **tracing:** add data.rpc.host and data.rpc.port to GRPC exits ([f5372b8](https://github.com/instana/nodejs/commit/f5372b8f8e0b33530cc6a1af21eb5833f1794563))
- **tracing:** add mongo command details for update/replace/delete ([cd71592](https://github.com/instana/nodejs/commit/cd7159212c46e259af69d94635b50ce8c567e8d1))
- **tracing:** add more mongodb command names ([3bbaea4](https://github.com/instana/nodejs/commit/3bbaea4feaa646c2fd87b4420dfd6be50564a79d))
- **tracing:** allow tracing GraphQL over other protocols, not only HTTP ([f4ce179](https://github.com/instana/nodejs/commit/f4ce179f74d78d80f63c3206eeb093714c5989f8))
- **tracing:** always capture graphql resolver duration ([577dc1f](https://github.com/instana/nodejs/commit/577dc1ff3f90ec6c0d932bff9967e3b4c31268ea))
- **tracing:** amqp: read incoming headers case insensitive ([b3a2058](https://github.com/instana/nodejs/commit/b3a2058fb338e94da2d85ccb673f07c94a5ffaaf))
- **tracing:** annotate path template on all entries, not only root spans ([0d26ce6](https://github.com/instana/nodejs/commit/0d26ce6b08d28404820b716a9f54625ed0c4ef22))
- **tracing:** capture error message/stack with SDK spans ([bb60320](https://github.com/instana/nodejs/commit/bb603200639232a05e0e041ed9fcc953ffe917b8))
- **tracing:** capture spans for HTTP entries that time out client side ([0e53a50](https://github.com/instana/nodejs/commit/0e53a50bd54df02229d9f8eff3c99a3edfc24d7c))
- **tracing:** do not add tracing headers to signed aws-sdk requests ([cc3a99b](https://github.com/instana/nodejs/commit/cc3a99b738c9058e2abf713cb33622f4cb23d1d2))
- **tracing:** do not remove tags from lower priority spans ([f0861b0](https://github.com/instana/nodejs/commit/f0861b0b122415e93dbb4fa85971d07a8b196852))
- **tracing:** don't fail on span data with circular references ([54f3efc](https://github.com/instana/nodejs/commit/54f3efc2c07e0d07a33c6142fe76b7aa5606420f))
- **tracing:** don't overwrite graphql.server's ec in http server finish ([eee7593](https://github.com/instana/nodejs/commit/eee75939d7e79ab31985e24e0519db463f6d6d80))
- **tracing:** Fastify: handle array of beforeHandle functions correctly ([4a9e07f](https://github.com/instana/nodejs/commit/4a9e07fbc46db384f312d6139e2d6679423b28ef))
- **tracing:** fix handling of server-timing header for edge cases ([1b4ba5d](https://github.com/instana/nodejs/commit/1b4ba5d8bfc3a9cef1e814ee2205e1d6b67468ff))
- **tracing:** fix stack trace capturing for Winston log calls. ([4cf4078](https://github.com/instana/nodejs/commit/4cf407865691c73bd0d8a08c11ff1f83db073fcf))
- **tracing:** freeze custom path template annotation ([cb8d466](https://github.com/instana/nodejs/commit/cb8d466b272b3dddc5fd66c5694dbfe8c62860f5))
- **tracing:** fully cover Winston 3.x API surface ([ac87672](https://github.com/instana/nodejs/commit/ac87672ac522e1dfb0947e0f6e543fc33560e5c5))
- **tracing:** handle koa routes defined by regular expressions ([7c0bf95](https://github.com/instana/nodejs/commit/7c0bf95256f16dba904cba5a16d497a2342d695c)), closes [#140](https://github.com/instana/nodejs/issues/140)
- **tracing:** make activation robust against exotic Array.find override ([c66ea57](https://github.com/instana/nodejs/commit/c66ea5700f48f77803e2e7a8378eb827345e8339))
- **tracing:** only use X-Instana-Service when agent captures it ([0143260](https://github.com/instana/nodejs/commit/0143260a0a029448722d622020a8aa50d8413f54))
- **tracing:** propagate X-INSTANA-L: 0 downstream with AMQP headers ([d845b78](https://github.com/instana/nodejs/commit/d845b78ed5ef470633ae6d5aad42df88b71a39ba))
- **tracing:** support pino log calls with mergingObject only ([e46b1c3](https://github.com/instana/nodejs/commit/e46b1c3c82a328ad1a269c1feb89152e24113fd3))
- **tracing:** trace mongodb aggregate calls ([978e64e](https://github.com/instana/nodejs/commit/978e64edb789070dda8bf320660b5e3e90c14308))
- **tracing:** update for `@elastic/elasticsearch@7.9.1` ([1f337d3](https://github.com/instana/nodejs/commit/1f337d30cd53c10cd3c0d90b71cb3cce8eada00c))
- do not fail if @tludlow-instana-fork/autoprofile is missing ([bc0be0a](https://github.com/instana/nodejs/commit/bc0be0ae1a298856322b93fd170a0e861b382e36))
- **tracing:** remove unused attribute tracer from trace metrics ([88547ef](https://github.com/instana/nodejs/commit/88547ef81eee8c43fa9fad187afb130cc3ad1689))
- **tracing:** trace through graphql-subscription pubsub async iterator ([76031d3](https://github.com/instana/nodejs/commit/76031d331d8534e4ed3ccead34ecbb1c560ef8a2))
- **tracing:** use original args in graphql when another span is active ([ae5ac13](https://github.com/instana/nodejs/commit/ae5ac139dd08c1878af39bbf2e5f23a489c18c12))
- **tracing:** use query.\_callback for ending a mysql call if available ([321c98e](https://github.com/instana/nodejs/commit/321c98e83a82954c5dd676899318ff4c60ec952d))
- init metrics correctly when no config is passed ([a2789ce](https://github.com/instana/nodejs/commit/a2789cea20c86bff8217a2d976bd0804dca59489)), closes [#138](https://github.com/instana/nodejs/issues/138)
- update netlinkwrapper to latest version with support for Node 12.x ([7c39228](https://github.com/instana/nodejs/commit/7c39228c1bbac045c020e2dc6dcc63fe2d9cdd11))

### Features

- **agent:** read span batching option also from tracing section ([1f776d4](https://github.com/instana/nodejs/commit/1f776d46d6329f33939d65041fdc7a78246d62ea))
- **collector:** added instrumentation for @grpc/grpc-js ([d12e386](https://github.com/instana/nodejs/commit/d12e386e95ced2c68d2d549dff83ea3ecfe51735)), closes [#87653](https://github.com/instana/nodejs/issues/87653)
- **collector:** added support for @elastic/elasticsearch v8 ([#707](https://github.com/instana/nodejs/issues/707)) ([dae00bb](https://github.com/instana/nodejs/commit/dae00bb329a95efcdab1e49401958383703427e2))
- **collector:** added support for @google-cloud/storage@6 ([#727](https://github.com/instana/nodejs/issues/727)) ([efcd4f1](https://github.com/instana/nodejs/commit/efcd4f1859ce0107976908658dda1e2113108a1c))
- **collector:** added support for amqplib 0.10.x ([b56a827](https://github.com/instana/nodejs/commit/b56a82791a1b62eed57232df9c2df699b0a4f863))
- **collector:** added support for nats 2.x including trace correlation ([#702](https://github.com/instana/nodejs/issues/702)) ([86a2685](https://github.com/instana/nodejs/commit/86a2685cfaa6e75dc855527714f50960e7d3504a))
- **collector:** added support for redis v4 ([#627](https://github.com/instana/nodejs/issues/627)) ([ad00255](https://github.com/instana/nodejs/commit/ad00255c73bc7ec080a1a91172a8878febe274b2))
- **collector:** added support for sqs-consumer@6.2.0 ([#691](https://github.com/instana/nodejs/issues/691)) ([f8bf9e7](https://github.com/instana/nodejs/commit/f8bf9e79d856a9c449161e76783fd36d02c3ffb0))
- **collector:** tracing all spans when client app is using ES modules ([#672](https://github.com/instana/nodejs/issues/672)) ([7d471ff](https://github.com/instana/nodejs/commit/7d471ff751fbd29ce1c96a752304ec3399d0c78c))
- **core:** added ability to complete specific intermediate spans ([#564](https://github.com/instana/nodejs/issues/564)) ([480ee46](https://github.com/instana/nodejs/commit/480ee4693e91bbcfd11824f42dff31ca7898cba3)), closes [#561](https://github.com/instana/nodejs/issues/561)
- **dynamodb:** capture region as annotation ([4ba64f4](https://github.com/instana/nodejs/commit/4ba64f4d8155b365c0fd4540c1abdbe15b572fb5))
- **fargate, google-cloud-run:** do not instrument npm or yarn ([b9afded](https://github.com/instana/nodejs/commit/b9afdedd027366605d1f37eddb578f882cbedf99))
- **fastify:** Added support for 2.x and 3.x ([#395](https://github.com/instana/nodejs/issues/395)) ([4c7d6ee](https://github.com/instana/nodejs/commit/4c7d6eeb0d8beff6b8c6f27816e0f874af0c3d90))
- **kafka:** use kafka header format 'both' by default ([b2585cf](https://github.com/instana/nodejs/commit/b2585cf7e4c6f31b38d486505699309cb9d759d6))
- **kafkajs:** remove Instana headers on arrival ([f65bc75](https://github.com/instana/nodejs/commit/f65bc753667c8aaf636b0c0c6100f772338e639c))
- **lambda:** W3C trace context support for Lambda tracing ([5b3904e](https://github.com/instana/nodejs/commit/5b3904e7bdbea80a372a0fbc7b32a1262766ac0d))
- **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
- **metrics:** load native dependencies lazily if necessary (plus retry) ([d6af8e4](https://github.com/instana/nodejs/commit/d6af8e4a519bdcff183ea1c5f02f4479a3bfeb02))
- **metrics:** rebuilding native add-ons via node-gyp as opt-in ([3f6ab8f](https://github.com/instana/nodejs/commit/3f6ab8fc1158003d4c5ae911cc9c6b14e8bae675))
- **sdk:** add methods to set the EUM correlation ID/type on the span ([727916c](https://github.com/instana/nodejs/commit/727916c7398219c292faad6e374d57a3838472d2))
- **tracing:** added console.warn & console.error instrumentation ([#391](https://github.com/instana/nodejs/issues/391)) ([6c19b44](https://github.com/instana/nodejs/commit/6c19b447f1d1d8bc6e502a387a9db3b24b2e65c3))
- **tracing:** added instrumentation for ibm db2 ([#532](https://github.com/instana/nodejs/issues/532)) ([0d0b1e0](https://github.com/instana/nodejs/commit/0d0b1e0d4409795206613c4c2cdcf1e270772dd8))
- **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))
- **tracing:** AWS DynamoDB instrumentation ([#294](https://github.com/instana/nodejs/issues/294)) ([4c00dbf](https://github.com/instana/nodejs/commit/4c00dbf8cbf6b2388fa07aa0fcfbdc61c40943c4))
- **tracing:** AWS S3 instrumentation ([#288](https://github.com/instana/nodejs/issues/288)) ([aa1a6ac](https://github.com/instana/nodejs/commit/aa1a6ac8c9f1228782c30c66c41502e94368ffac))
- **tracing:** batch very short/high frequency database exits ([1b967e9](https://github.com/instana/nodejs/commit/1b967e99f472494650421dbcbc8031db433ae8e2))
- **tracing:** improve robustness of custom service naming ([aadcbff](https://github.com/instana/nodejs/commit/aadcbff6f4c2a4264f9920a26723d3e2530c0c73))
- **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))
- **tracing:** instrument AWS Kinesis ([3efb2fa](https://github.com/instana/nodejs/commit/3efb2fa94f9fcf7c332f9a486f312bd94f2331e1))
- **tracing:** instrument AWS SQS ([01e0d14](https://github.com/instana/nodejs/commit/01e0d141ce3f3af78fd305afb424a710d5eae539))
- **tracing:** instrument MongoDB native driver unified topology ([b75e04d](https://github.com/instana/nodejs/commit/b75e04ddab998f83965a38c688646b512c15c78c))
- **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))
- **tracing:** instrument sqs-consumer ([b6aebd9](https://github.com/instana/nodejs/commit/b6aebd97c1d92f4845965a040524d4746beddf11))
- **tracing:** prepare Kafka header migration ([0c0be2d](https://github.com/instana/nodejs/commit/0c0be2df1d3d2230e55cf7e3ccfd0a825ad4936c))
- **tracing:** redact embedded credentials from URLs ([7bd506d](https://github.com/instana/nodejs/commit/7bd506d77ed5bf4afb709045516d67549ed5bec7)), closes [#327](https://github.com/instana/nodejs/issues/327)
- **tracing:** trace correlation for SNS-to-SQS ([1d901b8](https://github.com/instana/nodejs/commit/1d901b8a57bb37973ff50fc1d30cbda28c8385b3))
- **tracing:** update handling of W3C trace context headers ([e98a856](https://github.com/instana/nodejs/commit/e98a856ae9130b369cfde587a76d4679369db6fe))
- **tracing:** use new common tracing config from from agent response ([7f8825f](https://github.com/instana/nodejs/commit/7f8825f4eddb585595457378cfb2fb36eb868a37))
- **tracing, fetch:** instrument native fetch ([1a48168](https://github.com/instana/nodejs/commit/1a48168d32b5325041542cfbb41c84775ff1e518))
- added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))
- do not instrument npm or yarn ([4091f52](https://github.com/instana/nodejs/commit/4091f5228e6df1df1d9232656ef441326782fb90))
- **api:** annotate auto-trace spans ([79975c0](https://github.com/instana/nodejs/commit/79975c0b2ce96630de31b9fcb62c119a0ce0d21e))
- **events:** report unhandled promise rejections as issues ([51855f8](https://github.com/instana/nodejs/commit/51855f8733b75f9d594edfa6272934dd952be881))
- **fargate:** add support for Fargate via @tludlow-instana-fork/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
- **metric:** support npm install deployment scenario ([f7d8257](https://github.com/instana/nodejs/commit/f7d825709d3aa49eb6599a572bbeeb9945aebe71))
- **metrics, deps:** update to event-loop-stats@1.3.0 ([a538923](https://github.com/instana/nodejs/commit/a538923ccdf5e5c4fa482cd52a7c5886e92b6fc5))
- **profiling:** add and integrate @tludlow-instana-fork/autoprofile ([0b87465](https://github.com/instana/nodejs/commit/0b874659719b77d24c52a04f7e2c318d8818693b))
- **profiling:** send monitoring issue for missing native addon ([8a61b26](https://github.com/instana/nodejs/commit/8a61b2654404507c7f7d2a6ee3535fa5901b065b))
- **sdk:** add API to restore the async context manually ([20d0f89](https://github.com/instana/nodejs/commit/20d0f8997683c52b2d8336b18daa5877b42f4484))
- **tracing:** add ability to disable individual tracers ([135f67c](https://github.com/instana/nodejs/commit/135f67c64eb39c7a062b5db23ed908a30f130471))
- **tracing:** add log4js instrumentation ([5f7b1bd](https://github.com/instana/nodejs/commit/5f7b1bd00514e49ec21d056e7e3327783a512754))
- **tracing:** add pg-native instrumentation ([bcec198](https://github.com/instana/nodejs/commit/bcec1988cee03c4aad539c7c2b3cf81479a72d13))
- **tracing:** add support for INSTANA_EXTRA_HTTP_HEADERS ([e055cde](https://github.com/instana/nodejs/commit/e055cdedccdbf2f4edf42ef63d9c66d76ba1897c))
- **tracing:** allow early init ([52b7c39](https://github.com/instana/nodejs/commit/52b7c39c440b514da6cdc7ba7793ce95db44d75b))
- **tracing:** Bunyan: support for capturing nested error object msgs ([56accb7](https://github.com/instana/nodejs/commit/56accb7f41925e14adaf8080982e7777ef70be1f))
- **tracing:** capture HTTP response headers for entry spans ([6931f66](https://github.com/instana/nodejs/commit/6931f66b6a017e1a36e1ac7cc6c562bf216f79dc))
- **tracing:** capture request and response headers on HTTP exits ([bbb288a](https://github.com/instana/nodejs/commit/bbb288ada7f12033ef65ac13c16c10296e38f3ac))
- **tracing:** fire monitoring issue event for tracer issue ([c0b2456](https://github.com/instana/nodejs/commit/c0b24563c35cb172cf7bf217968e4c61e17b1d0f))
- **tracing:** Google Cloud Storage client instrumentation ([c206b56](https://github.com/instana/nodejs/commit/c206b564af0852e0d3d628b64de4db4909fc42ed))
- **tracing:** instrument Apigee edgemicro package ([269a68a](https://github.com/instana/nodejs/commit/269a68a02b027a4ed6892a33b8e61314dbab3062))
- **tracing:** instrument graphql ([942000a](https://github.com/instana/nodejs/commit/942000a322911bc0e06afba1cea1662071ccf452))
- **tracing:** instrument kafkajs ([7afec29](https://github.com/instana/nodejs/commit/7afec29e987540be816f79da8951bb41986ab423))
- **tracing:** instrument modern ES client @elastic/elasticsearch ([ecf8621](https://github.com/instana/nodejs/commit/ecf86215be316484445b32efad970e8264619611))
- **tracing:** instrument nats and node-nats-streaming ([a987e00](https://github.com/instana/nodejs/commit/a987e005bd2cd1573b88512b56c31c549c218889))
- **tracing:** instrument superagent ([09e5c25](https://github.com/instana/nodejs/commit/09e5c257677442ad9f705b8e092154b3e28cf0e4))
- **tracing:** instrument Winston versions <= 2.x ([f19ed13](https://github.com/instana/nodejs/commit/f19ed1333d804b0cd8565d69f5c285d66d5d865d))
- **tracing:** instrumenting @apollo/gateway to capture errors ([04de499](https://github.com/instana/nodejs/commit/04de4991ceb7a29357b2f349eb509ce525e4a7f0))
- **tracing:** keep monitoring issue open indefinitely ([efba7b8](https://github.com/instana/nodejs/commit/efba7b88104033d0463383badac6300e972c5a51))
- **tracing:** manage W3C trace context headers for HTTP ([ef6fdf3](https://github.com/instana/nodejs/commit/ef6fdf3b365ca7258afa14af45c55721093e69d7))
- **tracing:** process correlation info from X-INSTANA-L ([c11dfb0](https://github.com/instana/nodejs/commit/c11dfb01006154c9a3c7147b5dc87df87f2d9c09))
- **tracing:** provide internal tracing metrics ([ea712db](https://github.com/instana/nodejs/commit/ea712db12b0e4358a83db1e87ec9b9df85766633))
- **tracing:** record hapi.js path templates when tracing HTTP entries ([78df856](https://github.com/instana/nodejs/commit/78df85684c8863ebf6158defa81c30fefe88de2e))
- **tracing:** redact secrets instead of removing the whole query param ([1f20acd](https://github.com/instana/nodejs/commit/1f20acd229f49a36ed305440c1252f32bbb1fb66))
- **tracing:** support for kafka-node >= 4.0.0 ([e5a2daf](https://github.com/instana/nodejs/commit/e5a2daf18b7f18a42ee7914f4ad8fa859d6cb9aa)), closes [#158](https://github.com/instana/nodejs/issues/158)
- **tracing:** support INSTANA_SERVICE_NAME/config.serviceName ([855252d](https://github.com/instana/nodejs/commit/855252db87f77b6f6722db859c97661a08cabcaa))
- **tracing:** support tracing of deferred HTTP exits ([55db775](https://github.com/instana/nodejs/commit/55db775df23d0d28d342552ff7e8dfcb4051a3b6))
- **tracing:** support X-INSTANA-SYNTHETIC ([8f30931](https://github.com/instana/nodejs/commit/8f309318c4bd39132b26d3a6e1dd135d90cc9a82))
- **tracing:** trace http2 communication ([1d0b52c](https://github.com/instana/nodejs/commit/1d0b52cba7b126a56207f58b8036d183caf2dc0c))
- support Node.js 12 ([1eaa662](https://github.com/instana/nodejs/commit/1eaa66229140f1bbdc9e6572f6d29e3d10e9439e))
- support Node.js 14 ([fce8c83](https://github.com/instana/nodejs/commit/fce8c8314ac4da3cf9febf795cf502806f4d9ef7))
- **tracing:** warn when @tludlow-instana-fork/collector is initalized too late ([38df614](https://github.com/instana/nodejs/commit/38df614215b9b82ce67cefc0988a681fdb601437))

### Reverts

- Revert "test: added tsoa framework to integration tests (#492)" ([479a3f6](https://github.com/instana/nodejs/commit/479a3f60f34c87828d2db1d515723f2aa9b076f7)), closes [#492](https://github.com/instana/nodejs/issues/492)

### BREAKING CHANGES

- Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
  Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
- Starting with version 2.0.0, consumers of the package who
  still use the deprecated package name instana-nodejs-sensor will need to follow
  https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
  to receive updates in the future.
- Removed "disableAutomaticTracing" config option.
  Use `instana({ automaticTracingEnabled: Boolean })`.
- Removed "reportUncaughtException" config option.
  The feature was completely removed.
- Removed support for passing logger to instana initialisation.
  Use `instana.setLogger(logger)`".
- v2 has dropped support for Node 6/8.

## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)

### Bug Fixes

- **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))

# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)

### Features

- **collector:** added support for amqplib 0.10.x ([b56a827](https://github.com/instana/nodejs/commit/b56a82791a1b62eed57232df9c2df699b0a4f863))

# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)

### Features

- **collector:** added support for @google-cloud/storage@6 ([#727](https://github.com/instana/nodejs/issues/727)) ([efcd4f1](https://github.com/instana/nodejs/commit/efcd4f1859ce0107976908658dda1e2113108a1c))

## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)

### Bug Fixes

- **grpc-js:** capture the correct destination host per grpc-js client ([5bc3188](https://github.com/instana/nodejs/commit/5bc31889f45b98e927f97ffebbda238a226494fb))
- **grpc-js:** do not mark cancelled calls as erroneous ([fea8b80](https://github.com/instana/nodejs/commit/fea8b80d51ab928c70efb884ac6cbfc24e7c46a5))

# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)

### Features

- **collector:** added support for @elastic/elasticsearch v8 ([#707](https://github.com/instana/nodejs/issues/707)) ([dae00bb](https://github.com/instana/nodejs/commit/dae00bb329a95efcdab1e49401958383703427e2))
- **tracing:** improve robustness of custom service naming ([aadcbff](https://github.com/instana/nodejs/commit/aadcbff6f4c2a4264f9920a26723d3e2530c0c73))

# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)

### Features

- **collector:** added support for nats 2.x including trace correlation ([#702](https://github.com/instana/nodejs/issues/702)) ([86a2685](https://github.com/instana/nodejs/commit/86a2685cfaa6e75dc855527714f50960e7d3504a))

# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)

### Features

- **collector:** added support for sqs-consumer@6.2.0 ([#691](https://github.com/instana/nodejs/issues/691)) ([f8bf9e7](https://github.com/instana/nodejs/commit/f8bf9e79d856a9c449161e76783fd36d02c3ffb0))

# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)

### Features

- **tracing, fetch:** instrument native fetch ([1a48168](https://github.com/instana/nodejs/commit/1a48168d32b5325041542cfbb41c84775ff1e518))

## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)

### Features

- **collector:** tracing all spans when client app is using ES modules ([#672](https://github.com/instana/nodejs/issues/672)) ([7d471ff](https://github.com/instana/nodejs/commit/7d471ff751fbd29ce1c96a752304ec3399d0c78c))

## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)

### Bug Fixes

- **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))

# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)

### Features

- **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))

# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)

### Features

- **collector:** added support for redis v4 ([#627](https://github.com/instana/nodejs/issues/627)) ([ad00255](https://github.com/instana/nodejs/commit/ad00255c73bc7ec080a1a91172a8878febe274b2))
- **kafka:** use kafka header format 'both' by default ([b2585cf](https://github.com/instana/nodejs/commit/b2585cf7e4c6f31b38d486505699309cb9d759d6))

# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)

### Features

- **dynamodb:** capture region as annotation ([4ba64f4](https://github.com/instana/nodejs/commit/4ba64f4d8155b365c0fd4540c1abdbe15b572fb5))

## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)

### Bug Fixes

- **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))

# 2.7.0 (2022-08-31)

### Features

- **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)

## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)

**Note:** Version bump only for package @tludlow-instana-fork/collector

# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)

### Features

- **core:** added ability to complete specific intermediate spans ([#564](https://github.com/instana/nodejs/issues/564)) ([480ee46](https://github.com/instana/nodejs/commit/480ee4693e91bbcfd11824f42dff31ca7898cba3)), closes [#561](https://github.com/instana/nodejs/issues/561)
- **sdk:** add methods to set the EUM correlation ID/type on the span ([727916c](https://github.com/instana/nodejs/commit/727916c7398219c292faad6e374d57a3838472d2))

# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)

### Features

- added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))

# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)

### Bug Fixes

- **http:** only capture response status/headers when they have been sent ([850b8e4](https://github.com/instana/nodejs/commit/850b8e43f93749e422e9923c10cef9a8d1e2f3ea)), closes [#548](https://github.com/instana/nodejs/issues/548)
- **rdkafka:** use long trace IDs with new Kafka message headers ([9c47349](https://github.com/instana/nodejs/commit/9c47349b5de214828c075eded71242a32c1f26c8))

### Features

- **kafkajs:** remove Instana headers on arrival ([f65bc75](https://github.com/instana/nodejs/commit/f65bc753667c8aaf636b0c0c6100f772338e639c))

# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)

### Bug Fixes

- **agent:** reduce log level for sending data from debug to trace ([8b57a71](https://github.com/instana/nodejs/commit/8b57a71eb9818f83acbdc8f9bf63623a7e415d07))

### Features

- **agent:** read span batching option also from tracing section ([1f776d4](https://github.com/instana/nodejs/commit/1f776d46d6329f33939d65041fdc7a78246d62ea))
- **tracing:** added instrumentation for ibm db2 ([#532](https://github.com/instana/nodejs/issues/532)) ([0d0b1e0](https://github.com/instana/nodejs/commit/0d0b1e0d4409795206613c4c2cdcf1e270772dd8))

# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)

### Bug Fixes

- **tracing:** cancel sqs entry span sync when no messages are available ([8a66277](https://github.com/instana/nodejs/commit/8a662773716832469aeb1b512b5225043c5f344f))
- fix duplicated logger names and prevent them ([9d576c5](https://github.com/instana/nodejs/commit/9d576c54b97e9999820e0c597ec3fd10d3c660e2))

### Features

- **tracing:** use new common tracing config from from agent response ([7f8825f](https://github.com/instana/nodejs/commit/7f8825f4eddb585595457378cfb2fb36eb868a37))

# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)

### Bug Fixes

- dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
- remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
- removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
- removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
- removed support for passing parent logger during initialisation ([bd96791](https://github.com/instana/nodejs/commit/bd9679151388cd8c865df8910b35f7f00e1ca6de))
- removed uncaught exception config ([fb6570a](https://github.com/instana/nodejs/commit/fb6570a862dbdec776eb78b840dcdc4184cd5f00))
- self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))

### BREAKING CHANGES

- Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
  Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
- Starting with version 2.0.0, consumers of the package who
  still use the deprecated package name instana-nodejs-sensor will need to follow
  https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
  to receive updates in the future.
- Removed "disableAutomaticTracing" config option.
  Use `instana({ automaticTracingEnabled: Boolean })`.
- Removed "reportUncaughtException" config option.
  The feature was completely removed.
- Removed support for passing logger to instana initialisation.
  Use `instana.setLogger(logger)`".
- v2 has dropped support for Node 6/8.

## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)

### Bug Fixes

- **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)

# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)

### Bug Fixes

- **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
- **collector:** work around Bazel's node-patches module ([d06e9be](https://github.com/instana/nodejs/commit/d06e9be187e9f97c43e4a129ebb2f5e18f82ef8c))

### Features

- **collector:** added instrumentation for @grpc/grpc-js ([d12e386](https://github.com/instana/nodejs/commit/d12e386e95ced2c68d2d549dff83ea3ecfe51735)), closes [#87653](https://github.com/instana/nodejs/issues/87653)
- **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))

### Reverts

- Revert "test: added tsoa framework to integration tests (#492)" ([479a3f6](https://github.com/instana/nodejs/commit/479a3f60f34c87828d2db1d515723f2aa9b076f7)), closes [#492](https://github.com/instana/nodejs/issues/492)

# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)

### Bug Fixes

- **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))

### Features

- **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))

# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)

### Bug Fixes

- **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)

## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)

**Note:** Version bump only for package @tludlow-instana-fork/collector

## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)

### Bug Fixes

- **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)

## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)

### Bug Fixes

- **collector:** prevent initializing @tludlow-instana-fork/collector multiple times ([b3261b7](https://github.com/instana/nodejs/commit/b3261b7a653b406cbe2eeaaf9050134bbeedfac9))

## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)

### Bug Fixes

- **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1))
- **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))
