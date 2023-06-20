import 'dotenv/config'
import { InstallGlobalCommands } from './utils.js'

// Simple test command
const TEST_COMMAND = {
  name: 'test2',
  description: 'Basic command',
  type: 1,
}

const D4_COMMAND = {
  name: 'diablo',
  description: 'Get information about Diablo 4!',
  options: [
    {
      name: 'breakpoints',
      description: 'Gives information on the breakpoints of item level.',
      type: 1
    },
  ],
}

const ALL_COMMANDS = [TEST_COMMAND, D4_COMMAND]

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS).then(() => {
  console.log('Ermagherd, it worked!!')
})
