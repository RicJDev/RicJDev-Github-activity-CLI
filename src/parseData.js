export function parseData(rawData) {
  return rawData.map(({ id, created_at, actor, payload, type, repo, public: isPublic }) => ({
    id,
    type,
    repo: repo.name,
    createdAt: created_at,
    autor: actor.display_login,
    commits: payload.commits?.length ?? 0,
    isPublic,
  }))
}
