import checkArgs from '../lib/arg.js'
import { githubQuestion, twitterQuestion, noInterestQuestion } from '../lib/questions.js'
import { allInfoResponse, helpResponse, versionResponse, getInfo } from '../lib/responses.js'
import inquirer from 'inquirer';
import chalk from 'chalk';

const promptForInfo = async (options) => { 
    const questions = []
    let isChoosed = false
    let answers
    
    if (!options.github) { 
        questions.push(githubQuestion)
    } 
    
    if (!options.twitter) { 
        questions.push(twitterQuestion) 
    } 

    while (!isChoosed) {   
        answers = await inquirer.prompt(questions) 
        if (answers.github || answers.twitter) break

        const noInterestAnswer = await inquirer.prompt([noInterestQuestion])
        if (!noInterestAnswer.noInterest) {
            console.log(chalk.green.bold('Come back when you\'re interested in ryo-kozin!') + '\nBye bye...')
            process.exit()
        }
    }
    return answers
}

const getExpectedInfo = async (options) => {
    const expectedInfo = await promptForInfo(options)
    return getInfo(expectedInfo)
}

const ryoKozinCLi = async () => {
    let options = checkArgs(process.argv)

    if (options.allInfo) {
        console.log(allInfoResponse)
        process.exit()
    }

    if (options.info) {
        const infoResponse = await getExpectedInfo(options)
        console.log(infoResponse)
        process.exit()
    }
        
    if (options.help) {
        console.log(helpResponse)
        process.exit()
    }

    if (options.version) {
        console.log(versionResponse)
        process.exit()
    }
}

export default await ryoKozinCLi()