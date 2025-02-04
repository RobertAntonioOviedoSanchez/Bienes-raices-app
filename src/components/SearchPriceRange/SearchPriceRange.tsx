import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div onClick={() => setIsOpen(!isOpen)} className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'>
                    <GrTag />
        
                    <div>
                        <p>Rango de precio</p>
                        <p className='text-xs'>Selecciona tu rango de precio</p>
                    </div>
                    {isOpen ? (
                        <GrFormUp />
                    ) : (
                        <GrFormDown />
                    )}
        
                    {isOpen && (
                        <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
                            <p>Cualquier rango</p>
                            <p>500 - 1000</p>
                            <p>1.000 - 2.000</p>
                            <p>2.000 - en adelante</p>
                            
                        </div>
                    )}
                </div>
    )
}
