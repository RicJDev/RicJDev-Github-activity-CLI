export function displayData(data) {
  for (const { type, isPublic, repo, createdAt, action, commits } of data) {
    console.log(`Action: ${action}`)
    console.log(`Repo: ${repo}`)
    console.log(`Created at: ${createdAt}`)
    console.log(`Is public: ${isPublic}`)
    console.log(`Commits: ${commits}`)
    console.log(`type: ${type}`)
    console.log('')
  }
}
