import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "../components/Header"
import { ELinks } from "../constants"
import Footer from "../components/Footer"
import styled from "@emotion/styled"
import Gallery from "../components/Gallery"
import { gql, useQuery } from "@apollo/client"
import Quote from "../components/Quote"
import { Quotes } from "../graphql/data"
import PopularItems from "../components/PopularItems"
import About from "../components/About"

const GET_GALLERY = gql`
  query Gallery {
    gallery {
      title,
      description,
      image
    }
  }
`

const IndexPage: React.FC<PageProps> = () => {
  const { data } = useQuery(GET_GALLERY);

  return (
    <main>
      <Header activePage={ELinks.HOME} />
      <Content>
        {data && <Gallery slides={data.gallery} />}
        <Quote {...Quotes["main-page"]} />
        <PopularItems />
        <About />
      </Content>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Блюдце в пастель</title>

const Content = styled.div`
  padding: 40px;

  & > div:not(:last-of-type) {
    margin-bottom: 120px;
  }
`

