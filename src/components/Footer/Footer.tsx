import { LiaYoutube, LiaInstagram, LiaLinkedinIn, LiaPinterestP } from 'react-icons/lia'
import { dataFooter } from './Footer.data'
import Link from 'next/link'

export function Footer() {
    return (
        <div className='px-4 py-8 bg-black/90 md:py-40 md:px-36'>
            <div className='grid gap-8 grid-cols-2 md:grid-cols-4 text-white'>
                {dataFooter.map(({id, links}) => {
                    return (
                        <div key={id}>
                            {links.map(({id, name, link}) => {
                                return (
                                    <Link key={id} href={link} className='block mb-5'>{name}</Link>
                                )
                            })}
                        </div>
                    )
                })}
                <div className='md:text-right'>
                    <h4 className='mb-6 text-xl font-semibold'>BienesRaices</h4>
                    <p>Calle Camp Nou</p>
                    <p>Barcelona, España</p>
                    <div className='flex gap-4 mt-5 md:justify-end'>
                        <LiaInstagram className='text-3xl cursor-pointer' href='#' />
                        <LiaLinkedinIn className='text-3xl cursor-pointer' href='#' />
                        <LiaPinterestP className='text-3xl cursor-pointer' href='#' />
                        <LiaYoutube className='text-3xl cursor-pointer' href='#' />
                    </div>
                </div>

            </div>

        </div>
    )
}
