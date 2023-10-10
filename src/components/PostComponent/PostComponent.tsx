
type PostComponentProps = {
  children?: React.ReactNode;
}

export const PostComponent = ({children}:PostComponentProps) => {
  return (
    <>{children}</>
  )
}
