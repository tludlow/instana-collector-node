# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **aws-fargate:** cannot read property 'cpu' of undefined ([#671](https://github.com/instana/nodejs/issues/671)) ([bea107c](https://github.com/instana/nodejs/commit/bea107c84191111302dc91e164a7b68d29731d07))
* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))
* **fargate:** detect Node.js version, use matching @instana/aws-fargate version ([0d1f955](https://github.com/instana/nodejs/commit/0d1f9557d650aad45673c2caaa22b8906b9b29d3))
* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))
* depend on exact versions of [@instana](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))
* **fargate:** also report availability zone ([5ed39f7](https://github.com/instana/nodejs/commit/5ed39f7a97209aac7b5a1abde02c446bee7cba77))
* **fargate:** collect Docker metrics on platform version 1.4.0 ([21b49de](https://github.com/instana/nodejs/commit/21b49de7ac84a48b71562373e083c9c0bb89da6c))
* **fargate:** don't use outdated cache layer when building fargate image ([0137757](https://github.com/instana/nodejs/commit/0137757ec0d79e296d1272b119246ed0ecd607e0))
* **fargate:** make native add-ons optional for Fargate ([602d4a6](https://github.com/instana/nodejs/commit/602d4a684bd9fe87c54949710d5a9e2bbec93245))
* **fargate, google-cloud-run:** filter environment variables secrets ([43f1624](https://github.com/instana/nodejs/commit/43f1624ed87f1eec6e9db192ae8d7e23873ad9ad))
* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))
* remove longer span reporting interval in serverless tracers ([ddffe2d](https://github.com/instana/nodejs/commit/ddffe2d09a3405f485e951dd6ebb64051d6f9583))


### Features

* **fargate:** add support for Fargate via @instana/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **fargate:** add support for INSTANA_EXTRA_HTTP_HEADERS ([9b4aa12](https://github.com/instana/nodejs/commit/9b4aa1283a6e56145a427981466210d9abed57b2))
* **fargate:** collect Docker stats as metrics ([566112a](https://github.com/instana/nodejs/commit/566112a370397c1434ec2cc671d6aa175d8c8586))
* **fargate:** support INSTANA_TAGS ([4fc447b](https://github.com/instana/nodejs/commit/4fc447b67bd30ae5e16fa45cbf4a7a5940f2535a))
* **fargate:** support INSTANA_ZONE ([1981216](https://github.com/instana/nodejs/commit/1981216f3ee36e81e5c4b0cb30f66d8694af924f))
* **fargate, google-cloud-run:** do not instrument npm or yarn ([b9afded](https://github.com/instana/nodejs/commit/b9afdedd027366605d1f37eddb578f882cbedf99))
* **google cloud run:** exclude minimal revision data from compression ([fcfa851](https://github.com/instana/nodejs/commit/fcfa851fa86bf5dc4292aec58435e601db2cdee7))
* **google cloud run:** experimental support ([64b34e4](https://github.com/instana/nodejs/commit/64b34e4e7f11f0205bdba53a521ab819470e4286))
* **google cloud run:** update google cloud run support ([afedbd0](https://github.com/instana/nodejs/commit/afedbd017d558a5519e1338a2f25e5032c82d003))
* **lambda:** add Lambda extension to Intana's Node.js Lambda layer ([ae190a7](https://github.com/instana/nodejs/commit/ae190a7133da2c39e6582b18ceb265c49c8f36b7))
* **lambda, fargate:** support for INSTANA_SECRETS ([8a1347a](https://github.com/instana/nodejs/commit/8a1347a4f9dee03ae6c713b69e99ffc55f57c209))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **tracing:** instrument @google-cloud/pubsub ([b4b25f0](https://github.com/instana/nodejs/commit/b4b25f0ca908ab334276ede3181a9a709d16d952))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* v2 has dropped support for Node 6/8.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)

**Note:** Version bump only for package @instana/aws-fargate





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)

**Note:** Version bump only for package @instana/aws-fargate





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)

**Note:** Version bump only for package @instana/aws-fargate





## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)

**Note:** Version bump only for package @instana/aws-fargate





# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)

**Note:** Version bump only for package @instana/aws-fargate





# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)

**Note:** Version bump only for package @instana/aws-fargate





# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)

**Note:** Version bump only for package @instana/aws-fargate





# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)

**Note:** Version bump only for package @instana/aws-fargate





## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)

**Note:** Version bump only for package @instana/aws-fargate





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)

**Note:** Version bump only for package @instana/aws-fargate





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)

**Note:** Version bump only for package @instana/aws-fargate





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)


### Bug Fixes

* **aws-fargate:** cannot read property 'cpu' of undefined ([#671](https://github.com/instana/nodejs/issues/671)) ([bea107c](https://github.com/instana/nodejs/commit/bea107c84191111302dc91e164a7b68d29731d07))





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)

**Note:** Version bump only for package @instana/aws-fargate





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)

**Note:** Version bump only for package @instana/aws-fargate





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)

**Note:** Version bump only for package @instana/aws-fargate





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)

**Note:** Version bump only for package @instana/aws-fargate





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)


### Bug Fixes

* **serverless:** do not send x-instana-time header ([7ce7673](https://github.com/instana/nodejs/commit/7ce7673a514069b47c5b883faa9d86bc240244b6))





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)

**Note:** Version bump only for package @instana/aws-fargate





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)

**Note:** Version bump only for package @instana/aws-fargate





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)

**Note:** Version bump only for package @instana/aws-fargate





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)

**Note:** Version bump only for package @instana/aws-fargate





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)

**Note:** Version bump only for package @instana/aws-fargate





# 2.7.0 (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)





## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @instana/aws-fargate





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)

**Note:** Version bump only for package @instana/aws-fargate





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)

**Note:** Version bump only for package @instana/aws-fargate





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)


### Bug Fixes

* **aws-lambda:** handle timeout error handling better ([#563](https://github.com/instana/nodejs/issues/563)) ([c2dbe77](https://github.com/instana/nodejs/commit/c2dbe7761f62b3c4b7c0cd9ba5cc0d5757d161c1))





# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)

**Note:** Version bump only for package @instana/aws-fargate





# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)

**Note:** Version bump only for package @instana/aws-fargate





# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)

**Note:** Version bump only for package @instana/aws-fargate





# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)

**Note:** Version bump only for package @instana/aws-fargate





# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)


### Bug Fixes

* **fargate:** detect Node.js version, use matching @instana/aws-fargate version ([0d1f955](https://github.com/instana/nodejs/commit/0d1f9557d650aad45673c2caaa22b8906b9b29d3))
* dropped Node 6/8 ([0e6fd0e](https://github.com/instana/nodejs/commit/0e6fd0ef8f836ef6f2d95f3ddda2a641d92d0f86))
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* self-disable if detected Node.js runtime version is too old ([cfe4248](https://github.com/instana/nodejs/commit/cfe4248a9a107165f8e96dbcb1948b399527d244))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.
* v2 has dropped support for Node 6/8.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)

**Note:** Version bump only for package @instana/aws-fargate





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)

**Note:** Version bump only for package @instana/aws-fargate





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)

**Note:** Version bump only for package @instana/aws-fargate





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)

**Note:** Version bump only for package @instana/aws-fargate





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @instana/aws-fargate





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)

**Note:** Version bump only for package @instana/aws-fargate





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)

**Note:** Version bump only for package @instana/aws-fargate





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)


### Bug Fixes

* **tracing:** require @elastic/elasticsearch/api in a safe way ([8ba1bd1](https://github.com/instana/nodejs/commit/8ba1bd1d6fb082a9ec131ff15e8df17c7b18e116))





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)

**Note:** Version bump only for package @instana/aws-fargate
