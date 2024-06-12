// This is the homepage 
// localhost:3000

import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">

        <h1 className="head_text text-center">
            Discover and Share
            <br  />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompotopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </p>

        <Feed/>

    </section>
  )
}

export default Home
// semantic section tag 
// _ means our own styling within globals .css 

//flex col so that the items fall one below the other