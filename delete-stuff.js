;(async () => {
  const channel = '268087097641009162' // Your channel
  const authorization = '' // Your auth token
  const username = 'jeegurda' // Username to match
  let history = 1000 // How many messages to fetch (total)
  const dry = true // Change to false to actually send DELETE requests

  const limit = 100
  let messages = []

  while (history > 0) {
    history -= limit

    const before = messages[messages.length - 1]

    await fetch(
      `/api/v6/channels/${channel}/messages?limit=${limit}${
        before ? `&before=${before.id}` : ''
      }`,
      {
        headers: new Headers({ authorization }),
      },
    )
      .then((s) => s.json())
      .then((d) => (d.length ? (messages = messages.concat(d)) : (history = 0)))

    console.log(`Received ${messages.length} messages`)
  }

  const userMessages = messages
    .filter((i) => i.author.username === username)
    .map((m) => m.id)

  console.log(
    `Found ${userMessages.length} your messages. Out of %o. Check username if 0`,
  )

  if (dry) {
    return
  }

  for (let i of userMessages) {
    await fetch(`/api/v6/channels/${channel}/messages/${i}`, {
      headers: new Headers({ authorization }),
      method: 'DELETE',
    })
    await new Promise((res) => setTimeout(res, 300))
  }

  console.log('Done!')
})()
