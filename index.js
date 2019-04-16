const minimist = require('minimist');
const error = require('./utils/error');
const version = require('./commands/version');
const help = require('./commands/help');
const today = require('./commands/today');
const tomorrow = require('./commands/tomorrow');


module.exports = () => {
    const args =  minimist(process.argv.slice(2));
    let command = args._[0] || 'help';

    if (args.version || args.v) {
        command = 'version'
    }
    if (args.help || args.h) {
        command = 'help'
    }
    switch (command) {
        case 'today':
            today(args);
            break;
        case 'tomorrow':
            tomorrow(args);
            break;
        case 'version':
            version();
            break;
        case 'help':
            help(args);
            break;
        default:
            console.log('this is default');
            error(`${command} is not a valid commant`, true)
            break;
    }

}