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
/**
 * NetworkConnectOptions describes options for connecting
 * a container to a network
 * @export
 * @interface NetworkConnectOptions
 */
export interface NetworkConnectOptions {
    /**
     * Aliases contains a list of names which the dns server should resolve
     * to this container. Should only be set when DNSEnabled is true on the Network.
     * If aliases are set but there is no dns support for this network the
     * network interface implementation should ignore this and NOT error.
     * Optional.
     * @type {Array<string>}
     * @memberof NetworkConnectOptions
     */
    aliases?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NetworkConnectOptions
     */
    container?: string;
    /**
     * InterfaceName for this container. Required in the backend.
     * Optional in the frontend. Will be filled with ethX (where X is a integer) when empty.
     * @type {string}
     * @memberof NetworkConnectOptions
     */
    interfaceName?: string;
    /**
     * StaticIPs for this container. Optional.
     * @type {Array<string>}
     * @memberof NetworkConnectOptions
     */
    staticIps?: Array<string>;
    /**
     * StaticMac for this container. Optional.
     * @type {string}
     * @memberof NetworkConnectOptions
     */
    staticMac?: string;
}

/**
 * Check if a given object implements the NetworkConnectOptions interface.
 */
export function instanceOfNetworkConnectOptions(value: object): value is NetworkConnectOptions {
    return true;
}

export function NetworkConnectOptionsFromJSON(json: any): NetworkConnectOptions {
    return NetworkConnectOptionsFromJSONTyped(json, false);
}

export function NetworkConnectOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkConnectOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'aliases': json['aliases'] == null ? undefined : json['aliases'],
        'container': json['container'] == null ? undefined : json['container'],
        'interfaceName': json['interface_name'] == null ? undefined : json['interface_name'],
        'staticIps': json['static_ips'] == null ? undefined : json['static_ips'],
        'staticMac': json['static_mac'] == null ? undefined : json['static_mac'],
    };
}

export function NetworkConnectOptionsToJSON(value?: NetworkConnectOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'aliases': value['aliases'],
        'container': value['container'],
        'interface_name': value['interfaceName'],
        'static_ips': value['staticIps'],
        'static_mac': value['staticMac'],
    };
}

