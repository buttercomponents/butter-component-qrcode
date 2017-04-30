import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import QRCode from 'qrcode.react';

let ButterQRCode = ({title, subtitle, value, ...props}) => (
    <div>
        <h1>{title}</h1>
        {subtitle?<h2>{subtitle}</h2>:null}
        <QRCode value={JSON.stringify(value)} />
    </div>
)

export default ButterQRCode


