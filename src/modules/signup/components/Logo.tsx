import React from 'react'
import { Image } from 'react-native'

type LogoProps = {
    src: string;
}
const Logo = (props: LogoProps) => {
    return (
        <>
            <Image source={require(props.src)} />
        </>
    )
}

export default Logo;