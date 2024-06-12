import '@styles/globals.css'
import Nav from '@components/Nav'

export const metadata = {
    title: "Promptopia",
    description:"Discover and share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'  >
      <body>
        <div className='main'>
            <div className='gradient'/>

            <main className='app'>
              <Nav/>
                {children}
            </main>

        </div>
      </body>
    </html >
  )
}

export default RootLayout
// nav bar is going to be here
// its going to be present in all the pages