import arg from 'arg'
import chalk from 'chalk'

const EXPECTED_ERROR = 'ARG_UNKNOWN_OPTION'
const DEFAULT_ARG_LENGTH = 2

const helpMessage = chalk.yellow.bold('Please pass --help flag to get help.')

const parseArgumentsIntoOptions = (rawArgs) => { 
    const args = arg( 
        {
            '--all': Boolean, 
            '--info': Boolean, 
            '--help': Boolean, 
            '--version': Boolean, 
            '-a': '--all',
            '-i': '--info',
            '-h': '--help',
            '-v': '--version',
        }, 
        { 
            argv: rawArgs.slice(2), 
        } 
    ); 

    return { 
        allInfo: args['--all']   || false, 
        info: args['--info'] || false, 
        help: args['--help']        || false, 
        version: args['--version']  || false,
    }; 
} 
const checkArgs = (args) => {
    
    if (args.length <= DEFAULT_ARG_LENGTH) {
        console.log(`${chalk.yellow.bold('Please pass one or more arguments!\n')}${helpMessage}`)
        process.exit(1)
    }

    try {
        return parseArgumentsIntoOptions(args)
    } catch (error) {
        if (error.code === EXPECTED_ERROR) {
            console.error(`${chalk.red.bold('Caught unexpected arguments\nPlease try again!')}\n${helpMessage}`)
        } else {
            console.error(chalk.red.bold('Caught unexpected error\nPlease try again!'))
        }
    }
    process.exit(1)
}

export default checkArgs
