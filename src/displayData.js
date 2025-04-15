import { data } from "./mock/data.js"

for (const { id, repo, created_at, actor, public: isPublic, payload, type } of data) {
  console.log('')
  console.log('Actor: ', actor.display_login)
  console.log('Id: ', id)
  console.log('Repo: ', repo.name)
  console.log('Created at: ', created_at)
  console.log('Is public: ', isPublic)
  console.log('Commits: ', payload?.commits?.length ?? 0)
  console.log('type: ', type)
}
