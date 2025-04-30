


export default function HeadingTitle({title}) {
  return (
    <div style={wrapperStyles}>
      <h2 style={titleStyles}>{title}</h2>
    </div>
  )
}

const wrapperStyles = {
  marginRight: '20px',
  marginTop: '40px',
}

const titleStyles = {
  fontSize: '24px',
  fontWeight: '600',
  color: 'var(--primary-color)',
}