export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { renderToStream } from 'react-streaming/server'
import logoUrl from './logo.svg'
import type { PageContextServer } from './types'

async function render(pageContext: PageContextServer) {
  const antdStyleCache = createCache();
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const page = (
    <StyleProvider cache={antdStyleCache}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </StyleProvider>
  )
  const stream = await renderToStream(page, { disable: false })

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + Vike'
  const antdStyleText = extractStyle(antdStyleCache);

  // comment to stop using react streaming (useData will stop working)
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        ${dangerouslySkipEscape(antdStyleText)}
      </head>
      <body>
        <div id="react-root">${stream}</div>
      </body>
    </html>`
}
