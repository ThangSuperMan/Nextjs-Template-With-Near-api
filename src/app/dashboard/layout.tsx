interface Props {
  children: React.ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
