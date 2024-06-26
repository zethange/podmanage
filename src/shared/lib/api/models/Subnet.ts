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
import type { LeaseRange } from './LeaseRange';
import {
    LeaseRangeFromJSON,
    LeaseRangeFromJSONTyped,
    LeaseRangeToJSON,
} from './LeaseRange';

/**
 * 
 * @export
 * @interface Subnet
 */
export interface Subnet {
    /**
     * Gateway IP for this Network.
     * @type {string}
     * @memberof Subnet
     */
    gateway?: string;
    /**
     * 
     * @type {LeaseRange}
     * @memberof Subnet
     */
    leaseRange?: LeaseRange;
    /**
     * Subnet for this Network in CIDR form.
     * @type {string}
     * @memberof Subnet
     */
    subnet?: string;
}

/**
 * Check if a given object implements the Subnet interface.
 */
export function instanceOfSubnet(value: object): value is Subnet {
    return true;
}

export function SubnetFromJSON(json: any): Subnet {
    return SubnetFromJSONTyped(json, false);
}

export function SubnetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subnet {
    if (json == null) {
        return json;
    }
    return {
        
        'gateway': json['gateway'] == null ? undefined : json['gateway'],
        'leaseRange': json['lease_range'] == null ? undefined : LeaseRangeFromJSON(json['lease_range']),
        'subnet': json['subnet'] == null ? undefined : json['subnet'],
    };
}

export function SubnetToJSON(value?: Subnet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'gateway': value['gateway'],
        'lease_range': LeaseRangeToJSON(value['leaseRange']),
        'subnet': value['subnet'],
    };
}

