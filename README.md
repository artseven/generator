[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)


## Installation

```sh
$ npm install -g art-generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `artgenerate(1)` to generate an application as shown below:

Create the app:

```bash
$ artgenerate --view=ejs --database=mongoose --git  cool-project/
$ cd cool-project/
```

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help              output usage information
        --version           output the version number
    -e, --ejs               add ejs engine support
        --hbs               add handlebars engine support
        --pug               add pug engine support
    -H, --hogan             add hogan.js engine support
    -v, --view <engine>     add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>      add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
    -d, --database <engine> add <engine> database support (mongoose) (defaults to none)
        --git               add .gitignore
    -f, --force             force on non-empty directory
    -b, --crypt <engine>    add encryption <engine> support (bcrypt) (defaults to none)
    -p, --auth <engine>     add user authentication <engine> support (passport) (defaults to none)
    -s, --session <engine>  add session <engine> support (session) (defaults to none)


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator
[gratipay-image]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url]: https://gratipay.com/dougwilson/
