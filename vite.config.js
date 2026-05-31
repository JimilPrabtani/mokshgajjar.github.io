import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  // GitHub Pages:
  // - Project site: https://<owner>.github.io/<repo>/  -> base must be `/<repo>/`
  // - User/Org site: https://<owner>.github.io/       -> base must be `/`
  // In GitHub Actions, GITHUB_REPOSITORY is like "owner/repo".
  // eslint-disable-next-line no-undef
  const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/')
  const isUserSiteRepo = Boolean(owner && repo && repo === `${owner}.github.io`)

  // eslint-disable-next-line no-undef
  const base =
    process.env.GITHUB_PAGES === 'true' && repo
      ? isUserSiteRepo
        ? '/'
        : `/${repo}/`
      : '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
