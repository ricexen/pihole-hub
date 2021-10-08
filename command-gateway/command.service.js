const TerminalService = require('./terminal.service')

const scripts = {
    allow: 'allow-entretaiment.sh',
    block: 'block-entretaiment.sh',
}


module.exports = async (command) => {
    if (!Object.keys(scripts).includes(command)) {
        throw new Error('illegal action')
    }
    return TerminalService.exec('ssh', ['personal', 'docker', 'exec', 'pihole', `./app/${scripts[command]}`])
}