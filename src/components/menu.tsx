import React from "react"

interface MenuProps {
  children?: React.ReactNode
  header: string
  price?: string
  anchor: string
}

const MenuSection = ({children, header, price, anchor}: MenuProps) => {
  let headerSection = header;

  if (price) {
    headerSection += `: ${price}`;
  }
  return (
    <div id={anchor}>
      <h2>{headerSection}</h2>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default MenuSection