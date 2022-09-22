exports.createPages = async ({
  actions: { createPage, createRedirect },
  graphql,
}) => {
  const data = await graphql(`
    {
      allPlanetsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const planetTemplate = require.resolve("./src/templates/PlanetPage.js")

  data.data.allPlanetsJson.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.name.toLowerCase()}`,
      component: planetTemplate,
      context: {
        planet: edge.node.name,
      },
    })
  })

  createRedirect({
    fromPath: "/",
    toPath: "/mercury",
    isPermanent: true,
    exactPath: true,
    redirectInBrowser: true,
  })
}
