const TerminalService = require('./terminal.service')

const IllegalActionError = 'illegal action';

beforeAll(() => {
    jest.setTimeout(100)
})

beforeEach(() => {
    jest.restoreAllMocks()
})

test.each`
command
${'foo'}
${'bar'}
${'x'}
${'bash'}
${Math.random()}
`("should get error on $command as command", async ({ command }) => {
    await expect(TerminalService.exec(command)).rejects.toThrow(IllegalActionError)
})


test.each`
    command
    ${'ssh'}
`(`should not get error on '$command' command`, async ({ command }) => {
    await expect(TerminalService.exec(command)).rejects.not.toThrow(IllegalActionError)
})
