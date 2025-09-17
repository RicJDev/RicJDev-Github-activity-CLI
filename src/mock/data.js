import { rawData } from './rawData.js'

export const data = rawData.map(({ id, created_at, actor, payload, type, repo, public: isPublic }) => {
  return {
    id,
    type,
    repo: repo.name,
    createdAt: created_at,
    autor: actor.display_login,
    commits: payload.commits?.length ?? 0,
    isPublic
  }
})
