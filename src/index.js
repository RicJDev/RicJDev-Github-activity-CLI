#!/usr/bin/env node

import { Command } from 'commander'
import { getData } from './getData.js'
import { displayData } from './displayData.js'

const program = new Command('github-activity')

program.argument('<userame>', 'the GitHub username to display the activity').action(async (username) => {
  getData(username)
    .then((data) => {
      displayData(data)
    })
    .catch((err) => {
      console.err(err)
    })
})

program.parse(process.argv)
