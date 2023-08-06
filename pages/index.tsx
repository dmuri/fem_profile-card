export default function Home() {
  return (
      <div className="flex justify-center items-center md:mt-72">
        <div className=" bg-white w-72 shadow-2xl rounded-xl overflow-hidden">
          {/*image top*/}
          <div className="relative flex justify-center h-32 bg-[url('../public/images/bg-pattern-card.svg')]">
            <img className="absolute bottom-[-40%] rounded-full border-4 border-white" src="/images/image-victor.jpg" alt="profile picture" />
          </div>

          {/* picture + name + place */}
          <div className="flex flex-col items-center mt-16 mb-6">
            <div className="flex items-center gap-2 ">
              <h1 className="font-bold text-lg">Victor Crest</h1>
              <p className="opacity-60 text-lg">26</p>
            </div>
            <p className="text-md opacity-60">London</p>
          </div>
          <hr/>
          <div className="flex justify-evenly py-4">
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">80K</p>
              <p className="opacity-60 text-sm">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">803K</p>
              <p className="opacity-60 text-sm">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-lg">1.4K</p>
              <p className="opacity-60 text-sm">Photos</p>
            </div>
          </div>

          <hr />
          {/* stats */}
          <div></div>


        </div>
      </div>
  )
}
