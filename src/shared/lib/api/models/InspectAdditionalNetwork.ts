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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * InspectAdditionalNetwork holds information about non-default networks the
 * container has been connected to.
 * As with InspectNetworkSettings, many fields are unused and maintained only
 * for compatibility with Docker.
 * @export
 * @interface InspectAdditionalNetwork
 */
export interface InspectAdditionalNetwork {
    /**
     * AdditionalMacAddresses is a set of additional MAC Addresses beyond
     * the first. CNI may configure more than one interface for a single
     * network, which can cause this.
     * @type {Array<string>}
     * @memberof InspectAdditionalNetwork
     */
    additionalMACAddresses?: Array<string>;
    /**
     * Aliases are any network aliases the container has in this network.
     * @type {Array<string>}
     * @memberof InspectAdditionalNetwork
     */
    aliases?: Array<string>;
    /**
     * DriverOpts is presently unused and maintained exclusively for
     * compatibility.
     * @type {{ [key: string]: string; }}
     * @memberof InspectAdditionalNetwork
     */
    driverOpts?: { [key: string]: string; };
    /**
     * EndpointID is unused, maintained exclusively for compatibility.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    endpointID?: string;
    /**
     * Gateway is the IP address of the gateway this network will use.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    gateway?: string;
    /**
     * GlobalIPv6Address is the global-scope IPv6 Address for this network.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    globalIPv6Address?: string;
    /**
     * GlobalIPv6PrefixLen is the length of the subnet mask of this network.
     * @type {number}
     * @memberof InspectAdditionalNetwork
     */
    globalIPv6PrefixLen?: number;
    /**
     * IPAMConfig is presently unused and maintained exclusively for
     * compatibility.
     * @type {{ [key: string]: string; }}
     * @memberof InspectAdditionalNetwork
     */
    iPAMConfig?: { [key: string]: string; };
    /**
     * IPAddress is the IP address for this network.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    iPAddress?: string;
    /**
     * IPPrefixLen is the length of the subnet mask of this network.
     * @type {number}
     * @memberof InspectAdditionalNetwork
     */
    iPPrefixLen?: number;
    /**
     * IPv6Gateway is the IPv6 gateway this network will use.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    iPv6Gateway?: string;
    /**
     * Links is presently unused and maintained exclusively for
     * compatibility.
     * @type {Array<string>}
     * @memberof InspectAdditionalNetwork
     */
    links?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    macAddress?: string;
    /**
     * Name of the network we're connecting to.
     * @type {string}
     * @memberof InspectAdditionalNetwork
     */
    networkID?: string;
    /**
     * SecondaryIPAddresses is a list of extra IP Addresses that the
     * container has been assigned in this network.
     * @type {Array<Address>}
     * @memberof InspectAdditionalNetwork
     */
    secondaryIPAddresses?: Array<Address>;
    /**
     * SecondaryIPv6Addresses is a list of extra IPv6 Addresses that the
     * container has been assigned in this network.
     * @type {Array<Address>}
     * @memberof InspectAdditionalNetwork
     */
    secondaryIPv6Addresses?: Array<Address>;
}

/**
 * Check if a given object implements the InspectAdditionalNetwork interface.
 */
export function instanceOfInspectAdditionalNetwork(value: object): value is InspectAdditionalNetwork {
    return true;
}

export function InspectAdditionalNetworkFromJSON(json: any): InspectAdditionalNetwork {
    return InspectAdditionalNetworkFromJSONTyped(json, false);
}

export function InspectAdditionalNetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectAdditionalNetwork {
    if (json == null) {
        return json;
    }
    return {
        
        'additionalMACAddresses': json['AdditionalMACAddresses'] == null ? undefined : json['AdditionalMACAddresses'],
        'aliases': json['Aliases'] == null ? undefined : json['Aliases'],
        'driverOpts': json['DriverOpts'] == null ? undefined : json['DriverOpts'],
        'endpointID': json['EndpointID'] == null ? undefined : json['EndpointID'],
        'gateway': json['Gateway'] == null ? undefined : json['Gateway'],
        'globalIPv6Address': json['GlobalIPv6Address'] == null ? undefined : json['GlobalIPv6Address'],
        'globalIPv6PrefixLen': json['GlobalIPv6PrefixLen'] == null ? undefined : json['GlobalIPv6PrefixLen'],
        'iPAMConfig': json['IPAMConfig'] == null ? undefined : json['IPAMConfig'],
        'iPAddress': json['IPAddress'] == null ? undefined : json['IPAddress'],
        'iPPrefixLen': json['IPPrefixLen'] == null ? undefined : json['IPPrefixLen'],
        'iPv6Gateway': json['IPv6Gateway'] == null ? undefined : json['IPv6Gateway'],
        'links': json['Links'] == null ? undefined : json['Links'],
        'macAddress': json['MacAddress'] == null ? undefined : json['MacAddress'],
        'networkID': json['NetworkID'] == null ? undefined : json['NetworkID'],
        'secondaryIPAddresses': json['SecondaryIPAddresses'] == null ? undefined : ((json['SecondaryIPAddresses'] as Array<any>).map(AddressFromJSON)),
        'secondaryIPv6Addresses': json['SecondaryIPv6Addresses'] == null ? undefined : ((json['SecondaryIPv6Addresses'] as Array<any>).map(AddressFromJSON)),
    };
}

export function InspectAdditionalNetworkToJSON(value?: InspectAdditionalNetwork | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'AdditionalMACAddresses': value['additionalMACAddresses'],
        'Aliases': value['aliases'],
        'DriverOpts': value['driverOpts'],
        'EndpointID': value['endpointID'],
        'Gateway': value['gateway'],
        'GlobalIPv6Address': value['globalIPv6Address'],
        'GlobalIPv6PrefixLen': value['globalIPv6PrefixLen'],
        'IPAMConfig': value['iPAMConfig'],
        'IPAddress': value['iPAddress'],
        'IPPrefixLen': value['iPPrefixLen'],
        'IPv6Gateway': value['iPv6Gateway'],
        'Links': value['links'],
        'MacAddress': value['macAddress'],
        'NetworkID': value['networkID'],
        'SecondaryIPAddresses': value['secondaryIPAddresses'] == null ? undefined : ((value['secondaryIPAddresses'] as Array<any>).map(AddressToJSON)),
        'SecondaryIPv6Addresses': value['secondaryIPv6Addresses'] == null ? undefined : ((value['secondaryIPv6Addresses'] as Array<any>).map(AddressToJSON)),
    };
}
