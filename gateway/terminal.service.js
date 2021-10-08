const { spawn } = require('child_process')

const allowedCommands = ['ssh']
const IllegalActionError = 'illegal action'

module.exports = {
    exec: (command, args) => new Promise((resolve, reject) => {
        if (!allowedCommands.includes(command)) {
            reject(new Error(IllegalActionError))
            return
        }
        const child = spawn(command, args, {
            cwd: process.cwd(),
            env: process.env,
        })
        child.stdout.setEncoding('utf8')
        let output = ''
        let error = ''
        child.stdout.on('data', (chunk) => {
            output += chunk
        })
        child.on('error', (err) => {
            error = err.message
        })
        child.on('close', (code) => {
            if (code || error) {
                reject({ code, error })
            }
            resolve({ output })
        })
    })
}