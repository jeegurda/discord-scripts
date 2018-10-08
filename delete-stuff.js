;(async () => {
  var channel = '189322461374840832' // Your channel
  var authorization = 'token' // Your auth token
  var username = 'carl' // Username to match
  var history = 1000 // How many messages to fetch (total)
  var dry = true // Change to false to actually send DELETE requests


  var limit = 100
  var messages = []

  while (history > 0) {
    history -= limit

    var before = messages[messages.length - 1]

    await fetch(`/api/v6/channels/${channel}/messages?limit=${limit}${before ? `&before=${before.id}` : ''}`, {
      headers: new Headers({ authorization })
    })
      .then(s => s.json())
      .then(d => d.length
        ? messages = messages.concat(d)
        : history = 0
      )

    console.log(`Received ${messages.length} messages`)
  }

  var userMessages = messages
    .filter(i => i.author.username === username)
    .map(m => m.id)

  console.log(`Found ${userMessages.length} your messages`)

  if (dry) {
    return
  }

  for (var i of userMessages) {
    await fetch(`/api/v6/channels/${channel}/messages/${i}`, {
      headers: new Headers({ authorization }),
      method: 'DELETE'
    })
    await new Promise(res => setTimeout(res, 300))
  }

  console.log('Done!')
})()
