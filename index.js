// Code your solution here
function findMatching(array, string) {
    return array.filter(element => element.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string) {
    return array.filter(element => {
        return element[0].toUpperCase() === string[0].toUpperCase()
    })
}

function matchName(array, string) {
    return array.filter(element => {
        return element.name === string
    })
}