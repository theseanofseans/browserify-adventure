
/*
Now that we have browserify up and running, let's use a module from npm!

First install the `uniq` module from npm by doing:

  npm install uniq

npm should have put uniq into `./node_modules/uniq`. browserify uses the
same module-lookup algorithm as node.js, so you can just `require('uniq')`
just like you would do in node.js!

`require('uniq')` returns a `uniq(xs)` function that removes duplicate
items from an array input `xs`.

For this level, use `prompt()` to fetch a string. Split the string that
`prompt()` returns by commas (`str.split(',')` returns a separated array of
strings) and run this array through `uniq()` to discard repeated items.
Use `console.log()` to print the resulting uniq array.

Compile your program with `browserify` and pipe the bundle into
`browserify-adventure verify` like this:

  browserify main.js | browserify-adventure verify

If you just want to run your solution with the test input without verifying
it you can do:

  browserify main.js | browserify-adventure run
*/


