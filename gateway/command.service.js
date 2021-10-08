const TerminalService = require('./terminal.service')

const scripts = {
    allow: 'allow-entretaiment.sh',
    block: 'block-entretaiment.sh',
}

const SecureShellTunnelTarget = String(process.env.SSH_TARGET)

module.exports = async (command) => {
    if (!Object.keys(scripts).includes(command)) {
        throw new Error('illegal action')
    }
    return TerminalService.exec('ssh', [SecureShellTunnelTarget, 'docker', 'exec', 'pihole', `./app/${scripts[command]}`])
}