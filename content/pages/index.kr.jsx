import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../src/components/layout"
import Link from "../../src/components/link"
import styles from "./_right.module.scss"
import LeftTemplate from "../../src/components/left"

const Left = () => (
  <LeftTemplate
    title="이윤규"
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
        <Link className={styles.link} to={"/kr/posts"}>
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
        <Link to="/kr/colophon">colophon</Link>
        <Link to="/">english</Link>
      </div>
    </>
  )
}

const Right = () => {
  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        서울에 살고있는 학생 겸 개발자입니다. 풀스택 웹 개발과 계산과학이 전문
        분야입니다.
        <span className={styles.emph}> 연락주세요.</span>
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
    />
    <Layout left={<Left />} right={<Right />} />
  </>
)

export default Index
