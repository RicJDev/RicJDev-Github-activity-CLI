#!/usr/bin/env node

import { Command } from 'commander'
import { fetchUser } from './fetchUser.js'
import { displayUserData } from './displayData.js'

const program = new Command('github-activity')

program
  .argument('<userame>', 'The GitHub username to display the activity')
  .action(async (username) => {
    const data = await fetchUser(username)
    displayUserData(data)
  })

program.parse(process.argv)
