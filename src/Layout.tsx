import React from 'react'
import { useSelector } from 'react-redux'
import { store, RootState } from './store/store'
interface LayoutProps {
    children: React.ReactNode
}



const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    const saves =  useSelector((state : RootState) =>  state.likes.movies)
    return (
        <div className='bg-black text-white'>
            <div className="navbar p-6  flex items-center justify-between border-b border-white  border-opacity-20 sticky top-0 z-20 bg-black">
                <span className='text-xl  text-green-400 '>Yts</span>
                <button className='border p-3  rounded-xl border-white border-opacity-30'>Saved {saves.length}</button>
            </div>
            {props.children}
        </div>
    )
}



export default Layout