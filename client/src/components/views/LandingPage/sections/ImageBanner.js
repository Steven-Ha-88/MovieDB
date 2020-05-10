
import React from 'react'
import { Typography } from 'antd';
import { ImageWrapper } from './styles';

const { Title } = Typography;

function ImageBanner(props) {
    return (
        <ImageWrapper image={props.image}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }} >
                    <Title style={{ color: 'white' }} level={2} > {props.title} </Title>
                    <p style={{ color: 'white', fontSize: '1rem' }}  >{props.text} </p>
                </div>
            </div>
        </ImageWrapper>
    )
}

export default ImageBanner;