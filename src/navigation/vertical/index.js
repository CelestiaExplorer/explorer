import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: '/logo.png',
    })
  }
  // chainMenus.push({ header: 'sponsors' })
  // chainMenus.push({
  //   title: 'Becole',
  //   href: 'https://becole.com',
  //   logo: 'https://becole.com/static/logo/logo_becole.png',
  // })
  // chainMenus.push({
  //   title: 'Osmosis',
  //   href: 'https://app.osmosis.zone',
  //   logo: 'https://ping.pub/logos/osmosis.jpg',
  // })
  chainMenus.push({ header: 'links' })
  // if (isTestnet()) {
  //   chainMenus.push({
  //     title: 'Mainnet Explorer',
  //     href: 'https://ping.pub',
  //     icon: 'ChromeIcon',
  //   })
  // } else {
  //   chainMenus.push({
  //     title: 'Testnet Explorer',
  //     href: 'http://testnet.ping.pub',
  //     icon: 'LifeBuoyIcon',
  //   })
  // }
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/BeaconChain',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'FAQ',
    href: 'https://github.com/CelestiaExplorer/explorer/discussions',
    icon: 'MessageSquareIcon',
  })
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/CelestiaExplorer/explorer',
    icon: 'GithubIcon',
  })

  return chainMenus
}

export default processMenu()
