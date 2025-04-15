const data = await fetch('https://api.github.com/users/midudev/events').then((data) => data.json())

console.log(data)
