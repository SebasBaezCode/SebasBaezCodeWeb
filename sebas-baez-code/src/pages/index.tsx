import styles from './index-style/styles.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SebasBaezCode 2.0</title>
        <meta name="description" content="Sebas desc" />
      </Head>
      <main>
        <div className="h-screen min-h-[800px] bg-sb-mainBg p-5 text-white">
          <div className="h-full flex flex-col relative border rounded border-sb-mainGrey">
            <div className="p-5 border-b border-sb-mainGrey">
              <h1>@root {'>'} SebasBaezCode</h1>
            </div>

            <div className="h-full p-5 flex justify-center items-center text-center">
              <div className="profile-info max-w-[800px] border">
                <h1 className="text-8xl mb-[60px]">Sebastian Báez</h1>
                <h2 className="max-w-[600px] m-auto mb-[40px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem obcaecati
                  dolore fugit officia maiores quos reprehenderit cum eos praesentium. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Quaerat aliquam harum nemo eum atque
                  quo!
                </h2>
                <button className="min-w-[140psx] rounded-full p-3 pl-9 pr-9 border">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
