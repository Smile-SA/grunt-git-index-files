# grunt-git-index-files

> Grunt plugin for filtering the set of files other tasks operate on into git index files only.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.  
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-git-index-files --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```js
grunt.loadNpmTasks('grunt-git-index-files');
```


## The "gitIndexFiles" task

### Overview
In your project's Gruntfile, add a section named `gitIndexFiles` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  gitIndexFiles: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific options go here.
    },
  },
})
```

### Options

#### option.workTree
Type: `String`  
Default: `.`

Your Git working tree.

```js
options: {
  workTree: 'my_project'
}
```

#### option.gitDir
Type: `String`  
Default: `./.git`

The location of the `.git` directory. 

```js
options: {
  gitDir: 'my_project/.git'
}
```

#### option.configSrcPath
Type: `Array`  
Default: `[]`

An array of config path as described [here](http://gruntjs.com/api/grunt.config#accessing-config-data). 

```js
options: {
  configSrcPath: ['csslint.app.src']
}
```

The files set defined by config paths will be filtered when the task runs with files that are on the git index.

The task will not add files that are not originally present in the files set.
