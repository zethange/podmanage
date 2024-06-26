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
import type { Health } from './Health';
import {
    HealthFromJSON,
    HealthFromJSONTyped,
    HealthToJSON,
} from './Health';

/**
 * ContainerState stores container's running state
 * it's part of ContainerJSONBase and will return by "inspect" command
 * @export
 * @interface ContainerState
 */
export interface ContainerState {
    /**
     * 
     * @type {boolean}
     * @memberof ContainerState
     */
    dead?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContainerState
     */
    error?: string;
    /**
     * 
     * @type {number}
     * @memberof ContainerState
     */
    exitCode?: number;
    /**
     * 
     * @type {string}
     * @memberof ContainerState
     */
    finishedAt?: string;
    /**
     * 
     * @type {Health}
     * @memberof ContainerState
     */
    health?: Health;
    /**
     * 
     * @type {boolean}
     * @memberof ContainerState
     */
    oOMKilled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ContainerState
     */
    paused?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ContainerState
     */
    pid?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ContainerState
     */
    restarting?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ContainerState
     */
    running?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ContainerState
     */
    startedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerState
     */
    status?: string;
}

/**
 * Check if a given object implements the ContainerState interface.
 */
export function instanceOfContainerState(value: object): value is ContainerState {
    return true;
}

export function ContainerStateFromJSON(json: any): ContainerState {
    return ContainerStateFromJSONTyped(json, false);
}

export function ContainerStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerState {
    if (json == null) {
        return json;
    }
    return {
        
        'dead': json['Dead'] == null ? undefined : json['Dead'],
        'error': json['Error'] == null ? undefined : json['Error'],
        'exitCode': json['ExitCode'] == null ? undefined : json['ExitCode'],
        'finishedAt': json['FinishedAt'] == null ? undefined : json['FinishedAt'],
        'health': json['Health'] == null ? undefined : HealthFromJSON(json['Health']),
        'oOMKilled': json['OOMKilled'] == null ? undefined : json['OOMKilled'],
        'paused': json['Paused'] == null ? undefined : json['Paused'],
        'pid': json['Pid'] == null ? undefined : json['Pid'],
        'restarting': json['Restarting'] == null ? undefined : json['Restarting'],
        'running': json['Running'] == null ? undefined : json['Running'],
        'startedAt': json['StartedAt'] == null ? undefined : json['StartedAt'],
        'status': json['Status'] == null ? undefined : json['Status'],
    };
}

export function ContainerStateToJSON(value?: ContainerState | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Dead': value['dead'],
        'Error': value['error'],
        'ExitCode': value['exitCode'],
        'FinishedAt': value['finishedAt'],
        'Health': HealthToJSON(value['health']),
        'OOMKilled': value['oOMKilled'],
        'Paused': value['paused'],
        'Pid': value['pid'],
        'Restarting': value['restarting'],
        'Running': value['running'],
        'StartedAt': value['startedAt'],
        'Status': value['status'],
    };
}

