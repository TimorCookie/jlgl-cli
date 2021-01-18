const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const { clone } = require('./download')
const log = content => console.log(chalk.green(content)) 
module.exports = async name => {
  clear()
  const data = await figlet('JLGL APP')
  console.log(chalk.green(data))
  // 创建项目
  console.log(chalk.green(`🔧 创建页面: ` + name))
  // 克隆代码
  await clone('gitlab:https://gitlab.jiliguala.com/:timokie/pages-base', name, err => {
    console.log(chalk.red(err))
  } )
  log(`✅ 成功创建: ${name} `)
}