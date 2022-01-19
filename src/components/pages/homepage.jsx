import home from './../../home.png'

const homepage = () => {
    return  (
                    <div className="container mx-auto">
                         <div className='flex justify-center py-8' style={{background:"#f5f5f5"}}>
                             <img className='w-28 h-7' src={home} />
                         </div>
                    </div>
            )
}

export default homepage