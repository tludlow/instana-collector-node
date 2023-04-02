# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 3.0.0 (2023-04-02)


### Bug Fixes

* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))
* **shared-metrics:** package.json not being found ([#590](https://github.com/instana/nodejs/issues/590)) ([d36369e](https://github.com/instana/nodejs/commit/d36369e7cdbb90e5e9ac377a794bab7cec898809)), closes [#581](https://github.com/instana/nodejs/issues/581)
* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))
* **agent:** exponential backoff retries for failed announce attempts ([31a4be6](https://github.com/instana/nodejs/commit/31a4be6ec3c4e6b9ddce9321978768435e33aa35))
* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))
* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1)), closes [/github.com/npm/node-semver/blob/v7.3.3/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.3/package.json/issues/L39) [/github.com/npm/node-semver/blob/v7.3.5/package.json#L39](https://github.com//github.com/npm/node-semver/blob/v7.3.5/package.json/issues/L39)
* **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))
* **deps:** update tar (again) to 5.0.9 ([c94c016](https://github.com/instana/nodejs/commit/c94c0169eeed3a1f31011d60657c0b46f10c3e9c))
* **deps:** upgrade tar ([bdbe381](https://github.com/instana/nodejs/commit/bdbe381cc17a1ffde4c6958bd9d6fd81c3fae966))
* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)
* **metrics:** fix `path must be a string or Buffer` ([bbf799b](https://github.com/instana/nodejs/commit/bbf799b3afb960b411840bee9a7c68ff481686a0))
* **metrics:** move event-loop-lag from optionalDeps to dependencies ([e5ebc68](https://github.com/instana/nodejs/commit/e5ebc68fa7377ffe5547082a265061756d0f163f))
* **metrics:** provide name and dependencies when package.json is missing ([63a17a2](https://github.com/instana/nodejs/commit/63a17a2fd640b7aeba10f7a639c981422ae94003))
* **metrics:** register gc stats loader listener immediately ([fb99f84](https://github.com/instana/nodejs/commit/fb99f84194fd8d5ddd8d72d94e8268d0880ebec9))
* **security:** updated tar dependency ([6e7098e](https://github.com/instana/nodejs/commit/6e7098eb0107e975c9f2476c81ed0bd55a647729))
* **shared-metrics:** Reverted package-lock.json changes ([f137b3f](https://github.com/instana/nodejs/commit/f137b3ffe95f562415b5eaed7fc50d4d1a411446))
* **test:** make version check more lenient ([d5b37e3](https://github.com/instana/nodejs/commit/d5b37e336c7c524bcdc4a155e5f393a34ae0467b))
* bypass native addon loading in worker threads ([a4b6443](https://github.com/instana/nodejs/commit/a4b644308ee31efceae508958736e5e190ebe928))
* depend on exact versions of [@tludlow-instana-fork](https://github.com/instana) packages, not a version range ([9caa708](https://github.com/instana/nodejs/commit/9caa708ac164d69f3f5fa7645c504d54813aedae))
* do not fail if @tludlow-instana-fork/autoprofile is missing ([bc0be0a](https://github.com/instana/nodejs/commit/bc0be0ae1a298856322b93fd170a0e861b382e36))
* downgrade to tar@5 because of Node.js compatibility ([810194a](https://github.com/instana/nodejs/commit/810194aa8244a8f4bf6eb628aacb6f36528ef690))


### Features

* added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))
* **fargate:** add support for Fargate via @tludlow-instana-fork/aws-fargate (alpha) ([1211193](https://github.com/instana/nodejs/commit/1211193f416422ecf0f6fd52b13a930971c4c71e))
* **metrics:** limit the number of collected dependencies ([2970bef](https://github.com/instana/nodejs/commit/2970bef8d7d750d6b48f0b1b52f30f4e87b117ec))
* **metrics:** load native dependencies lazily if necessary (plus retry) ([d6af8e4](https://github.com/instana/nodejs/commit/d6af8e4a519bdcff183ea1c5f02f4479a3bfeb02))
* **metrics:** rebuilding native add-ons via node-gyp as opt-in ([3f6ab8f](https://github.com/instana/nodejs/commit/3f6ab8fc1158003d4c5ae911cc9c6b14e8bae675))
* **otel:** Instana Exporter for OpenTelemetry ([#388](https://github.com/instana/nodejs/issues/388)) ([529ff2a](https://github.com/instana/nodejs/commit/529ff2ae024e944ede21cbe7ab053135ae526689))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.





## [2.20.1](https://github.com/instana/nodejs/compare/v2.20.0...v2.20.1) (2023-03-30)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.20.0](https://github.com/instana/nodejs/compare/v2.19.0...v2.20.0) (2023-03-24)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.19.0](https://github.com/instana/nodejs/compare/v2.18.1...v2.19.0) (2023-03-17)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.18.1](https://github.com/instana/nodejs/compare/v2.18.0...v2.18.1) (2023-03-06)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.18.0](https://github.com/instana/nodejs/compare/v2.17.0...v2.18.0) (2023-02-28)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.17.0](https://github.com/instana/nodejs/compare/v2.16.0...v2.17.0) (2023-02-20)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.16.0](https://github.com/instana/nodejs/compare/v2.15.0...v2.16.0) (2023-02-13)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.15.0](https://github.com/instana/nodejs/compare/v2.14.2...v2.15.0) (2023-01-27)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.14.2](https://github.com/instana/nodejs/compare/v2.14.1...v2.14.2) (2023-01-16)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.14.1](https://github.com/instana/nodejs/compare/v2.14.0...v2.14.1) (2023-01-12)


### Bug Fixes

* **collector:** fixed package.json not being found when app is ESM ([#678](https://github.com/instana/nodejs/issues/678)) ([0dbd0a2](https://github.com/instana/nodejs/commit/0dbd0a223344dabc49c559ba92e383b2356d5323))





# [2.14.0](https://github.com/instana/nodejs/compare/v2.13.2...v2.14.0) (2023-01-02)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.13.2](https://github.com/instana/nodejs/compare/v2.13.1...v2.13.2) (2022-12-14)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.13.1](https://github.com/instana/nodejs/compare/v2.13.0...v2.13.1) (2022-12-12)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.13.0](https://github.com/instana/nodejs/compare/v2.12.0...v2.13.0) (2022-12-07)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.12.0](https://github.com/instana/nodejs/compare/v2.11.1...v2.12.0) (2022-11-22)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.11.1](https://github.com/instana/nodejs/compare/v2.11.0...v2.11.1) (2022-11-09)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.11.0](https://github.com/instana/nodejs/compare/v2.10.0...v2.11.0) (2022-11-04)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.10.0](https://github.com/instana/nodejs/compare/v2.9.0...v2.10.0) (2022-10-06)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.9.0](https://github.com/instana/nodejs/compare/v2.8.1...v2.9.0) (2022-09-26)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.8.1](https://github.com/instana/nodejs/compare/v2.8.0...v2.8.1) (2022-09-21)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.8.0](https://github.com/instana/nodejs/compare/v2.7.1...v2.8.0) (2022-09-20)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.7.1](https://github.com/instana/nodejs/compare/v2.7.0...v2.7.1) (2022-09-05)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# 2.7.0 (2022-08-31)


### Features

* **aws-lambda:** added support for arm64 architecture ([#605](https://github.com/instana/nodejs/issues/605)) ([03dd47a](https://github.com/instana/nodejs/commit/03dd47a76d894310ce93063f4e26fd1e667be655)), closes [#596](https://github.com/instana/nodejs/issues/596)





## 2.6.2 (2022-08-17)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [2.6.1](https://github.com/instana/nodejs/compare/v2.6.0...v2.6.1) (2022-08-09)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.6.0](https://github.com/instana/nodejs/compare/v2.5.0...v2.6.0) (2022-06-28)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.5.0](https://github.com/instana/nodejs/compare/v2.4.0...v2.5.0) (2022-06-23)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.4.0](https://github.com/instana/nodejs/compare/v2.3.0...v2.4.0) (2022-05-25)


### Features

* added node 18 support ([#529](https://github.com/instana/nodejs/issues/529)) ([b355a7c](https://github.com/instana/nodejs/commit/b355a7ca225bf9a06841619aae64bdefa1c0957a))





# [2.3.0](https://github.com/instana/nodejs/compare/v2.2.0...v2.3.0) (2022-05-24)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.2.0](https://github.com/instana/nodejs/compare/v2.1.0...v2.2.0) (2022-05-18)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.1.0](https://github.com/instana/nodejs/compare/v2.0.0...v2.1.0) (2022-04-28)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





# [2.0.0](https://github.com/instana/nodejs/compare/v1.140.1...v2.0.0) (2022-04-04)


### Bug Fixes

* remove npm package instana-nodejs-sensor ([5fb9f18](https://github.com/instana/nodejs/commit/5fb9f1807998fb3335652d135eb167dc13f9221d))


### BREAKING CHANGES

* Starting with version 2.0.0, consumers of the package who
still use the deprecated package name instana-nodejs-sensor will need to follow
https://www.ibm.com/docs/en/obi/current?topic=nodejs-collector-installation#change-of-package-name
to receive updates in the future.





## [1.140.1](https://github.com/instana/nodejs/compare/v1.140.0...v1.140.1) (2022-04-04)


### Bug Fixes

* **metrics:** do not report metrics from worker threads ([#517](https://github.com/instana/nodejs/issues/517)) ([bdf7869](https://github.com/instana/nodejs/commit/bdf7869e08d039e5769131d958e1037dc1748cd1)), closes [#500](https://github.com/instana/nodejs/issues/500)





# [1.140.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.140.0) (2022-03-24)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))





# [1.139.0](https://github.com/instana/nodejs/compare/v1.138.0...v1.139.0) (2022-03-09)


### Bug Fixes

* **collector:** fix export returned from init ([3cc709c](https://github.com/instana/nodejs/commit/3cc709cccb37ac9b0135a604e33f030a63b6cbda))





# [1.138.0](https://github.com/instana/nodejs/compare/v1.137.5...v1.138.0) (2022-02-08)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [1.137.5](https://github.com/instana/nodejs/compare/v1.137.4...v1.137.5) (2022-01-25)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [1.137.4](https://github.com/instana/nodejs/compare/v1.137.3...v1.137.4) (2022-01-11)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [1.137.3](https://github.com/instana/nodejs/compare/v1.137.2...v1.137.3) (2021-12-16)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [1.137.2](https://github.com/instana/nodejs/compare/v1.137.1...v1.137.2) (2021-11-30)

**Note:** Version bump only for package @tludlow-instana-fork/shared-metrics





## [1.137.1](https://github.com/instana/nodejs/compare/v1.137.0...v1.137.1) (2021-11-23)


### Bug Fixes

* **dependency:** pinned semver to 7.3.3 ([d32f23e](https://github.com/instana/nodejs/commit/d32f23ea6807989d57ec6165c407b64e04d8d7c1))
* **dependency:** updated tar to 6.x in shared-metrics ([#415](https://github.com/instana/nodejs/issues/415)) ([5288ba5](https://github.com/instana/nodejs/commit/5288ba5241acd23d54f11c76edb3cffc0ffe6a66))
