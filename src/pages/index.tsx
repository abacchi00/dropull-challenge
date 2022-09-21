import { Input } from "@/components/common/atoms";
import { GameBanner, NFTCard } from "@/components/common/organisms";
import { MainLayout } from "@/components/main/MainLayout";

import { nfts, gunstarsGame } from "@/mocks";

const Home = () => {
  return (
    <MainLayout>
      <GameBanner {...gunstarsGame} backgroundImage={gunstarsGame.bannerImage} />

      <div style={{ padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>{/* TODO refactor */}
        <div style={{ width: '100%', borderBottom: '1px solid #1E1E23' }}/>

        <Input placeholder="Search" />

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
