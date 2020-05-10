import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '200px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', backgroundColor:"#7aa1be"
        }}>
           <p> Happy Coding  <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
