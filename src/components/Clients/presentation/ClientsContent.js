import React from "react";

import SonyLogo from "../../../images/client_logos/sony.png";
import CitibankLogo from "../../../images/client_logos/citibank.png";
import HpLogo from "../../../images/client_logos/hp.png";
import MicrosoftLogo from "../../../images/client_logos/microsoft.png";
import RaidersLogo from "../../../images/client_logos/raiders.png";
import NecLogo from "../../../images/client_logos/nec.png";
import FairmontLogo from "../../../images/client_logos/fairmont.png";
import PepsiLogo from "../../../images/client_logos/pepsi.png";
import MontereyAquariumLogo from "../../../images/client_logos/monterey-aquarium.png";
import UniversalLogo from "../../../images/client_logos/universal.png";
import WellsFargoLogo from "../../../images/client_logos/wellsfargo.png";
// import EtradeLogo from "../../../images/client_logos/etrade.png";
import NestleLogo from "../../../images/client_logos/nestle.png";

const clients = [SonyLogo, CitibankLogo, PepsiLogo, HpLogo, MicrosoftLogo,
    UniversalLogo, WellsFargoLogo, FairmontLogo, NestleLogo, MontereyAquariumLogo,
    RaidersLogo, NecLogo]

const clientLogoItems = clients.map((logo, i) =>
    <div key={i} data-uk-scrollspy={`cls: uk-animation-slide-bottom-medium; target: img; delay: ${i*100};`}>
        <img
            className="logo-img"
            src={logo}
            alt="client"
            data-uk-img
        />
    </div>
)

const ClientsContent = () =>
    <div className="client-grid uk-grid-small uk-child-width-1-3 uk-child-width-1-4@s uk-child-width-1-6@m
        uk-margin-remove-top uk-margin-medium-top@m uk-margin-large-bottom" data-uk-grid>
        {clientLogoItems}
    </div>

export default ClientsContent;
