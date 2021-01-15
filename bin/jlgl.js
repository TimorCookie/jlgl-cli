#!/usr/bin/env node
const program = require('commander')
program.version(require('../package').version)
program
  .command('create <name>')
  .description('创建一个新页面...')
  .action(name => {
    const createPage = require('../lib/createPage')
    createPage(name)
  })
program.parse(process.argv)
