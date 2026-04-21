'use client'

import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';
import { useState } from 'react';
import Image from 'next/image';

const IntegralAnimation = () => {

    const [isLoading, setIsLoading] = useState(true)

    const handlePlayerEvent = (event: PlayerEvents) => {
        if (event === PlayerEvents.Ready) {
            setIsLoading(false)
        }
    }

    return <div className='relative w-full md:w-[500px] md:h-[500px]'>
        {isLoading && <>
            {/* <Image src={'/integral-animation-loading-dark.png'} alt='' width={500} height={500} className='absolute hidden dark:block' /> */}
            <Image src={'/integral-animation-loading.png'} alt='' width={500} height={500} className='absolute' />
        </> }
        <DotLottiePlayer className='flex' src={'/integral-animation.lottie'} autoplay loop worker onEvent={handlePlayerEvent} />
        {/* <DotLottiePlayer className='hidden dark:flex' src={'/integral-animation-dark.lottie'} autoplay loop worker onEvent={handlePlayerEvent} /> */}
    </div>

}

export default IntegralAnimation;