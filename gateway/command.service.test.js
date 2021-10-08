const CommandService = require('./command.service')
const TerminalService = require('./terminal.service')
const child_process = require('child_process')

jest.mock('./terminal.service')
const spawnSpy = jest.spyOn(child_process, 'spawn')

const execSpy = jest.spyOn(TerminalService, 'exec')

const IllegalActionError = 'illegal action';

beforeEach(() => {
    jest.resetAllMocks()
})

test.each`
    command
    ${'foo'}
    ${'bar'}
    ${'x'}
    ${'ssh'}
    ${'bash'}
    ${Math.random()}
`("should get error on $command as command", async ({ command }) => {
    await expect(CommandService(command)).rejects.toThrow(IllegalActionError)
})

test.each`
    command
    ${'allow'}
    ${'block'}
`(`should not get error on '$command' command`, async ({ command }) => {
    await expect(() => CommandService(command)).not.toThrow(IllegalActionError)
})

test.each`
    command | terminalCommand | args
    ${'allow'}   | ${'ssh'} | ${`secure_target docker exec pihole ./app/allow-entretaiment.sh`.split(' ')}
    ${'block'}   | ${'ssh'} | ${`secure_target docker exec pihole ./app/block-entretaiment.sh`.split(' ')}
`("on $command command should call terminal service with '$terminalCommand'", async ({ command, terminalCommand, args }) => {
    await CommandService(command)

    expect(execSpy).toBeCalledTimes(1)
    expect(execSpy).toBeCalledWith(terminalCommand, args)
})

