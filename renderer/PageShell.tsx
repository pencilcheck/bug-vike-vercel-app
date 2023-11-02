import React from 'react'
import { ConfigProvider } from 'antd';
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import type { PageContext } from './types'
import './PageShell.css'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ConfigProvider
          theme={{
            components: {
              Layout: {
                bodyBg: 'white',
                footerBg: 'white',
                headerBg: 'white',
                headerColor: '#36454F',
              }
            },
            token: {
              // Seed Token
              colorPrimary: '#337ab7',
              borderRadius: 2,

              // Alias Token
              colorBgContainer: 'white',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
