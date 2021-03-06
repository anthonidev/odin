import { ChevronDownIcon } from "@heroicons/react/solid"

const Sizes = ({
    sizes
}) => {
    return ( 
        <div className="flex my-2 items-center">
        
        <span className="mr-3 font-bold mt-2">Size</span>
        <div className="relative">

            <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                {
                    sizes.map(size => {
                        return (
                            <option key={size} >{size}</option>
                        )
                    })
                }
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <ChevronDownIcon className='w-4 h-4' />
            </span>
        </div>
    </div>
    )
}

export default Sizes