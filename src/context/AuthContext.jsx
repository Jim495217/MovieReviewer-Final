import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  const login = (username, password) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    )

    if (!foundUser) {
      throw new Error("Invalid username or password")
    }

    localStorage.setItem("token", "fake-jwt-token")
    localStorage.setItem("user", JSON.stringify(foundUser))

    setUser(foundUser)
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
    localStorage.removeItem("user")
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