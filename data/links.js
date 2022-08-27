const links = [
  {
    text: 'Get Started',
    url: '/getstarted'
  },
  {
    text: 'Features',
    url: '/features'
  },
  {
    text: 'Contact',
    url: '/contact'
  },
  /*
  {
    text: 'Blog',
    url: '/posts'
  },
  {
    text: 'SEO',
    url: '/seo'
  },*/
  {
    text: 'Clients',
    dropdown: true,
    urls: [
      {
        text: 'Martin Woodworks',
        url: 'https://www.martinwoodworksnc.com/'
      },
      {
        text: 'Surly Squirrel',
        url: 'https://surly-squirrel.com/'
      },
      {
        text: 'Hemp Generation',
        url: 'https://hempgeneration.com/'
      }
    ]
  },
]

export default  links