#!/usr/bin/env node
const program = require('commander')
program.version(require('../package').version)
// 创建页面
program
  .command('page <name>')
  .description('为 pages 创建一个新页面...')
  .action(name => {
    const createPage = require('../lib/createPage')
    createPage(name)
  })
// 检查更新
program
  .command('upgrade')
  .description('检查 jlgl-cli 版本')
  .action(() => {
    const updateCheck = require('../lib/update')
    console.log(updateCheck)
    updateCheck()
  })
program.parse(process.argv)
