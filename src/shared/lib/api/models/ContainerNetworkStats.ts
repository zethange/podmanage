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
 * Statistics for an individual container network interface
 * @export
 * @interface ContainerNetworkStats
 */
export interface ContainerNetworkStats {
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    rxBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    rxDropped?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    rxErrors?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    rxPackets?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    txBytes?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    txDropped?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    txErrors?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerNetworkStats
     */
    txPackets?: number;
}

/**
 * Check if a given object implements the ContainerNetworkStats interface.
 */
export function instanceOfContainerNetworkStats(value: object): value is ContainerNetworkStats {
    return true;
}

export function ContainerNetworkStatsFromJSON(json: any): ContainerNetworkStats {
    return ContainerNetworkStatsFromJSONTyped(json, false);
}

export function ContainerNetworkStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerNetworkStats {
    if (json == null) {
        return json;
    }
    return {
        
        'rxBytes': json['RxBytes'] == null ? undefined : json['RxBytes'],
        'rxDropped': json['RxDropped'] == null ? undefined : json['RxDropped'],
        'rxErrors': json['RxErrors'] == null ? undefined : json['RxErrors'],
        'rxPackets': json['RxPackets'] == null ? undefined : json['RxPackets'],
        'txBytes': json['TxBytes'] == null ? undefined : json['TxBytes'],
        'txDropped': json['TxDropped'] == null ? undefined : json['TxDropped'],
        'txErrors': json['TxErrors'] == null ? undefined : json['TxErrors'],
        'txPackets': json['TxPackets'] == null ? undefined : json['TxPackets'],
    };
}

export function ContainerNetworkStatsToJSON(value?: ContainerNetworkStats | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'RxBytes': value['rxBytes'],
        'RxDropped': value['rxDropped'],
        'RxErrors': value['rxErrors'],
        'RxPackets': value['rxPackets'],
        'TxBytes': value['txBytes'],
        'TxDropped': value['txDropped'],
        'TxErrors': value['txErrors'],
        'TxPackets': value['txPackets'],
    };
}

