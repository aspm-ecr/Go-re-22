export const userList = [
  {
    username: 'betauser',
    company: 'acme global',
    beta_access: true
  },
  {
    username: 'admin',
    password: 'admin123',
    company: 'internal ops',
    beta_access: true
  },
  {
    username: 'sysadmin',
    password: 'superSecret!2025',
    company: 'internal ops',
    beta_access: true
  },
  {
    username: 'qaops',
    password: 'Platinum#Access1',
    company: 'internal ops',
    beta_access: true
  },
  {
    username: 'secops',
    password: 'TopSecret!Oct2025',
    company: 'internal ops',
    beta_access: true
  },
  {
    password: 'normaluser',
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
