import React from "react";

import SonyLogo from '../../images/client_logos/sony.png';
import CitibankLogo from '../../images/client_logos/citibank.png';
import HpLogo from '../../images/client_logos/hp.png';
import MicrosoftLogo from '../../images/client_logos/microsoft.png';
import OreoLogo from '../../images/client_logos/oreo.png';
import RaidersLogo from '../../images/client_logos/raiders.png';
import NecLogo from '../../images/client_logos/nec.png';
import FairmontLogo from '../../images/client_logos/fairmont.png';
import PepsiLogo from '../../images/client_logos/pepsi.png';
import SiaLogo from '../../images/client_logos/sia.png';
import CadburyLogo from '../../images/client_logos/cadbury.png';
import MontereyAquariumLogo from '../../images/client_logos/monterey-aquarium.png';
import LfcLogo from '../../images/client_logos/lfc.png';
import ScbLogo from '../../images/client_logos/standard-chartered.png';
import UniversalLogo from '../../images/client_logos/universal.png';

const clients = [SonyLogo, CitibankLogo, MontereyAquariumLogo, HpLogo,
    MicrosoftLogo, UniversalLogo, RaidersLogo,
    FairmontLogo, NecLogo, PepsiLogo,
    SiaLogo, OreoLogo, ScbLogo, CadburyLogo, LfcLogo]

const clientLogoItems = clients.map((logo, i) =>
    <div key={i} data-uk-scrollspy={`cls: uk-animation-slide-bottom; target: .logo-img; delay: ${50 * i+10}; repeat: true;`}>
        <img
            className="logo-img"
            src={logo}
            alt="client"
            data-uk-img
        />
    </div>
)

const ClientsContent = () =>
    <div className="client-grid uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-child-width-1-5@m
        uk-margin-remove-top uk-margin-medium-top@m uk-margin-large-bottom" data-uk-grid>
        {clientLogoItems}
    </div>

export default ClientsContent;
