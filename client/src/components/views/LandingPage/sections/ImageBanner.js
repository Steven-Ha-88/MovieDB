
import React from 'react'

import { ImageWrapper, Text } from './styles';

function ImageBanner(props) {
    return (
        <ImageWrapper image={props.image}>
            <div>
                <Text>
                    <h2 style={{ color: 'white' }} level={2} > {props.title} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}  >{props.text} </p>
                </Text>
            </div>
        </ImageWrapper>
    )
}

export default ImageBanner;