interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href="" className='relative rounded-lg'>
      <img src={props.bannerUrl} alt="" />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient 
absolute bottom-0 left-0'>
        <strong className='text-white font-bold block'>{props.title}</
        strong>
        <span className='text-zinc-300 block mt-1'>{props.adsCount}(s) Anuncios</span>
      </div>
    </a>
  )
}