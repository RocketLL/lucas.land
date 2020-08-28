import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../src/components/layout"
import Link from "../../src/components/link"
import styles from "./_right.module.scss"
import LeftTemplate from "../../src/components/left"

const Left = () => (
  <LeftTemplate
    title="Lucas Lee"
    subtitle={
      <Link to="mailto:me@lucas.land" size="1em">
        me@lucas.land
      </Link>
    }
  />
)

const Links = () => {
  return (
    <>
      <div className={styles.links}>
        <Link className={styles.link} to={"/posts"}>
          posts
        </Link>
        <Link className={styles.link} to={"https://github.com/rocketll"}>
          github
        </Link>
        <Link className={styles.link} to={"https://behance.net/rocketll"}>
          behance
        </Link>
      </div>
      <div className={`${styles.links} ${styles.sub}`}>
        <Link to="/colophon">colophon</Link>
        <Link to="/kr">korean</Link>
      </div>
    </>
  )
}

const Right = () => {
  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        Seoul (KR) based developer and computer science student with a keen
        interest in design. Specializing in full-stack web development and
        computational science.
        <span className={styles.emph}> Available for projects.</span>
      </p>
      <Links />
    </div>
  )
}

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index home",
      }}
    >
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "url": "https://lucas.land/",
          "name": "Lucas Lee",
          "email": "me@lucas.land",
          "additionalName": "이윤규",
          "sameAs": "https://lucas.land/kr"
        }
      `}
      </script>
    </Helmet>
    <Layout left={<Left />} right={<Right />} />
  </>
)

const title = "index"

export { title }
export default Index
