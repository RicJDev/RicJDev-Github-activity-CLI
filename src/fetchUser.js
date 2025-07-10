export async function fetchUser(user) {
  try {
    const rawData = await fetch(`https://api.github.com/users/${user.toLowerCase()}/events`).then((data) => data.json())

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
    console.error(err)
  }

  return []
}

console.log(await fetchUser('ricjdev'))
