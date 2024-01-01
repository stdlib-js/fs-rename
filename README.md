<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Rename

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Rename a file.

<section class="installation">

## Installation

```bash
npm install @stdlib/fs-rename
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var rename = require( '@stdlib/fs-rename' );
```

#### rename( oldPath, newPath, clbk )

Asynchronously renames a file specified by `oldPath` to `newPath`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var oldPath = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var newPath = join( __dirname, 'examples', 'fixtures', 'tmp.txt' );

rename( oldPath, newPath, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### rename.sync( oldPath, newPath )

Synchronously renames a file specified by `oldPath` to `newPath`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var oldPath = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var newPath = join( __dirname, 'examples', 'fixtures', 'tmp.txt' );

var err = rename.sync( oldPath, newPath );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `oldPath` can specify a directory. In this case, `newPath` must either **not** exist, or it must specify an **empty** directory.

-   `oldPath` should **not** name an ancestor directory of `newPath`.

-   If `oldPath` points to the pathname of a file that is **not** a directory, `newPath` should **not** point to the pathname of a directory.

-   Write access permission is **required** for both the directory containing `oldPath` and the directory containing `newPath`.

-   If the link named by `newPath` exists, `newPath` is removed and `oldPath` is renamed to `newPath`. The link named by `newPath` will remain visible to other threads throughout the renaming operation and refer to either the file referred to by `newPath` or to the file referred to by `oldPath` before the operation began.

-   If `oldPath` and `newPath` resolve to either the same existing directory entry or to different directory entries for the same existing file, no action is taken, and no error is returned.

-   If `oldPath` points to a pathname of a symbolic link, the symbolic link is renamed. If the `newPath` points to a pathname of a symbolic link, the symbolic link is removed.

-   If a link named by `newPath` exists and the file's link count becomes `0` when it is removed and no process has the file open, the space occupied by the file is freed and the file is no longer accessible. If one or more processes have the file open when the last link is removed, the link is removed before the function returns, but the removal of file contents is postponed until all references to the file are closed.

-   The difference between `rename.sync` and [`fs.rename()`][node-fs] is that [`fs.renameSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to/file.txt' ) ) {
        fs.renameSync( '/path/to/file.txt', '/path/to/tmp.txt' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    var rename = require( '@stdlib/fs-rename' );

    // Explicitly handle the error...
    var err = rename.sync( '/path/to/file.txt', '/path/to/tmp.txt' );
    if ( err instanceof Error ) {
        // You choose what to do...
        throw err;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs-read-file' ).sync;
var writeFile = require( '@stdlib/fs-write-file' ).sync;
var exists = require( '@stdlib/fs-exists' ).sync;
var unlink = require( '@stdlib/fs-unlink' ).sync;
var rename = require( '@stdlib/fs-rename' ).sync;

var src = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var tmp = join( __dirname, 'examples', 'tmp.txt' );
var dest = join( __dirname, 'examples', 'foo.txt' );

// Create a temporary file:
writeFile( tmp, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( tmp ) );
// => true

// Rename the temporary file:
rename( tmp, dest );

// Confirm that the renamed temporary file exists:
console.log( exists( dest ) );
// => true

// Remove the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/fs-rename-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: rename [options] <old_path> <new_path>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

<!-- run-disable -->

```bash
$ rename ./examples/fixtures/file.txt ./examples/fixtures/tmp.txt
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs-exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs-read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>
-   <span class="package-name">[`@stdlib/fs-write-file`][@stdlib/fs/write-file]</span><span class="delimiter">: </span><span class="description">write data to a file.</span>
-   <span class="package-name">[`@stdlib/fs-unlink`][@stdlib/fs/unlink]</span><span class="delimiter">: </span><span class="description">remove a directory entry.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-rename.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-rename

[test-image]: https://github.com/stdlib-js/fs-rename/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-rename/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-rename/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-rename?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-rename.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-rename/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/fs-rename#cli
[cli-url]: https://github.com/stdlib-js/fs-rename/tree/cli
[@stdlib/fs-rename]: https://github.com/stdlib-js/fs-rename/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-rename/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-rename/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-rename/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-rename/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-rename/main/LICENSE

[node-fs]: https://nodejs.org/api/fs.html

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs-exists

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file

[@stdlib/fs/write-file]: https://github.com/stdlib-js/fs-write-file

[@stdlib/fs/unlink]: https://github.com/stdlib-js/fs-unlink

<!-- </related-links> -->

</section>

<!-- /.links -->
