import { Layout, Space, Divider, List, Row, Col, Button, Image } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const leftTitle = [
  "CEX",
  "Faucet",
  "Bridge",
  "Layer1",
  "Layer2",
  "Tools",
  "News",
  "AI/GPT",
];

const webButtonHandle=(props)=> {
  const w =window.open('_blank')
  w.location.href = props.link
}

const WebButton = (props) => {
  return (<div>
    {/* <Image src={props.image}></Image> */}
   {/* <Button onClick={ ()=>webButtonHandle(props) }>{props.name}</Button> */}
    <Image preview={false} src={props.image} alt={props.alt}  onClick={ ()=>webButtonHandle(props)}/>
  </div>)
}

const TitleButton = (props) => {
  return (<div>
    <Button onClick={ ()=>webButtonHandle(props) }>{props.name}</Button> 
  </div>)}

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 880,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const MyLayout = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Sider style={siderStyle}>
      <Divider orientation="left">BitAir</Divider>
    <List
      size="large"
      dataSource={leftTitle}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
      </Sider>
      <Layout>
        <Header style={headerStyle}></Header>
        <Content style={contentStyle}>
          <Divider orientation="left">CEX中心化交易所</Divider>
          <Row justify="space-evenly">
            <Col span={4}>
              <WebButton image="https://rich01.com/wp-content/uploads/20201118154815_79.png" link='https://accounts.binance.com/register?ref=139452375' alt='Binance'></WebButton>
            </Col>
            <Col span={4}>
              <WebButton image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAABICAQAAADSOpYzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfmBwMNKhI4Vg/yAAABMklEQVR42u3aQW6DMBBAUZyT5eSFE/RInS5psOKx8Scq0n9ZNXjA+VE3VpZFkiRJkiShYo0rrYPPWyf3+3VYXZL138nTuudLxLVfVCmHrcXY+uqjteejPF7/XH5G1teXe+ebt1E/Q0IMCTEkxJAQQ0IMCTEkxJAQQ0IMCTEkxJCQ+4XcBq+Orj87n54oPlv3iWc2Xk3A55tzZs8rd+l55OT54PB5ZLrhMjd/2M3keeXufv/a/5QhIYaEGBJiSIghIYaEGBJiSIghIYaEGBJiSEgaMjtG+/B+tw/f8eVqlPq1X7xYlX5wfTXfPj/095Hv1tdfRPLJ/X3kvRkSYkiIISGGhBgSYkiIISGGhBgSYkiIISGGhDwuOOH7a+t4p//qmflticYrf946OS9JkiRJkk75BUgSur6QrNyYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA3LTAzVDEzOjQyOjE4KzAwOjAwKpbwNQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNy0wM1QxMzo0MjoxOCswMDowMFvLSIkAAAAASUVORK5CYII=" link='https://okx.com/join/8180421' alt='OKEX'></WebButton>
            </Col>
            <Col span={4}>
              <WebButton image="https://www.gateio.club/images/logo/open_sesame_night.png?v=4" link='https://www.gate.ac/signup/VFVEBlkM' alt='Gate' ></WebButton>
              </Col>
            <Col span={4}>
              <WebButton image="https://www.mexc.com/images/full-logo-dark-ko.svg" link='https://www.mexc.com/register?inviteCode=1cyRZ' alt='MEXC' ></WebButton>
            </Col>
            <Col span={4}>
              <WebButton image="https://bitget.zendesk.com/hc/article_attachments/4407744446221/mceclip1.png" link='https://www.bitget.com/' alt='Bitget'></WebButton>
            </Col>
          </Row>
          <Divider orientation="left">Faucet水龙头</Divider>
          <Row justify="space-evenly">
          <Col span={4}>
              <TitleButton name='Goerlifaucet' link='https://goerlifaucet.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Sepoliafaucet' link='https://sepoliafaucet.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Infurafaucet' link='https://www.infura.io/faucet/sepolia/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Paradigm' link='https://faucet.paradigm.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Quicknode' link='https://faucets.quicknode.com/ethereum/goerli'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='chain.link' link='https://faucets.chain.link'></TitleButton>
            </Col>
            <Col span={4}>
               <TitleButton name='Faucetlink' link='https://faucetlink.to/'></TitleButton>
            </Col>
            <Col span={4}>             
              <TitleButton name='Linea' link='https://faucet.goerli.linea.build/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Polygon' link='https://faucet.polygon.technology/'></TitleButton>
            </Col>
            <Col span={4}>         
              <TitleButton name='AVAX' link='https://faucet.avax.network'></TitleButton>
            </Col>
            <Col span={4}>            
              <TitleButton name='BNB' link='https://testnet.bnbchain.org/faucet-smart'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Sei' link='https://sei.faucetme.pro/'></TitleButton>
            </Col>
          </Row>
          <Divider orientation="left">Bridge跨链桥</Divider>
          <Row justify="space-evenly">
            <Col span={4}>
              <TitleButton name='Orbiter' link='https://www.orbiter.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Stargate' link='https://stargate.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Hop' link='https://hop.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Bungee' link='https://www.bungee.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Connext' link='https://www.connext.network/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Li.Fi' link='https://li.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='zkSync' link='https://bridge.zksync.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Starknet' link='https://starkgate.starknet.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Arbitrum' link='https://bridge.arbitrum.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Optimism' link= 'https://app.optimism.io/bridge'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Liquidswap' link='https://bridge.liquidswap.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Multichain' link='https://multichain.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Celer' link='https://cbridge.celer.network/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Synapse' link='https://synapseprotocol.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Rubic' link='https://rubic.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Via' link='https://router.via.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Across' link='https://across.to/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='deBridge' link='https://debridge.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Layerswap' link='https://www.layerswap.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Wormwhole' link='https://www.portalbridge.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Satellite' link='https://satellite.money/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Carrier' link='https://www.carrier.so/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Meson.fi' link='https://meson.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='BoringDao' link='https://www.boringdao.com/'></TitleButton>
            </Col>
          </Row>
          <Divider orientation="left">Layer1主网</Divider>
          <Row justify="space-evenly">
            <Col span={4}>
              <TitleButton name='Uniswap' link='https://uniswap.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='1inch' link='https://1inch.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Sushi' link='https://www.sushi.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='AAVE' link='https://aave.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Curve' link='https://curve.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Lido' link='https://lido.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Rocketpool' link='https://rocketpool.net/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Compound' link='https://compound.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Balancer' link='https://balancer.fi/'></TitleButton>
            </Col>
            
            <Col span={4}>
              <TitleButton name='Balancer' link='https://dydx.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
               <TitleButton name='Perennial' link='https://perennial.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Mav' link='https://www.mav.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Opyn' link='https://www.opyn.co/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Defisaver' link='https://app.defisaver.com/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Slingshot' link='https://slingshot.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Symbiosis' link='https://symbiosis.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Kyberswap' link='https://kyberswap.com/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Arrakis' link='https://www.arrakis.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Frax' link='https://frax.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Instadapp' link='https://instadapp.io/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Liquity' link='https://www.liquity.org/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Yearn' link='https://yearn.finance/'></TitleButton>
            </Col>   
            <Col span={4}>
                <TitleButton name='Morpho' link='https://www.morpho.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Voltz' link='https://www.voltz.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Gamma' link='https://www.gamma.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Woofi' link='https://fi.woo.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Hashflow' link='https://www.hashflow.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='DoDo' link='https://dodoex.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Qidao' link='https://app.mai.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Saddle' link='https://www.saddle.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Ribbon' link='https://www.ribbon.finance/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Beefy' link='https://beefy.com/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Aztec' link='https://aztec.network/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Element' link='https://www.element.fi/ '></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Sudoswap' link='https://sudoswap.xyz/#/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Paraswap' link='https://www.paraswap.io/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Makerdao' link='https://makerdao.com/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Bebop' link='https://bebop.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='bprotocol' link='https://www.bprotocol.org/'></TitleButton>
            </Col>
            <Col span={4}>
                <TitleButton name='Angle' link='https://www.angle.money/#/'></TitleButton>
            </Col>  
            <Col span={4}>
                <TitleButton name='0x' link='https://0x.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='iZUMi' link='https://izumi.finance/home'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='ODOS' link='https://www.odos.xyz/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='OpenOcean' link='https://openocean.finance/'></TitleButton>
            </Col>  
            <Col span={4}>
              <TitleButton name='Mean' link='https://mean.finance/'></TitleButton>
            </Col>  
            <Col span={4}>
              <TitleButton name='Matcha' link='https://www.matcha.xyz/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='SAFE' link='https://safe.global/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Dex.guru' link='https://dex.guru/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Sense' link='https://sense.finance/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Yield' link='https://yieldprotocol.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='GearBox' link='https://gearbox.fi/'></TitleButton>
            </Col>  
            <Col span={4}>
              <TitleButton name='Umbra' link='https://www.umbra.cash/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Hats' link='https://hats.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Deri' link='https://deri.io/#/index'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Solv' link='https://solv.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='FujiDao' link='https://www.fujidao.org/#/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='EigenLayer' link='https://www.eigenlayer.xyz/'></TitleButton>
            </Col>
          </Row> 
          <Divider orientation="left">Layer2二层</Divider>
          <Row justify="space-evenly">
            <Col span={4}>
                <TitleButton name='Camelot' link='https://app.camelot.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='GMX' link='https://gmx.io/#/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Radiant' link='https://radiant.capital/#/markets'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Wombat' link='https://www.wombat.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Rage' link='https://www.rage.trade/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Sentiment' link='https://www.sentiment.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Dopex' link='https://www.dopex.io//'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Lyra' link='https://www.lyra.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Aboard' link='https://aboard.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Vela' link='https://www.vela.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Treasure' link='https://treasure.lol/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Chronos' link='https://app.chronos.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Jonesdao' link='https://www.jonesdao.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Tradejoe' link='https://traderjoexyz.com/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Shell' link='https://shellprotocol.io'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Convex' link='https://www.convexfinance.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Velodrome' link='https://app.velodrome.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Synthetix' link='https://synthetix.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Pooltogether' link='https://pooltogether.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Perp' link='https://app.perp.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Polynomial' link='https://polynomial.fi'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='dHedge' link=' https://www.dhedge.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='beethoven' link=' https://beets.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Zigzag' link='https://trade.zigzag.exchange/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Mute.io' link='https://mute.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='SyncSwap' link='https://syncswap.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Mintsquare' link='https://mintsquare.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Aspect' link='https://aspect.co/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Jediswap' link='https://www.jediswap.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='10kswap' link='https://10kswap.com/swap'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Myswap' link='https://www.myswap.xyz/'></TitleButton>
            </Col>
            <Col span={4}>     
              <TitleButton name='Nexon' link='https://www.nexon.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Thales' link='https://thalesmarket.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Nostra' link='https://nostra.finance/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='StarknetID' link='https://www.starknet.id/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='ZNS' link='https://zns.is/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Zkex' link='https://zkex.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Brahma' link='https://www.brahma.fi/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Synfutures' link='https://www.synfutures.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Tofunft' link='https://tofunft.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Timeswap' link='https://timeswap.io/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Polyhedra' link='https://polyhedra.network/'></TitleButton>
            </Col>  
        
            <Col span={4}>
              <TitleButton name='BASE' link='https://base.org/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Linea' link='https://linea.build/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='AltLayer' link='http://www.altlayer.io'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Scroll' link='https://scroll.io'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Fuel' link='https://www.fuel.network'></TitleButton>
            </Col>

          </Row>
          <Divider orientation="left">Tools工具</Divider>
          <Row justify="space-evenly">
          <Col span={4}>
              <TitleButton name='Etherscan' link='https://etherscan.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Lens' link='https://lens.xyz'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Galxe' link='https://galxe.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Zerion' link='https://zerion.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Debank' link='https://debank.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Dune' link=' https://dune.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Coinmarketcap' link='https://coinmarketcap.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='CoinGecko' link='https://www.coingecko.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='DappRadar' link='https://dappradar.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Chaineye' link='https://chaineye.tools/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Zapper' link='https://zapper.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Gitcoin' link='https://www.gitcoin.co/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Nansen' link='https://www.nansen.ai/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Rabbithole' link='https://rabbithole.gg'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Defilama' link='https://defillama.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Alchemy' link='https://www.alchemy.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Infura' link='https://www.infura.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Hashex' link='https://abi.hashex.org/'></TitleButton>
            </Col>
          <Col span={4}>
              <TitleButton name='Revoke' link='https://revoke.cash/'></TitleButton>
          </Col>
          <Col span={4}>
              <TitleButton name='Dexscreener' link='https://dexscreener.com/'></TitleButton>
          </Col>
          <Col span={4}>
              <TitleButton name='Mail3.me' link='https://mail3.me'></TitleButton>
          </Col>
          <Col span={4}>
              <TitleButton name='Dmail.ai' link='https://dmail.ai/'></TitleButton>
          </Col>
          <Col span={4}>
              <TitleButton name='EtherMail' link='https://ethermail.io/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='ENS' link='https://ens.domains/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Unstoppable' link='https://unstoppabledomains.com/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Did.id' link='https://www.did.id/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Space.id' link='https://space.id/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Degenscore' link='https://degenscore.com/cafe'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Thirdweb' link='https://thirdweb.com/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Buildspace' link='https://buildspace.so/'></TitleButton>
          </Col> 
          <Col span={4}>
            <TitleButton name='WTF.academy' link='https://www.wtf.academy'></TitleButton>
          </Col> 
          <Col span={4}>
            <TitleButton name='Guild' link='https://guild.xyz/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Layer3' link='https://layer3.xyz/'></TitleButton>
          </Col>
          <Col span={4}>
            <TitleButton name='Cyberconnect' link='https://cyberconnect.me'></TitleButton>
          </Col>
          <Col span={4}>
              <TitleButton name='Zealy' link='https://zealy.io'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='QuestN' link='https://questn.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='4everland' link='https://4everland.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Snapshot' link='https://snapshot.org/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Tally' link='https://www.tally.xyz/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='MASK' link='https://mask.io/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='RSS3' link='https://rss3.io/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Collab' link='https://www.collab.land/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Taho' link='https://taho.xyz/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='DayLight' link='https://www.daylight.xyz/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='SpaceandTime' link='https://www.spaceandtime.io/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='GeckoTerminal' link='https://geckoterminal.com/'></TitleButton>
            </Col> 
            
          </Row>
          <Divider orientation="left">News新闻</Divider>
          <Row justify="space-evenly">
          <Col span={4}>
              <TitleButton name='Odaily' link='https://www.odaily.news/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Panews' link='https://www.panewslab.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Foresightnews' link='https://foresightnews.pro/'></TitleButton>
            </Col>  
            <Col span={4}>
              <TitleButton name='Decrypt.co' link='https://decrypt.co/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='登链社区' link='https://learnblockchain.cn/'></TitleButton>
            </Col>
    
          </Row>
          <Divider orientation="left">GPT智能助手</Divider>
          <Row justify="space-evenly">
        
          <Col span={4}>
              <TitleButton name='ChatGPT' link='https://chat.openai.com/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Midjourney' link='https://www.midjourney.com/'></TitleButton>
            </Col> 
            <Col span={4}>
              <TitleButton name='Dreamstudio' link='https://beta.dreamstudio.ai/'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Ora.ai' link='https://ora.ai/'></TitleButton>
            </Col>
            <Col span={4}>       
              <TitleButton name='Huggingface' link='https://huggingface.co'></TitleButton>
            </Col>
            <Col span={4}>
              <TitleButton name='Forefront' link='https://chat.forefront.ai'></TitleButton>
            </Col>
          </Row>
          
        </Content>
        <Footer style={footerStyle}>Built with ❤️ by meta66.eth </Footer>
      </Layout>
    </Layout> 
  </Space>
);

export default MyLayout;
// https://www.tokensets.com/ 
//   //  //  //https://www.futureswap.com/ 
//
