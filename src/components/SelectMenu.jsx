import React from 'react'

export default (props) => {
  const options = props.lista.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    )
  })

  return (
    <select className="form-select" {...props}>
      {options}
    </select>
  )
}
