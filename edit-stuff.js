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
    `,
  ]

  const channel = '' // Your channel
  const message = '' // Your message ID
  const authorization = '' // Your auth token

  let timeout

  const getShitpost = (
    (index = 0) =>
    () =>
      `\`\`\`\n${frames[index++ % frames.length]}\n\`\`\``
  )()

  const shitpost = () =>
    fetch(`/api/v6/channels/${channel}/messages/${message}`, {
      headers: new Headers({
        authorization,
        'Content-Type': 'application/json',
      }),
      method: 'PATCH',
      body: JSON.stringify({ content: getShitpost() }),
    })
      .then((s) => s.json())
      .catch((e) => console.warn('Shitpost failed: %o', e))

  const startShitposting = async () => {
    await shitpost()

    if ('stopShitpostingPlz' in window && timeout) {
      clearTimeout(timeout)
      console.log('Shitpost has been canceled')
      delete window.stopShitpostingPlz
    } else {
      timeout = setTimeout(startShitposting, 1000)
    }
  }

  startShitposting()

  console.log('Shitposting started. "window.stopShitpostingPlz = true" to stop')
})()
