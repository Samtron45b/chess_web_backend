import React from 'react'

const Sidebar = () => {
    return(
        <div className='fixed top-0 left-0 h-screen w-1/6 m-0
                        flex flex-col font-semibold space-y-72
                        bg-primary-300 content-between'>
            <div className='flex'>
                <img src="./assets/logo.png" alt="" className='inline-block'/>
                <div className='flex'>
                    <p className='self-center'>CHESSPLUSS</p>
                </div>
            </div>

            <div className='flex'>
                <img src="./assets/classic.png" alt="" />
                <p className='self-center'>CLASSIC</p>
            </div>

            <div className='flex'>
                <img src="./assets/variants.png" alt="" />
                <p className='self-center'>VARIANTS</p>
            </div>

            <div>

            </div>

            <div>

            </div>
        </div>
    );
}

export default Sidebar;