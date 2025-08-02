---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Lingua Logica"
  image:
    src: /Lingua_Logica.png
    alt: Lingua Logica Logo
  tagline: 一个小小的自制编程语言组织
  actions:
    - theme: brand
      text: 快速了解
      link: /快速了解

features:
  - title: 🚀 棍木
    details: 棍木
  - title: 🔨 棍木
    details: 棍木
  - title: 🔐 棍木
    details: 棍木
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style> 