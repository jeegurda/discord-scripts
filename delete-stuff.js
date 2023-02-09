;(async () => {
  const channel = '268087097641009162' // Your channel
  const authorization = '' // Your auth token
  const matchBy = {
    // Match author by a combination of these fields, null to omit
    discriminator: '9251',
    id: null,
    username: 'jeegurda',
  }
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

  const userMessages = messages.filter((i) =>
    Object.entries(matchBy).every(([k, v]) => v === null || i.author[k] === v),
  )

  const umIds = userMessages.map((m) => m.id)

  console.log(
    `Found ${userMessages.length} your messages.${
      userMessages.length === 0 ? ' Check match object.' : ''
    } Messages: %o`,
    userMessages,
  )

  if (dry) {
    return
  }

  for (let id of umIds) {
    await fetch(`/api/v6/channels/${channel}/messages/${id}`, {
      headers: new Headers({ authorization }),
      method: 'DELETE',
    })
    await new Promise((res) => setTimeout(res, 300))
  }

  console.log('Done!')
})()
