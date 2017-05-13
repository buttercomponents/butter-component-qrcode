import React, { Component } from 'react';
import { translate } from 'react-i18next';
import style from './style.styl';

import QRCode from 'qrcode.react';

let ButterQRCode = ({title, subtitle, settings, ...props}) => (
    <div>
        <QRCode value={JSON.stringify({
                ip: settings.ipAddress,
                port: settings.httpApiPort,
                user: settings.httpApiUsername,
                pass: settings.httpApiPassword
            })} />
    </div>
)

export default ButterQRCode
