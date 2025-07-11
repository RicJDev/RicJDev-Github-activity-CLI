export async function getData(user) {
  try {
    const response = await fetch(`https://api.github.com/users/${user.toLowerCase()}/events`, {
      headers: {
        accept: 'application/vnd.github+json'
      }
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const rawData = await response.json()

    // return rawData

    return rawData.map(({ id, created_at, actor, payload, type, repo, public: isPublic }) => {
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
  } catch (err) {
    console.error(err.message)
  }

  return []
}
