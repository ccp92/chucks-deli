import React from "react"

interface MenuProps {
  children?: React.ReactNode
  header: string
  price?: string
}

const Menu = ({children, header, price}: MenuProps) => {
  let headerSection = header;

  if (price) {
    headerSection += `: ${price}`;
  }
  return (
    <div>
      <h2>{headerSection}</h2>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default Menu