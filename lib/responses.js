const has = Object.prototype.hasOwnProperty

const GITHUB_URL = 'https://github.com/ryo-kozin'
const TWITTER_URL = 'https://twitter.com/ryo_kozin'

let infoResponse = `Here's all info of ryo_kozin`
const githubInfo = `    GitHub: ${GITHUB_URL}`
const twitterInfo = `    Twitter: ${TWITTER_URL}`
const lineFeed = `\n`

const allInfoResponse = `${infoResponse}${lineFeed}${githubInfo}${lineFeed}${twitterInfo}`

const helpResponse = `usage: ryo-kozin [--version | -v] [--help | -h] [--all | -a] [--info | -i]

These are common ryo-kozin commands used in various situations:

--all     | -a  Get browsable all info of ryo-kozin
--info    | -a  Choose browsable all info of ryo-kozin that you want to get
--help    | -h  Get help info
--version | -v  Get the cli version

'ryo-kozin --help -a' list available subcommands and some
concept guides. See 'ryo-kozin --help <command>' to read
about a specific subcommand.`

const versionResponse = `This is verion 1.0`

const getInfo = (expectedInfo) => {
    let expectedResponse = infoResponse
    if (has.call(expectedInfo, 'github') && expectedInfo.github) {
        expectedResponse += lineFeed + githubInfo
    }
    if (has.call(expectedInfo, 'twitter') && expectedInfo.twitter) {
        expectedResponse += lineFeed + twitterInfo
    }
    return expectedResponse
}

export { allInfoResponse, helpResponse, versionResponse, getInfo}