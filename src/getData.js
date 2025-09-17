export async function getData(user) {
  const response = await fetch(`https://api.github.com/users/${user.toLowerCase()}/events`, {
    headers: { accept: 'application/vnd.github+json', 'User-Agent': 'node.js' }
  })

  if (!response.ok) {
    if ((response.status = 404)) {
      throw new Error(`User "${user}" not found. Please check and try again`)
    } else {
      throw new Error(`Something failed. Response status: ${response.status}`)
    }
  }

  const rawData = await response.json()

  return rawData.map(({ created_at, payload, type, repo, public: isPublic }) => ({
    type,
    isPublic,
    repo: repo.name,
    createdAt: created_at,
    action: payload.action,
    commits: payload.commits?.length ?? 0
  }))
}
