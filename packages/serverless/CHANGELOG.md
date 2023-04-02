# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1)), closes [/github.com/npm/node-semver/blob/v7.3.3/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.3/package.json/issues/L39) [/github.com/npm/node-semver/blob/v7.3.5/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.5/package.json/issues/L39)
* **lambda:** add a connection timeout in addition to read timeout ([ffe9ed0](https://github.com/instana/nodejs/commit/ffe9ed0992aca44b0fee56cfd1752e0291acb7fc))
* **lambda:** fix concurrency bug in preflight request handling ([5509dbc](https://github.com/instana/nodejs/commit/5509dbc554faa4acd4b72b7c56ded161cc5332f8))
* **lambda:** fix timeouts ([8a15f92](https://github.com/instana/nodejs/commit/8a15f923f2f479ba82f650956e17cf7dd5f3e8f7))
* **lambda:** increase socket and HTTP timeout for Lambda extension ([7a07a8b](https://github.com/instana/nodejs/commit/7a07a8b1f596cf611bb8a144316b1432a688e1eb))
* **lambda:** reset requestHasFailed flag on start of Lambda handler ([0654527](https://github.com/instana/nodejs/commit/0654527e42aa428b6c8dc7c06abd4b567bfa1d90))
* **lambda:** stop sending to back end when a request has already failed ([9f3a227](https://github.com/instana/nodejs/commit/9f3a227728412e8e69573b23bbb7f070353b3fa2))
* **lambda:** work around req.destroyed not being set in Node.js <= 12 ([bf04a85](https://github.com/instana/nodejs/commit/bf04a85f6524761d9f822e611bb977181c102a0d))
* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* **lambda:** workaround for stale timeout events ([82c37f4](https://github.com/instana/nodejs/commit/82c37f43a0cea18f53d87dc208d6a3dfda7c094c))
* **serverless:** fix version condition for legacy timeout handling ([e01ccf7](https://github.com/instana/nodejs/commit/e01ccf7de1793984e8725e801fea5e48c6542c5f))
* **serverless:** force agent-base@6.0.2 version ([84b5977](https://github.com/instana/nodejs/commit/84b597773f94b4a6b18356652396c92cc16ea4c3))
* depend on exact versions of [@instana](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))


### Features

* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))
* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)
* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))
* **fargate:** add support for Fargate via @instana/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **fargate:** collect Docker stats as metrics ([566112a](https://github.com/instana/nodejs/commit/566112a370397c1434ec2cc671d6aa175d8c8586))
* **fargate:** support INSTANA_TAGS ([4fc447b](https://github.com/instana/nodejs/commit/4fc447b67bd30ae5e16fa45cbf4a7a5940f2535a))
* **fargate:** support INSTANA_ZONE ([1981216](https://github.com/instana/nodejs/commit/1981216f3ee36e81e5c4b0cb30f66d8694af924f))
* **google cloud run:** update google cloud run support ([afedbd0](https://github.com/instana/nodejs/commit/afedbd017d558a5519e1338a2f25e5032c82d003))
* **lambda:** add Lambda extension to Intana's Node.js Lambda layer ([ae190a7](https://github.com/instana/nodejs/commit/ae190a7133da2c39e6582b18ceb265c49c8f36b7))
* **lambda:** add Server-Timing header for EUM/back end correlation ([d7d5c85](https://github.com/instana/nodejs/commit/d7d5c8562a5b5285ab4cb699b4561c91b24f0f21))
* **lambda:** add support for INSTANA_DISABLE_CA_CHECK ([6303908](https://github.com/instana/nodejs/commit/63039089484493f9a53b451043fa56f805eabb80))
* **lambda:** detect imminent timeouts heuristically ([40b555d](https://github.com/instana/nodejs/commit/40b555d559d2cd913f8b857b888eb472df06c1d8))
* **lambda:** reduce execution time penalty for tracing even further ([54fb5ac](https://github.com/instana/nodejs/commit/54fb5ac7f96a3bde3ed9654354ce27e89c59247f))
* **lambda:** send preflight request to the AWS Lambda extension ([687655e](https://github.com/instana/nodejs/commit/687655e4d962a60c0cfe703ab4a75b964a07063c))
* **lambda:** support INSTANA_ENDPOINT_PROXY ([8750228](https://github.com/instana/nodejs/commit/8750228e34023d09f844d6760331e28199cae843))
* **lambda:** W3C trace context support for Lambda tracing ([5b3904e](https://github.com/instana/nodejs/commit/5b3904e7bdbea80a372a0fbc7b32a1262766ac0d))
* **lambda, fargate:** support for INSTANA_SECRETS ([8a1347a](https://github.com/instana/nodejs/commit/8a1347a4f9dee03ae6c713b69e99ffc55f57c209))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **otel:** Instana Exporter for OpenTelemetry ([#388](https://github.com/instana/nodejs/issues/388)) ([529ff2a](https://github.com/instana/nodejs/commit/529ff2ae024e944ede21cbe7ab053135ae526689))
* **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))


### Reverts

* Revert "chore: add debug timing output (temporary)" ([67fa7ee](https://github.com/instana/nodejs/commit/67fa7ee8edae947051ad1cf1786cb01e1f206273))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)

**Note:** Version bump only for package @instana/serverless





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)

**Note:** Version bump only for package @instana/serverless





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)

**Note:** Version bump only for package @instana/serverless





## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)

**Note:** Version bump only for package @instana/serverless





# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)

**Note:** Version bump only for package @instana/serverless





# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)

**Note:** Version bump only for package @instana/serverless





# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)

**Note:** Version bump only for package @instana/serverless





# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)

**Note:** Version bump only for package @instana/serverless





## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)

**Note:** Version bump only for package @instana/serverless





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)

**Note:** Version bump only for package @instana/serverless





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)

**Note:** Version bump only for package @instana/serverless





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)

**Note:** Version bump only for package @instana/serverless





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)

**Note:** Version bump only for package @instana/serverless





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)

**Note:** Version bump only for package @instana/serverless





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)

**Note:** Version bump only for package @instana/serverless





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)

**Note:** Version bump only for package @instana/serverless





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)


### Bug Fixes

* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)

**Note:** Version bump only for package @instana/serverless





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)


### Features

* **aws-lambda:** added heartbeat to reduce timeouts ([#612](https://github.com/instana/nodejs/issues/612)) ([79ec77f](https://github.com/instana/nodejs/commit/79ec77f41e13688a3347a6a88a6d87839212cabd))





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)

**Note:** Version bump only for package @instana/serverless





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)

**Note:** Version bump only for package @instana/serverless





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)

**Note:** Version bump only for package @instana/serverless





# 2.7.0 (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)





## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @instana/serverless





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)


### Bug Fixes

* **lambda:** increase socket and HTTP timeout for Lambda extension ([7a07a8b](https://github.com/instana/nodejs/commit/7a07a8b1f596cf611bb8a144316b1432a688e1eb))





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)

**Note:** Version bump only for package @instana/serverless





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)


### Bug Fixes

* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))





# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)

**Note:** Version bump only for package @instana/serverless





# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)

**Note:** Version bump only for package @instana/serverless





# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)

**Note:** Version bump only for package @instana/serverless





# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)

**Note:** Version bump only for package @instana/serverless





# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)


### Bug Fixes

* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)

**Note:** Version bump only for package @instana/serverless





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)

**Note:** Version bump only for package @instana/serverless





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)

**Note:** Version bump only for package @instana/serverless





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)


### Features

* **aws-lambda:** added support for SSM parameter store ([#464](https://github.com/instana/nodejs/issues/464)) ([bdb6e68](https://github.com/instana/nodejs/commit/bdb6e68b821e45445752d351e3575c6b0d7f1da7))





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @instana/serverless





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)

**Note:** Version bump only for package @instana/serverless





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)

**Note:** Version bump only for package @instana/serverless





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)

**Note:** Version bump only for package @instana/serverless





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)


### Bug Fixes

* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1))
