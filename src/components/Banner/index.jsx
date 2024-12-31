import { Link } from "react-router-dom"
import Button from "../Button"
import ImageCourse from "../ImageCourse"


export const Banner = () => {
    return (
        <section className="bg-[url('/src/assets/fondobanner.png')] bg-cover bg-center h-[600px] flex items-center justify-center bg-[#0a0e45] opacity-95">
            <div className=" container mx-auto flex flex-col md:flex-row px-4 md:px-0 items-center gap-5 justify-between">
                <div className="text-white w-full md:w-1/2">
                    <Button href="#FrontEnd" className={'text-4xl bg-blue-400'}> Front End</Button>

                    <h1 className="text-3xl font-semibold mt-6">React Challenge</h1>

                    <p className="mt-3">This challenge is a way of learning. It is a mechanism where you can commit to solving a problem to apply all the knowledge acquired in React training.</p>
                </div>
                <Link to="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="_blank" rel="noreferrer">
                    <ImageCourse src={'https://ik.imagekit.io/noj6wnuqy/AluraFLix/tr:f-webp/video.2d556f83d1075ca96dc0.png?updatedAt=1683685012733'} alt={'Banner'} category={'FrontEnd'} />
                </Link>
            </div>
        </section>
    )
}
