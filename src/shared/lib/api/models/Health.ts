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
import type { HealthcheckResult } from './HealthcheckResult';
import {
    HealthcheckResultFromJSON,
    HealthcheckResultFromJSONTyped,
    HealthcheckResultToJSON,
} from './HealthcheckResult';

/**
 * Health stores information about the container's healthcheck results
 * @export
 * @interface Health
 */
export interface Health {
    /**
     * 
     * @type {number}
     * @memberof Health
     */
    failingStreak?: number;
    /**
     * 
     * @type {Array<HealthcheckResult>}
     * @memberof Health
     */
    log?: Array<HealthcheckResult>;
    /**
     * 
     * @type {string}
     * @memberof Health
     */
    status?: string;
}

/**
 * Check if a given object implements the Health interface.
 */
export function instanceOfHealth(value: object): value is Health {
    return true;
}

export function HealthFromJSON(json: any): Health {
    return HealthFromJSONTyped(json, false);
}

export function HealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Health {
    if (json == null) {
        return json;
    }
    return {
        
        'failingStreak': json['FailingStreak'] == null ? undefined : json['FailingStreak'],
        'log': json['Log'] == null ? undefined : ((json['Log'] as Array<any>).map(HealthcheckResultFromJSON)),
        'status': json['Status'] == null ? undefined : json['Status'],
    };
}

export function HealthToJSON(value?: Health | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'FailingStreak': value['failingStreak'],
        'Log': value['log'] == null ? undefined : ((value['log'] as Array<any>).map(HealthcheckResultToJSON)),
        'Status': value['status'],
    };
}

