import { useState } from 'react'

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* Temporary content below the navbar so you can see it works */}
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h1>Welcome to my personal site! 🚀</h1>
        <p>Full-Stack Web Developer with a passion for back-end systems

Node.js • TypeScript • PostgreSQL • React

I build scalable, clean, and maintainable web applications..</p>
      </div>
    </div>
  )
}

// Simple Navbar Component
function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#222",
      padding: "15px 20px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      {/* Logo / Name */}
      <h2 style={{ margin: 0, fontSize: "22px" }}>MySite</h2>

      {/* Menu items */}
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "25px",
        margin: 0,
        padding: 0
      }}>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Home</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Blog</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>About</a></li>
        <li><a href="#" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>Projects</a></li>
      </ul>
    </nav>
  )
}