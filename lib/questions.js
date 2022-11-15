const githubQuestion = { 
    type: 'confirm', 
    name: 'github', 
    message: 'Are you interested in ryo-kozin\'s profile on Github?', 
    default: false, 
}
        
const twitterQuestion = { 
    type: 'confirm', 
    name: 'twitter', 
    message: 'Are you interested in ryo-kozin\'s profile on Twitter?', 
    default: false, 
}
        
const noInterestQuestion = { 
    type: 'confirm', 
    name: 'noInterest', 
    message: 'Are you not interested in ryo-kozin\'s info?', 
    default: true, 
}
        
export { githubQuestion, twitterQuestion, noInterestQuestion }