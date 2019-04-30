;(() => {
  const frames = [
    `
    ⠀⠀ ⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿
⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣶⣿⣿⣿⣶⣶⣤⣶⣶⠶⠛⠉⠉
⠀⠀⠀⠀⠀⠀⣤⣿⠿⣿⣿⣿⣿⣿⠀⠀⠉⠀⠀⠀⠀⠀⠀
⠛⣿⣤⣤⣀⣤⠿⠉⠀⠉⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠉⣿⣿⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠛⠿⣿⣿⣿⣶⣤⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⠛⠉⠀⠀⠀⠛⠿⣿⣿⣶⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣤⠀⠀
⠀⠀⠀⠀⠀⠛⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿⣿⠿⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠉⠀
    `,
    `
    ⠀⠀⣀
    ⠀⠿⣿⣿⣀
    ⠀⠉⣿⣿⣀
    ⠀⠀⠛⣿⣭⣀⣀⣤
    ⠀⠀⣿⣿⣿⣿⣿⠛⠿⣶⣀
    ⠀⣿⣿⣿⣿⣿⣿⠀⠀⠀⣉⣶
    ⠀⠀⠉⣿⣿⣿⣿⣀⠀⠀⣿⠉
    ⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿
    ⠀⣀⣿⣿⣿⣿⣿⣿⣿⣿⠿
    ⠀⣿⣿⣿⠿⠉⣿⣿⣿⣿
    ⠀⣿⣿⠿⠀⠀⣿⣿⣿⣿
    ⣶⣿⣿⠀⠀⠀⠀⣿⣿⣿
    ⠛⣿⣿⣀⠀⠀⠀⣿⣿⣿⣿⣶⣀
    ⠀⣿⣿⠉⠀⠀⠀⠉⠉⠉⠛⠛⠿⣿⣶
    ⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣿
    ⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉
    ⣀⣶⣿⠛
    `,
    `
    ⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⠶⠀⠀⣀⣀
    ⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿
    ⠀⠀⣀⣶⣤⣤⠿⠶⠿⠿⠿⣿⣿⣿⣉⣿⣿
    ⠿⣉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⣤⣿⣿⣿⣀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⣿⣿⣶⣤
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣿⣿⣿⣿⠿⣛⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠛⣿⣿⣿⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿⣿⠿⠀⣿⣿⣿⠛
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⣿⣿⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⣿⠀⠀⣿⣶
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠀⠀⣿⣿⣶
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠤
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣿
    `
  ]

  const channel = 'channel' // Your channel
  const message =  'message' // Your message ID
  const authorization = 'token' // Your auth token
  const username = 'carl' // Your username

  const getShitpost = ((index = 0) =>
    () => `\`\`\`\n${frames[index++ % frames.length]}\n\`\`\``
  )()

  const shitpost = () => fetch(`/api/v6/channels/${channel}/messages/${message}`, {
    headers: new Headers({
      authorization,
      'Content-Type': 'application/json'
    }),
    method: 'PATCH',
    body: JSON.stringify({ content: getShitpost() })
  })
    .then(s => s.json())
    .catch(e => console.warn(e))

  const startShitposting = async () => {
    await shitpost()

    if (!window.stopShitpostingPlz) {
      setTimeout(startShitposting, 1000)
    }
  }

  startShitposting()

  console.log('Shitposting started')
})()
