import React from "react"

interface MenuProps {
  children?: React.ReactNode
  header: string
  price: string
}

const Menu = ({children, header, price}: MenuProps) => {
  return (
    <div>
      <h2>{header}: {price}</h2>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default Menu