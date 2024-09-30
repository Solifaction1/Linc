const getColor = (imageSize: string) => {
    switch (imageSize) {
        case 'beige': {
            return 'beige'
        }
        case 'blue-gray': {
            return 'blueGray'
        }
        case 'dark-green': {
            return 'darkGreen'
        }
        case 'light-green': {
            return 'lightGreen'
        }
        case 'red':{
            return 'red' 
        }
        case 'light-blue':{
            return 'lightBlue' 
        }
        case 'dark-blue':{
            return 'darkBlue' 
        }
        case 'white':{
            return 'white' 
        }
        case 'gray':
        default: {
            return 'gray'
        }
    }
}

const getColorHeader = (imageSize: string) => {
    switch (imageSize) {
        case 'beige': {
            return 'dark'
        }
        case 'blue-gray': {
            return 'dark'
        }
        case 'dark-green': {
            return 'light'
        }
        case 'light-green': {
            return 'light'
        }
        case 'white':{
            return 'dark' 
        }
        case 'gray':
        default: {
            return 'light'
        }
    }
}
export { getColor, getColorHeader }
