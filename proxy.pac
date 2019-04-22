function FindProxyForURL(url, host) {

    //cdeploybegin : do not remove this line, do not edit this part
    if (host == "agnesb.lxc") {return "PROXY P-ASN-Sheitane-ilbou.dhcp.idf.intranet:80";}
    if (host == "dior-ez.lxc") {return "PROXY P-ASN-Sheitane-ilbou.dhcp.idf.intranet:80";}
    if (host == "dior-magento.lxc") {return "PROXY P-ASN-Sheitane-ilbou.dhcp.idf.intranet:80";}
    //cdeployend : do not remove this line, you can edit now
    
    // Add custom configs here :

    // Default action 
    return "DIRECT";
}
