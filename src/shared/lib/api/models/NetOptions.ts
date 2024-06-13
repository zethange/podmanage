/* tslint:disable */
/* eslint-disable */
/**
 * supports a RESTful API for the Libpod library
 * This documentation describes the Podman v2.x+ RESTful API. It consists of a Docker-compatible API and a Libpod API providing support for Podman’s unique features such as pods.  To start the service and keep it running for 5,000 seconds (-t 0 runs forever):  podman system service -t 5000 &  You can then use cURL on the socket using requests documented below.  NOTE: if you install the package podman-docker, it will create a symbolic link for /run/docker.sock to /run/podman/podman.sock  NOTE: Some fields in the API response JSON are encoded as omitempty, which means that if said field has a zero value, they will not be encoded in the API response. This is a feature to help reduce the size of the JSON responses returned via the API.  NOTE: Due to the limitations of [go-swagger](https://github.com/go-swagger/go-swagger), some field values that have a complex type show up as null in the docs as well as in the API responses. This is because the zero value for the field type is null. The field description in the docs will state what type the field is expected to be for such cases.  See podman-system-service(1) for more information.  Quick Examples:  \'podman info\'  curl --unix-socket /run/podman/podman.sock http://d/v5.0.0/libpod/info  \'podman pull quay.io/containers/podman\'  curl -XPOST --unix-socket /run/podman/podman.sock -v \'http://d/v5.0.0/images/create?fromImage=quay.io%2Fcontainers%2Fpodman\'  \'podman list images\'  curl --unix-socket /run/podman/podman.sock -v \'http://d/v5.0.0/libpod/images/json\' | jq
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: podman@lists.podman.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PerNetworkOptions } from './PerNetworkOptions';
import {
    PerNetworkOptionsFromJSON,
    PerNetworkOptionsFromJSONTyped,
    PerNetworkOptionsToJSON,
} from './PerNetworkOptions';
import type { PortMapping } from './PortMapping';
import {
    PortMappingFromJSON,
    PortMappingFromJSONTyped,
    PortMappingToJSON,
} from './PortMapping';
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';

/**
 * NetOptions reflect the shared network options between
 * pods and containers
 * @export
 * @interface NetOptions
 */
export interface NetOptions {
    /**
     * 
     * @type {Array<string>}
     * @memberof NetOptions
     */
    dnsOption?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof NetOptions
     */
    dnsSearch?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof NetOptions
     */
    dnsServer?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof NetOptions
     */
    hostadd?: Array<string>;
    /**
     * 
     * @type {Namespace}
     * @memberof NetOptions
     */
    netns?: Namespace;
    /**
     * 
     * @type {Array<string>}
     * @memberof NetOptions
     */
    networkAlias?: Array<string>;
    /**
     * NetworkOptions are additional options for each network
     * @type {{ [key: string]: Array<string>; }}
     * @memberof NetOptions
     */
    networkOptions?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {{ [key: string]: PerNetworkOptions; }}
     * @memberof NetOptions
     */
    networks?: { [key: string]: PerNetworkOptions; };
    /**
     * 
     * @type {boolean}
     * @memberof NetOptions
     */
    noManageHosts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetOptions
     */
    noManageResolvConf?: boolean;
    /**
     * 
     * @type {Array<PortMapping>}
     * @memberof NetOptions
     */
    portmappings?: Array<PortMapping>;
}

/**
 * Check if a given object implements the NetOptions interface.
 */
export function instanceOfNetOptions(value: object): value is NetOptions {
    return true;
}

export function NetOptionsFromJSON(json: any): NetOptions {
    return NetOptionsFromJSONTyped(json, false);
}

export function NetOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'dnsOption': json['dns_option'] == null ? undefined : json['dns_option'],
        'dnsSearch': json['dns_search'] == null ? undefined : json['dns_search'],
        'dnsServer': json['dns_server'] == null ? undefined : json['dns_server'],
        'hostadd': json['hostadd'] == null ? undefined : json['hostadd'],
        'netns': json['netns'] == null ? undefined : NamespaceFromJSON(json['netns']),
        'networkAlias': json['network_alias'] == null ? undefined : json['network_alias'],
        'networkOptions': json['network_options'] == null ? undefined : json['network_options'],
        'networks': json['networks'] == null ? undefined : (mapValues(json['networks'], PerNetworkOptionsFromJSON)),
        'noManageHosts': json['no_manage_hosts'] == null ? undefined : json['no_manage_hosts'],
        'noManageResolvConf': json['no_manage_resolv_conf'] == null ? undefined : json['no_manage_resolv_conf'],
        'portmappings': json['portmappings'] == null ? undefined : ((json['portmappings'] as Array<any>).map(PortMappingFromJSON)),
    };
}

export function NetOptionsToJSON(value?: NetOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dns_option': value['dnsOption'],
        'dns_search': value['dnsSearch'],
        'dns_server': value['dnsServer'],
        'hostadd': value['hostadd'],
        'netns': NamespaceToJSON(value['netns']),
        'network_alias': value['networkAlias'],
        'network_options': value['networkOptions'],
        'networks': value['networks'] == null ? undefined : (mapValues(value['networks'], PerNetworkOptionsToJSON)),
        'no_manage_hosts': value['noManageHosts'],
        'no_manage_resolv_conf': value['noManageResolvConf'],
        'portmappings': value['portmappings'] == null ? undefined : ((value['portmappings'] as Array<any>).map(PortMappingToJSON)),
    };
}

