import { GameBanner, NFTCard } from "@/components/common/organisms";

import { MainLayout } from "@/components/main/MainLayout";

import { nfts, gunstarsGame } from "@/mocks";

const Home = () => {
  return (
    <MainLayout>
      <GameBanner {...gunstarsGame} backgroundImage={gunstarsGame.bannerImage} />

      <div style={{ padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>{/* TODO refactor */}
        <div style={{ width: '100%', borderBottom: '1px solid #1E1E23' }}/>

        <input style={{ height: '48px', padding: '12px 16px', borderRadius: '16px', border: '1px solid #1E1E23', backgroundColor: '#121216', color: '#525059' }} placeholder="Search"/> {/* TODO refactor */}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', maxWidth: '1440px', alignItems: 'center', justifyContent: 'center' }}> {/* TODO refactor */}
          {nfts.map(nft =>
            <NFTCard
              img={nft.img}
              title={nft.title}
              solPrice={nft.solPrice}
              brlPrice={nft.brlPrice}
            />
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default Home;
