# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **agent:** reduce log level for sending data from debug to trace ([8b57a71](https://github.com/instana/nodejs/commit/8b57a71eb9818f83acbdc8f9bf63623a7e415d07))
* **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))
* **aws-fargate:** cannot read property 'cpu' of undefined ([#671](https://github.com/instana/nodejs/issues/671)) ([bea107c](https://github.com/instana/nodejs/commit/bea107c84191111302dc91e164a7b68d29731d07))
* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))
* **aws-lambda:** reduced backend retries & timeout ([#611](https://github.com/instana/nodejs/issues/611)) ([cab67dd](https://github.com/instana/nodejs/commit/cab67dd10b0f0b7ccfce2787b95e5a020d831cff))
* **aws-lambda:** reduced deadlocks and long running lambda executions ([#666](https://github.com/instana/nodejs/issues/666)) ([6800be0](https://github.com/instana/nodejs/commit/6800be01d32989723799894dd75a834f2c6c3f30))
* **aws-lambda:** respect INSTANA_LOG_LEVEL ([#681](https://github.com/instana/nodejs/issues/681)) ([8c00a0c](https://github.com/instana/nodejs/commit/8c00a0cf905d0c21fb56d10496087a8a07599b51))
* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))
* **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))
* **collector:** mysql2/promise not working with ESM ([f059047](https://github.com/instana/nodejs/commit/f059047d8be41230a9bf5ec9fb320a58c055c630))
* **collector:** resolved elasticsearch legacy error ([ea4f59f](https://github.com/instana/nodejs/commit/ea4f59f37a57e2fc88855bc89ac47775dd1048b4))
* **db2:** redact password also from the end of the connection string ([ac4c46d](https://github.com/instana/nodejs/commit/ac4c46db11298dcdcc12017e4543972a93263f84)), closes [#614](https://github.com/instana/nodejs/issues/614)
* **fargate:** detect Node.js version, use matching @instana/aws-fargate version ([0d1f955](https://github.com/instana/nodejs/commit/0d1f9557d650aad45673c2caaa22b8906b9b29d3))
* **google-cloud-run:** detect Node.js version, use matching @instana/google-cloud-run version ([451ad1f](https://github.com/instana/nodejs/commit/451ad1f173bff3298ee1250dd2477316ff05adcc))
* **grpc-js:** capture the correct destination host per grpc-js client ([5bc3188](https://github.com/instana/nodejs/commit/5bc31889f45b98e927f97ffebbda238a226494fb))
* **grpc-js:** do not mark cancelled calls as erroneous ([fea8b80](https://github.com/instana/nodejs/commit/fea8b80d51ab928c70efb884ac6cbfc24e7c46a5))
* **http:** only capture response status/headers when they have been sent ([850b8e4](https://github.com/instana/nodejs/commit/850b8e43f93749e422e9923c10cef9a8d1e2f3ea)), closes [#548](https://github.com/instana/nodejs/issues/548)
* **kafkajs:** use long trace IDs with new Kafka message headers ([5674b08](https://github.com/instana/nodejs/commit/5674b086b1481e0aaf7c352924fbd45634456461))
* **lambda:** fix concurrency bug in preflight request handling ([5509dbc](https://github.com/instana/nodejs/commit/5509dbc554faa4acd4b72b7c56ded161cc5332f8))
* **lambda:** increase socket and HTTP timeout for Lambda extension ([7a07a8b](https://github.com/instana/nodejs/commit/7a07a8b1f596cf611bb8a144316b1432a688e1eb))
* **lambda:** interprete deadlineMs as absolute timestamp ([3326e67](https://github.com/instana/nodejs/commit/3326e6768aa962d7514eed314dd1c0a66612e69f))
* **lambda:** remove nodejs8.10 from compatible runtimes ([ff945c2](https://github.com/instana/nodejs/commit/ff945c228e5361227bdae50ff48cc96b64c6b08c))
* **lambda:** work around req.destroyed not being set in Node.js <= 12 ([bf04a85](https://github.com/instana/nodejs/commit/bf04a85f6524761d9f822e611bb977181c102a0d))
* **rdkafka:** use long trace IDs with new Kafka message headers ([9c47349](https://github.com/instana/nodejs/commit/9c47349b5de214828c075eded71242a32c1f26c8))
* **redis:** suppress error for unsupported redis@4 ([ffad2c2](https://github.com/instana/nodejs/commit/ffad2c2f09ae3672d158bb141c98c38c82a59139))
* **sdk:** work around memory leak with recursive SDK usage ([c9b35eb](https://github.com/instana/nodejs/commit/c9b35eb37f1e41f7b11442dd408ca53f5cb2ac13))
* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))
* **shared-metrics:** package.json not being found ([#590](https://github.com/instana/nodejs/issues/590)) ([d36369e](https://github.com/instana/nodejs/commit/d36369e7cdbb90e5e9ac377a794bab7cec898809)), closes [#581](https://github.com/instana/nodejs/issues/581)
* **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))
* **tracing:** cancel sqs entry span sync when no messages are available ([8a66277](https://github.com/instana/nodejs/commit/8a662773716832469aeb1b512b5225043c5f344f))
* **tracing:** fix log4js message format call ([29c11fa](https://github.com/instana/nodejs/commit/29c11fa803811d91b435bb6e1261fb5fe3c0f9d6))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* fix duplicated logger names and prevent them ([9d576c5](https://github.com/instana/nodejs/commit/9d576c54b97e9999820e0c597ec3fd10d3c660e2))
* **tracing:** implement updateConfig for Kafka instrumentations ([c386ee6](https://github.com/instana/nodejs/commit/c386ee6c01e96a605c39c54c464f41e5c8ee65af))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
* removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
* removed support for passing parent logger during initialisation ([bd96791](https://github.com/instana/nodejs/commit/bd9679151388cd8c865df8910b35f7f00e1ca6de))
* removed uncaught exception config ([fb6570a](https://github.com/instana/nodejs/commit/fb6570a862dbdec776eb78b840dcdc4184cd5f00))
* **aws-lambda:** fixed lambda timeouts when using extension ([#455](https://github.com/instana/nodejs/issues/455)) ([6df5550](https://github.com/instana/nodejs/commit/6df5550e59ab667a1eda5a01d911554e3dc17aee))
* **aws-lambda:** reduced lambda timeout error count when using extension [#443](https://github.com/instana/nodejs/issues/443) ([0bbfeb8](https://github.com/instana/nodejs/commit/0bbfeb8af57a381c5186624cbf5a19ead11ffe61))
* **aws-sdk/v3:** added support for @aws-sdk/* 3.4x ([61cc179](https://github.com/instana/nodejs/commit/61cc17945279f4f0996f87e2d955fc4daf519d24))
* **clean aws:** fixed S3 cleanup when buckets have no objects [skip ci] ([cc3af62](https://github.com/instana/nodejs/commit/cc3af6237e9c94d35f656b31978fabaf2ba71185))
* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
* **collector:** prevent initializing @instana/collector multiple times ([b3261b7](https://github.com/instana/nodejs/commit/b3261b7a653b406cbe2eeaaf9050134bbeedfac9))
* **collector:** work around Bazel's node-patches module ([d06e9be](https://github.com/instana/nodejs/commit/d06e9be187e9f97c43e4a129ebb2f5e18f82ef8c))
* **dependency:** pinned lru-cache to 6.0.0 ([0ceb372](https://github.com/instana/nodejs/commit/0ceb372709bd53d0c6cab2060d8cdaf431133706))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1)), closes [/github.com/npm/node-semver/blob/v7.3.3/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.3/package.json/issues/L39) [/github.com/npm/node-semver/blob/v7.3.5/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.5/package.json/issues/L39)
* **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))
* **deps:** bumped node-fetch to ^2.6.7 (security patch) ([#465](https://github.com/instana/nodejs/issues/465)) ([e8c622b](https://github.com/instana/nodejs/commit/e8c622bd976f9b552572cfed927cb11876315979))
* **deps:** update tar (again) to 5.0.9 ([c94c016](https://github.com/instana/nodejs/commit/c94c0169eeed3a1f31011d60657c0b46f10c3e9c))
* **deps:** upgrade tar ([bdbe381](https://github.com/instana/nodejs/commit/bdbe381cc17a1ffde4c6958bd9d6fd81c3fae966))
* **deps:** upgrade tar/semver in @instana/autoprofile's package-lock ([2b0ffc8](https://github.com/instana/nodejs/commit/2b0ffc8d1213d8990d43c3c8b4cb8218ed1020ed))
* **docs:** Added hint about being logged in with npm ([53c02aa](https://github.com/instana/nodejs/commit/53c02aafb12f59dcd66ff198e73b68f090331cb6))
* **docs:** added missing jq dependency to contributor requirements ([efc2c18](https://github.com/instana/nodejs/commit/efc2c18bac274922efa369b08bf0758cd4f4f6b2))
* **docs:** added missing node.js development version ([#384](https://github.com/instana/nodejs/issues/384)) ([50f0e81](https://github.com/instana/nodejs/commit/50f0e81717af7183967c7a340ac4d42b6d46ecfd))
* **lambda:** update extension binary, increase retries and timeout ([3eeb12c](https://github.com/instana/nodejs/commit/3eeb12c699b311affd8c9e0b08a48fb6caa53eb5))
* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)
* **metrics:** fix `path must be a string or Buffer` ([bbf799b](https://github.com/instana/nodejs/commit/bbf799b3afb960b411840bee9a7c68ff481686a0))
* **security:** updated tar dependency ([6e7098e](https://github.com/instana/nodejs/commit/6e7098eb0107e975c9f2476c81ed0bd55a647729))
* **shared-metrics:** Reverted package-lock.json changes ([f137b3f](https://github.com/instana/nodejs/commit/f137b3ffe95f562415b5eaed7fc50d4d1a411446))
* **test:** make version check more lenient ([d5b37e3](https://github.com/instana/nodejs/commit/d5b37e336c7c524bcdc4a155e5f393a34ae0467b))
* **tests:** added missing pg host to run-tests.sh script ([a619cb0](https://github.com/instana/nodejs/commit/a619cb0d5cc06a504a4c37b0a9fc9178ef264baa))
* **tracing:** avoid duplicate Lambda timeout message ([0cd473d](https://github.com/instana/nodejs/commit/0cd473d4ab50bf6b1ab1745a117b50486b324600))
* **tracing:** capture HTTP status code for GraphQL requests ([c68bc5e](https://github.com/instana/nodejs/commit/c68bc5ea986738e2e19d07f409357b5df22bb805))
* **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)
* **tracing:** fix support for multi commands in redis@0.12.1 ([#377](https://github.com/instana/nodejs/issues/377)) ([332703e](https://github.com/instana/nodejs/commit/332703e1eeeba62a6487b4099c600b99409a9dcd))
* **tracing:** fix vendored version of emitter-listener ([ebc9c17](https://github.com/instana/nodejs/commit/ebc9c17e348808d2afcb6bd09661bfdfa22c8c34))
* **tracing:** fix vendoring of emitter-listener for legacy cls context ([440fd32](https://github.com/instana/nodejs/commit/440fd3218a37bc333da26c2365bfc1116a931b9b))
* **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)
* **tracing:** reject trace ID/parent span ID with all bytes zero ([a11f933](https://github.com/instana/nodejs/commit/a11f9333190d4af257291a7ccc37597ab2563fa4))
* **tracing:** rename process.namespaces to process.instanaNamespaces ([6c63434](https://github.com/instana/nodejs/commit/6c634341d2d8f9ef09ef6b1e5ce8e2d082dcb960))
* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))
* **tracing:** vendor fixed version of emitter-listener ([5caa128](https://github.com/instana/nodejs/commit/5caa128f639671d3c012a50168444eaa36366ceb))
* add back core methods that had been removed with 1.127.0 ([b249c33](https://github.com/instana/nodejs/commit/b249c33622c4ba1b959cde2634a6494d837d4c31))
* **agent:** exponential backoff retries for failed announce attempts ([31a4be6](https://github.com/instana/nodejs/commit/31a4be6ec3c4e6b9ddce9321978768435e33aa35))
* **agent:** improve agent lookup log messages ([6e8a256](https://github.com/instana/nodejs/commit/6e8a256b77a973931a9497d365f351b71f0d5303))
* **api:** fix annotate method for paths to nested data attributes ([d40aa1a](https://github.com/instana/nodejs/commit/d40aa1a9154b9a7587600e335e5b3864868b4198))
* **docs:** fix link to changelog ([9c0d588](https://github.com/instana/nodejs/commit/9c0d588b300ad670fde03026323d917f1f843c7c)), closes [#243](https://github.com/instana/nodejs/issues/243)
* **events:** handle nulls properly when reporting exceptions/rejections ([4aaa22b](https://github.com/instana/nodejs/commit/4aaa22bb0351823cf1349250d3624dedd3f66bc7))
* **fargate:** also report availability zone ([5ed39f7](https://github.com/instana/nodejs/commit/5ed39f7a97209aac7b5a1abde02c446bee7cba77))
* **fargate:** collect Docker metrics on platform version 1.4.0 ([21b49de](https://github.com/instana/nodejs/commit/21b49de7ac84a48b71562373e083c9c0bb89da6c))
* **fargate:** don't use outdated cache layer when building fargate image ([0137757](https://github.com/instana/nodejs/commit/0137757ec0d79e296d1272b119246ed0ecd607e0))
* **fargate:** make native add-ons optional for Fargate ([602d4a6](https://github.com/instana/nodejs/commit/602d4a684bd9fe87c54949710d5a9e2bbec93245))
* **fargate, google-cloud-run:** filter environment variables secrets ([43f1624](https://github.com/instana/nodejs/commit/43f1624ed87f1eec6e9db192ae8d7e23873ad9ad))
* **lambda:** add a connection timeout in addition to read timeout ([ffe9ed0](https://github.com/instana/nodejs/commit/ffe9ed0992aca44b0fee56cfd1752e0291acb7fc))
* **lambda:** add Node.js 14 to compatible runtimes ([66a0b9f](https://github.com/instana/nodejs/commit/66a0b9f089e74a1698164fb30a0fd4d351e5c800))
* **lambda:** avoid duplicated postHandler calls ([7fd00d2](https://github.com/instana/nodejs/commit/7fd00d220bcb5a7ee76902c82910b367d503cd6b))
* **lambda:** cache target handler across invocations ([65a3147](https://github.com/instana/nodejs/commit/65a314752dac579ff8ee4c52536428463bbee9d3))
* **lambda:** call original callbacks in wrapped legacy API ([1f6a323](https://github.com/instana/nodejs/commit/1f6a3239790161c3a3112faf35484b7d1c972b76))
* **lambda:** convert error.message to string if necessary ([87e7769](https://github.com/instana/nodejs/commit/87e7769628020751efe67565b686862bef472c7a))
* **lambda:** fix build scripts for local tar.gz variant ([c00f95b](https://github.com/instana/nodejs/commit/c00f95b2242dfd1981dc1431c4d4f5055cd2928a))
* **lambda:** fix timeouts ([8a15f92](https://github.com/instana/nodejs/commit/8a15f923f2f479ba82f650956e17cf7dd5f3e8f7))
* **lambda:** replace intid value if result object is reused ([8ae5ada](https://github.com/instana/nodejs/commit/8ae5adaf1e03ab5379eb85bd1868da323951bbc8))
* **lambda:** reset requestHasFailed flag on start of Lambda handler ([0654527](https://github.com/instana/nodejs/commit/0654527e42aa428b6c8dc7c06abd4b567bfa1d90))
* **lambda:** stop sending to back end when a request has already failed ([9f3a227](https://github.com/instana/nodejs/commit/9f3a227728412e8e69573b23bbb7f070353b3fa2))
* **lambda:** support INSTANA_DEBUG in serverless tracing ([d8d8a47](https://github.com/instana/nodejs/commit/d8d8a4729a47974be73b62725a18f1ee5700a892))
* **lambda:** workaround for stale timeout events ([82c37f4](https://github.com/instana/nodejs/commit/82c37f43a0cea18f53d87dc208d6a3dfda7c094c))
* **metrics:** move event-loop-lag from optionalDeps to dependencies ([e5ebc68](https://github.com/instana/nodejs/commit/e5ebc68fa7377ffe5547082a265061756d0f163f))
* **metrics:** provide name and dependencies when package.json is missing ([63a17a2](https://github.com/instana/nodejs/commit/63a17a2fd640b7aeba10f7a639c981422ae94003))
* **metrics:** register gc stats loader listener immediately ([fb99f84](https://github.com/instana/nodejs/commit/fb99f84194fd8d5ddd8d72d94e8268d0880ebec9))
* **opentracing:** default to type entry when no parent is referenced ([712048d](https://github.com/instana/nodejs/commit/712048dde5ded956aead41a381f835f68aef7813))
* **profiling:** fix external process id assignment ([810503c](https://github.com/instana/nodejs/commit/810503cddbc3ab0d6dd71aa0cd581ae8717d3ff4))
* **profiling:** native addons update ([55ba691](https://github.com/instana/nodejs/commit/55ba691057252c233c71808b04c7d0285870ce3e))
* **profiling:** warn when agent does not support Node.js profiling ([b9c91da](https://github.com/instana/nodejs/commit/b9c91da7cabdc6e8985f44afb99112f5a0409a39))
* **sdk:** run original fn in SDK wrappers when tracing is not active ([555fdf1](https://github.com/instana/nodejs/commit/555fdf1a8b28043770374b67267a30c2e95ccf7a))
* **serverless:** fix version condition for legacy timeout handling ([e01ccf7](https://github.com/instana/nodejs/commit/e01ccf7de1793984e8725e801fea5e48c6542c5f))
* **serverless:** force agent-base@6.0.2 version ([84b5977](https://github.com/instana/nodejs/commit/84b597773f94b4a6b18356652396c92cc16ea4c3))
* **test:** fix test for uncaught exception ([d48f580](https://github.com/instana/nodejs/commit/d48f580646a4c51964dda2549e9ab65af9049763))
* **test:** unflaky batching test ([9f546bf](https://github.com/instana/nodejs/commit/9f546bf560f693cb2cba4b1ac673c2ae70ceade2))
* **tests:** fix http client url expectation ([da3f176](https://github.com/instana/nodejs/commit/da3f176d81872f566a75db6a88fdb5503a9c352a))
* **tests:** skip http2 tests in Node.js 8 ([ba526c0](https://github.com/instana/nodejs/commit/ba526c09698101d5f519049ca83f8882e220635a)), closes [#1](https://github.com/instana/nodejs/issues/1) [#0](https://github.com/instana/nodejs/issues/0) [#1](https://github.com/instana/nodejs/issues/1) [#2](https://github.com/instana/nodejs/issues/2) [#3](https://github.com/instana/nodejs/issues/3) [#4](https://github.com/instana/nodejs/issues/4) [#5](https://github.com/instana/nodejs/issues/5) [#6](https://github.com/instana/nodejs/issues/6) [#7](https://github.com/instana/nodejs/issues/7) [#8](https://github.com/instana/nodejs/issues/8) [#9](https://github.com/instana/nodejs/issues/9) [#10](https://github.com/instana/nodejs/issues/10) [#11](https://github.com/instana/nodejs/issues/11) [#12](https://github.com/instana/nodejs/issues/12) [#13](https://github.com/instana/nodejs/issues/13) [#14](https://github.com/instana/nodejs/issues/14) [#15](https://github.com/instana/nodejs/issues/15) [#16](https://github.com/instana/nodejs/issues/16) [#17](https://github.com/instana/nodejs/issues/17) [#1](https://github.com/instana/nodejs/issues/1) [#0](https://github.com/instana/nodejs/issues/0) [#1](https://github.com/instana/nodejs/issues/1) [#2](https://github.com/instana/nodejs/issues/2) [#3](https://github.com/instana/nodejs/issues/3) [#4](https://github.com/instana/nodejs/issues/4) [#5](https://github.com/instana/nodejs/issues/5) [#6](https://github.com/instana/nodejs/issues/6) [#7](https://github.com/instana/nodejs/issues/7) [#8](https://github.com/instana/nodejs/issues/8) [#9](https://github.com/instana/nodejs/issues/9) [#10](https://github.com/instana/nodejs/issues/10) [#11](https://github.com/instana/nodejs/issues/11) [#12](https://github.com/instana/nodejs/issues/12) [#13](https://github.com/instana/nodejs/issues/13) [#14](https://github.com/instana/nodejs/issues/14) [#15](https://github.com/instana/nodejs/issues/15) [#16](https://github.com/instana/nodejs/issues/16) [#17](https://github.com/instana/nodejs/issues/17)
* **tracing:** add more mongodb command names ([3bbaea4](https://github.com/instana/nodejs/commit/3bbaea4feaa646c2fd87b4420dfd6be50564a79d))
* **tracing:** allow tracing GraphQL over other protocols, not only HTTP ([f4ce179](https://github.com/instana/nodejs/commit/f4ce179f74d78d80f63c3206eeb093714c5989f8))
* **tracing:** always capture graphql resolver duration ([577dc1f](https://github.com/instana/nodejs/commit/577dc1ff3f90ec6c0d932bff9967e3b4c31268ea))
* **tracing:** annotate path template on all entries, not only root spans ([0d26ce6](https://github.com/instana/nodejs/commit/0d26ce6b08d28404820b716a9f54625ed0c4ef22))
* **tracing:** avoid false positive warning about initializing too late ([8020e01](https://github.com/instana/nodejs/commit/8020e0129f8d633ec681356851540524cdb298f3))
* **tracing:** capture error message/stack with SDK spans ([bb60320](https://github.com/instana/nodejs/commit/bb603200639232a05e0e041ed9fcc953ffe917b8))
* **tracing:** capture spans for HTTP entries that time out client side ([0e53a50](https://github.com/instana/nodejs/commit/0e53a50bd54df02229d9f8eff3c99a3edfc24d7c))
* **tracing:** do not add tracing headers to signed aws-sdk requests ([cc3a99b](https://github.com/instana/nodejs/commit/cc3a99b738c9058e2abf713cb33622f4cb23d1d2))
* **tracing:** do not remove tags from lower priority spans ([f0861b0](https://github.com/instana/nodejs/commit/f0861b0b122415e93dbb4fa85971d07a8b196852))
* **tracing:** fix handling of server-timing header for edge cases ([1b4ba5d](https://github.com/instana/nodejs/commit/1b4ba5d8bfc3a9cef1e814ee2205e1d6b67468ff))
* **tracing:** fix stack trace capturing for Winston log calls. ([4cf4078](https://github.com/instana/nodejs/commit/4cf407865691c73bd0d8a08c11ff1f83db073fcf))
* **tracing:** fix tracing for outdated versions of mongodb package ([ab3c388](https://github.com/instana/nodejs/commit/ab3c388f9d38bf04ae74ead9385a56c8fd0cd1f6))
* **tracing:** fix TypeError in @elastic/elasticsearch instrumentation ([f695b92](https://github.com/instana/nodejs/commit/f695b924db75f4ca484ac5f82517cff99f281ca1))
* **tracing:** freeze custom path template annotation ([cb8d466](https://github.com/instana/nodejs/commit/cb8d466b272b3dddc5fd66c5694dbfe8c62860f5))
* **tracing:** fully cover Winston 3.x API surface ([ac87672](https://github.com/instana/nodejs/commit/ac87672ac522e1dfb0947e0f6e543fc33560e5c5))
* **tracing:** ignore correlation part if level is 0 ([c8eac9b](https://github.com/instana/nodejs/commit/c8eac9bbaf9100ef728cfd253aa299a148327050))
* **tracing:** let instrumented grpc ServiceClient inherit from Client ([218d5cf](https://github.com/instana/nodejs/commit/218d5cf2d2876fb443d6472694f5e52054c84648))
* **tracing:** make activation robust against exotic Array.find override ([c66ea57](https://github.com/instana/nodejs/commit/c66ea5700f48f77803e2e7a8378eb827345e8339))
* **tracing:** only use X-Instana-Service when agent captures it ([0143260](https://github.com/instana/nodejs/commit/0143260a0a029448722d622020a8aa50d8413f54))
* **tracing:** port upstream cls-hooked fixes ([04241fe](https://github.com/instana/nodejs/commit/04241feff5d3ccc54d6c5ee0a8391cc5936e0521))
* **tracing:** removed duplicated instrumentation of receiveMessage ([2e248a5](https://github.com/instana/nodejs/commit/2e248a57c69369f8f43ab4c1af99567383fb8d85))
* **tracing:** start a new trace if W3C correlation is disabled ([fc8bdce](https://github.com/instana/nodejs/commit/fc8bdcefe521921110991567da7a94fb8697f95b))
* bring back obsolete polyfill for Buffer.fromString ([900082f](https://github.com/instana/nodejs/commit/900082f7feec3e64a2140f0b55f2cd90983d1ea3))
* bypass native addon loading in worker threads ([a4b6443](https://github.com/instana/nodejs/commit/a4b644308ee31efceae508958736e5e190ebe928))
* depend on exact versions of [@instana](https://github.com/instana) packages, not a version range ([86542ef](https://github.com/instana/nodejs/commit/86542efabee0084a4e699739e708bd9a671f9fc2))
* depend on exact versions of [@instana](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))
* downgrade to tar@5 because of Node.js compatibility ([810194a](https://github.com/instana/nodejs/commit/810194aa8244a8f4bf6eb628aacb6f36528ef690))
* improve heuristic for detecting yarn/npm ([26065d4](https://github.com/instana/nodejs/commit/26065d448953cf95c44e6a35b83482366e92f09f))
* update to shimmer@1.2.1 to be able to patch async functions ([e712197](https://github.com/instana/nodejs/commit/e71219748c6bd6602befbdb97bd60360afd540c7))
* **tracing:** propagate X-INSTANA-L: 0 downstream with AMQP headers ([d845b78](https://github.com/instana/nodejs/commit/d845b78ed5ef470633ae6d5aad42df88b71a39ba))
* **tracing:** set span.data.service only on first span ([ef7fd77](https://github.com/instana/nodejs/commit/ef7fd774e5cbcc2c41e880ebeb39824a404bcf00))
* **tracing:** support pino log calls with mergingObject only ([e46b1c3](https://github.com/instana/nodejs/commit/e46b1c3c82a328ad1a269c1feb89152e24113fd3))
* log file name if JSON.parse fails for main package.json ([4cee926](https://github.com/instana/nodejs/commit/4cee9269abb2561540eeb60a226c5de5f145fa6b))
* **tracing:** update for `@elastic/elasticsearch@7.9.1` ([1f337d3](https://github.com/instana/nodejs/commit/1f337d30cd53c10cd3c0d90b71cb3cce8eada00c))
* fix bogus warning ([edced80](https://github.com/instana/nodejs/commit/edced804beadd8a177b000f656178aa44add4114))
* remove longer span reporting interval in serverless tracers ([ddffe2d](https://github.com/instana/nodejs/commit/ddffe2d09a3405f485e951dd6ebb64051d6f9583))
* **action:** Source file retrieval is unreliable ([a15e0cc](https://github.com/instana/nodejs/commit/a15e0ccd4a658e1ef0c85714b85f92f5e6a73e06))
* **actions:** Allow retrieval of TypeScipt and JSX files via the backchannel. ([0138c4c](https://github.com/instana/nodejs/commit/0138c4c9d6da588607ecc21248dc71128e0b29ff))
* **agentConnection:** Requests may hang and put sensor in endless announce cycle ([508fcf8](https://github.com/instana/nodejs/commit/508fcf8361e62e7e2926cbc040b791382ca624ec))
* **announce:** enforce min delay of 1 sec before sending first span ([e4f1a6d](https://github.com/instana/nodejs/commit/e4f1a6d76bbc701bfa0aa62818cf173f4dd11a34))
* **announce:** poll for "agent ready" once a second ([0ae53a1](https://github.com/instana/nodejs/commit/0ae53a1da6c6a277779756636ed271059a2279f3))
* **build:** Remove husky to retain the ability to build against Node.js 0.12 ([736ff2d](https://github.com/instana/nodejs/commit/736ff2dfb6165d46faac20528360b57db1b486f3))
* **comm:** Data transmission is broken in Node.js 0.12 ([3802581](https://github.com/instana/nodejs/commit/38025814d97f2a60ff4021ea61b9eaf27f536e39))
* **comm:** Encoding in communication between sensor and agent is only guaranteed via Node.js default opts. ([5e888c6](https://github.com/instana/nodejs/commit/5e888c695c909a244532b3a5a504b79320f0314e))
* **comm:** Transmission of data to agents will fail whenever a character is being transmitted that needs more than one byte. ([8781717](https://github.com/instana/nodejs/commit/87817177dae124bd147e39e0c7fc2d05106fcefd))
* **communication:** Continued announce cycles are no longer necessary when agent is ready to accept data ([8e439c4](https://github.com/instana/nodejs/commit/8e439c4cbdde5973157fd6d81bfcabbbd3504f2b))
* **communication:** Determined PID is not transmitted to agent during announce phase ([85252ea](https://github.com/instana/nodejs/commit/85252eaaca51a4cfa63acdb48f1c6e340da2e8b2))
* **communication:** Treat agent ready call timeouts as failed checks ([3105c37](https://github.com/instana/nodejs/commit/3105c3714cd6fe13d4856d356de86c0726e3a570))
* **dependencies:** Avoid confusion caused by log.warn ([40a79b3](https://github.com/instana/nodejs/commit/40a79b39a4b89e2dcd9498eefe92f4839b1bb09d))
* **example-app:** do not use popular port 3000 in example app ([e5529d4](https://github.com/instana/nodejs/commit/e5529d4e68e37cf9ad34a8fc5937856c7459adfd))
* **http:** Remove duplicated HTTP metric gathering and reduce memory overhead. ([ee82b10](https://github.com/instana/nodejs/commit/ee82b10295f08b8e585105be2b554e111c37f649))
* **http:** Use keep alive connections for all agent communication ([6f45bf2](https://github.com/instana/nodejs/commit/6f45bf2fe4614a6edd8b7e73d1de68f319702102))
* **lamba:** set min log level to info for aws-lambda ([91fcf5d](https://github.com/instana/nodejs/commit/91fcf5d6aec5abd4b0b17535ad7aae2e3a645988))
* **lambda:** add span.f.cp=AWS for ref extraction ([560011f](https://github.com/instana/nodejs/commit/560011ff883955f462317fc02d39c72f062f99f8))
* **lambda:** always handle handler's callback and returned promise ([ece6c9d](https://github.com/instana/nodejs/commit/ece6c9d7c1e666a74e8f3cf57120edc16a7d1481))
* **lambda:** automatically set required permissions for Lambda layer ([9fb6e01](https://github.com/instana/nodejs/commit/9fb6e01ba12cc0913bda0757e3194b18a87fdf1c))
* **lambda:** avoid metric key conflicts ([354b0aa](https://github.com/instana/nodejs/commit/354b0aaa6973a4afca656e290c0f2bee21db12a8))
* **lambda:** clean up serverless in-process metrics ([c0458e4](https://github.com/instana/nodejs/commit/c0458e45242b487854aadfb7253b837cfb7f7144))
* **lambda:** fix package name in callback example ([cc5d352](https://github.com/instana/nodejs/commit/cc5d352b9589a39055b60fb8975fcbd8d9682e4e))
* **lambda:** init core instrumentations early ([f2e87d0](https://github.com/instana/nodejs/commit/f2e87d01d16fb219c3bd0321b27923d4b65936a2))
* **lambda:** make serverless-acceptor accept data ([7b17c0f](https://github.com/instana/nodejs/commit/7b17c0ff66997c1d58fbd3404c8c63429eac1554))
* **lambda:** support `INSTANA_ENDPOINT_URL` and `INSTANA_AGENT_KEY` ([faae13c](https://github.com/instana/nodejs/commit/faae13c9d9a80d877affa6a5344bcac2ab1e2c48))
* **lambda:** workaround for issue node/16196 in Node 8.10 ([97946f9](https://github.com/instana/nodejs/commit/97946f936c6ceb049aede8c0570cf55b42d580c9))
* **leak:** HTTP agents with maxSockets: Infinity result in a large memory leak ([5c75999](https://github.com/instana/nodejs/commit/5c759990a5c4e2499f12c8314829a72344235046))
* **libuv:** Identification of event-loop-stats availability fails ([8769efc](https://github.com/instana/nodejs/commit/8769efc7328be62f35ce82443897d18df7d61b7b))
* **load tests:** Fix typos ([a60e065](https://github.com/instana/nodejs/commit/a60e065d6be857e59932708c7d60f2f1af7c0249))
* **logging:** Increase log level to warn for failed agent communication ([1d92d91](https://github.com/instana/nodejs/commit/1d92d919029595c39b9f909dbcf7bcc0539d4017))
* **metrics:** Heap space module init fails due to missing v8 module ([16b8551](https://github.com/instana/nodejs/commit/16b8551fd6f106ec39a5f0582071f0d90ff6ad1b))
* **metrics:** process.nextTick treats null as undefined ([40c2e32](https://github.com/instana/nodejs/commit/40c2e32a010c1fa72b5567df83477aea5dd2f627))
* **metrics:** Support scoped modules in dependency analysis ([25f4d9c](https://github.com/instana/nodejs/commit/25f4d9cafed0c11ce370d14e557ad30dbc319f5b))
* **mongo tracing:** Fix name of command property in MongoDB spans ([8a1252c](https://github.com/instana/nodejs/commit/8a1252cda495e52fa35d77e67b277ff11d2a7b24))
* **ot:** OpenTracing is broken in version 0.14.0 and sensor support is incompatible ([92a36f4](https://github.com/instana/nodejs/commit/92a36f40ff883a1d3ac709efbc8442ad15997716))
* **OT:** OpenTracing baggage is not defined on span context when using getCurrentlyActiveInstanaSpanContext ([ae38b87](https://github.com/instana/nodejs/commit/ae38b870e495c977e6a8d970e65de716c42f1639))
* **profiling:** Restrict CPU profiling support to Node.js >=4.0.0 ([574a782](https://github.com/instana/nodejs/commit/574a782560731022a9ca54d802c1eca1505c38d8))
* **README:** Fix typos and wording ([87d2275](https://github.com/instana/nodejs/commit/87d22755f0ad10ff0fdce6d4a1c26afb91e3588a))
* **security:** Bump event loop lag ([f0f770c](https://github.com/instana/nodejs/commit/f0f770c8bbcfba3d72359e768cea52475ce43bc5))
* **security:** Remove vulnerable hoek from transitive dev dependencies ([d42e7e7](https://github.com/instana/nodejs/commit/d42e7e757439592adb52c415c1a9c73d1a662295))
* **security:** switch to @risingstack/v8-profile due to security issues in transitive dependencies of v8-profiler ([02e562b](https://github.com/instana/nodejs/commit/02e562b92d24af163ad70897cae21a4a308acbe3))
* **security:** Upgrade event-loop-lag ([893fcbd](https://github.com/instana/nodejs/commit/893fcbd139bfb8693f5f9fb1bf9005624f1c6316))
* **test:** Automatic logger configuration fails for test execution ([322c4d2](https://github.com/instana/nodejs/commit/322c4d2256ecec0fa1e582f4af8e5c3cdfb58c69))
* **test:** Reduce number of calls in concurrent tracing test to improve stability of tests on Travis ([7a5c20c](https://github.com/instana/nodejs/commit/7a5c20c59087c259aebf4d2250fc05b8b5c56a39))
* **tests:** Fix tests for Node.js 9 ([662bc55](https://github.com/instana/nodejs/commit/662bc55e6af9b33d0555f8a8e7691af8431426bd))
* **tests:** Heap usage test is too fragile ([9f344b3](https://github.com/instana/nodejs/commit/9f344b3d4c5ee2104d171f52dcd793eceff117ae))
* **tests:** Logger infrastructure refactoring broke log level inheritance ([51d4de4](https://github.com/instana/nodejs/commit/51d4de48ea8867c9cd8d8c6c39f5057551fde88f))
* **tests:** Name analysis breaks due to timeout usage ([4b0ebda](https://github.com/instana/nodejs/commit/4b0ebda965136d09e3eaf041c698e861a9d81205))
* **tests:** Tests fail easily in Travis-CI due to timeout usage ([091d0c0](https://github.com/instana/nodejs/commit/091d0c0bc18d0982c11179736bf9332c033c6e24))
* **tracing:** Adapt Server-Timing format ([1dfc5c8](https://github.com/instana/nodejs/commit/1dfc5c85981641b5f11d043af40b68675505899d))
* **tracing:** Add a Path directive for EUM cookies to support sub directory resource requests ([b76ed1b](https://github.com/instana/nodejs/commit/b76ed1b7d0bdba6595dafd6ae12d461b9dafc88c))
* **tracing:** add data.rpc.host and data.rpc.port to GRPC exits ([f5372b8](https://github.com/instana/nodejs/commit/f5372b8f8e0b33530cc6a1af21eb5833f1794563))
* **tracing:** add missing cls.ns.exit calls to mongodb instrumentation ([48612d5](https://github.com/instana/nodejs/commit/48612d5b50e8d2553d114a326209b7adbbfe8663))
* **tracing:** add mongo command details for update/replace/delete ([cd71592](https://github.com/instana/nodejs/commit/cd7159212c46e259af69d94635b50ce8c567e8d1))
* **tracing:** Add Request query capture & reporting ([a49f30e](https://github.com/instana/nodejs/commit/a49f30e4f4c185c361a38d3302f1054813171c7f))
* **tracing:** amqp: read incoming headers case insensitive ([b3a2058](https://github.com/instana/nodejs/commit/b3a2058fb338e94da2d85ccb673f07c94a5ffaaf))
* **tracing:** Check for supported Node.js tracing versions marks v7 as unsupported. ([8214e51](https://github.com/instana/nodejs/commit/8214e51b9522e40cdd3aba63cc7494b66cabfd13))
* **tracing:** Disable extended EUM support by default. ([bf22a10](https://github.com/instana/nodejs/commit/bf22a103587b85f9d0bcfb1c5f94ba157a26e2b9))
* **tracing:** Do not enable tracing in Node.js v9 ([7e15afb](https://github.com/instana/nodejs/commit/7e15afbf3db6df5fd962c631231f953637e85bf4))
* **tracing:** don't fail on span data with circular references ([54f3efc](https://github.com/instana/nodejs/commit/54f3efc2c07e0d07a33c6142fe76b7aa5606420f))
* **tracing:** don't overwrite graphql.server's ec in http server finish ([eee7593](https://github.com/instana/nodejs/commit/eee75939d7e79ab31985e24e0519db463f6d6d80))
* **tracing:** Ensure compatibility with Zipkin by receiving span and trace IDs as hex ([c1e1d44](https://github.com/instana/nodejs/commit/c1e1d44ee4d4bdd5ed8e1c70e1baf1e78791696b))
* **tracing:** Ensure compatibility with zipkin by transmitting span and trace IDs as hex ([c79e75f](https://github.com/instana/nodejs/commit/c79e75f982f5448884debe4f1bfc90159989b219))
* **tracing:** Exclude exec call from Redis instrumentation sub commands. ([32f297f](https://github.com/instana/nodejs/commit/32f297fb96ccad61b5a66ab46e2c03948c23771e))
* **tracing:** Fastify: handle array of beforeHandle functions correctly ([4a9e07f](https://github.com/instana/nodejs/commit/4a9e07fbc46db384f312d6139e2d6679423b28ef))
* **tracing:** fix handling of pg queries using a promise but no pool ([c511128](https://github.com/instana/nodejs/commit/c5111280efc5338d91651e9cc01e839767119741)), closes [#125](https://github.com/instana/nodejs/issues/125)
* **tracing:** fix instrumentation of https client for Node.js 8.9.0 ([3f8bf3b](https://github.com/instana/nodejs/commit/3f8bf3b4794282ca65038be8e040a41b3f640824))
* **tracing:** Fix Redis span nesting and add batch support ([051aee9](https://github.com/instana/nodejs/commit/051aee97c961aeb15e476878c3597ebce7eca554))
* **tracing:** fix require cycle when client code also uses cls-bluebird ([9bd015e](https://github.com/instana/nodejs/commit/9bd015e40eb900d13ea72da72fd639ba3ed0acbf))
* **tracing:** Fix support for mysql2 versions prior to 1.5.0 ([3a5ef6c](https://github.com/instana/nodejs/commit/3a5ef6c67148be1a2956c83a0d5fe83fa772cb2c))
* **tracing:** Fix version check for automatic tracing ([fc82d36](https://github.com/instana/nodejs/commit/fc82d364c48dc99c2c070d40c14c9225067bbc0d))
* **tracing:** Format function name in stack traces as defined in the v8 Wiki ([a619f7f](https://github.com/instana/nodejs/commit/a619f7fbff498f56b4c3ef021bf93ddec348fce6))
* **tracing:** Functions have wrong name in hook file which is confusing when profiling ([32b141d](https://github.com/instana/nodejs/commit/32b141d3384709f53e96caa00119662618cb2702))
* **tracing:** getCurrentlyActiveInstanaSpanContext() fails for modules which are using opentracing APIs while testing. ([4f35954](https://github.com/instana/nodejs/commit/4f3595462ce3a3b600a81cb9e7499eb8b49285f9))
* **tracing:** handle koa routes defined by regular expressions ([7c0bf95](https://github.com/instana/nodejs/commit/7c0bf95256f16dba904cba5a16d497a2342d695c)), closes [#140](https://github.com/instana/nodejs/issues/140)
* **tracing:** HTTP client spans do not have the error count field `ec` set ([0aae0e3](https://github.com/instana/nodejs/commit/0aae0e37d55b2aca5aa4b4e68933674b276e7ca0))
* **tracing:** HTTP tracing will report incorrect path in case of express.js router usage. ([822df6b](https://github.com/instana/nodejs/commit/822df6bbdfb8e404c1eb7d8d814bc51c64d66aa7))
* **tracing:** HTTPS exit spans can have the wrong protocol set. ([472a7a9](https://github.com/instana/nodejs/commit/472a7a91c47b7ce89d4895f7e8d5f02f08797c18))
* **tracing:** Ignore 404 errors when sending traces ([e342c16](https://github.com/instana/nodejs/commit/e342c165034af83f9c673f1a274c3c8067dde51b))
* **tracing:** ioRedis instrumentation can lead to errors when async correlation doesn't work as expected. ([174364d](https://github.com/instana/nodejs/commit/174364dacba88d057cc24cd9e3f7e5c9aff0a546))
* **tracing:** Limit maximum database statement length that is stored in spans. ([2146f49](https://github.com/instana/nodejs/commit/2146f496e5b13aa4bdb0dee36909d0c6952cca89))
* **tracing:** manage tracing context correctly in ioredis instrumentation ([31a8030](https://github.com/instana/nodejs/commit/31a8030c41c9c68a7d02a05a92df20b6d51f7a1b))
* **tracing:** MongoDB spans are nested in a wrong way. ([58474b1](https://github.com/instana/nodejs/commit/58474b17e8fd080e50da4b9b5ad62fad7a0bea16))
* **tracing:** MongoDB tracing writes filter information into the wrong property ([899e921](https://github.com/instana/nodejs/commit/899e921aeabb75b4a8a2dbe8f3a2a37babacd090))
* **tracing:** Never generate negative span IDs to avoid generation of negative hex values ([6663dc7](https://github.com/instana/nodejs/commit/6663dc712658be23703fcf49525da7cac3ea7e59))
* **tracing:** Node.js v8 tracing is not yet possible. Automatically disable tracing when running within Node.js v8 ([0768f80](https://github.com/instana/nodejs/commit/0768f80af2b91efc767c9dbfdc240e2fd3ea5db6))
* **tracing:** Parent handle in hooks is unused and can result in memory leaks ([ded44bf](https://github.com/instana/nodejs/commit/ded44bfef56c2de2e070b13d54cfff35b0fbcb20))
* **tracing:** Regression in MongoDB instrumentation which attempts to access optional operationId properties ([1c67e24](https://github.com/instana/nodejs/commit/1c67e2429d20d00533d95b4365630e99a156ca08))
* **tracing:** remove overaggressive validation warning for HTTP spans ([80040d9](https://github.com/instana/nodejs/commit/80040d901f1da254e25613b46c973893d1bfffd6))
* **tracing:** remove superfluous argument ([8f9d10c](https://github.com/instana/nodejs/commit/8f9d10cdf21a1079e26c889fa6da72a453378612))
* **tracing:** remove unused attribute tracer from trace metrics ([88547ef](https://github.com/instana/nodejs/commit/88547ef81eee8c43fa9fad187afb130cc3ad1689))
* **tracing:** remove wrong warning for http entry span validation ([16d32e8](https://github.com/instana/nodejs/commit/16d32e8239be3f4325c6ba85f51958a8b42c8339))
* **tracing:** Reported URLs for outgoing HTTP calls must include a  after the protocol name. ([940c96e](https://github.com/instana/nodejs/commit/940c96e0fb2bbed1bf1c8ea63a109b213598b885))
* **tracing:** stop sending deprecated attribute span.ta: "node" ([88a21a9](https://github.com/instana/nodejs/commit/88a21a9044d30f29304095cea681f98b3a68739d))
* **tracing:** Stop setting cookies for extended EUM support ([a6dff58](https://github.com/instana/nodejs/commit/a6dff584c454a578242d9cfd418bc47fee360701))
* **tracing:** Stringify Elasticsearch query to align with Java tracing implementation ([f568cb9](https://github.com/instana/nodejs/commit/f568cb968ac9163a1a3997bce9f174018d0d2155))
* **tracing:** Strip matrix parameters and hash values from requests paths in addition to query parameters ([2634aa0](https://github.com/instana/nodejs/commit/2634aa065a902c933c000a5a3e401efb0c90e327))
* **tracing:** Support HTTPS server tracing. ([b1a7d3e](https://github.com/instana/nodejs/commit/b1a7d3e955f544cbaf35acaee94fde6f3476f6e0))
* **tracing:** Support ioredis pipeline calls ([1d685e4](https://github.com/instana/nodejs/commit/1d685e4c9b4b5404841c4926c34a3657c02610e4))
* **tracing:** Support Node.js 8 ([5dbf7ab](https://github.com/instana/nodejs/commit/5dbf7ab7db13ed631e7ae9f5c0c539a541b13736))
* **tracing:** Support REFERENCE_FOLLOWS_FROM ([4f1a86d](https://github.com/instana/nodejs/commit/4f1a86d6ed58118d584e14918f6444ddb4cfaf99))
* **tracing:** URL parsing results in measurable overhead in HTTP server tracing ([7960440](https://github.com/instana/nodejs/commit/7960440618de9e616c2481347fc047c3e74f138d))
* **tracing:** Use an  directive for EUM cookies to support IE<=8 ([7458a10](https://github.com/instana/nodejs/commit/7458a10bd833a7b3ed05ddb262c5fd7ac0b8f709))
* **tracing:** use original args in graphql when another span is active ([ae5ac13](https://github.com/instana/nodejs/commit/ae5ac139dd08c1878af39bbf2e5f23a489c18c12))
* call unref() on all Timeout objects ([bca989c](https://github.com/instana/nodejs/commit/bca989c8da9de6407f5018ae22be03515d558473))
* init metrics correctly when no config is passed ([a2789ce](https://github.com/instana/nodejs/commit/a2789cea20c86bff8217a2d976bd0804dca59489)), closes [#138](https://github.com/instana/nodejs/issues/138)
* update netlinkwrapper to latest version with support for Node 12.x ([7c39228](https://github.com/instana/nodejs/commit/7c39228c1bbac045c020e2dc6dcc63fe2d9cdd11))
* **announce:** widen command regex for PID identification ([c1cfb92](https://github.com/instana/nodejs/commit/c1cfb92cdc91c1717b653cafc6242d691679ca3e))
* **deps:** use newer netlinkwrapper /w support for musl libc ([9193bd7](https://github.com/instana/nodejs/commit/9193bd7d7255df8ff5196f505f463c5512b46228))
* **logging:** do not identify custom pino logger as bunyan ([6f3f9b1](https://github.com/instana/nodejs/commit/6f3f9b102bc4c0eccb903863fa6b94338a2caaa2)), closes [#119](https://github.com/instana/nodejs/issues/119)
* **metrics:** exclude non-directories from dependency analysis ([8f3d9dd](https://github.com/instana/nodejs/commit/8f3d9dd54e2c69d6a64ddb81f52df57f4229896f))
* **profiling:** use v8-profiler-node8 for CPU profiling ([4a0ad7e](https://github.com/instana/nodejs/commit/4a0ad7ec5a33d8400f5c3c8809567df6b805eb01))
* **test:** exclude mysql tests for Node < 6.x ([3b18b4e](https://github.com/instana/nodejs/commit/3b18b4e4c8dc778b52b452a6123eefc7eac34cae))
* **test:** Execute all the tests ([8d8cc64](https://github.com/instana/nodejs/commit/8d8cc64151033d2f0367dfb3014475489610b57a))
* **test:** fix "npm run agent-stub" ([8ad96c3](https://github.com/instana/nodejs/commit/8ad96c3593813187714db6868deba4ad808da363))
* **test:** Test request-promise call chains ([#66](https://github.com/instana/nodejs/issues/66)) ([75003cd](https://github.com/instana/nodejs/commit/75003cda3737efd9b333e3456235f88054c9ecb5))
* **tests:** exclude pinto for Node.js < 6 ([ad23569](https://github.com/instana/nodejs/commit/ad2356997385a1709da0e85b8fb51caca36dbf4d))
* **tracing:** add missing instrumentation hooks for mysql/mysql2#execute ([172f950](https://github.com/instana/nodejs/commit/172f9504d23205b0003010ed809fe4f4d90662ab))
* **tracing:** add original attributes to shimmed grpc client method ([8e1ac88](https://github.com/instana/nodejs/commit/8e1ac883edf3a13af7150a6b8a68d6dd557f51f9))
* **tracing:** add query params to http client spans ([353cace](https://github.com/instana/nodejs/commit/353cace3abbc771a0e34d110164d6ff944ee2988))
* **tracing:** do not attach context to error objects ([701641d](https://github.com/instana/nodejs/commit/701641d437325ae42790cad84d799302c1fd4687)), closes [#90](https://github.com/instana/nodejs/issues/90)
* **tracing:** Do not break when modules use stealthy-require or similar mechanisms ([#71](https://github.com/instana/nodejs/issues/71)) ([147301c](https://github.com/instana/nodejs/commit/147301c941daa3e95c42a715b2d5de4acaa9d853))
* **tracing:** do not capture HTTP headers for HTTP exits ([545f2b6](https://github.com/instana/nodejs/commit/545f2b6927a45168c699fe064ea3afea365837c0))
* **tracing:** do not fail on http client options with headers: null ([602f9b6](https://github.com/instana/nodejs/commit/602f9b6b48404abc977fa8a6030f565c4c0cd394))
* **tracing:** do not send batch size 0 (redis multi) ([#68](https://github.com/instana/nodejs/issues/68)) ([934783a](https://github.com/instana/nodejs/commit/934783afe15e3b65eb7f289cb4bf17292e92dae6))
* **tracing:** don't overwrite parent span in mysql instrumentation ([e6cfc02](https://github.com/instana/nodejs/commit/e6cfc02a02f91ab79b0f719d3c1846cee5b56aad))
* **tracing:** exclude Node.js 10.0.0-10.3.0 from automatic tracing ([e0dbd9c](https://github.com/instana/nodejs/commit/e0dbd9c7940ccbe502b350f9f4d73db5cbb48619))
* **tracing:** fix argument order in GRPC instrumentation (options) ([37b5d4d](https://github.com/instana/nodejs/commit/37b5d4dfad0b11f5514c4c427916ec3164a85b33))
* **tracing:** fix behaviour for Expect: 100-continue header ([1000fd9](https://github.com/instana/nodejs/commit/1000fd94cf99ea47d15c161ebc22c9c08f747623))
* **tracing:** fix duplicated cls binds (postgres, mssql) ([90015d0](https://github.com/instana/nodejs/commit/90015d04610cc98866f753c91498e0d7089ca05e))
* **tracing:** Fix edge case undefined last arg for http.request ([0fe6abf](https://github.com/instana/nodejs/commit/0fe6abfd3cbeb4ae019edf20008812c44090b35e))
* **tracing:** fix method name of NoopSpanHandle ([9aa3de9](https://github.com/instana/nodejs/commit/9aa3de90965c3c78bd05a6ffbf83e3b706d11aeb))
* **tracing:** fix result handling in PostgreSQL instrumentation ([e87a5e8](https://github.com/instana/nodejs/commit/e87a5e84d808e61903158840cbb0e7edabddfefe))
* **tracing:** HTTP client instrumentation does not correctly interpret HTTP client timeouts ([66f1686](https://github.com/instana/nodejs/commit/66f1686cc825093ddf9b6a94d0ad8afcb79182cd))
* **tracing:** http client: capture erroneous span on sync exception ([82e3fce](https://github.com/instana/nodejs/commit/82e3fce2007910305c1be8b710ffc6881b303262))
* **tracing:** improve kafka tracing continuity ([503c61c](https://github.com/instana/nodejs/commit/503c61cf2325a01b8346af7dec333aabf8a7b6af))
* **tracing:** instrument get separately and support new signature ([1d5e7d1](https://github.com/instana/nodejs/commit/1d5e7d12cce4deb9d3ae1c0d1d7c95c54befb771))
* **tracing:** only instrument bluebird if the module is available ([a68d054](https://github.com/instana/nodejs/commit/a68d054e275c379b288b283d52b21f3f3bcdf5be))
* **tracing:** reactivate cls context in mongo apm handlers ([4c4a44c](https://github.com/instana/nodejs/commit/4c4a44c6dba3d88839ca3b52245153532db42085))
* **tracing:** set grpc headers instead of adding them ([44fc1f4](https://github.com/instana/nodejs/commit/44fc1f46634dd8790f07e6c922f43a66177f26f9)), closes [#132](https://github.com/instana/nodejs/issues/132)
* **tracing:** small fix for amqps URLs ([e76bc97](https://github.com/instana/nodejs/commit/e76bc976fbbe5446d915d7c3994bc4fb0a1f31c7))
* **tracing:** Spans may be accidentally retransmitted ([5f287f8](https://github.com/instana/nodejs/commit/5f287f86e04c8e40ec6daf046428256f80c68ea3))
* **tracing:** support secrets ([af40371](https://github.com/instana/nodejs/commit/af4037112f7646e627447fa301e2f5b1435b0110))
* **tracing:** trace mongodb aggregate calls ([978e64e](https://github.com/instana/nodejs/commit/978e64edb789070dda8bf320660b5e3e90c14308))
* **tracing:** trace through graphql-subscription pubsub async iterator ([76031d3](https://github.com/instana/nodejs/commit/76031d331d8534e4ed3ccead34ecbb1c560ef8a2))
* add additional check in requireHook ([428ae35](https://github.com/instana/nodejs/commit/428ae35987149cb12b32c954c76e5843501b95bd))
* do not fail if @instana/autoprofile is missing ([bc0be0a](https://github.com/instana/nodejs/commit/bc0be0ae1a298856322b93fd170a0e861b382e36))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))
* **tracing:** remove unused span attribute b.u ([df8c389](https://github.com/instana/nodejs/commit/df8c389d679e0f5befc11de1dfc1b4392b149f25))
* **tracing:** use query._callback for ending a mysql call if available ([321c98e](https://github.com/instana/nodejs/commit/321c98e83a82954c5dd676899318ff4c60ec952d))
* **tracing:** warn about missing netlinkwrapper early ([a831b80](https://github.com/instana/nodejs/commit/a831b80871ab768a8f4a6c94f32e64652746bedb))
* **tracing:** warn instead of info when Node.js version is not supported ([8c0ee1e](https://github.com/instana/nodejs/commit/8c0ee1e0b1a2a792de7ec899acb1094d1181ceb3))
* **tracing.es:** Transport cluster name in spans to allow logical view creation ([aa096ae](https://github.com/instana/nodejs/commit/aa096ae738b9c3fb6ca9b09a612ba36d680f4b74))
* **tracing.http:** Transport full URL for HTTP exit spans ([7c43c48](https://github.com/instana/nodejs/commit/7c43c482bd9729a515d94b8994fa24f867f3dd01))
* **transmission:** HTTP requests to agent are not aborted on timeout ([a4d681e](https://github.com/instana/nodejs/commit/a4d681efe231f3b7ac3db42e9c431bb774d80ed7))


### Features

* **agent:** read span batching option also from tracing section ([1f776d4](https://github.com/instana/nodejs/commit/1f776d46d6329f33939d65041fdc7a78246d62ea))
* **aws-lambda:** add support for Node.js 18 AWS Lambda runtime ([0900ab4](https://github.com/instana/nodejs/commit/0900ab4e040822d17a2af6610fe7623846fd6128))
* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))
* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)
* **aws-lambda:** added support for ES modules ([#653](https://github.com/instana/nodejs/issues/653)) ([75c28a9](https://github.com/instana/nodejs/commit/75c28a92fb68f3d982207b545a211b65dc4d95ce))
* **aws-lambda:** added support for Node v16 ([718cf9f](https://github.com/instana/nodejs/commit/718cf9f69de3062964a28390900dc3f158557cdf))
* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))
* **aws-lambda:** added the RequestId to most of the extension logs ([#660](https://github.com/instana/nodejs/issues/660)) ([469f131](https://github.com/instana/nodejs/commit/469f13195350d8e49952b9d7cec35ba71aaec428))
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
* **lambda:** add Lambda extension to Intana's Node.js Lambda layer ([ae190a7](https://github.com/instana/nodejs/commit/ae190a7133da2c39e6582b18ceb265c49c8f36b7))
* **lambda:** add trace correlation for SNS-to-SQS ([79df688](https://github.com/instana/nodejs/commit/79df688f45c276985ff65d21f4d8a39ca5c56113))
* **lambda:** add trace correlation when triggered by SQS message ([381c064](https://github.com/instana/nodejs/commit/381c0642c38a43e8af920386eb154c2a9ff6050d))
* **lambda:** capture AWS Lambda Request ID ([2b041c9](https://github.com/instana/nodejs/commit/2b041c9aed2afbd86c71135241a39bd37b602cc1))
* **lambda:** detect imminent timeouts heuristically ([40b555d](https://github.com/instana/nodejs/commit/40b555d559d2cd913f8b857b888eb472df06c1d8))
* **lambda:** detect Lambda cold starts ([8186425](https://github.com/instana/nodejs/commit/818642549a6c341c8cbea92d0f0e56f61978dbe7))
* **lambda:** send preflight request to the AWS Lambda extension ([687655e](https://github.com/instana/nodejs/commit/687655e4d962a60c0cfe703ab4a75b964a07063c))
* **lambda:** W3C trace context support for Lambda tracing ([5b3904e](https://github.com/instana/nodejs/commit/5b3904e7bdbea80a372a0fbc7b32a1262766ac0d))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **metrics:** rebuilding native add-ons via node-gyp as opt-in ([3f6ab8f](https://github.com/instana/nodejs/commit/3f6ab8fc1158003d4c5ae911cc9c6b14e8bae675))
* **otel:** Instana Exporter for OpenTelemetry ([#388](https://github.com/instana/nodejs/issues/388)) ([529ff2a](https://github.com/instana/nodejs/commit/529ff2ae024e944ede21cbe7ab053135ae526689))
* **sdk:** add methods to set the EUM correlation ID/type on the span ([727916c](https://github.com/instana/nodejs/commit/727916c7398219c292faad6e374d57a3838472d2))
* **sdk:** expose span.cancel method ([d60571f](https://github.com/instana/nodejs/commit/d60571f680c8d9c2b68ece84930a6aa91bd77b6a))
* **tracing:** added console.warn & console.error instrumentation ([#391](https://github.com/instana/nodejs/issues/391)) ([6c19b44](https://github.com/instana/nodejs/commit/6c19b447f1d1d8bc6e502a387a9db3b24b2e65c3))
* **tracing:** added instrumentation for ibm db2  ([#532](https://github.com/instana/nodejs/issues/532)) ([0d0b1e0](https://github.com/instana/nodejs/commit/0d0b1e0d4409795206613c4c2cdcf1e270772dd8))
* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))
* **tracing:** AWS DynamoDB instrumentation ([#294](https://github.com/instana/nodejs/issues/294)) ([4c00dbf](https://github.com/instana/nodejs/commit/4c00dbf8cbf6b2388fa07aa0fcfbdc61c40943c4))
* **tracing:** AWS S3 instrumentation ([#288](https://github.com/instana/nodejs/issues/288)) ([aa1a6ac](https://github.com/instana/nodejs/commit/aa1a6ac8c9f1228782c30c66c41502e94368ffac))
* **tracing:** improve robustness of custom service naming ([aadcbff](https://github.com/instana/nodejs/commit/aadcbff6f4c2a4264f9920a26723d3e2530c0c73))
* **tracing:** instrument AWS Kinesis ([3efb2fa](https://github.com/instana/nodejs/commit/3efb2fa94f9fcf7c332f9a486f312bd94f2331e1))
* **tracing:** instrument AWS SQS ([01e0d14](https://github.com/instana/nodejs/commit/01e0d141ce3f3af78fd305afb424a710d5eae539))
* **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))
* **tracing:** instrument sqs-consumer ([b6aebd9](https://github.com/instana/nodejs/commit/b6aebd97c1d92f4845965a040524d4746beddf11))
* **tracing:** prepare Kafka header migration ([0c0be2d](https://github.com/instana/nodejs/commit/0c0be2df1d3d2230e55cf7e3ccfd0a825ad4936c))
* **tracing:** redact embedded credentials from URLs ([7bd506d](https://github.com/instana/nodejs/commit/7bd506d77ed5bf4afb709045516d67549ed5bec7)), closes [#327](https://github.com/instana/nodejs/issues/327)
* **tracing:** trace correlation for SNS-to-SQS ([1d901b8](https://github.com/instana/nodejs/commit/1d901b8a57bb37973ff50fc1d30cbda28c8385b3))
* **tracing:** update handling of W3C trace context headers ([e98a856](https://github.com/instana/nodejs/commit/e98a856ae9130b369cfde587a76d4679369db6fe))
* **tracing:** use new common tracing config from from agent response ([7f8825f](https://github.com/instana/nodejs/commit/7f8825f4eddb585595457378cfb2fb36eb868a37))
* **tracing, fetch:** instrument native fetch ([1a48168](https://github.com/instana/nodejs/commit/1a48168d32b5325041542cfbb41c84775ff1e518))
* added new package @instana/opentelemetry-sampler ([#580](https://github.com/instana/nodejs/issues/580)) ([e22912a](https://github.com/instana/nodejs/commit/e22912ac582e131f50fef82443bd2160c0329289))
* added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))
* **api:** annotate auto-trace spans ([79975c0](https://github.com/instana/nodejs/commit/79975c0b2ce96630de31b9fcb62c119a0ce0d21e))
* **fargate:** add support for Fargate via @instana/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **fargate:** add support for INSTANA_EXTRA_HTTP_HEADERS ([9b4aa12](https://github.com/instana/nodejs/commit/9b4aa1283a6e56145a427981466210d9abed57b2))
* **fargate:** collect Docker stats as metrics ([566112a](https://github.com/instana/nodejs/commit/566112a370397c1434ec2cc671d6aa175d8c8586))
* **fargate:** support INSTANA_TAGS ([4fc447b](https://github.com/instana/nodejs/commit/4fc447b67bd30ae5e16fa45cbf4a7a5940f2535a))
* **fargate:** support INSTANA_ZONE ([1981216](https://github.com/instana/nodejs/commit/1981216f3ee36e81e5c4b0cb30f66d8694af924f))
* **fargate, google-cloud-run:** do not instrument npm or yarn ([b9afded](https://github.com/instana/nodejs/commit/b9afdedd027366605d1f37eddb578f882cbedf99))
* **google cloud run:** exclude minimal revision data from compression ([fcfa851](https://github.com/instana/nodejs/commit/fcfa851fa86bf5dc4292aec58435e601db2cdee7))
* **google cloud run:** experimental support ([64b34e4](https://github.com/instana/nodejs/commit/64b34e4e7f11f0205bdba53a521ab819470e4286))
* **google cloud run:** update google cloud run support ([afedbd0](https://github.com/instana/nodejs/commit/afedbd017d558a5519e1338a2f25e5032c82d003))
* **lambda:** add support for INSTANA_DISABLE_CA_CHECK ([6303908](https://github.com/instana/nodejs/commit/63039089484493f9a53b451043fa56f805eabb80))
* **lambda:** capture synchronous errors in handlers ([c1edf71](https://github.com/instana/nodejs/commit/c1edf71208150ba69eede3eee615291b49dd3d84))
* **lambda:** handle ARN correctly when called via alias ([190b5fc](https://github.com/instana/nodejs/commit/190b5fc1486137b6e46227424bc38b01acc515aa))
* **lambda:** improve support for INSTANA_EXTRA_HTTP_HEADERS ([e738490](https://github.com/instana/nodejs/commit/e7384904c21081d0636ae4dc42c4a7d4a4b3ae7a))
* **lambda:** instrument deprecated legacy Lambda API ([be408ee](https://github.com/instana/nodejs/commit/be408ee4eda74758daa9bc870556e46d9e92ce39))
* **lambda:** make standard Instana Node.js API available for Lambdas ([ec4177b](https://github.com/instana/nodejs/commit/ec4177b51563853f918e1deb3e982453c1931fb9))
* **lambda:** reduce execution time penalty for tracing even further ([54fb5ac](https://github.com/instana/nodejs/commit/54fb5ac7f96a3bde3ed9654354ce27e89c59247f))
* **lambda:** support INSTANA_ENDPOINT_PROXY ([8750228](https://github.com/instana/nodejs/commit/8750228e34023d09f844d6760331e28199cae843))
* **lambda, fargate:** support for INSTANA_SECRETS ([8a1347a](https://github.com/instana/nodejs/commit/8a1347a4f9dee03ae6c713b69e99ffc55f57c209))
* **metric:** support npm install deployment scenario ([f7d8257](https://github.com/instana/nodejs/commit/f7d825709d3aa49eb6599a572bbeeb9945aebe71))
* **metrics:** load native dependencies lazily if necessary (plus retry) ([d6af8e4](https://github.com/instana/nodejs/commit/d6af8e4a519bdcff183ea1c5f02f4479a3bfeb02))
* **metrics, deps:** update to event-loop-stats@1.3.0 ([a538923](https://github.com/instana/nodejs/commit/a538923ccdf5e5c4fa482cd52a7c5886e92b6fc5))
* **profiling:** add and integrate @instana/autoprofile ([0b87465](https://github.com/instana/nodejs/commit/0b874659719b77d24c52a04f7e2c318d8818693b))
* **profiling:** programmatic profiling support ([2e4cca5](https://github.com/instana/nodejs/commit/2e4cca5399f96a7ae0c3baa7aebb74c1458021c6))
* **profiling:** send monitoring issue for missing native addon ([8a61b26](https://github.com/instana/nodejs/commit/8a61b2654404507c7f7d2a6ee3535fa5901b065b))
* **sdk:** add API to restore the async context manually ([20d0f89](https://github.com/instana/nodejs/commit/20d0f8997683c52b2d8336b18daa5877b42f4484))
* **tracing:** add ability to disable individual tracers ([135f67c](https://github.com/instana/nodejs/commit/135f67c64eb39c7a062b5db23ed908a30f130471))
* **tracing:** add log4js instrumentation ([5f7b1bd](https://github.com/instana/nodejs/commit/5f7b1bd00514e49ec21d056e7e3327783a512754))
* **tracing:** add pg-native instrumentation ([bcec198](https://github.com/instana/nodejs/commit/bcec1988cee03c4aad539c7c2b3cf81479a72d13))
* **tracing:** add support for INSTANA_EXTRA_HTTP_HEADERS ([e055cde](https://github.com/instana/nodejs/commit/e055cdedccdbf2f4edf42ef63d9c66d76ba1897c))
* **tracing:** capture request and response headers on HTTP exits ([bbb288a](https://github.com/instana/nodejs/commit/bbb288ada7f12033ef65ac13c16c10296e38f3ac))
* **tracing:** create, parse and manipulate W3C trace context headers ([f7c8c6e](https://github.com/instana/nodejs/commit/f7c8c6e82ea0f3e90aa02c5e76e548493a9ccb2a))
* **tracing:** Google Cloud Storage client instrumentation ([c206b56](https://github.com/instana/nodejs/commit/c206b564af0852e0d3d628b64de4db4909fc42ed))
* **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))
* **tracing:** instrument MongoDB native driver unified topology ([b75e04d](https://github.com/instana/nodejs/commit/b75e04ddab998f83965a38c688646b512c15c78c))
* do not instrument npm or yarn ([4091f52](https://github.com/instana/nodejs/commit/4091f5228e6df1df1d9232656ef441326782fb90))
* **tracing:** batch very short/high frequency database exits ([1b967e9](https://github.com/instana/nodejs/commit/1b967e99f472494650421dbcbc8031db433ae8e2))
* **tracing:** fire monitoring issue event for tracer issue ([c0b2456](https://github.com/instana/nodejs/commit/c0b24563c35cb172cf7bf217968e4c61e17b1d0f))
* **tracing:** instrument Apigee edgemicro package ([269a68a](https://github.com/instana/nodejs/commit/269a68a02b027a4ed6892a33b8e61314dbab3062))
* **tracing:** instrument kafkajs ([7afec29](https://github.com/instana/nodejs/commit/7afec29e987540be816f79da8951bb41986ab423))
* **tracing:** instrument modern ES client @elastic/elasticsearch ([ecf8621](https://github.com/instana/nodejs/commit/ecf86215be316484445b32efad970e8264619611))
* **tracing:** instrument superagent ([09e5c25](https://github.com/instana/nodejs/commit/09e5c257677442ad9f705b8e092154b3e28cf0e4))
* **tracing:** instrument Winston versions <= 2.x ([f19ed13](https://github.com/instana/nodejs/commit/f19ed1333d804b0cd8565d69f5c285d66d5d865d))
* **tracing:** instrumenting @apollo/gateway to capture errors ([04de499](https://github.com/instana/nodejs/commit/04de4991ceb7a29357b2f349eb509ce525e4a7f0))
* **tracing:** keep monitoring issue open indefinitely ([efba7b8](https://github.com/instana/nodejs/commit/efba7b88104033d0463383badac6300e972c5a51))
* **tracing:** manage W3C trace context headers for HTTP ([ef6fdf3](https://github.com/instana/nodejs/commit/ef6fdf3b365ca7258afa14af45c55721093e69d7))
* **tracing:** process correlation info from X-INSTANA-L ([c11dfb0](https://github.com/instana/nodejs/commit/c11dfb01006154c9a3c7147b5dc87df87f2d9c09))
* **tracing:** redact secrets instead of removing the whole query param ([1f20acd](https://github.com/instana/nodejs/commit/1f20acd229f49a36ed305440c1252f32bbb1fb66))
* **tracing:** support tracing of deferred HTTP exits ([55db775](https://github.com/instana/nodejs/commit/55db775df23d0d28d342552ff7e8dfcb4051a3b6))
* **tracing:** support X-INSTANA-SYNTHETIC ([8f30931](https://github.com/instana/nodejs/commit/8f309318c4bd39132b26d3a6e1dd135d90cc9a82))
* **tracing:** trace http2 communication ([1d0b52c](https://github.com/instana/nodejs/commit/1d0b52cba7b126a56207f58b8036d183caf2dc0c))
* support Node.js 14 ([fce8c83](https://github.com/instana/nodejs/commit/fce8c8314ac4da3cf9febf795cf502806f4d9ef7))
* **announce:** send cpuset file content and pidFromParentNS flag ([8754864](https://github.com/instana/nodejs/commit/8754864a93063f94c9026ccc4519d6e1fa11c8ba))
* **api:** extend API ([300bd9e](https://github.com/instana/nodejs/commit/300bd9e605fc85229ff975bc789a4571673c5a31))
* **config:** accept stack trace length as string ([d0df8d8](https://github.com/instana/nodejs/commit/d0df8d855fc818323d0f23f440f832f7699bd005))
* **events:** report unhandled promise rejections as issues ([51855f8](https://github.com/instana/nodejs/commit/51855f8733b75f9d594edfa6272934dd952be881))
* **lambda:** add Server-Timing header for EUM/back end correlation ([d7d5c85](https://github.com/instana/nodejs/commit/d7d5c8562a5b5285ab4cb699b4561c91b24f0f21))
* **lambda:** allow back end URLs with path ([91ff62c](https://github.com/instana/nodejs/commit/91ff62ce6090b83b431a4eed77f2d19d6f14c55d))
* **lambda:** allow config object to be passed into wrapper ([ae93946](https://github.com/instana/nodejs/commit/ae93946792cbc08fe7e3451b0a5d2a9d287fe5c9))
* **lambda:** capture configured extra HTTP headers ([3e4851f](https://github.com/instana/nodejs/commit/3e4851f079d66c33efdcd481acad4fbc8167b745))
* **lambda:** capture HTTP status code ([7f4a287](https://github.com/instana/nodejs/commit/7f4a2871268fdc288f33454e4f599b4a6cdb0b3c))
* **lambda:** distinguish lambda triggers ([610f1f7](https://github.com/instana/nodejs/commit/610f1f731049c6b79f02ff7b6d2ddeb2e021d1a4))
* **lambda:** distinguish more lambda triggers ([402e485](https://github.com/instana/nodejs/commit/402e485f5b8c8c6693de0449e6f4edc6a175be07))
* **lambda:** in-process data collection for AWS Lambda ([435143a](https://github.com/instana/nodejs/commit/435143ab2ce4d77357f9fd22182f315c2aab6ffb))
* **lambda:** inspect tracing headers for http triggers ([88ff8d4](https://github.com/instana/nodejs/commit/88ff8d41dff815dbb99b355c5a49dcb033423d3a))
* **lambda:** provide auto-wrap Lambda handler ([57952ea](https://github.com/instana/nodejs/commit/57952ea78f414f2be9aa2a714db911d69bda5c0b))
* **lambda:** publish Lambda layer that provides @instana/aws-lambda ([a79a52c](https://github.com/instana/nodejs/commit/a79a52ccbc10f3e28f027a5a3c9a97fa8763940e))
* **lambda:** report ARN as host header & entityId ([d507bdf](https://github.com/instana/nodejs/commit/d507bdfa4109bc5597a7b90f22b9bfa88fe8a877))
* **lambda:** suppress tracing when x-instana-l: 0 is set ([30da332](https://github.com/instana/nodejs/commit/30da3326dcb8b709479df2fd941314772823aa60))
* **lambda:** use @instana/core for metrics and tracing ([7b27892](https://github.com/instana/nodejs/commit/7b27892004702078488b58a8e81e4c4017a1a3c3))
* **lambda:** use POST /bundle instead of /traces and /metrics ([a8ef990](https://github.com/instana/nodejs/commit/a8ef99083d8b4dedd815873020c5b6007519905b))
* **logging:** add setLogger method to API ([9e224cb](https://github.com/instana/nodejs/commit/9e224cbce35837a34b147c5de886c5d54fc4ce56))
* **metrics:** add direct dependencies metric ([ba78268](https://github.com/instana/nodejs/commit/ba78268ccce77ae836bcd5c0373bdfc2ea940cc3))
* **tracing:** 0-left-pad generated IDs ([c94ebef](https://github.com/instana/nodejs/commit/c94ebefb6972baa3e67a1ee4e45a2fb862e30269))
* **tracing:** add msearch & mget to elasticsearch tracing ([f0470d0](https://github.com/instana/nodejs/commit/f0470d0c1f0d8144ac8bc3f0c74c2f68da6af1c1))
* **tracing:** add msearch & mget to elasticsearch tracing ([14f0a0a](https://github.com/instana/nodejs/commit/14f0a0a5cc70dc98ce0365a143e56abb3ca35173))
* **tracing:** add runPromiseOrRunAndReturn to core/clsHooked ([47e99cd](https://github.com/instana/nodejs/commit/47e99cd4e7d247aacc7d7dd5cf02eff3d97e65a1))
* **tracing:** additional validation for all entry spans ([cd8e072](https://github.com/instana/nodejs/commit/cd8e072bfe86829b5fdf443178be33dd60fb3477))
* **tracing:** allow early init ([52b7c39](https://github.com/instana/nodejs/commit/52b7c39c440b514da6cdc7ba7793ce95db44d75b))
* **tracing:** avoid triggering fastify's basePath deprecation warning ([efb7063](https://github.com/instana/nodejs/commit/efb7063265757a566a3c52868c02b4998fdba50d))
* **tracing:** Bunyan: support for capturing nested error object msgs ([56accb7](https://github.com/instana/nodejs/commit/56accb7f41925e14adaf8080982e7777ef70be1f))
* **tracing:** capture HTTP response headers for entry spans ([6931f66](https://github.com/instana/nodejs/commit/6931f66b6a017e1a36e1ac7cc6c562bf216f79dc))
* **tracing:** create spans manually via SDK ([d91b521](https://github.com/instana/nodejs/commit/d91b5215d5cad1fe71527af86f4b0a4fecb5437a))
* **tracing:** instrument amqplib (RabbitMQ) ([090662a](https://github.com/instana/nodejs/commit/090662ab6b1169a4a33c35fe1f1bfa3e83022524))
* **tracing:** instrument bunyan logging framework ([f798b60](https://github.com/instana/nodejs/commit/f798b606c5ebe563051232209258d598b4e5bc37))
* **tracing:** instrument graphql ([942000a](https://github.com/instana/nodejs/commit/942000a322911bc0e06afba1cea1662071ccf452))
* **tracing:** instrument grpc ([03ccd03](https://github.com/instana/nodejs/commit/03ccd036b112b826d3345b5a298881bd77583e92))
* **tracing:** instrument MSSQL ([23055e1](https://github.com/instana/nodejs/commit/23055e1490d846c016870e909c50a08f963d905e))
* **tracing:** instrument nats and node-nats-streaming ([a987e00](https://github.com/instana/nodejs/commit/a987e005bd2cd1573b88512b56c31c549c218889))
* **tracing:** instrument pino logging framework ([1f65187](https://github.com/instana/nodejs/commit/1f6518726714e9a7dfcc3a3faeedf6ae1ae707fc))
* **tracing:** instrument winston logging framework ([0847465](https://github.com/instana/nodejs/commit/0847465ad059e6e3e82940ec553ea8ba22106e9e))
* **tracing:** limit content length of requests when talking to agent ([af2618b](https://github.com/instana/nodejs/commit/af2618b093b1d8ca76f9ccb5eb79a64a999f9017))
* **tracing:** offer API to end span manually for messaging entries ([6e53ce4](https://github.com/instana/nodejs/commit/6e53ce44d095442435a2eb7a2e5d90b89332ca2f))
* **tracing:** pino: improve tracing for logged error objects ([bec133c](https://github.com/instana/nodejs/commit/bec133c4687735af1939271a6aa64d5d97846bc9))
* **tracing:** provide internal tracing metrics ([ea712db](https://github.com/instana/nodejs/commit/ea712db12b0e4358a83db1e87ec9b9df85766633))
* **tracing:** record hapi.js path templates when tracing HTTP entries ([78df856](https://github.com/instana/nodejs/commit/78df85684c8863ebf6158defa81c30fefe88de2e))
* **tracing:** record Koa path templates when tracing HTTP entries ([cfab4d2](https://github.com/instana/nodejs/commit/cfab4d205029ac74c82632a5d03e2558777a0a9c))
* **tracing:** support for kafka-node >= 4.0.0 ([e5a2daf](https://github.com/instana/nodejs/commit/e5a2daf18b7f18a42ee7914f4ad8fa859d6cb9aa)), closes [#158](https://github.com/instana/nodejs/issues/158)
* **tracing:** support INSTANA_SERVICE_NAME/config.serviceName ([855252d](https://github.com/instana/nodejs/commit/855252db87f77b6f6722db859c97661a08cabcaa))
* **tracing:** warn when @instana/collector is initalized too late ([38df614](https://github.com/instana/nodejs/commit/38df614215b9b82ce67cefc0988a681fdb601437))
* add support for non-bunyan loggers ([694ed75](https://github.com/instana/nodejs/commit/694ed75d52c39ff25e145d29777f020e4ccd4b70))
* support Node.js 11 ([95bf797](https://github.com/instana/nodejs/commit/95bf79753e7e30cde899f558702d3083c6229c2f))
* support Node.js 12 ([1eaa662](https://github.com/instana/nodejs/commit/1eaa66229140f1bbdc9e6572f6d29e3d10e9439e))
* **announce:** Add additional meta data to the agent announce information to enable discovery in Kubernetes and CloudFoundry environments ([f1fc6cc](https://github.com/instana/nodejs/commit/f1fc6cc02e3d4e4fb49b897e6bd1ecfa86151656))
* **coms:** Allow configuration of agent host ([9f6359e](https://github.com/instana/nodejs/commit/9f6359ea45b14d46ec48b27ca8b006bb20dc2f12))
* **coms:** Cleanup of allow configuration of agent host ([114e3dd](https://github.com/instana/nodejs/commit/114e3dd87ceb64081ae6b22c49944b1d32d83e3e))
* **config:** Read env vars by default to determine agent connection config ([b4b59e0](https://github.com/instana/nodejs/commit/b4b59e02705ca1a9a7804cecfe5239c1092b3c6a))
* **debugging:** Expose a debugging action to learn about loaded modules ([e49b1d1](https://github.com/instana/nodejs/commit/e49b1d1fce427872d962119a169e324c2824779c))
* **event loop:** Track Node.js internal handle and request counts ([ce943f5](https://github.com/instana/nodejs/commit/ce943f55b322946d381cc153e49b7f84fa459d92))
* **gc:** Differentiate between all the supported V8 garbage collection types ([8158006](https://github.com/instana/nodejs/commit/815800623b60f0daa9c541c8f90a340087e31fed))
* **logging:** Push logs to agent for ease of debugging ([1d1e741](https://github.com/instana/nodejs/commit/1d1e741580f15c74df8a2b1a78d2d7f2fa08d758))
* **logging:** Support varying log levels and output destinations ([7f4797b](https://github.com/instana/nodejs/commit/7f4797bd7492f15e006bb379200dea2168865c67))
* **metrics:** Collect healthcheck results ([ff748fc](https://github.com/instana/nodejs/commit/ff748fc18af9ac6d2153efb63cebd10b73d5b082))
* **metrics:** Retrieve heap space statistics ([e057d33](https://github.com/instana/nodejs/commit/e057d33c0ea674e38365f43afd97700397f22aa9))
* **network:** Support custom agent HTTP ports and name ([69d41d0](https://github.com/instana/nodejs/commit/69d41d09f26bbda5a5e3d84916b4079552908c86))
* **network:** Support Docker bridge network mode ([6d642ad](https://github.com/instana/nodejs/commit/6d642adadfc68c66ab854bdb3532d6bcbe071b05))
* **ot:** Support the new OpenTracing span kinds producer and consumer ([8281955](https://github.com/instana/nodejs/commit/8281955080edfca80d1dfc086217d8d2b3d1cbdc))
* **package:** Use MIT license ([73bbfd4](https://github.com/instana/nodejs/commit/73bbfd40521f8856e9a0afe2e85dfcc9e2edfd00))
* **pid identification:** Do not depend on specific command name when parsing /proc/<pid>/sched files ([5f09ddd](https://github.com/instana/nodejs/commit/5f09ddd3850b6c2be21caca74b29dc36cdc5ccc0))
* **pid identification:** Use /proc/<pid>/sched file for parent PID identification ([cbf8b09](https://github.com/instana/nodejs/commit/cbf8b09d1440d6c77c12c43f95f1626e35d360a2))
* **profiling:** Add on-demand CPU profiling support ([d25f9cf](https://github.com/instana/nodejs/commit/d25f9cf63f2b09a58be7d7a3df010a6b0f4dceac))
* **sensoring:** Remove notion of an app sensor from the Node.js sensor ([f900c45](https://github.com/instana/nodejs/commit/f900c457e88fd0b6c2f4ff490ea0969017498e1c))
* **source view:** Allow retrieval of loaded modules and of other JS files located in the require path ([31aa4f8](https://github.com/instana/nodejs/commit/31aa4f8ec8b728b14a881191fd63019f82f35e9c))
* **source view:** Allow retrieval of loaded modules via agent requests ([a2de1bc](https://github.com/instana/nodejs/commit/a2de1bcff262f4e1d236a53a1046233e93302996))
* **startTime:** Report application start time to calculate uptime ([d3100b5](https://github.com/instana/nodejs/commit/d3100b56bd36eb4ee59270d5ab18d0ce39baf83a))
* **tracing:** Add automatic bluebird instrumentation ([5807fca](https://github.com/instana/nodejs/commit/5807fcae721c1b5b9fbf61d64402778bf9c2b850))
* **tracing:** Add initial tracing support ([cd85a0c](https://github.com/instana/nodejs/commit/cd85a0c2993496a620d9a999f2e6c1052c93196e))
* **tracing:** Add ioredis support ([327750e](https://github.com/instana/nodejs/commit/327750e01308b83c67afe57195e1056c8df18d26)), closes [#30](https://github.com/instana/nodejs/issues/30)
* **tracing:** Add kafka-node tracing support ([f3d991b](https://github.com/instana/nodejs/commit/f3d991b6a7fe442cfe6fc2088f4587e2ae1cbd11))
* **tracing:** Add MongoDB tracing ([9865e1f](https://github.com/instana/nodejs/commit/9865e1ff93d38a6ff60214488d577177c0e401db))
* **tracing:** Add mysql2 support ([6bf5a3a](https://github.com/instana/nodejs/commit/6bf5a3abd0803820257246d20c681e6085b45821))
* **tracing:** Add OpenTracing support ([22736e7](https://github.com/instana/nodejs/commit/22736e7fed3279266666e6be0fbf0fe03c614621))
* **tracing:** Add redis instrumentation ([68896ec](https://github.com/instana/nodejs/commit/68896ecb0d4141dde8db77aa1e83c1ba188bd178))
* **tracing:** Capture HTTP Host header on entry spans ([c7bd710](https://github.com/instana/nodejs/commit/c7bd7107088d7d3f5e0e4cb809018856ae546d36))
* **tracing:** Capture stack traces for exit spans ([318e491](https://github.com/instana/nodejs/commit/318e491b8813d4d8c1f6b8574062e1d66600661c))
* **tracing:** Enable tracing by default ([3b7c05f](https://github.com/instana/nodejs/commit/3b7c05f6a9203ad52d4dc2567e43bc1f1fe413e3))
* **tracing:** Enable tracing in Node.js ^10.0.0 ([00d51d9](https://github.com/instana/nodejs/commit/00d51d91fdb737aea70f5804e5db9e5a11f2543d))
* **tracing:** enable tracing in Node.js ^9.1.0 ([7ed3574](https://github.com/instana/nodejs/commit/7ed3574242f60a150e2d452ada41e2b732ccdf50))
* **tracing:** Expose trace ID in Server-Timing header ([ce1d5d0](https://github.com/instana/nodejs/commit/ce1d5d055a437fb387e31332a97c0b8fb3426e40))
* **tracing:** Expose trace ID via response cookie so it may be picked up for EUM tracing ([4520902](https://github.com/instana/nodejs/commit/45209024dd8936478b2f02f8c4de65a8d0667d46))
* **tracing:** Include details about uncaught errors in express handlers ([617181d](https://github.com/instana/nodejs/commit/617181db731d81344c69a416b948b4b485d646bb))
* **tracing:** Instrument https client ([8650345](https://github.com/instana/nodejs/commit/86503454ece96b368d55c727740cee7315a4060b)), closes [#33](https://github.com/instana/nodejs/issues/33)
* **tracing:** It must be possible to run in manual tracing mode only and support OpenTracing in Node.js 8 ([94589e0](https://github.com/instana/nodejs/commit/94589e07ac821ad5225f55fc2677dbf4e1be19d3))
* **tracing:** node-postgres (pg) instrumentation ([c5bcc8d](https://github.com/instana/nodejs/commit/c5bcc8de4705d3f3466e7f9e3843c64c90d1f599))
* **tracing:** Record express.js path templates when tracing HTTP entries ([48676ca](https://github.com/instana/nodejs/commit/48676ca9691b9aae855b980f5ac2661043099e18))
* **tracing:** Record fastify path templates when tracing HTTP entries. ([06a5101](https://github.com/instana/nodejs/commit/06a510189cf2df2e9e2665662ccda9b25a99a6f3))
* **tracing:** report uncaught exceptions ([9a0098a](https://github.com/instana/nodejs/commit/9a0098a420e5b4ac4c2fd67c0cd4f7ec29a81e87))
* **tracing:** support both mongdb >= 3.0.6 and < 3.0.6 ([8a058d1](https://github.com/instana/nodejs/commit/8a058d1d79c536ab45478b031969218cdc1d4d0f))
* **tracing:** support for WHATWG URL objects in HTTP client instrumentation ([bbfd38a](https://github.com/instana/nodejs/commit/bbfd38aa88b898ad3aed3d97c32b6f22d3a9f210))
* **tracing:** Support MySQL ([c871cde](https://github.com/instana/nodejs/commit/c871cdedfbf9a01bdd677c885148b63f7bf55573))
* **tracing:** support mysql2/promise ([8897049](https://github.com/instana/nodejs/commit/8897049e8263288b640f472932a93433bc70be01))
* **tracing:** Support recording of user-configurable HTTP headers in HTTP client and server instrumentation. ([ed9bdf1](https://github.com/instana/nodejs/commit/ed9bdf1f7cec187f1444d8a0e7408b48e36d8b35))
* **tracing:** Support service naming for OpenTracing traces. ([976744c](https://github.com/instana/nodejs/commit/976744c3afa189d26fc8d6eeca1c709c4a57de68))
* **tracing:** Transport errors counts in preparation for span batching logic ([6d0435e](https://github.com/instana/nodejs/commit/6d0435e757399dde681280f015ed9022112a2b88))


### Performance Improvements

* **lambda:** improve preliminary checks for SNS-2-SQS trace correlation ([e560432](https://github.com/instana/nodejs/commit/e560432f33a4e5142072145ffeb34700e3e47549))


### Reverts

* Revert "build(deps-dev): bump mssql from 7.3.1 to 9.0.1" (#632) ([309e17b](https://github.com/instana/nodejs/commit/309e17b390a4a32f8f1eb80102a1babae881ec50)), closes [#632](https://github.com/instana/nodejs/issues/632)
* Revert "test: added tsoa framework to integration tests (#492)" ([479a3f6](https://github.com/instana/nodejs/commit/479a3f60f34c87828d2db1d515723f2aa9b076f7)), closes [#492](https://github.com/instana/nodejs/issues/492)
* Revert "chore: add debug timing output (temporary)" ([67fa7ee](https://github.com/instana/nodejs/commit/67fa7ee8edae947051ad1cf1786cb01e1f206273))


### BREAKING CHANGES

* **lambda:** The Instana Node.js Lambda layer is no longer compatible with
Node.js 8. For Lambda functions still running on Node.js 8, please use the
latest layer version that has been published for Node.js 8, see
https://www.ibm.com/docs/en/obi/current?topic=kinesis-aws-lambda-native-tracing-nodejs
* Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
                 Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* Removed "disableAutomaticTracing" config option.
                 Use `instana({ automaticTracingEnabled: Boolean })`.
* Removed "reportUncaughtException" config option.
	 	 The feature was completely removed.
* Removed support for passing logger to instana initialisation.
	 	 Use `instana.setLogger(logger)`".
* v2 has dropped support for Node 6/8.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)


### Bug Fixes

* **amqp:** publish span not being transmitted when confirm cb is missing ([#745](https://github.com/instana/nodejs/issues/745)) ([6dce419](https://github.com/instana/nodejs/commit/6dce41905953c3b157b15b1d46a37d1db4ede389))





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)


### Features

* **collector:** added support for amqplib 0.10.x ([b56a827](https://github.com/instana/nodejs/commit/b56a82791a1b62eed57232df9c2df699b0a4f863))





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)


### Features

* **aws-lambda:** add support for Node.js 18 AWS Lambda runtime ([0900ab4](https://github.com/instana/nodejs/commit/0900ab4e040822d17a2af6610fe7623846fd6128))
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


### Bug Fixes

* **aws-lambda:** respect INSTANA_LOG_LEVEL ([#681](https://github.com/instana/nodejs/issues/681)) ([8c00a0c](https://github.com/instana/nodejs/commit/8c00a0cf905d0c21fb56d10496087a8a07599b51))





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)


### Bug Fixes

* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))
* **collector:** mysql2/promise not working with ESM ([f059047](https://github.com/instana/nodejs/commit/f059047d8be41230a9bf5ec9fb320a58c055c630))





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)


### Features

* **collector:** tracing all spans when client app is using ES modules ([#672](https://github.com/instana/nodejs/issues/672)) ([7d471ff](https://github.com/instana/nodejs/commit/7d471ff751fbd29ce1c96a752304ec3399d0c78c))





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)


### Bug Fixes

* **aws-fargate:** cannot read property 'cpu' of undefined ([#671](https://github.com/instana/nodejs/issues/671)) ([bea107c](https://github.com/instana/nodejs/commit/bea107c84191111302dc91e164a7b68d29731d07))
* **aws-lambda:** reduced deadlocks and long running lambda executions ([#666](https://github.com/instana/nodejs/issues/666)) ([6800be0](https://github.com/instana/nodejs/commit/6800be01d32989723799894dd75a834f2c6c3f30))





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)


### Bug Fixes

* **collector:** resolved elasticsearch legacy error ([ea4f59f](https://github.com/instana/nodejs/commit/ea4f59f37a57e2fc88855bc89ac47775dd1048b4))





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)


### Bug Fixes

* **collector:** improved capturing object logging via bunyan ([#664](https://github.com/instana/nodejs/issues/664)) ([d0f16d1](https://github.com/instana/nodejs/commit/d0f16d136eaa5695fdf4128314a9c34a03e2a50b))


### Features

* **aws-lambda:** added the RequestId to most of the extension logs ([#660](https://github.com/instana/nodejs/issues/660)) ([469f131](https://github.com/instana/nodejs/commit/469f13195350d8e49952b9d7cec35ba71aaec428))





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)


### Features

* **aws-lambda:** added support for ES modules ([#653](https://github.com/instana/nodejs/issues/653)) ([75c28a9](https://github.com/instana/nodejs/commit/75c28a92fb68f3d982207b545a211b65dc4d95ce))





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)


### Bug Fixes

* **sdk:** work around memory leak with recursive SDK usage ([c9b35eb](https://github.com/instana/nodejs/commit/c9b35eb37f1e41f7b11442dd408ca53f5cb2ac13))





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)


### Bug Fixes

* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))


### Features

* **tracing:** instrument prisma (ORM) ([ec760f7](https://github.com/instana/nodejs/commit/ec760f7af0abaa0946276fb2ff09aa0398ab761b))





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)


### Features

* **collector:** added support for redis v4 ([#627](https://github.com/instana/nodejs/issues/627)) ([ad00255](https://github.com/instana/nodejs/commit/ad00255c73bc7ec080a1a91172a8878febe274b2))
* **kafka:** use kafka header format 'both' by default ([b2585cf](https://github.com/instana/nodejs/commit/b2585cf7e4c6f31b38d486505699309cb9d759d6))


### Reverts

* Revert "build(deps-dev): bump mssql from 7.3.1 to 9.0.1" (#632) ([309e17b](https://github.com/instana/nodejs/commit/309e17b390a4a32f8f1eb80102a1babae881ec50)), closes [#632](https://github.com/instana/nodejs/issues/632)





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)


### Features

* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)


### Bug Fixes

* **redis:** suppress error for unsupported redis@4 ([ffad2c2](https://github.com/instana/nodejs/commit/ffad2c2f09ae3672d158bb141c98c38c82a59139))





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)


### Bug Fixes

* **aws-lambda:** reduced backend retries & timeout ([#611](https://github.com/instana/nodejs/issues/611)) ([cab67dd](https://github.com/instana/nodejs/commit/cab67dd10b0f0b7ccfce2787b95e5a020d831cff))
* **db2:** redact password also from the end of the connection string ([ac4c46d](https://github.com/instana/nodejs/commit/ac4c46db11298dcdcc12017e4543972a93263f84)), closes [#614](https://github.com/instana/nodejs/issues/614)


### Features

* **dynamodb:** capture region as annotation ([4ba64f4](https://github.com/instana/nodejs/commit/4ba64f4d8155b365c0fd4540c1abdbe15b572fb5))





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)


### Bug Fixes

* **sqs, sns:** do not add message attributes if that would violate limit ([23c8ca1](https://github.com/instana/nodejs/commit/23c8ca15f82d2e9ea917d710311f6261bbbd6a53))





# [2.7.0](https://github.com/instana/nodejs/compare/v2.6.2...v2.7.0) (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)
* **aws-lambda:** send preflight request to the AWS Lambda extension 



### Bug Fixes


* **lambda:** work around req.destroyed not being set in Node.js <= 12 
* **lambda:** fix concurrency bug in preflight request handling 
* **tracing:** fix log4js message format call 




## [2.6.2](https://github.com/instana/nodejs/compare/v2.6.1...v2.6.2) (2022-08-17)

**Note:** Version bump only for package @instana/root





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)


### Bug Fixes

* **lambda:** increase socket and HTTP timeout for Lambda extension ([7a07a8b](https://github.com/instana/nodejs/commit/7a07a8b1f596cf611bb8a144316b1432a688e1eb))
* **lambda:** interprete deadlineMs as absolute timestamp ([3326e67](https://github.com/instana/nodejs/commit/3326e6768aa962d7514eed314dd1c0a66612e69f))





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)


### Features

* **aws-lambda:** added support for Node v16 ([718cf9f](https://github.com/instana/nodejs/commit/718cf9f69de3062964a28390900dc3f158557cdf))





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)


### Bug Fixes

* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))


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

* **agent:** read span batching option also from tracing section ([1f776d4](https://github.com/instana/nodejs/commit/1f776d46d6329f33939d65041fdc7a78246d62ea))
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

* **fargate:** detect Node.js version, use matching @instana/aws-fargate version ([0d1f955](https://github.com/instana/nodejs/commit/0d1f9557d650aad45673c2caaa22b8906b9b29d3))
* **google-cloud-run:** detect Node.js version, use matching @instana/google-cloud-run version ([451ad1f](https://github.com/instana/nodejs/commit/451ad1f173bff3298ee1250dd2477316ff05adcc))
* **lambda:** remove nodejs8.10 from compatible runtimes ([ff945c2](https://github.com/instana/nodejs/commit/ff945c228e5361227bdae50ff48cc96b64c6b08c))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* removed disableAutomaticTracing legacy config ([#432](https://github.com/instana/nodejs/issues/432)) ([922d168](https://github.com/instana/nodejs/commit/922d168855000f108d23daeb4e267037098ccc1f))
* removed legacy support for config.timeBetweenHealthcheckCalls ([#476](https://github.com/instana/nodejs/issues/476)) ([66eff69](https://github.com/instana/nodejs/commit/66eff6905f0fa4e55987c931345df88eb9fcf114))
* removed support for passing parent logger during initialisation ([bd96791](https://github.com/instana/nodejs/commit/bd9679151388cd8c865df8910b35f7f00e1ca6de))
* removed uncaught exception config ([fb6570a](https://github.com/instana/nodejs/commit/fb6570a862dbdec776eb78b840dcdc4184cd5f00))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))


### BREAKING CHANGES

* **lambda:** The Instana Node.js Lambda layer is no longer compatible with
Node.js 8. For Lambda functions still running on Node.js 8, please use the
latest layer version that has been published for Node.js 8, see
https://www.ibm.com/docs/en/obi/current?topic=kinesis-aws-lambda-native-tracing-nodejs
* Removed support for legacy config `instana({ timeBetweenHealthcheckCalls: ... })`.
                 Use `instana({ metrics: { timeBetweenHealthcheckCalls: ...}})`.
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* Removed "disableAutomaticTracing" config option.
                 Use `instana({ automaticTracingEnabled: Boolean })`.
* Removed "reportUncaughtException" config option.
	 	 The feature was completely removed.
* Removed support for passing logger to instana initialisation.
	 	 Use `instana.setLogger(logger)`".
* v2 has dropped support for Node 6/8.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)


### Bug Fixes

* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
* **collector:** work around Bazel's node-patches module ([d06e9be](https://github.com/instana/nodejs/commit/d06e9be187e9f97c43e4a129ebb2f5e18f82ef8c))


### Features

* **collector:** added instrumentation for @grpc/grpc-js ([d12e386](https://github.com/instana/nodejs/commit/d12e386e95ced2c68d2d549dff83ea3ecfe51735)), closes [#87653](https://github.com/instana/nodejs/issues/87653)
* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))


### Reverts

* Revert "test: added tsoa framework to integration tests (#492)" ([479a3f6](https://github.com/instana/nodejs/commit/479a3f60f34c87828d2db1d515723f2aa9b076f7)), closes [#492](https://github.com/instana/nodejs/issues/492)





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))


### Features

* **tracing:** added instrumentation for node-rdfafka/kafka-avro ([7cb7aa4](https://github.com/instana/nodejs/commit/7cb7aa4207e9807de3c826eeac5369bc39a16ffa))





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)


### Bug Fixes

* **tracing:** fix version constraint for http2 instrumentation ([50f380f](https://github.com/instana/nodejs/commit/50f380f82bb877529daec51fbb16226a8b434751)), closes [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8) [/github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md#8](https://github.com//github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V8.md/issues/8)


### Features

* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)


### Bug Fixes

* **deps:** bumped node-fetch to ^2.6.7 (security patch) ([#465](https://github.com/instana/nodejs/issues/465)) ([e8c622b](https://github.com/instana/nodejs/commit/e8c622bd976f9b552572cfed927cb11876315979))





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)


### Bug Fixes

* **aws-lambda:** fixed lambda timeouts when using extension ([#455](https://github.com/instana/nodejs/issues/455)) ([6df5550](https://github.com/instana/nodejs/commit/6df5550e59ab667a1eda5a01d911554e3dc17aee))
* **aws-lambda:** reduced lambda timeout error count when using extension [#443](https://github.com/instana/nodejs/issues/443) ([0bbfeb8](https://github.com/instana/nodejs/commit/0bbfeb8af57a381c5186624cbf5a19ead11ffe61))
* **clean aws:** fixed S3 cleanup when buckets have no objects [skip ci] ([cc3af62](https://github.com/instana/nodejs/commit/cc3af6237e9c94d35f656b31978fabaf2ba71185))
* **tracing:** fix vendoring of emitter-listener for legacy cls context ([440fd32](https://github.com/instana/nodejs/commit/440fd3218a37bc333da26c2365bfc1116a931b9b))





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)


### Bug Fixes

* **aws-sdk/v3:** added support for @aws-sdk/* 3.4x ([61cc179](https://github.com/instana/nodejs/commit/61cc17945279f4f0996f87e2d955fc4daf519d24))
* **tracing:** fix context loss when cls-hooked#bindEmitter is used ([2743047](https://github.com/instana/nodejs/commit/2743047b79533f5d54233e23ecfce40635bc9981)), closes [#438](https://github.com/instana/nodejs/issues/438)





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)


### Bug Fixes

* **collector:** prevent initializing @instana/collector multiple times ([b3261b7](https://github.com/instana/nodejs/commit/b3261b7a653b406cbe2eeaaf9050134bbeedfac9))
* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)


### Bug Fixes

* **dependency:** pinned lru-cache to 6.0.0 ([0ceb372](https://github.com/instana/nodejs/commit/0ceb372709bd53d0c6cab2060d8cdaf431133706))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1))
* **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))





## 1.137.0
- Configurable Kafka trace correlation (enabled/disabled) and correlation header format (string, binary, both).
- [AWS Lambda] Add DynamoDB streams trigger.
- [W3C Trace Context] Reject traceparent header when either trace ID or parent span ID are all zeroes.
- [Bull] Fixed the error `TypeError: Cannot read property 'opts' of null` in repeatable jobs.

## 1.136.0
- An issue event is sent if the application uses an EOL (end of life) version of Node.js. Applicable only for non serverless environments.
- Manual spans creation handles tags that are passed as non extensible objects - when `Object.freeze` or `Object.preventExtensions` is applied to the tags.
- [AWS SDKv2] Instrumentation of SNS
- Remove dependency to node-gyp. This also removes the opt-in feature of rebuilding native add-ons via node-gyp. This capability was off by default in previous releases, it could be enabled via `INSTANA_REBUILD_NATIVE_ADDONS_ON_DEMAND=true`. This is no longer available, the environment variable will be ignored now.
- Fix: Capture HTTP status codes for GraphQL requests over HTTP.

## 1.135.0
- [Fastify] Add support for 2.x and 3.x

## 1.134.0
- [OpenTelemetry] Add new package `@instana/opentelemetry-exporter` that offers an Instana exporter for OpenTelemetry spans

## 1.133.0
- [AWS Lambda] Increase retries and timeout in Lambda extension binary.
- Add console.warn & console.error instrumentation

## 1.132.2
- Fix `path must be a string of Buffer` error in dependency distance calculator.
- Fix: Use different attribute names in vendored version of `emitter-listener`, to avoid conflicts if the unfixed `emitter-listener` package is still installed and being used by other packages.

## 1.132.1
- Fix: Rename global attribute from cls-hooked from process.namespaces to process.instanaNamespaces to avoid conflicts with other usages of cls-hooked.
- Fix: Vendor the fixed version of `emitter-listener`, so that wrapping the same emitter multiple times works correctly.

## 1.132.0
- Fix instrumentation for very old versions of `redis` (0.12.1).
- AWS SDK v3: Instrumentation of SQS

## 1.131.0
- Limit the number of depdendencies collected as snapshot data.

## 1.130.1
- Update dependency [`tar`](https://www.npmjs.com/package/tar) ([#367](https://github.com/instana/nodejs/pull/367), thanks to @gebhardtr).

## 1.130.0
- [AWS Lambda] Add W3C trace context support for Lambda tracing.

## 1.129.0
- Bring back `applicationUnderMonitoring#getMainPackageJson` and `applicationUnderMonitoring#getMainPackageJsonPath` for backward compatibility.
- AWS SDK v3: Instrumentation of S3

## 1.128.0
- [AWS Lambda] Add trace correlation support for Lambda invocations triggered by SQS messages (including SNS-to-SQS).
- Add trace continuity support for SNS-to-SQS bridge for SQS tracing.

## 1.127.0
- AWS SDK v3: Instrumentation of DynamoDB

## 1.126.2
- Fix: AWS SQS headers reading properly checks for strings, numbers and arrays of strings

## 1.126.1
- The repository was renamed to https://github.com/instana/nodejs (previously: https://github.com/instana/nodejs-sensor).
- Memcached: added `connection` property

## 1.126.0
- Instrumentation of memcached

## 1.125.1
- Reporting correct SQS entry span duration
- Reporting SQS-Consumer processing error messages to the agent

## 1.125.0
- Redact embedded credentials from captured URLs (that is, remove the user:password part from URLs like http://user:password@example.org).
- Add Node.js 16 to the test matrix.

## 1.124.0
- [AWS Lambda] Detect Lambda cold starts.
- [AWS Lambda] Detect imminent Lambda timeouts heuristically.
- Instrumentation of AWS Lambda invoke function

## 1.121.0
- [AWS Lambda] Include Instana's [AWS Lambda extension](https://docs.aws.amazon.com/lambda/latest/dg/using-extensions.html) in the [Instana Node.js Lambda layer](https://www.ibm.com/docs/de/obi/current?topic=kinesis-aws-lambda-native-tracing-nodejs#instana-autotrace-setup). Monitoring data and traces are offloaded locally to Instana's Lambda extension, which will then forward it to the Instana back end. This feature is currently limited to Lambda functions configured with 256 MB of memory or more. Using the Instana Lambda extension can be disabled by setting the environment variable `INSTANA_DISABLE_LAMBDA_EXTENSION` to a non-empty string for a Lambda function.

## 1.120.0
- Add instrumentation for AWS Kinesis

## 1.119.5
- Let instrumented GRPC `ServiceClient` inherit from base client, fixes an issue with [`mali`](https://www.npmjs.com/package/mali) up to version `0.20.0`.
- AWS SQS: remove duplicated instrumentation of receiveMessage in `sqs-consumer` instrumentation.

## 1.119.4
- Fix handling of null/undefined values used as exceptions/reasonswhen reporting uncaught exceptions and unhandled promise rejections.

## 1.119.3
- Instrument `sqs-consumer` to capture exit child spans of SQS entries correctly.
- Add additional check in instrumentation for `@elastic/elasticsearch` to fix TypeError when no action is present.

## 1.119.2
- [AWS Fargate]: Fix secrets filtering for environment variables.
- [Google Cloud Run]: Fix secrets filtering for environment variables.

## 1.119.1
- Fixed a call from collector to the core by using @instana/collector instead of relative path

## 1.119.0
- Add instrumentation for Bull Messaging Framework.

## 1.118.0
- Update third party dependencies.

## 1.117.3
- Fix garbage collection metrics being reported falsely as not supported when `node_modules/gcstats.js` exists.

## 1.117.2
- Do not assume type local by default for OpenTracing spans. Instead, assume type entry when no parent context is available and only assume local if a parent context is available.
- Update to shimmer@1.2.1.

## 1.117.1
- Fix: Do not attempt to load native addons in a worker thread.

## 1.117.0
- [AWS Lambda] Reduce execution time overhead for native AWS Lambda tracing even further. (Bring back performance optimzation that was removed in 1.94.0 with a fix for the stale timeout events.)

## 1.116.0
- Add instrumentation for AWS DynamoDB.

## 1.115.0
- Add instrumentation for AWS S3.
- Update handling of W3C trace context headers to improve integration with OpenTelemetry.
- [AWS Lambda] Fix timeouts when the Lambda callback API without `context.callbackWaitsForEmptyEventLoop = false` is used and the Instana back end responds too slowly.

## 1.114.0
- Introduction of AWS SQS instrumentation for sending and reading messages.
- fix: run original function in runInAsyncContext/runPromiseInAsyncContext when tracing is not active.

## 1.113.0
- Instrument MongoDB native driver unified topology.
- Add configuration mechanism to disable copying of precompiled add-ons (`INSTANA_COPY_PRECOMPILED_NATIVE_ADDONS=false`).
- Make rebuilding native add-ons via node-gyp an opt-in feature (it is off by default now, use `INSTANA_REBUILD_NATIVE_ADDONS_ON_DEMAND=true` to enable it).

## 1.112.1
- Improve heuristic to detect npm or yarn.

## 1.112.0
- Remove `netlinkwrapper` dependency.
- Deprecate reporting uncaught exceptions as incidents and via span/trace. Prints a warning if the feature (which is opt-in) is enabled.

## 1.111.1:
- Avoid false positive warning about @instana/core being initialized too late in the presence of other instrumentation packages that need to be loaded before everything else.

## 1.111.0:
- Do not instrument npm or yarn when started via @instana/collector/src/immediate (instead, only instrument the child process started by npm start or yarn start).
- Do not instrument npm or yarn on AWS Fargate (instead, only instrument the child process started by npm start or yarn start).
- Do not instrument npm or yarn on Google Cloud Run (instead, only instrument the child process started by npm start or yarn start).

## 1.110.5:
- Depend on exact versions of `@instana` packages, not a version range. This makes sure all `@instana` packages are updated in sync and it avoids internal packages like `core` being updated while consuming packages like `collector` stay on an older version.

## 1.110.4
- Bring back core/util polyfill for Buffer.fromString for backwards compatibility.

## 1.110.3
- Exponential backoff retry strategy for failed announce attempts. This helps with agents that have not yet attached to the container (and thereby not seen the process) and thus will reject the very first announce attempt.
- Remove polyfill for Buffer.fromString (for Node.js versions up to 4.5 which we no longer support).

## 1.110.2
- Improve support for pino log calls that only receive a merging object argument.

## 1.110.1
- Fix Node.js 6 compatibility by downgrading `tar` dependency of `@instana/shared-metrics` from `tar@6` to `tar@5`.

## 1.110.0
- [Google Cloud Run]: Exclude some revision instance data from compression.

## 1.109.0
- Improve user experience around native add-on dependencies of `@instana/collector`:
    - Add precompiled archives for some combination of OS, architecture, libc-flavour and ABI-version.
    - Try to use the precompiled native add-on if loading a native add-on fails initially.
    - Try to rebuild the native add-on on demand as a fallback.

## 1.108.0
- Implement batching for very short (< 10 ms), high-frequency database spans (opt-in in this release, will be switched to default behaviour in one of the next releases). To enabled it right now, any of the three following methods can be used:
    - Set the environment variable `INSTANA_SPANBATCHING_ENABLED=true`.
    - Use in-code configuration: `config.tracing.spanBatchingEnabled: true`.
    - Add this to the agent's `configuration.yaml`:

      ```
      com.instana.plugin.nodejs:
        span-batching-enabled: true
      ```
- [AWS Lambda] Check type of Lambda error messages and stringify if necessary.

## 1.107.0
- Add instrumentation for [`@google-cloud/pubsub`](https://www.npmjs.com/package/@google-cloud/pubsub).

## 1.106.6
- Fix (Elasticsearch): Adapt instrumentation for `@elastic/elasticsearch` for refactoring of `api` submodule introduced in `@elastic/elasticsearch@7.9.1`. (Fixes `TypeError: Cannot set property 'Symbol(configuration error)' of undefined`.) Also, remove obsolete `stats` annotation for `elasticsearch` spans.
- Remove longer span reporting interval for serverless tracers, use standard interval instead.

## 1.106.5
- [Google Cloud Run]: Minor changes for the upcoming Google Cloud Run support. Requires at least Instana back end version 189.

## 1.106.4
- Remove direct `node-fetch` dependency from `@instana/aws-fargate` as well as `@instana/google-cloud-run` and move it to `@instana/metrics-util` instead.
- Optimization: Only set `span.data.service` on first span.
- Send `span.crid`/`span.crtp` instead of `span.data.correlationId`/`span.data.correlationType`.

## 1.106.3
- Fix: Move `event-loop-lag` from optionalDependencies to dependencies, so installations with `--ignore-optional` will work correctly. ([#258](https://github.com/instana/nodejs/pull/258), thanks to @ThisIsMissEm).
- [AWS Fargate]: Update dependency `node-fetch` version 2.6.1 (fixes https://www.npmjs.com/advisories/1556).

## 1.106.2
- [AWS Fargate]: Make optional dependencies on native add-ons truely optional (do not break the Docker build on `RUN /instana/setup.sh`).
- Fix: Propagate `X-INSTANA-L: 0` downstream with AMQP headers.

## 1.106.1
- Fix bogus warning about invalid configuration emitted during startup (`"Invalid configuration: config.tracing.http.extraHttpHeadersToCapture is not an array, the value will be ignored: {}"`).
- [Google Cloud Run]: *Experimental* in-process data collection for Google Cloud Run services via the new package `@instana/google-cloud-run`. Requires at least Instana back end version 185. `@instana/google-cloud-run` supports Node.js 8.6.0 or later. Note that this is an early technical preview and not ready for general usage. At this time, no support can be provided for this new package. This will change once Google Cloud Run support becomes generally available with Instana.

## 1.106.0
- Fix(HTTP1/Server): Also set Server-Timing header when X-INSTANA-T is incoming (that is, not only when we start a fresh trace).
- Fix(HTTP1/Server): Do not append another intid key-value pair to Server-Timing if it is already present.
- Fix(HTTP2/Server): Add support for website monitoring back end correlation via Server-Timing header.
- Fix(HTTP2/Server): Add support for X-Instana-Service.
- Fix(HTTP2/Server): Inject the trace ID into the request to enable application code to inject it into the response body.
- Fix(HTTP2/Server): Use case-insensitive header matching as incoming headers are already normalized to lower case (performance improvement).
- Add support for `INSTANA_EXTRA_HTTP_HEADERS` variable.
- Fix(HTTP1/HTTP2): Fix handling for headers of type array (normalize to string, separated by 0x2C 0x20).
- [AWS Fargate] Add support for `INSTANA_ZONE`.
- [AWS Fargate] Add support for `INSTANA_TAGS`.
- Secrets Filtering: Replace values for filtered query parameters with `<redacted>` instead of removing the whole key-value pair.
- [AWS Fargate] Add support for `INSTANA_SECRETS`.
- [AWS Fargate] Add support for `INSTANA_EXTRA_HTTP_HEADERS`.
- [AWS Lambda] Add support for `INSTANA_SECRETS`.
- [AWS Lambda] Make `INSTANA_EXTRA_HTTP_HEADERS` also apply to HTTP exits.
- [AWS Lambda] Improve handling for `event.multiValueHeaders`.

## 1.105.1
- Fall back to `process.mainModule.filename` as the Node.js app's name when the `package.json` file is not present.
- Capture dependencies of an app even if the `package.json` file is not present, by inspecting the `node_modules` folder that is closest to `process.mainModule` in the file system.

## 1.105.0
- Add instrumentation for the [Google Cloud Storage client](https://googleapis.dev/nodejs/storage/latest/index.html).

## 1.104.0
- Drop support for Node.js versions 4 (which was EOL 2018-04-30) and 5 (EOL 2016-06-30) in `@instana/collector`. If you want to use `@instana/collector` with Node.js version 4 or 5 please pin `@instana/collector` to version `1.103.0`.
- Fix: Capture MongoDB aggregate operations correctly.
- Fix: Keep async context across Mongoose custom thenables.

## 1.103.0
- Instrument Node.js core [http2 module](https://nodejs.org/api/http2.html) to trace HTTP/2 communication (except for server push/`pushStream`).

## 1.102.0
- Instrument [superagent's](https://www.npmjs.com/package/superagent) custom thenable to keep asynchronous context.
- Provide experimental API to instrument specific modules on demand for non-standard build/deployment scenarios (e.g. bundling dependencies).
- Fix captured protocol for https URLs in some HTTP exit spans.

## 1.101.1
- [AWS Fargate] Collect Docker metrics on platform version 1.4.0, too.

## 1.101.0
- [AWS Fargate] Collect and report Docker metrics.

## 1.100.2
- Fix: Only require @instana/autoprofile if profiling has been enabled.
- Fix: Recover gracefully from absence of @instana/autoprofile (since it is an optional dependency).

## 1.100.1
- Add more mongodb command names for collection lookup.

## 1.100.0
- Provide an API to manually restore the asynchronous context (async_hooks/AsyncWrap continuity) as a workaround for libraries that break it.

## 1.99.0
- [AWS Fargate] In-process data collection for AWS Fargate tasks via new package `@instana/aws-fargate` (alpha). Requires at least Instana back end version 178. `@instana/aws-fargate` supports Node.js 8.6.0 or later.

## 1.98.1
- Fix PID used in profiling payload when running in a container.

## 1.98.0
- Add `@instana/autoprofile` to support [Instana AutoProfile™](https://www.ibm.com/docs/de/obi/current?topic=instana-profile-processes) (automated and continuous production profiler). Instana AutoProfile is currently opt-in and can be enabled with the config option `autoProfile: true` or via the environment variable `INSTANA_AUTO_PROFILE=true`.

## 1.97.1
- Update to `netlinkwrapper@1.2.0`.
- Fix `span.annotate` to support paths to nested properties (paths can be strings as well as arrays).
- Fix: Protect a custom path template from being overwritten by instrumented middleware running later.

## 1.97.0
- [AWS Lambda] Add support for `INSTANA_ENDPOINT_PROXY` (send data to Instana via a proxy).
- Add support for Node.js 14.
- Update to `event-loop-stats@1.3.0`, to support detecting synchronous event loop blocking.

## 1.96.0
- Instrument [@elastic/elasticsearch](https://www.npmjs.com/package/@elastic/elasticsearch) (aka modern Elasticsearch client).
- Fix instrumentation for legacy Elasticsearch client (https://www.npmjs.com/package/elasticsearch), do not discard subsequent exit spans.
- Make instrumentation robust against https://github.com/montagejs/collections/issues/178.
- Make check for disabled instrumentation stricter (the keys provided in config.tracing.disabledTracers/INSTANA_DISABLED_TRACERS need to be an exact, case-insensitive match of the instrumentation file now). If you have used this configuration option and relied on the fact that this was a string.contains check previously, you might need to update your config.

## 1.95.2
- [AWS Lambda] Fix: Add a connection timeout in addition to the read/idle timeout.

## 1.95.1
- Capture the error message and/or stack trace when completing and SDK span with an error.

## 1.95.0
- Support deployment scenario in which the whole application is installed from a registry via npm install instead of only its dependencies.

## 1.94.0
- [AWS Lambda] Fix stale timeout events on socket object induced by AWS Lambda runtime freezing and thawing the process.
- Support X-INSTANA-SYNTHETIC.

## 1.93.0
- Support tracing of deferred HTTP exits (that is, capture HTTP exits if the entry that triggered it has already finished).
- [AWS Lambda] Add support for INSTANA_DISABLE_CA_CHECK.

## 1.92.5
- [AWS Lambda] Reset `requestHasFailed` flag on start of Lambda handler.
- [AWS Lambda] Improve logging for data reporting timeouts.
- [AWS Lambda] Remove misleading "Traces and metrics have been sent to Instana." message.
- Remove deprecated span attributes `span.error` and `span.async`.
- Remove obsolete configuration option `config.agentName`/`INSTANA_AGENT_NAME`.

## 1.92.4
- [AWS Lambda] Do not try to send data to the Instana back end when a previous request to it has already failed.
- [AWS Lambda] Change span offloading intervall to 5 seconds.
- [AWS Lambda] Make sure that an uninstrumented https connection is used for span offloading.
- [AWS Lambda] Change layer name from `instana` to `instana-nodejs` to prepare for the extension of native AWS Lambda tracing to other runtimes.

## 1.92.3
- Always capture duration of GraphQL calls.
- Support `INSTANA_DEBUG` in native serverless tracing.

## 1.92.2
- Do not remove tags from lower priority spans when changing the span type (e.g. http -> graphql)

## 1.92.1
- Fix mongodb tracing for outdated versions of the mongodb package.

## 1.92.0
- Support for new website monitoring/mobile back end correlation via extended X-INSTANA-L header.
- Capture request and response headers on outgoing HTTP calls.

## 1.91.0
- Support for [W3C Trace Context](https://www.w3.org/TR/trace-context/).
- Fix: Annotate path templates (Express.js, Koa, Hapi, ...) and error messages (Express.js) on all HTTP entry spans, not only on root spans.

## 1.90.0
- Add API method to annotate spans with custom tags.

## 1.89.1
- Rewrite MongoDB instrumentation from scratch without using its APM API (which makes it hard to keep the trace context across async calls).

## 1.89.0
- Instrument [Apigee Microgateway/edgemicro's](https://www.npmjs.com/package/edgemicro) worker processes automatically when they are spawned.
- Provide an executable for static instrumentation of a globally installed [edgemicro](https://www.npmjs.com/package/edgemicro) CLI (see [our docs](https://www.ibm.com/docs/de/obi/current?topic=technologies-monitoring-apigee-microgateway) for details).
- Keep asynchronous context across [memored](https://www.npmjs.com/package/memored) IPC communication gaps.

## 1.88.1
- [AWS Lambda] Replace intid value if it already exists in the Server-Timing header (in case the same result object is reused for multiple requests).

## 1.88.0
- Also support Winston 1.x and 2.x plus [`express-winston`](https://www.npmjs.com/package/express-winston) (in addition to Winston >= 3.x, which is already supported).

## 1.87.0
- Improve support for [Apollo Federation](https://www.apollographql.com/docs/apollo-server/federation/introduction/) by instrumenting [@apollo/gateway](https://www.npmjs.com/package/@apollo/gateway).
- Downgrade log level for missing package.json in potential depedency directory from info to debug.

## 1.86.0
- Add instrumentation for [pg-native](https://www.npmjs.com/package/pg-native) (`pg-native` is an alternative PostgreSQL driver package, in addition to the already supported [pg](https://www.npmjs.com/package/pg) package).

## 1.85.0
- [AWS Lambda] Reduce execution time penalty for native AWS Lambda tracing even further.
- Refactor agentready state to not use closures.

## 1.84.3
- [AWS Lambda] Avoid duplicated postHandler calls.

## 1.84.2
- [AWS Lambda] Call original callback in wrapped context.succeed/context.fail/context.done.
- Allow GraphQL tracing over other protocols in addition to HTTP.

## 1.84.1
- Also capture incoming HTTP calls that time out on the client side or are aborted on the server side (via `req.destroy()`).

## 1.84.0
- Add support for the [log4js](https://www.npmjs.com/package/log4js) logging package.
- [AWS Lambda] Instrument deprecated legacy Lambda API (context.done, context.succeed, and context.fail).
- Fix stack trace capturing for Winston log calls.

## 1.83.0
- Add kafkajs instrumentation ([kafkajs](https://www.npmjs.com/package/kafkajs)).

## 1.82.1
- Trace MySql pool cluster calls.

## 1.82.0
- Capture synchronous errors in Lambda functions.
- Handle ARN correctly when a Lambda function is called via an alias.

## 1.81.1
- Fully cover Winston 3.x API surface.

## 1.81.0
- Provide access to Instana Node.js API via `@instana/aws-lambda`.
- Add instana.sdk.async alias for instana.sdk.promise.

## 1.80.0
- Add ability to disable individual tracers via `config.tracing.disabledTracers` or `INSTANA_DISABLED_TRACERS`.

## 1.79.1
- [AWS Lambda] Cache target handler across invocations.

## 1.79.0
- Add auto-wrap package for AWS Lambda to enable Lambda tracing without code modification.

## 1.78.1
- Only use `X-Instana-Service` HTTP header when agent is configured to capture it.

## 1.78.0
- Support `INSTANA_SERVICE_NAME`/`config.serviceName` for auto-tracing and SDK spans. Previously, this has only been supported for OpenTracing spans.
- Support `X-Instana-Service` HTTP header.

## 1.77.0
- [AWS Lambda] Inject EUM back end correlation header in AWS Lambda responses if possible.

## 1.76.0
- Do not add tracing headers to signed aws-sdk HTTP requests.
- Extract serverless utilities that are not specific to the AWS Lambda platform into their own utility package, @instana/serverless.
- Log a warning when @instana/collector has been initialized too late. Additionally, this will be transmitted as snapshot data.

## 1.75.0
- Capture HTTP response headers for HTTP entry spans.

## 1.74.2
- [AWS Lambda] Support new environment variables `INSTANA_ENDPOINT_URL` and `INSTANA_AGENT_KEY` in addition to the now deprecated variables `INSTANA_URL` and `INSTANA_KEY`.

## 1.74.1
- [AWS Lambda] Improve logging.

## 1.74.0
- [AWS Lambda] In-process data collection for AWS Lambdas via new package @instana/aws-lambda (beta).

## 1.73.2
- Move some metrics from core to collector package.

## 1.73.1
- Fix cases where GraphQL tracing would break when another non-HTTP entry span is already active.

## 1.73.0
- Allow early init of instrumentations (experimental).

## 1.72.1
- Improve announce cycle by polling for the "agent ready" state once a second, this will bring the delay from "announce" to "agent ready" down from 10 to ~1 seconds for the majority of cases (in particular with the improved agent to be released soon).
- Enforce minimum delay of one second between sending snapshot data and the first spans.

## 1.72.0
- Add NATS.io instrumentation ([nats](https://www.npmjs.com/package/nats)).
- Add NATS streaming instrumentation ([node-nats-streaming](https://www.npmjs.com/package/node-nats-streaming)).

## 1.71.3
- Fix: Add MongoDB command details for update, replace and delete operations.

## 1.71.2
- Avoid triggering fastify's `basePath` deprecation warning.

## 1.71.1
- Remove overaggressive validation warning for HTTP spans.

## 1.71.0
- Add support for kafka-node >= 4.0.0.
- Bunyan: support for capturing the error message from a nested error object (attribute `err`) given in the fields argument.

## 1.70.0
- Enable uncaught exception reporting in Node 12.x.

## 1.69.2
- Fix cases where span.ec would be overwritten by http server instrumentation.

## 1.69.1
- Trace through graphql-subscriptions PubSub/AsyncIterator.
- Add missing cls.ns.exit calls in mongodb instrumentation (fix for leaking `cls.ns._set` entries).

## 1.69.0
- Add graphql instrumentation ([graphql](https://www.npmjs.com/package/graphql)).

## 1.68.4
- Require `cls-bluebird` before installing the require hook for `bluebird` so client code can use `cls-bluebird` without conflicts ([#152](https://github.com/instana/nodejs/pull/152), thanks to @jonathansamines).
- Fix tracing of `https` client calls in Node.js 8.9.0.

## 1.68.3
- Add additional check to `requireHook` in case other modules interfering with `require` (like `require-in-the-middle`) are present.

## 1.68.2
- Remove circular references from span data before serializing it ([#148](https://github.com/instana/nodejs/pull/148), thanks to @sklose).

## 1.68.1
- Log a warning instead of info when running an unsupported Node.js version.

## 1.68.0
- Improve configuration handling, support more environment variables.
- Record [hapi.js](https://hapijs.com/) routes as path templates when tracing HTTP entries.
- Fix wrong warnings in validation for entry spans (that no other span is already in progress) for HTTP(s) entries.

## 1.67.2
- Read X-INSTANA-... headers case-insensitive in amqp instrumentation.
- Fix handling of Fastify routes with an beforeHandler array.

## 1.67.1
- Fix: Handle koa routes defined by regular expressions.

## 1.67.0
- Add support for Node.js 12 (except for two optional features that rely on native addons which are not yet available for Node.js 12, CPU profiling and reporting uncaught exceptions).

## 1.66.0
- Report unhandled promise rejections as issues (disabled by default, see [configuration guide](https://www.ibm.com/docs/de/obi/current?topic=nodejs-collector-configuration#reporting-unhandled-promise-rejections)).

## 1.65.1
- Fix: Init metrics correctly when no config is passed ([#138](https://github.com/instana/nodejs/issues/138)).
- Add data.rpc.host and data.rpc.port to GRPC exits to improve service discovery.

## 1.65.0
- Rename the npm package from instana-nodejs-sensor to @instana/collector. See [migration guide](https://www.ibm.com/docs/de/obi/current?topic=nodejs-collector-installation#change-of-package-name) for details.
- Split into @instana/core and @instana/collector.
- Fix trace context continuity when multiple instances of `bluebird` are present.

## 1.64.0
- Add tracing SDK to create spans manually, integrating seamlessly with automatic tracing - see [SDK API documentation](https://www.ibm.com/docs/de/obi/current?topic=nodejs-instana-api#creating-spans-manually-with-the-sdk) for details.
- Additional validation for entry spans (that no other span is already in progress).

## 1.63.2
- Remove deprecated span attribute span.b.u (redis, ioredis).

## 1.63.1
- Fix: Set GRPC headers instead of adding them.

## 1.63.0
- Limit content length of requests when talking to the agent.
- Fix: Handle non-pooled pg queries using the promise API correctly.

## 1.62.0
- Extend API: Offer various getters to inquire about details of the currently actice span (trace ID, span ID and other attributes).
- Improve generated IDs (span ID, trace ID).
- Fix: Make sure timeouts created by instana-nodejs-sensor do not prevent the process from terminating.

## 1.61.2
- Fix for GRPC instrumentation: Add original attributes to shimmed client method.

## 1.61.1
- Fix: Add missing instrumentation hooks for mysql/mysql2#execute.

## 1.61.0
- Accept values of type string for config.tracing.stackTraceLength.

## 1.60.3
- Fix an issue in the GRPC instrumentation when an options object is provided.

## 1.60.2
- Fix duplicated cls binds in postgres and mssql instrumentation.

## 1.60.1
- Fix error when a Pino logger was passed via config (#119).

## 1.60.0
- Instrument Elasticsearch operations msearch and mget ([#117](https://github.com/instana/nodejs/pull/117), thanks to @DtRWoS).

## 1.59.0
- Add GRPC instrumentation ([grpc](https://www.npmjs.com/package/grpc)).

## 1.58.0
- Support Node.js 11.

## 1.57.0
- Provide an API to set a logger after initialization to resolve init/logger cycle.

## 1.56.0
- Record [koa-router](https://github.com/alexmingoia/koa-router) routes as path templates when tracing HTTP entries.
- Improve announce payload.
- Left pad generated IDs with '0'.

## 1.55.2
- Fix: Add HTTP query params for HTTP exits.
- Fix: Do not capture HTTP headers for HTTP exits (only for entries).
- Fix: Capture erroneous span on synchronous exceptions in HTTP client (like malformed URL).

## 1.55.1
- Fix method name of NoopSpanHandle.

## 1.55.0
- Provide API to end spans manually to allow capturing of child exit spans for message consumers (RabbitMQ/amqplib, Kafka).

## 1.54.2
- Fix broken trace context in some MongoDB usage scenarios.

## 1.54.1
- RabbitMQ/amqplib: Small fix for TLS AMQP Urls (amqps).

## 1.54.0
- Instrument [Bunyan](https://github.com/trentm/node-bunyan).
- Pino: Improve tracing for error objects.

## 1.53.0
- Instrument [Winston](https://github.com/winstonjs/winston).
- Exclude file system entries that are not directories in dependency analysis, fixes confusing warning.

## 1.52.0
- Instrument [Pino](http://getpino.io/).
- Allow other (non-Bunyan) loggers to be injected ([#88](https://github.com/instana/nodejs/pull/88), thanks to @SerayaEryn).

## 1.51.0
- Instrument amqplib (RabbitMQ tracing).

## 1.50.1
- Fix: Do not attach context to error/exception objects (#90).

## 1.50.0
- Update to latest emitter-listener package to include [latest fix](https://github.com/othiym23/emitter-listener/pull/6).
- Update a number of dependencies (bunyan, event-loop-lag, opentracing, shimmer, ...).
- Fix minor issues reported by npm audit.

## 1.49.1
- Fix: Do not fail when http client options object has a headers attribute with value.

## 1.49.0
- Enable CPU profiling for Node.js 10 apps.
- Warn about missing dependency netlinkwrapper at startup when reporting of uncaught exceptions is enabled.
- Fix: Uncaught exception reporting can now be enabled on systems using musl libc instead of glibc (e.g. Alpine Linux).

## 1.48.1
- Fix secret scrubbing for HTTP server instrumentation.

## 1.48.0
- Various fixes and improvements for the HTTP client instrumentation:
    - support for http(s).request(url, options, callback) API introduced in Node.js 10.9.0,
    - support for WHATWG URL objects,
    - fix for requests with header "Expect: 100-continue", and
    - instrument http.get and https.get separately from http(s).request.

## 1.47.1
- MySQL: Fix for MySQL instrumentation sometimes losing the tracing context.

## 1.47.0
- Add MSSQL (Microsoft SQL Server) instrumentation (supports [mssql](https://www.npmjs.com/package/mssql), version >= 4 via [tedious driver](https://www.npmjs.com/package/tedious)).
- Tracing support for [mongodb](https://www.npmjs.com/package/mongodb) version >= 3.0.6.

## 1.46.0
- Support a wider range of command names for identification of PID in parent PID namespace.
- Report uncaught exceptions as incidents and via span/trace (disabled by default).

## 1.45.0
- Record `https` client calls.

## 1.44.2
- Fix result handling in PostgreSQL instrumentation.

## 1.44.1
- Do not break when modules use `stealthy-require` or similar mechanisms.

## 1.44.0
- Record fastify path templates when tracing HTTP entries.

## 1.43.0
- Record express.js path templates when tracing HTTP entries.

## 1.42.0
- Expose a debugging action to learn about loaded modules.
- Allow retrieval of `package.json` files.

## 1.41.0
- Add PostgreSQL instrumentation ([pg](https://www.npmjs.com/package/pg)).

## 1.40.2
- Avoid sending batch size 0 for Redis multi commands.

## 1.40.1
- Only try to instrument bluebird if it is actually available.

## 1.40.0
- Include additional debugging data in log when data transmission to agent fails.
- Support recording of user-configurable HTTP headers in HTTP client and server instrumentation.

## 1.39.0
- Include reporting PID in agent logs.

## 1.38.3
- Protect spans from accidental retransmission.
- Abort HTTP requests to the agent on timeouts.
- HTTP client instrumentation does not correctly interpret HTTP client timeouts.

## 1.38.2
- ioredis: Correctly manage tracing context in ioredis instrumentation.

## 1.38.1
- OpenTracing baggage is not defined on span context when using `getCurrentlyActiveInstanaSpanContext`.

## 1.38.0
- Enable tracing in Node.js `^10.0.0`.
- Regression in MongoDB instrumentation which attempts to access optional `operationId` properties.

## 1.37.3
- Prepare support for 128bit trace IDs.
- Reduce memory footprint when using HTTP agents with `maxSockets: Infinity`.

## 1.37.2
- MongoDB: Properly initialize and assure operationId is generated.

## 1.37.1
- ioRedis instrumentation can lead to errors when async correlation doesn't work as expected.
- Add tracing support for mysql2/promise.
- Switch to `@risingstack/v8-profiler` due to security issues in transitive dependencies of `v8-profiler`.

## 1.37.0
- Enable tracing in Node.js `^9.1.0`.

## 1.36.1
- Reduce severity in log messages which describe dependency analysis failures.
- Upgrade `event-loop-lag` to address [security vulnerability](https://nodesecurity.io/advisories/534) in `debug`.

## 1.36.0
- Fix support for mysql2 versions prior to 1.5.0.
- Read env vars by default to determine agent connection config.

## 1.35.1
- HTTPS exit spans can have the wrong protocol set.

## 1.35.0
- Fix an async correlation issue caused by outgoing HTTP calls.
- Do not enable tracing in Node.js v9
- Limit maximum database statement length that is stored in spans.
- MongoDB spans are nested in a wrong way.

## 1.34.1
- Allow retrieval of TypeScipt and JSX files via the backchannel.

## 1.34.0
- Call sequences are not recoded when using Redis.
- Add `batch` (pipeline) support for Redis.

## 1.33.0
- Add ioredis instrumentation.
- Exclude `exec` call from Redis instrumentation sub commands.

## 1.32.0
- Include details about uncaught errors in express handlers.

## 1.31.0
- Add redis instrumentation.

## 1.30.3
- HTTP tracing will report incorrect path in case of express.js router usage.

## 1.30.2
- Support HTTPS server tracing.

## 1.30.1
- Update `Server-Timing` response header in HTTP instrumentation to format of latest spec version.

## 1.30.0
- Use MIT license.

## 1.29.0
- MongoDB instrumentation tests fail intermittently
- Add automatic mysql2 instrumentation

## 1.28.1
- Node.js <=4.5.0 can have `Buffer.from`, but it does not accept a string. Thanks @libozh!
- Support announce to agent even when the Node.js process is renamed.
- Update supported versions; checks & tests

## 1.28.0
- Support automatic Node.js 8 tracing.

## 1.27.1
- Add Request query capture & reporting.

## 1.27.0
- HTTP client spans do not have the error count field `ec` set.
- It must be possible to run in manual tracing mode only.
- Support OpenTracing usage in Node.js 8.
- Support service naming for OpenTracing traces.

## 1.26.8
- Check for supported Node.js tracing versions marks v7 as unsupported.

## 1.26.7
- Data transmission is broken in Node.js 0.12.

## 1.26.6
- Encoding in communication between sensor and agent is only guaranteed via Node.js default opts.
- Transmission of data to agents will fail whenever a character is being transmitted that needs more than one byte.

## 1.26.5
- URL parsing results in measurable overhead in HTTP server tracing.

## 1.26.4
- MongoDB tracing writes filter information into the wrong property.

## 1.26.3
- Node.js v8 tracing is not yet possible. Automatically disable tracing when running within Node.js v8.

## 1.26.2
- Parent handle in hooks is unused and can result in memory leaks.

## 1.26.1
- OpenTracing is broken in version 0.14.0 and sensor support is incompatible.

## 1.26.0
- Allow configuration of agent host address to support environments in which iptables or other networking tricks are used. Contributed by @lowsky. Thank you!
- Upgrade opentracing to 0.14.0.

## 1.25.0
- Support tracing for the mysql module.

## 1.24.0
- Collect healthcheck results.

## 1.23.1
- Support CPU profiling in Node.js >=7.0.0

## 1.23.0
- Only publish the necessary runtime files.
- Support scoped modules in dependency analysis.
- Support the new OpenTracing span kinds `producer` and `consumer`.

## 1.22.0
- Add additional meta data to the agent announce information to enable discovery in Kubernetes and CloudFoundry environments.

## 1.21.1
- Remove duplicated HTTP metric gathering and reduce memory overhead.

## 1.21.0
- Expose trace ID for root spans in `Server-Timing` header.

## 1.20.3
- The Node.js tracing sensor on the agent side can be stopped. This will result in 404 errors which we should not log.

## 1.20.2
- Upgrade event-loop-lag because of security vulnerabilities in its dependency tree. Contributed by @jamessharp. Thank you!

## 1.20.1
- Source file retrieval is often broken. After discussions, we decided to relax the checks to only allow transmission of `*.js` files without validation of the location of the file.

## 1.20.0
- Add kafka-node tracing support.

## 1.19.1
- `getCurrentlyActiveInstanaSpanContext()` fails for modules which are using opentracing APIs while testing.

## 1.19.0
- Remove development and documentation artifacts from NPM published module.
- Execute tests against Node.js v7.
- Add opentracing support.

## 1.18.0
- Transport error counts in preparation for span batching logic.
- Log fewer stacktraces when agent identification fails.

## 1.17.6
- Strip matrix parameters and hash values from requests paths in addition to query parameters.

## 1.17.5
- Allow user access to trace IDs as automatically for extended EUM support.
- Stop setting cookies automatically for extended EUM support.

## 1.17.4
- Disable extended EUM support by default.

## 1.17.3
- Reported URLs for outgoing HTTP calls must include a `:` after the protocol name.

## 1.17.2
- Add a `Path` directive for EUM cookies to support sub directory resource requests.

## 1.17.1
- Use an `Expires` directive for EUM cookies to support IE<=8.

## 1.17.0
- Expose trace ID via response cookie so it may be picked up for EUM tracing.

## 1.16.0
- Enable tracing by default.

## 1.15.4
- Never generate negative span IDs to avoid negative hex values.

## 1.15.3
- Stringify Elasticsearch query to align with Java tracing implementation.

## 1.15.2
- Allow retrieval of loaded modules and of other JS files located in the require path.

## 1.15.1
- Allow retrieval of loaded modules via agent requests.
- Fix name of command property in MongoDB spans.

## 1.15.0
- Restrict CPU profiling support to Node.js >=4.0.0.
- Differentiate between all the supported V8 garbage collection types.

## 1.14.0
- Add on-demand CPU profiling support.

## 1.13.0
- Add MongoDB tracing.

## 1.12.1
- Format function name in stack traces as defined in the v8 Wiki.

## 1.12.0
- Capture stack traces for exit spans.

## 1.11.0
- Capture HTTP `Host` header on entry spans.

## 1.10.4
- Maintenance: Avoid header casing questions by always transmitting uppercase header names.

## 1.10.3
- Ensure compatibility with Zipkin by receiving span and trace IDs as hex.

## 1.10.2
- Ensure compatibility with Zipkin by transmitting span and trace IDs as hex.

## 1.10.1
- Transport cluster name in Elasticsearch spans to allow logical view creation.
- Transport full URL for HTTP exit spans.

## 1.10.0
- Be more careful about identification of agent hosts in cases where the identified URL is not actually a URL.
- Add tracing infrastructure.
- Add HTTP server tracing.
- Add HTTP client tracing.
- Add Elasticsearch tracing.

## 1.9.0
- Fix errors that can occur when logging to the agent.
- Combine app and runtime sensor.

## 1.8.0
- Use keep alive connections for all agent communication.
- Treat agent ready call timeouts as failed checks.

## 1.7.0
- Send logs to agent for ease of debugging.
- Fix agent communication issues were successive announce attempts resulted in announce problems.

## 1.6.2
- Determined PID is not transmitted to agent during announce phase.

## 1.6.1
- Do not depend on a specific command name when parsing `/proc/<pid>/sched` files.

## 1.6.0
- Read PID from `/proc/<pid>/sched` for increased robustness in cases where the Node.js sensor is running in a different PID namespace than the agent.

## 1.5.1
- Increase log level for failed agent communication to warn.

## 1.5.0
- Track Node.js internal handle and request counts.
- Report application start time to calculate uptime.

## 1.4.0
- Support Docker bridge networks by attempting agent communication with the container's default gateway.
- Support custom agent HTTP ports and name.

## 1.3.3
- Improve announce cycle stability.

## 1.3.2
- Use a more efficient data structure for heap space data.

## 1.3.1
- `v8` module does not exist in early Node.js versions.

## 1.3.0
- Retrieve heap space statistics.

## 1.2.0
- Support varying log levels and output destinations.

## 1.1.2
- Requests may hang and put sensor in endless announce cycle.

## 1.1.1
- Identification of `event-loop-stats` availability always fails.

## 1.1.0
- Allow sensor execution without native addons.

## 1.0.0
- Initial release
