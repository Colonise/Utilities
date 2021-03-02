Changelog

## [6.5.3](https://github.com/Colonise/Utilities/compare/v6.5.2...v6.5.3) (2021-03-02)


### Bug Fixes

* toHyphenCase, toDotCase, toSnakeCase ([#52](https://github.com/Colonise/Utilities/issues/52)) ([a033d8d](https://github.com/Colonise/Utilities/commit/a033d8d95870750c0611ad2299eff6217cf33eda))

## [6.5.2](https://github.com/Colonise/Utilities/compare/v6.5.1...v6.5.2) (2020-11-02)


### Bug Fixes

* **compareDates:** result is always 0 ([8cd680e](https://github.com/Colonise/Utilities/commit/8cd680e9fcfb94916229ed867ac9497d56a0ca95))

## [6.5.1](https://github.com/Colonise/Utilities/compare/v6.5.0...v6.5.1) (2020-11-01)


### Bug Fixes

* move some functions to general folder ([451a6c9](https://github.com/Colonise/Utilities/commit/451a6c9d4c8a696ad40f2c923c0499a7b338c35b))

# [6.5.0](https://github.com/Colonise/Utilities/compare/v6.4.0...v6.5.0) (2020-11-01)


### Features

* add Comparer type ([39fa764](https://github.com/Colonise/Utilities/commit/39fa7647e185be03edda848ed94e6ca84c02cf74))

# [6.4.0](https://github.com/Colonise/Utilities/compare/v6.3.2...v6.4.0) (2020-11-01)


### Features

* add compareMany() function ([d8f9f75](https://github.com/Colonise/Utilities/commit/d8f9f75410382ae51d8c48db7d3f9a02bd9290fa))

## [6.3.2](https://github.com/Colonise/Utilities/compare/v6.3.1...v6.3.2) (2020-10-25)


### Bug Fixes

* rename .d.ts files to .ts ([01da973](https://github.com/Colonise/Utilities/commit/01da973a2eb0cbbb480f6eee7c66a26fdbeb60e1))

## [6.3.1](https://github.com/Colonise/Utilities/compare/v6.3.0...v6.3.1) (2020-10-25)

# [6.3.0](https://github.com/Colonise/Utilities/compare/v6.2.1...v6.3.0) (2020-10-25)


### Features

* add isPlainObject() ([827f38d](https://github.com/Colonise/Utilities/commit/827f38d26737a291555348fb694837cd427d9412))
* add toDisplayString() ([81374ad](https://github.com/Colonise/Utilities/commit/81374ad2affe92aa6935796dae212dc63d92d5e9))

## [6.2.1](https://github.com/Colonise/Utilities/compare/v6.2.0...v6.2.1) (2020-10-24)


### Bug Fixes

* **general:** actually export the general module ([491b4fa](https://github.com/Colonise/Utilities/commit/491b4fa39e480aa0430ddfca07032943a92a1ad7))

# [6.2.0](https://github.com/Colonise/Utilities/compare/v6.1.0...v6.2.0) (2020-10-24)


### Bug Fixes

* compareBooleans include null ([d341d30](https://github.com/Colonise/Utilities/commit/d341d30616449d18a632f33a5e68b4bcb5ce9c50))


### Features

* compareBooleans ([522c909](https://github.com/Colonise/Utilities/commit/522c909ee7bc88227e5070067745c24234d23218))
* compareDates ([7c2f84c](https://github.com/Colonise/Utilities/commit/7c2f84c2986fe2ad46da87d43bcc8c40e5a98b53))
* compareNull ([4a74c52](https://github.com/Colonise/Utilities/commit/4a74c5240bc44781cf6aedbda6bfeb84be95be75))
* compareNullOrUndefined ([6c9743c](https://github.com/Colonise/Utilities/commit/6c9743c38f18c80bd674f764ae2a81a301b0f12d))
* compareNumbers ([47ba3cc](https://github.com/Colonise/Utilities/commit/47ba3cc09959e3db29ce97995186a23ac5c283d2))
* compareStrings ([8b15f1a](https://github.com/Colonise/Utilities/commit/8b15f1a3c067024dc3bbc3c67ea6b625a7556706))
* compareUndefined ([2cc3daa](https://github.com/Colonise/Utilities/commit/2cc3daa233af54b53fbc18d16f0e3f68d81026b7))

# [6.1.0](https://github.com/Colonise/Utilities/compare/v6.0.0...v6.1.0) (2020-10-05)


### Features

* **isBigInt:** add isBigInt() function ([fe0bdf7](https://github.com/Colonise/Utilities/commit/fe0bdf77673b9555c6571808541158b5af8e1897))
* **isSymbol:** add isSymbol function ([b75154a](https://github.com/Colonise/Utilities/commit/b75154aca591d3e3ca588455031f36af80e41744))

# [6.0.0](https://github.com/Colonise/Utilities/compare/v5.0.1...v6.0.0) (2020-09-27)


### Features

* upgrade @colonise/config to 3.10.6 ([dc3b80f](https://github.com/Colonise/Utilities/commit/dc3b80fc7994f5fa63dbb695d6fca74bace0b5b3))


### BREAKING CHANGES

* upgrade TypeScript to 4.0.3

## [2.2.1](https://github.com/Colonise/Utilities/compare/v2.2.0...v2.2.1) (2019-01-23)


### Bug Fixes

* **Constructor:** remove `name` property to fix es5 and es6+ types ([28acab0](https://github.com/Colonise/Utilities/commit/28acab0))

# [2.2.0](https://github.com/Colonise/Utilities/compare/v2.1.0...v2.2.0) (2018-11-25)


### Bug Fixes

* **remove:** remove remove(array, items) and remove(array, index) ([1c8f867](https://github.com/Colonise/Utilities/commit/1c8f867))
* remove, removeAt, removeMany, removeBy not removing all items ([b4d3482](https://github.com/Colonise/Utilities/commit/b4d3482))


### Features

* **ArrayIterator:** add ArrayIterator to replace and deprecate Finder ([c3544ad](https://github.com/Colonise/Utilities/commit/c3544ad))
* **Finder:** allow truthy/falsey returns with `unknown` ([9413036](https://github.com/Colonise/Utilities/commit/9413036))
* **first:** create first that returns the first item in an array ([c95fc60](https://github.com/Colonise/Utilities/commit/c95fc60))
* **includes:** create includes that checks if an item is in an array ([3d8fca8](https://github.com/Colonise/Utilities/commit/3d8fca8))
* **last:** create last that returns the last item in an array ([f6b1e57](https://github.com/Colonise/Utilities/commit/f6b1e57))
* **removeAt:** create removeAt that removes from an array at an index ([05aee15](https://github.com/Colonise/Utilities/commit/05aee15))
* **removeBy:** create removeBy that removes from an array with iterator ([cc94a76](https://github.com/Colonise/Utilities/commit/cc94a76))
* **removeMany:** create removeMany that removes items from an array ([ca3b46e](https://github.com/Colonise/Utilities/commit/ca3b46e))
* **unique:** create unique that returns an array of unique items ([432a489](https://github.com/Colonise/Utilities/commit/432a489))

# [2.1.0](https://github.com/Colonise/Utilities/compare/v2.0.7...v2.1.0) (2018-11-24)


### Features

* **toBoolean:** create toBoolean which converts an object to a boolean ([d23a029](https://github.com/Colonise/Utilities/commit/d23a029))
* **toNumber:** create toNumber that converts an object to a number ([b432a0b](https://github.com/Colonise/Utilities/commit/b432a0b))
* **toString:** create toString that converts an object to a string ([8dd74d4](https://github.com/Colonise/Utilities/commit/8dd74d4))

## [2.0.7](https://github.com/Colonise/Utilities/compare/v2.0.6...v2.0.7) (2018-11-23)


### Bug Fixes

* **Constructor:** add name?: string ([7f85150](https://github.com/Colonise/Utilities/commit/7f85150))

## [2.0.6](https://github.com/Colonise/Utilities/compare/v2.0.5...v2.0.6) (2018-11-15)


### Bug Fixes

* **extract:** ensure all depths use Defined ([c24950e](https://github.com/Colonise/Utilities/commit/c24950e))

## [2.0.5](https://github.com/Colonise/Utilities/compare/v2.0.4...v2.0.5) (2018-11-12)


### Bug Fixes

* property 'name' in Constructor was undefined ([c7b3cfa](https://github.com/Colonise/Utilities/commit/c7b3cfa))

## [2.0.4](https://github.com/Colonise/Utilities/compare/v2.0.3...v2.0.4) (2018-11-06)


### Bug Fixes

* **Constructor:**  make Constructor extend Function ([77f34db](https://github.com/Colonise/Utilities/commit/77f34db))
* **extract:** fix a bug where extract did not handle undefined object ([ad5e925](https://github.com/Colonise/Utilities/commit/ad5e925))

## [2.0.3](https://github.com/Colonise/Utilities/compare/v2.0.2...v2.0.3) (2018-11-04)


### Bug Fixes

* **is:** remove uses of any in is and isX functions ([aafeaca](https://github.com/Colonise/Utilities/commit/aafeaca))

## [2.0.2](https://github.com/Colonise/Utilities/compare/v2.0.1...v2.0.2) (2018-11-04)


### Bug Fixes

* **find:** add replace find with find and findBy ([e1b0cc7](https://github.com/Colonise/Utilities/commit/e1b0cc7))
* **findIndex:** replace findIndex with finIndex and findIndexBy ([8363963](https://github.com/Colonise/Utilities/commit/8363963))

## [2.0.1](https://github.com/Colonise/Utilities/compare/v2.0.0...v2.0.1) (2018-11-03)


### Bug Fixes

* **extract:** fix extract's intellisense ([e67148c](https://github.com/Colonise/Utilities/commit/e67148c))

# [2.0.0](https://github.com/Colonise/Utilities/compare/v1.2.0...v2.0.0) (2018-10-28)


### Bug Fixes

* replace tslint with TypeScript unused variable ([f1bac34](https://github.com/Colonise/Utilities/commit/f1bac34))


### Features

* upgrade TypeScript version to 3.1.3 ([4d62650](https://github.com/Colonise/Utilities/commit/4d62650))


### BREAKING CHANGES

* TypeScript version 2.7.2 changed to 3.1.3

# [1.2.0](https://github.com/Colonise/Utilities/compare/v1.1.0...v1.2.0) (2018-09-23)


### Bug Fixes

* **Indexed:** provide a default value for T ([63928a3](https://github.com/Colonise/Utilities/commit/63928a3))
* **Unknown:** include symbol and Array types ([c66d445](https://github.com/Colonise/Utilities/commit/c66d445))
* Fix some exports ([ab8965c](https://github.com/Colonise/Utilities/commit/ab8965c))
* Fix some linting and build errors ([e333245](https://github.com/Colonise/Utilities/commit/e333245))


### Features

* **extract:** create extract function ([9aefbc2](https://github.com/Colonise/Utilities/commit/9aefbc2))
* **Unknown:** Add type 'Unknown' that represents all base types ([84df0fa](https://github.com/Colonise/Utilities/commit/84df0fa))

# [1.1.0](https://github.com/Colonise/Utilities/compare/v1.0.0...v1.1.0) (2018-08-27)


### Features

* **types:** add more type checkers ([957f979](https://github.com/Colonise/Utilities/commit/957f979)), closes [#2](https://github.com/Colonise/Utilities/issues/2)
* **types:** add more type checkers ([d791988](https://github.com/Colonise/Utilities/commit/d791988))

# 1.0.0 (2018-08-26)


### Bug Fixes

* **lint:** tslint errors ([6d4697c](https://github.com/Colonise/Utilities/commit/6d4697c))


### Features

* initial features ([724b565](https://github.com/Colonise/Utilities/commit/724b565))
