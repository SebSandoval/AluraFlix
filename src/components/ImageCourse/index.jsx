export default function ImageCourse ({ src, alt, category }) {

    let className = ''
    if (category === 'BackEnd') {
        className = 'border-green-500 from-green-500 via-green-300 to-green-500'
    } else if (category === 'FrontEnd') {
        className = 'border-blue-500 from-blue-500 via-blue-300 to-blue-500'
    } else if (category === 'InnovationAndManagement') {
        className = 'border-yellow-500 from-yellow-500 via-yellow-300 to-yellow-500'
    }

    return (
        <div className={` ${className} relative rounded-lg border-2  p-1 bg-gradient-to-r  shadow-lg`}>
            <img className="w-96 object-cover" src={src} alt={alt} />
        </div>
    )
}
