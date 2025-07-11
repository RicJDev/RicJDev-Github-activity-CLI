#!/usr/bin/env node

import { Command } from 'commander'
import { getData } from './getData.js'
import { displayData } from './displayData.js'

const program = new Command('github-activity')

program.argument('<userame>', 'The GitHub username to display the activity').action(async (username) => {
  const data = await getData(username)
  displayData(data)
})

program.parse(process.argv)
