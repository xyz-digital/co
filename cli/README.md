co-cli
======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/co-cli.svg)](https://npmjs.org/package/co-cli)
[![Codecov](https://codecov.io/gh/xyz-digital/co/branch/master/graph/badge.svg)](https://codecov.io/gh/xyz-digital/co)
[![Downloads/week](https://img.shields.io/npm/dw/co-cli.svg)](https://npmjs.org/package/co-cli)
[![License](https://img.shields.io/npm/l/co-cli.svg)](https://github.com/xyz-digital/co/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g co-cli
$ co COMMAND
running command...
$ co (-v|--version|version)
co-cli/0.0.0 linux-x64 node-v12.18.1
$ co --help [COMMAND]
USAGE
  $ co COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`co hello [FILE]`](#co-hello-file)
* [`co help [COMMAND]`](#co-help-command)

## `co hello [FILE]`

describe the command here

```
USAGE
  $ co hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ co hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/xyz-digital/co/blob/v0.0.0/src/commands/hello.ts)_

## `co help [COMMAND]`

display help for co

```
USAGE
  $ co help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
