export default function Features() {
    const featuresItem = [
        {
            img: "/images/f5.svg",
            title: "Virtual Bot",
            description: "Chat With Anyone In The World as an virtual bot.",
        },
        {
            img: "/images/f6.svg",
            title: "Famous Chat",
            description: "Can Chat with companions like Elon Musk, Jeff, Or themselves too and also famous people.",
        },
        {
            img: "/images/f2.svg",
            starImg: "/images/star.svg",
            title: "Own Companion",
            description: "Create Your Very Own companion how ever users like and anyone can access it from around the world.",
        },
        {
            img: "/images/f3.svg",
            title: "Cheap Pricing",
            description:
            "Now so cheap, your pet goldfish will be jealous. Skip the therapist, grab an AI buddy. Level up your life without leveling up your bills. Get your AI companion now!",
        }
    ];
  
    return (
      <div id="features" className="bg-[url('/images/featuresBg.svg')] px-3 lg:px-32">
        <h1 className="text-4xl font-bold text-center py-28">Features</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10">
          {featuresItem.map((f, i) => (
            <div className="card rounded-3xl" key={i}>
              <div className="flex justify-center">
                <img src={f.img} alt="" />
              </div>
              <div className="">
                <h1 className="flex gap-3 items-center justify-center text-2xl font-bold">
                  {f.title}
                  <img src={f.starImg} alt="" />
                </h1>
                <p className="pt-6 text-base px-5 pb-11">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  