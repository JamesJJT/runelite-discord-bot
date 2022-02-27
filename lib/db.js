import lDB from 'littledb'
import config from './config.js'

const commandsDb = lDB(config.databases.commands)
const githubUserDb = lDB(config.databases.githubUsers)
const filteredWordsDb = lDB(config.databases.filteredWords)
const roleDb = lDB(config.databases.roles)
const noteDb = lDB(config.databases.notes)

export {
  commandsDb,
  githubUserDb,
  filteredWordsDb,
  roleDb,
  noteDb
}
