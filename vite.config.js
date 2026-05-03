import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  // GitHub Pages serves project sites from `/<repo>/`, so Vite must build with that base.
  // In GitHub Actions, GITHUB_REPOSITORY is like "owner/repo".
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  const base = process.env.GITHUB_PAGES === 'true' && repoName ? `/${repoName}/` : '/'

  return {
    base,
    plugins: [react(), tailwindcss()],
  }
})
