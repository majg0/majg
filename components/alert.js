import Container from './container'

export default function Alert({ children }) {
  return (
    <div className="border-b bg-accent-7 border-accent-7 text-white">
      <Container>
        <div className="py-2 text-center text-sm">{children}</div>
      </Container>
    </div>
  )
}
