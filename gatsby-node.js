const path = require("path")
const locales = require("./i18n")

const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`./utils/gatsby-node-helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  deletePage(page)

  const pageName = path.basename(page.path, ".kr")
  const pagePath = pageName === "index" ? path.dirname(page.path) : pageName
  // const lang =
  // removeTrailingSlash(page.path).split(".").pop() === "kr" ? "kr" : "en"
  const lang = path.extname(page.path) ? "kr" : "en"

  const localizedPath =
    lang === "en" ? page.path : `${locales.kr.path}${pagePath}/`

  console.log(localizedPath)

  return createPage({
    ...page,
    path: removeTrailingSlash(localizedPath),
    context: {
      ...page.context,
      locale: lang,
      type: "page",
      title: pagePath.replace(/\//, "")
    },
  })

  // Object.keys(locales).map(lang => {
  //   const localizedPath = locales[lang].default
  //     ? page.path
  //     : `${locales[lang].path}${page.path}`

  //   return createPage({
  //     ...page,
  //     path: removeTrailingSlash(localizedPath),
  //     context: {
  //       ...page.context,
  //       locale: lang,
  //     },
  //   })
  // })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const defaultLang = findKey(locales, o => o.default === true)

    const lang = path.basename(path.dirname(node.fileAbsolutePath))

    const isDefault = lang === defaultLang

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/post.jsx`)

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          fields {
            isDefault
            locale
          }
          id
          frontmatter {
            title
            slug
            desc
          }
          fileAbsolutePath
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    const lang = path.basename(path.dirname(post.fileAbsolutePath))
    const slug = post.frontmatter.slug
    const locale = post.fields.locale
    const isDefault = post.fields.isDefault
    const title = post.frontmatter.title
    const desc = post.frontmatter.desc

    createPage({
      path: localizedSlug({ isDefault, locale, slug }),
      component: postTemplate,
      context: {
        id: post.id,
        locale: locale,
        type: "post",
        title: title,
        desc: desc,
      },
    })
  })
}
