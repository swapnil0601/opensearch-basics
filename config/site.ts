export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "OpenSearch UI",
  description:
    "Data visualization components using NextJS and OpenSearch Dashboards",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Performance",
      href: "/performance",
    }
  ],
  links: {
    twitter: "https://twitter.com/kohan0601",
    github: "https://github.com/swapnil0601",
    docs: "https://ui.shadcn.com",
  },
}
