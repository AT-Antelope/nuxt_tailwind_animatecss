## nuxt + animatecss + tailwind

## 运行
pnpm run dev

## 部署
# https://www.nuxt.com.cn/docs/getting-started/deployment

# SSR
pnpm run build
node ./output/server/index.mjs

# SPA
pnpm nuxt build --prerender
"./dist"