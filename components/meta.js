import Head from 'next/head'

export default ({
  title = 'AngelHacks – Dedicated to giving back!',
  description = 'A 12-hour hackathon for middle and high schoolers in Los Angeles.',
  image = 'https://angelhacks.org/public/banner-inverted.png',
  url = 'https://angelhacks.org'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Newark Counterspll" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Newark Counterspell',
          url: 'https://NewarkCounterspell.org',
          logo: 'https://NewarkCounterspell.org/logo_inverted.png',
          sameAs: [
            'https://twitter.com/angelhacks_la',
            'https://www.instagram.com/angelhacks.la',
            'https://www.facebook.com/angelhacks_la'
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'cspellnewark@gmail.com',
              contactType: 'support',
              url: 'https://NewarkCounterspell.org'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'NewarkCounterspell',
          startDate: '2024-11-23T9:00',
          endDate: '2024-11-24T21:00',
          description:
            'Register today for 12 hours of coding, fun, free food, and prizes. Newark Counterspell will be on November 1, 2024 and open to all middle and high school students.',
          isAccessibleForFree: true,
          url: 'https://NewarkCounterspell.org',
          image: 'https://angelhacks.org/public/logo-inverted.png',
          location: {
            '@type': 'Place',
            name: 'Newark Star Labs',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'San Jose',
              addressRegion: 'CA',
              postalCode: '90291',
              streetAddress: '606 Venice Blvd., Venice 90291'
            }
          },
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://NewarkCounterspell.org',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2024-11-0',
            validThrough: '2024-11-24'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'Newark Counterspell Team'
          }
        })
      }}
    />
  </Head>
)
