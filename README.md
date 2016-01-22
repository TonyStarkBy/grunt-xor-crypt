# grunt-xor-crypt

> XOR Encryption

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-xor-crypt --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-xor-crypt');
```

## The "xor_crypt" task

### Overview
In your project's Gruntfile, add a section named `xor_crypt` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  xor_crypt: {
    options: {
      xorKey: 'Your#Secret@Key2Encrypt#Data'
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.xorKey
Type: `String`
Default value: `secretkey`

A string value that is used to encrypt files.



### Usage Examples


```js
grunt.initConfig({
  xor_crypt: {
    options: {
      xorKey: 'secret'
    },
    files: {
      'dest/encrypt.dat': ['src/source.txt'],
    },
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

