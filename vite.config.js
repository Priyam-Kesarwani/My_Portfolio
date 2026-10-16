import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'turnstile-verify-dev-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/verify-turnstile' && req.method === 'POST') {
              let body = ''
              req.on('data', (chunk) => {
                body += chunk
              })
              req.on('end', async () => {
                try {
                  const parsed = JSON.parse(body || '{}')
                  const token = parsed.token
                  const secret = env.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY

                  if (!token) {
                    res.statusCode = 400
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify({ success: false, message: 'Captcha token missing' }))
                    return
                  }

                  if (!secret) {
                    res.statusCode = 500
                    res.setHeader('Content-Type', 'application/json')
                    res.end(
                      JSON.stringify({
                        success: false,
                        message: 'TURNSTILE_SECRET_KEY not found in .env',
                      })
                    )
                    return
                  }

                  const formData = new URLSearchParams()
                  formData.append('secret', secret)
                  formData.append('response', token)

                  const cfRes = await fetch(
                    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      body: formData,
                    }
                  )
                  const outcome = await cfRes.json()

                  res.statusCode = outcome.success ? 200 : 400
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify(outcome))
                } catch (err) {
                  res.statusCode = 500
                  res.setHeader('Content-Type', 'application/json')
                  res.end(JSON.stringify({ success: false, error: err.message }))
                }
              })
              return
            }
            next()
          })
        },
      },
    ],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
}
})
