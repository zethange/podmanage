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
 * 
 * @export
 * @interface Platform
 */
export interface Platform {
    /**
     * Architecture field specifies the CPU architecture, for example
     * `amd64` or `ppc64le`.
     * @type {string}
     * @memberof Platform
     */
    architecture?: string;
    /**
     * OS specifies the operating system, for example `linux` or `windows`.
     * @type {string}
     * @memberof Platform
     */
    os?: string;
    /**
     * OSFeatures is an optional field specifying an array of strings,
     * each listing a required OS feature (for example on Windows `win32k`).
     * @type {Array<string>}
     * @memberof Platform
     */
    osFeatures?: Array<string>;
    /**
     * OSVersion is an optional field specifying the operating system
     * version, for example on Windows `10.0.14393.1066`.
     * @type {string}
     * @memberof Platform
     */
    osVersion?: string;
    /**
     * Variant is an optional field specifying a variant of the CPU, for
     * example `v7` to specify ARMv7 when architecture is `arm`.
     * @type {string}
     * @memberof Platform
     */
    variant?: string;
}

/**
 * Check if a given object implements the Platform interface.
 */
export function instanceOfPlatform(value: object): value is Platform {
    return true;
}

export function PlatformFromJSON(json: any): Platform {
    return PlatformFromJSONTyped(json, false);
}

export function PlatformFromJSONTyped(json: any, ignoreDiscriminator: boolean): Platform {
    if (json == null) {
        return json;
    }
    return {
        
        'architecture': json['architecture'] == null ? undefined : json['architecture'],
        'os': json['os'] == null ? undefined : json['os'],
        'osFeatures': json['os.features'] == null ? undefined : json['os.features'],
        'osVersion': json['os.version'] == null ? undefined : json['os.version'],
        'variant': json['variant'] == null ? undefined : json['variant'],
    };
}

export function PlatformToJSON(value?: Platform | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'architecture': value['architecture'],
        'os': value['os'],
        'os.features': value['osFeatures'],
        'os.version': value['osVersion'],
        'variant': value['variant'],
    };
}

