import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import QRCode from 'qrcode.react';

let ButterQRCode = ({title, subtitle, settings, ...props}) => (
    <div>
        <h1>{title}</h1>
        {subtitle?<h2>{subtitle}</h2>:null}
        <QRCode value={JSON.stringify({
                ip: settings.ipAddress,
                port: settings.httpApiPort,
                user: settings.httpApiUsername,
                pass: settings.httpApiPassword
            })} />
    </div>
)

export default ButterQRCode


