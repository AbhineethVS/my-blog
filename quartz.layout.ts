import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponentProps } from "./quartz/components/types"

const isStandardContentPage = (page: QuartzComponentProps) =>
  page.fileData.slug !== "index" && page.fileData.slug !== "portfolio"
const hasQuartzSidebar = (page: QuartzComponentProps) => page.fileData.slug !== "index"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.ConditionalRender({
      component: Component.Darkmode(),
      condition: (page) => page.fileData.slug === "index",
    }),
  ],
  afterBody: [],
  footer: Component.ConditionalRender({
    component: Component.Footer({
      links: {
        GitHub: "https://github.com/AbhineethVS",
        LinkedIn: "https://www.linkedin.com/in/abhineethvs/",
      },
    }),
    condition: isStandardContentPage,
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: isStandardContentPage,
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: isStandardContentPage,
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: isStandardContentPage,
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: isStandardContentPage,
    }),
  ],
  left: [
    Component.ConditionalRender({
      component: Component.PageTitle(),
      condition: hasQuartzSidebar,
    }),
    Component.ConditionalRender({
      component: Component.MobileOnly(Component.Spacer()),
      condition: hasQuartzSidebar,
    }),
    Component.ConditionalRender({
      component: Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
      }),
      condition: hasQuartzSidebar,
    }),
    Component.ConditionalRender({
      component: Component.Explorer(),
      condition: hasQuartzSidebar,
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph(),
      condition: isStandardContentPage,
    }),
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: isStandardContentPage,
    }),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: isStandardContentPage,
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
