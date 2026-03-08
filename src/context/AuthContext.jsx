import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

function createToken(user) {
  const payload = {
    username: user.username,
    role: user.role,
    exp: Date.now() + 60 * 60 * 1000 // 1 hour expiration
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

// Basic input sanitization (XSS protection)
function sanitizeInput(input) {
  return input.replace(/[<>]/g, "")
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {

    // Create CSRF token if it doesn't exist
    if (!sessionStorage.getItem("csrfToken")) {
      sessionStorage.setItem("csrfToken", crypto.randomUUID())
    }

    const token = sessionStorage.getItem("token")

    if (!token) return

    const decoded = decodeToken(token)

    if (!decoded || decoded.exp < Date.now()) {
      sessionStorage.removeItem("token")
      return
    }

    setUser({
      username: decoded.username,
      role: decoded.role
    })

  }, [])

  const login = (username, password) => {

    if (!username || !password) {
      throw new Error("All fields are required")
    }

    const cleanUsername = sanitizeInput(username)

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find(
      (u) => u.username === cleanUsername && u.password === password
    )

    if (!foundUser) {
      throw new Error("Invalid username or password")
    }

    const token = createToken(foundUser)

    sessionStorage.setItem("token", token)

    setUser({
      username: foundUser.username,
      role: foundUser.role
    })
  }

  const register = (username, password) => {

    if (!username || !password) {
      throw new Error("All fields are required")
    }

    const cleanUsername = sanitizeInput(username)

    const users = JSON.parse(localStorage.getItem("users")) || []

    if (users.find((u) => u.username === cleanUsername)) {
      throw new Error("User already exists")
    }

    const newUser = {
      username: cleanUsername,
      password,
      role: "user"
    }

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
  }

  const logout = () => {
    sessionStorage.removeItem("token")
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