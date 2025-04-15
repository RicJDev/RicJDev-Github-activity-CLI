#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command('github-activity')

program
  .argument('<userame>', 'The GitHub username to display the activity')
  .action((username) => {
    // ...
  })

program.parse(process.argv)
