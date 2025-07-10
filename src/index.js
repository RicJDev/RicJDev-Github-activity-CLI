#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command('github-activity')

program
  .argument('<userame>', 'The GitHub username to display the activity')
  .action((username) => {
    console.log(`${username}? What a nice username!`)
  })

program.parse(process.argv)
