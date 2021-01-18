const {promisify} = require('util')

module.exports.clone = async (repo, desc) => {
  const download = promisify(require('download-git-repo'))
  const ora = require('ora')
  const process = ora(`🚀 正在下载...... ${repo}`)
  process.start()
  await download(repo, `./src/pages/${desc}`)
  process.succeed()
}