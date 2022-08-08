export function Card({children, title}) {
  return(
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '30rem'}}>
      <h3 className="card-header">
        {title}
      </h3>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}