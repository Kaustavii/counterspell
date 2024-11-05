import React from 'react'
import Head from 'next/head'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Meta from '../components/meta'
import Layout from '../components/layout'
import theme from '../components/theme'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Geo:ital@0;1&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={theme => ({
              body: {
                fontFamily: theme.fonts.body,
                lineHeight: theme.lineHeights.body,
                fontWeight: theme.fontWeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                '*': {
                  boxSizing: 'border-box'
                }
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    )
  }
}
