Array.from($$('[class*="wrapper"][role=img]')).forEach((w) => {
  const el = document.createElement('div')
  el.style.height = '100%'
  el.style.width = '100%'
  el.style.position = 'absolute'
  el.style.top = '0'
  el.style.left = '0'
  el.style.background = `linear-gradient(
    to bottom,
    #D32D1F calc(100% / 6 * 0),
    #D32D1F calc(100% / 6 * 1),
    #F19236 calc(100% / 6 * 1),
    #F19236 calc(100% / 6 * 2),
    #FDEE4F calc(100% / 6 * 2),
    #FDEE4F calc(100% / 6 * 3),
    #387F30 calc(100% / 6 * 3),
    #387F30 calc(100% / 6 * 4),
    #1551F5 calc(100% / 6 * 4),
    #1551F5 calc(100% / 6 * 5),
    #6D1883 calc(100% / 6 * 5),
    #6D1883 calc(100% / 6 * 6)
)`
  el.style.opacity = '0.5'
  el.style.zIndex = '1'
  el.style.borderRadius = '50%'
  w.prepend(el)
})
