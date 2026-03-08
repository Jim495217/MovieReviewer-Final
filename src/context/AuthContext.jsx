import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

function createToken(user) {
  const payload = {
    username: user.username,
    role: user.role,
    exp: Date.now() + 60 * 60 * 1000 // 1 hour
  }

  return btoa(JSON.stringify(payload))
}

function decodeToken(token) {
  try {
    return JSON.parse(atob(token))
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (!token) return

    const decoded = decodeToken(token)

    if (!decoded || decoded.exp < Date.now()) {
      localStorage.removeItem("token")
      return
    }

    setUser({
      username: decoded.username,
      role: decoded.role
    })

  }, [])

  const login = (username, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    )

    if (!foundUser) {
      throw new Error("Invalid username or password")
    }

    const token = createToken(foundUser)

    localStorage.setItem("token", token)

    setUser({
      username: foundUser.username,
      role: foundUser.role
    })
  }

  const register = (username, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (users.find((u) => u.username === username)) {
      throw new Error("User already exists")
    }

    const newUser = {
      username,
      password,
      role: "user"
    }

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
  }

  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  const isAdmin = user?.role === "admin"

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}