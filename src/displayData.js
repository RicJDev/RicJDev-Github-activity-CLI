export function displayData(data) {
  for (const { autor, repo, id, type, commits, createdAt, isPublic } of data) {
    console.log(`Actor: ${autor}`)
    console.log(`Id: ${id}`)
    console.log(`Repo: ${repo}`)
    console.log(`Created at: ${createdAt}`)
    console.log(`Is public: ${isPublic}`)
    console.log(`Commits: ${commits}`)
    console.log(`type: ${type}`)
    console.log('')
  }
}

