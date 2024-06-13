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
 * LinuxCPU for Linux cgroup 'cpu' resource management
 * @export
 * @interface LinuxCPU
 */
export interface LinuxCPU {
    /**
     * CPU hardcap burst limit (in usecs). Allowed accumulated cpu time additionally for burst in a
     * given period.
     * @type {number}
     * @memberof LinuxCPU
     */
    burst?: number;
    /**
     * CPUs to use within the cpuset. Default is to use any CPU available.
     * @type {string}
     * @memberof LinuxCPU
     */
    cpus?: string;
    /**
     * cgroups are configured with minimum weight, 0: default behavior, 1: SCHED_IDLE.
     * @type {number}
     * @memberof LinuxCPU
     */
    idle?: number;
    /**
     * List of memory nodes in the cpuset. Default is to use any available memory node.
     * @type {string}
     * @memberof LinuxCPU
     */
    mems?: string;
    /**
     * CPU period to be used for hardcapping (in usecs).
     * @type {number}
     * @memberof LinuxCPU
     */
    period?: number;
    /**
     * CPU hardcap limit (in usecs). Allowed cpu time in a given period.
     * @type {number}
     * @memberof LinuxCPU
     */
    quota?: number;
    /**
     * CPU period to be used for realtime scheduling (in usecs).
     * @type {number}
     * @memberof LinuxCPU
     */
    realtimePeriod?: number;
    /**
     * How much time realtime scheduling may use (in usecs).
     * @type {number}
     * @memberof LinuxCPU
     */
    realtimeRuntime?: number;
    /**
     * CPU shares (relative weight (ratio) vs. other cgroups with cpu shares).
     * @type {number}
     * @memberof LinuxCPU
     */
    shares?: number;
}

/**
 * Check if a given object implements the LinuxCPU interface.
 */
export function instanceOfLinuxCPU(value: object): value is LinuxCPU {
    return true;
}

export function LinuxCPUFromJSON(json: any): LinuxCPU {
    return LinuxCPUFromJSONTyped(json, false);
}

export function LinuxCPUFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinuxCPU {
    if (json == null) {
        return json;
    }
    return {
        
        'burst': json['burst'] == null ? undefined : json['burst'],
        'cpus': json['cpus'] == null ? undefined : json['cpus'],
        'idle': json['idle'] == null ? undefined : json['idle'],
        'mems': json['mems'] == null ? undefined : json['mems'],
        'period': json['period'] == null ? undefined : json['period'],
        'quota': json['quota'] == null ? undefined : json['quota'],
        'realtimePeriod': json['realtimePeriod'] == null ? undefined : json['realtimePeriod'],
        'realtimeRuntime': json['realtimeRuntime'] == null ? undefined : json['realtimeRuntime'],
        'shares': json['shares'] == null ? undefined : json['shares'],
    };
}

export function LinuxCPUToJSON(value?: LinuxCPU | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'burst': value['burst'],
        'cpus': value['cpus'],
        'idle': value['idle'],
        'mems': value['mems'],
        'period': value['period'],
        'quota': value['quota'],
        'realtimePeriod': value['realtimePeriod'],
        'realtimeRuntime': value['realtimeRuntime'],
        'shares': value['shares'],
    };
}
