//declare introduction function that uses a parameter
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

//declare introductionWithLanguage that uses two parameters
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//declare introductionWithLanguageOptional that uses two parameters
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}