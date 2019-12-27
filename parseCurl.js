const parseCurl = (commandComponents) => {
  const [_curl, url, ...args ] = commandComponents
  const headers = {}
  let currentFlag = null
  let body = null
  args.forEach((arg) => {
    if (arg[0] === '-') {
      currentFlag = arg
    } else {
      switch (currentFlag) {
        case "-H": {
          const key = arg.split(": ")[0]
          const value = arg.slice(key.length + 2)
          headers[key] = value
          return
        }
        case "--data-binary": {
          body = arg
        }
      }
      currentFlag = null
    }
  })
  return {
    url,
    headers,
    body
  }
}

module.exports = parseCurl