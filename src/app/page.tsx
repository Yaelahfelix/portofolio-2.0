import dynamic from "next/dynamic";
const Main = dynamic(() => import("@/ui/Section/Main"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className='z-50 fixed top-0 w-full bg-yellow-300 text-yellow-700 text-center'>Website is under construction!</div>
      <Main />
    </>
  )
}
