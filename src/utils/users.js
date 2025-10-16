export const userList = [
  {
    username: 'normaluser',
    company: 'generic co',
    beta_access: false
  }
]

export const betaAccess = () => {
  if (localStorage.getItem('user') === null) {
    return false
  } else {
    let localUser = {}
    userList.map((user) => {
      if (user.username === localStorage.getItem('user')) {
        localUser = user
      }
    })
    return localUser.beta_access
  }
}

export const isLoggedIn = () => {
  return localStorage.getItem('user') !== null
}

export const getCompany = () => {
  if (localStorage.getItem('user') === null) {
    return false
  } else {
    let localUser = {}
    userList.map((user) => {
      if (user.username === localStorage.getItem('user')) {
        localUser = user
      }
    })
    return localUser.company
  }
}
