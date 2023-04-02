# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **aws-lambda:** fixed lambda timeouts when using extension ([#455](https://github.com/instana/nodejs/issues/455)) ([6df5550](https://github.com/instana/nodejs/commit/6df5550e59ab667a1eda5a01d911554e3dc17aee))
* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))
* **aws-lambda:** reduced backend retries & timeout ([#611](https://github.com/instana/nodejs/issues/611)) ([cab67dd](https://github.com/instana/nodejs/commit/cab67dd10b0f0b7ccfce2787b95e5a020d831cff))
* **aws-lambda:** reduced deadlocks and long running lambda executions ([#666](https://github.com/instana/nodejs/issues/666)) ([6800be0](https://github.com/instana/nodejs/commit/6800be01d32989723799894dd75a834f2c6c3f30))
* **aws-lambda:** reduced lambda timeout error count when using extension [#443](https://github.com/instana/nodejs/issues/443) ([0bbfeb8](https://github.com/instana/nodejs/commit/0bbfeb8af57a381c5186624cbf5a19ead11ffe61))
* **aws-lambda:** respect INSTANA_LOG_LEVEL ([#681](https://github.com/instana/nodejs/issues/681)) ([8c00a0c](https://github.com/instana/nodejs/commit/8c00a0cf905d0c21fb56d10496087a8a07599b51))
* **lamba:** set min log level to info for aws-lambda ([91fcf5d](https://github.com/instana/nodejs/commit/91fcf5d6aec5abd4b0b17535ad7aae2e3a645988))
* **lambda:** add a connection timeout in addition to read timeout ([ffe9ed0](https://github.com/instana/nodejs/commit/ffe9ed0992aca44b0fee56cfd1752e0291acb7fc))
* **lambda:** add Node.js 14 to compatible runtimes ([66a0b9f](https://github.com/instana/nodejs/commit/66a0b9f089e74a1698164fb30a0fd4d351e5c800))
* **lambda:** automatically set required permissions for Lambda layer ([9fb6e01](https://github.com/instana/nodejs/commit/9fb6e01ba12cc0913bda0757e3194b18a87fdf1c))
* **lambda:** avoid duplicated postHandler calls ([7fd00d2](https://github.com/instana/nodejs/commit/7fd00d220bcb5a7ee76902c82910b367d503cd6b))
* **lambda:** cache target handler across invocations ([65a3147](https://github.com/instana/nodejs/commit/65a314752dac579ff8ee4c52536428463bbee9d3))
* **lambda:** call original callbacks in wrapped legacy API ([1f6a323](https://github.com/instana/nodejs/commit/1f6a3239790161c3a3112faf35484b7d1c972b76))
* **lambda:** convert error.message to string if necessary ([87e7769](https://github.com/instana/nodejs/commit/87e7769628020751efe67565b686862bef472c7a))
* **lambda:** fix build scripts for local tar.gz variant ([c00f95b](https://github.com/instana/nodejs/commit/c00f95b2242dfd1981dc1431c4d4f5055cd2928a))
* **lambda:** fix concurrency bug in preflight request handling ([5509dbc](https://github.com/instana/nodejs/commit/5509dbc554faa4acd4b72b7c56ded161cc5332f8))
* **lambda:** interprete deadlineMs as absolute timestamp ([3326e67](https://github.com/instana/nodejs/commit/3326e6768aa962d7514eed314dd1c0a66612e69f))
* **lambda:** remove nodejs8.10 from compatible runtimes ([ff945c2](https://github.com/instana/nodejs/commit/ff945c228e5361227bdae50ff48cc96b64c6b08c))
* **lambda:** replace intid value if result object is reused ([8ae5ada](https://github.com/instana/nodejs/commit/8ae5adaf1e03ab5379eb85bd1868da323951bbc8))
* **lambda:** support INSTANA_DEBUG in serverless tracing ([d8d8a47](https://github.com/instana/nodejs/commit/d8d8a4729a47974be73b62725a18f1ee5700a892))
* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))
* depend on exact versions of [@instana](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* remove longer span reporting interval in serverless tracers ([ddffe2d](https://github.com/instana/nodejs/commit/ddffe2d09a3405f485e951dd6ebb64051d6f9583))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))
* **lambda:** reset requestHasFailed flag on start of Lambda handler ([0654527](https://github.com/instana/nodejs/commit/0654527e42aa428b6c8dc7c06abd4b567bfa1d90))
* **lambda:** stop sending to back end when a request has already failed ([9f3a227](https://github.com/instana/nodejs/commit/9f3a227728412e8e69573b23bbb7f070353b3fa2))
* **lambda:** support `INSTANA_ENDPOINT_URL` and `INSTANA_AGENT_KEY` ([faae13c](https://github.com/instana/nodejs/commit/faae13c9d9a80d877affa6a5344bcac2ab1e2c48))
* **lambda:** update extension binary, increase retries and timeout ([3eeb12c](https://github.com/instana/nodejs/commit/3eeb12c699b311affd8c9e0b08a48fb6caa53eb5))
* **lambda:** workaround for stale timeout events ([82c37f4](https://github.com/instana/nodejs/commit/82c37f43a0cea18f53d87dc208d6a3dfda7c094c))
* **security:** updated tar dependency ([6e7098e](https://github.com/instana/nodejs/commit/6e7098eb0107e975c9f2476c81ed0bd55a647729))
* **tracing:** avoid duplicate Lambda timeout message ([0cd473d](https://github.com/instana/nodejs/commit/0cd473d4ab50bf6b1ab1745a117b50486b324600))


### Features

* **aws-lambda:** add support for Node.js 18 AWS Lambda runtime ([0900ab4](https://github.com/instana/nodejs/commit/0900ab4e040822d17a2af6610fe7623846fd6128))
* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))
* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)
* **aws-lambda:** added support for ES modules ([#653](https://github.com/instana/nodejs/issues/653)) ([75c28a9](https://github.com/instana/nodejs/commit/75c28a92fb68f3d982207b545a211b65dc4d95ce))
* **aws-lambda:** added support for Node v16 ([718cf9f](https://github.com/instana/nodejs/commit/718cf9f69de3062964a28390900dc3f158557cdf))
* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))
* **aws-lambda:** added the RequestId to most of the extension logs ([#660](https://github.com/instana/nodejs/issues/660)) ([469f131](https://github.com/instana/nodejs/commit/469f13195350d8e49952b9d7cec35ba71aaec428))
* **fargate:** add support for Fargate via @instana/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **fargate:** collect Docker stats as metrics ([566112a](https://github.com/instana/nodejs/commit/566112a370397c1434ec2cc671d6aa175d8c8586))
* **lambda:** add Lambda extension to Intana's Node.js Lambda layer ([ae190a7](https://github.com/instana/nodejs/commit/ae190a7133da2c39e6582b18ceb265c49c8f36b7))
* **lambda:** add Server-Timing header for EUM/back end correlation ([d7d5c85](https://github.com/instana/nodejs/commit/d7d5c8562a5b5285ab4cb699b4561c91b24f0f21))
* **lambda:** add support for INSTANA_DISABLE_CA_CHECK ([6303908](https://github.com/instana/nodejs/commit/63039089484493f9a53b451043fa56f805eabb80))
* **lambda:** add trace correlation for SNS-to-SQS ([79df688](https://github.com/instana/nodejs/commit/79df688f45c276985ff65d21f4d8a39ca5c56113))
* **lambda:** add trace correlation when triggered by SQS message ([381c064](https://github.com/instana/nodejs/commit/381c0642c38a43e8af920386eb154c2a9ff6050d))
* **lambda:** capture AWS Lambda Request ID ([2b041c9](https://github.com/instana/nodejs/commit/2b041c9aed2afbd86c71135241a39bd37b602cc1))
* **lambda:** capture synchronous errors in handlers ([c1edf71](https://github.com/instana/nodejs/commit/c1edf71208150ba69eede3eee615291b49dd3d84))
* **lambda:** detect imminent timeouts heuristically ([40b555d](https://github.com/instana/nodejs/commit/40b555d559d2cd913f8b857b888eb472df06c1d8))
* **lambda:** detect Lambda cold starts ([8186425](https://github.com/instana/nodejs/commit/818642549a6c341c8cbea92d0f0e56f61978dbe7))
* **lambda:** handle ARN correctly when called via alias ([190b5fc](https://github.com/instana/nodejs/commit/190b5fc1486137b6e46227424bc38b01acc515aa))
* **lambda:** improve support for INSTANA_EXTRA_HTTP_HEADERS ([e738490](https://github.com/instana/nodejs/commit/e7384904c21081d0636ae4dc42c4a7d4a4b3ae7a))
* **lambda:** instrument deprecated legacy Lambda API ([be408ee](https://github.com/instana/nodejs/commit/be408ee4eda74758daa9bc870556e46d9e92ce39))
* **lambda:** make standard Instana Node.js API available for Lambdas ([ec4177b](https://github.com/instana/nodejs/commit/ec4177b51563853f918e1deb3e982453c1931fb9))
* **lambda:** provide auto-wrap Lambda handler ([57952ea](https://github.com/instana/nodejs/commit/57952ea78f414f2be9aa2a714db911d69bda5c0b))
* **lambda:** publish Lambda layer that provides @instana/aws-lambda ([a79a52c](https://github.com/instana/nodejs/commit/a79a52ccbc10f3e28f027a5a3c9a97fa8763940e))
* **lambda:** send preflight request to the AWS Lambda extension ([687655e](https://github.com/instana/nodejs/commit/687655e4d962a60c0cfe703ab4a75b964a07063c))
* **lambda:** support INSTANA_ENDPOINT_PROXY ([8750228](https://github.com/instana/nodejs/commit/8750228e34023d09f844d6760331e28199cae843))
* **lambda:** W3C trace context support for Lambda tracing ([5b3904e](https://github.com/instana/nodejs/commit/5b3904e7bdbea80a372a0fbc7b32a1262766ac0d))
* **lambda, fargate:** support for INSTANA_SECRETS ([8a1347a](https://github.com/instana/nodejs/commit/8a1347a4f9dee03ae6c713b69e99ffc55f57c209))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **otel:** Instana Exporter for OpenTelemetry ([#388](https://github.com/instana/nodejs/issues/388)) ([529ff2a](https://github.com/instana/nodejs/commit/529ff2ae024e944ede21cbe7ab053135ae526689))
* **tracing:** add ability to disable individual tracers ([135f67c](https://github.com/instana/nodejs/commit/135f67c64eb39c7a062b5db23ed908a30f130471))
* **tracing:** added console.warn & console.error instrumentation ([#391](https://github.com/instana/nodejs/issues/391)) ([6c19b44](https://github.com/instana/nodejs/commit/6c19b447f1d1d8bc6e502a387a9db3b24b2e65c3))
* **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))
* **tracing:** support INSTANA_SERVICE_NAME/config.serviceName ([855252d](https://github.com/instana/nodejs/commit/855252db87f77b6f6722db859c97661a08cabcaa))


### Performance Improvements

* **lambda:** improve preliminary checks for SNS-2-SQS trace correlation ([e560432](https://github.com/instana/nodejs/commit/e560432f33a4e5142072145ffeb34700e3e47549))


### Reverts

* Revert "chore: add debug timing output (temporary)" ([67fa7ee](https://github.com/instana/nodejs/commit/67fa7ee8edae947051ad1cf1786cb01e1f206273))


### BREAKING CHANGES

* **lambda:** The Instana Node.js Lambda layer is no longer compatible with
Node.js 8. For Lambda functions still running on Node.js 8, please use the
latest layer version that has been published for Node.js 8, see
https://www.ibm.com/docs/en/obi/current?topic=kinesis-aws-lambda-native-tracing-nodejs
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* v2 has dropped support for Node 6/8.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)

**Note:** Version bump only for package @instana/aws-lambda





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)

**Note:** Version bump only for package @instana/aws-lambda





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)


### Features

* **aws-lambda:** add support for Node.js 18 AWS Lambda runtime ([0900ab4](https://github.com/instana/nodejs/commit/0900ab4e040822d17a2af6610fe7623846fd6128))





## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)

**Note:** Version bump only for package @instana/aws-lambda





# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)

**Note:** Version bump only for package @instana/aws-lambda





# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)

**Note:** Version bump only for package @instana/aws-lambda





# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)

**Note:** Version bump only for package @instana/aws-lambda





# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)

**Note:** Version bump only for package @instana/aws-lambda





## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)


### Bug Fixes

* **aws-lambda:** respect INSTANA_LOG_LEVEL ([#681](https://github.com/instana/nodejs/issues/681)) ([8c00a0c](https://github.com/instana/nodejs/commit/8c00a0cf905d0c21fb56d10496087a8a07599b51))





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)

**Note:** Version bump only for package @instana/aws-lambda





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)

**Note:** Version bump only for package @instana/aws-lambda





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)


### Bug Fixes

* **aws-lambda:** reduced deadlocks and long running lambda executions ([#666](https://github.com/instana/nodejs/issues/666)) ([6800be0](https://github.com/instana/nodejs/commit/6800be01d32989723799894dd75a834f2c6c3f30))





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)

**Note:** Version bump only for package @instana/aws-lambda





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)


### Features

* **aws-lambda:** added the RequestId to most of the extension logs ([#660](https://github.com/instana/nodejs/issues/660)) ([469f131](https://github.com/instana/nodejs/commit/469f13195350d8e49952b9d7cec35ba71aaec428))





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)


### Features

* **aws-lambda:** added support for ES modules ([#653](https://github.com/instana/nodejs/issues/653)) ([75c28a9](https://github.com/instana/nodejs/commit/75c28a92fb68f3d982207b545a211b65dc4d95ce))





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)

**Note:** Version bump only for package @instana/aws-lambda





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)


### Bug Fixes

* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)

**Note:** Version bump only for package @instana/aws-lambda





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)


### Features

* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)

**Note:** Version bump only for package @instana/aws-lambda





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)


### Bug Fixes

* **aws-lambda:** reduced backend retries & timeout ([#611](https://github.com/instana/nodejs/issues/611)) ([cab67dd](https://github.com/instana/nodejs/commit/cab67dd10b0f0b7ccfce2787b95e5a020d831cff))





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)

**Note:** Version bump only for package @instana/aws-lambda





# 2.7.0 (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)





## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @instana/aws-lambda





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)


### Bug Fixes

* **lambda:** interprete deadlineMs as absolute timestamp ([3326e67](https://github.com/instana/nodejs/commit/3326e6768aa962d7514eed314dd1c0a66612e69f))





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)


### Features

* **aws-lambda:** added support for Node v16 ([718cf9f](https://github.com/instana/nodejs/commit/718cf9f69de3062964a28390900dc3f158557cdf))





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)


### Bug Fixes

* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))





# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)

**Note:** Version bump only for package @instana/aws-lambda





# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)

**Note:** Version bump only for package @instana/aws-lambda





# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)

**Note:** Version bump only for package @instana/aws-lambda





# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)

**Note:** Version bump only for package @instana/aws-lambda





# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)


### Bug Fixes

* **lambda:** remove nodejs8.10 from compatible runtimes ([ff945c2](https://github.com/instana/nodejs/commit/ff945c228e5361227bdae50ff48cc96b64c6b08c))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))


### BREAKING CHANGES

* **lambda:** The Instana Node.js Lambda layer is no longer compatible with
Node.js 8. For Lambda functions still running on Node.js 8, please use the
latest layer version that has been published for Node.js 8, see
https://www.ibm.com/docs/en/obi/current?topic=kinesis-aws-lambda-native-tracing-nodejs
* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* v2 has dropped support for Node 6/8.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)

**Note:** Version bump only for package @instana/aws-lambda





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)

**Note:** Version bump only for package @instana/aws-lambda





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)

**Note:** Version bump only for package @instana/aws-lambda





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)


### Features

* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @instana/aws-lambda





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)


### Bug Fixes

* **aws-lambda:** fixed lambda timeouts when using extension ([#455](https://github.com/instana/nodejs/issues/455)) ([6df5550](https://github.com/instana/nodejs/commit/6df5550e59ab667a1eda5a01d911554e3dc17aee))
* **aws-lambda:** reduced lambda timeout error count when using extension [#443](https://github.com/instana/nodejs/issues/443) ([0bbfeb8](https://github.com/instana/nodejs/commit/0bbfeb8af57a381c5186624cbf5a19ead11ffe61))





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)

**Note:** Version bump only for package @instana/aws-lambda





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)

**Note:** Version bump only for package @instana/aws-lambda





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)

**Note:** Version bump only for package @instana/aws-lambda
