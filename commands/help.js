const menu = {
    main: ` 
        wetather [command] <option> 

        today ............... show wether for todyy
        tomorrow ............... show weather for tomorrow
        version .................... show version of app
        help......................... show help menu for command
    `,
    today: `
        weather today <option>
        eg weather today --location, -l .... to pass location variable
    `,
    tomorrow: `
        weather tomorro <option>
        eg weather tomorrow --location -l .. to pass variable
    `
}

module.exports = (args) => {
    const optionalCommand = (args._[0] === 'help')?args._[1] : args._[0]
    console.log(menu[optionalCommand] || menu.main);
    
}