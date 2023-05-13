import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
