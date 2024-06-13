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
 * @interface StartupHealthCheck
 */
export interface StartupHealthCheck {
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    interval?: number;
    /**
     * Retries is the number of consecutive failures needed to consider a container as unhealthy.
     * Zero means inherit.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    retries?: number;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    startInterval?: number;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    startPeriod?: number;
    /**
     * Successes are the number of successes required to mark the startup HC
     * as passed.
     * If set to 0, a single success will mark the HC as passed.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    successes?: number;
    /**
     * Test is the test to perform to check that the container is healthy.
     * An empty slice means to inherit the default.
     * The options are:
     * {} : inherit healthcheck
     * {"NONE"} : disable healthcheck
     * {"CMD", args...} : exec arguments directly
     * {"CMD-SHELL", command} : run command with system's default shell
     * @type {Array<string>}
     * @memberof StartupHealthCheck
     */
    test?: Array<string>;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof StartupHealthCheck
     */
    timeout?: number;
}

/**
 * Check if a given object implements the StartupHealthCheck interface.
 */
export function instanceOfStartupHealthCheck(value: object): value is StartupHealthCheck {
    return true;
}

export function StartupHealthCheckFromJSON(json: any): StartupHealthCheck {
    return StartupHealthCheckFromJSONTyped(json, false);
}

export function StartupHealthCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartupHealthCheck {
    if (json == null) {
        return json;
    }
    return {
        
        'interval': json['Interval'] == null ? undefined : json['Interval'],
        'retries': json['Retries'] == null ? undefined : json['Retries'],
        'startInterval': json['StartInterval'] == null ? undefined : json['StartInterval'],
        'startPeriod': json['StartPeriod'] == null ? undefined : json['StartPeriod'],
        'successes': json['Successes'] == null ? undefined : json['Successes'],
        'test': json['Test'] == null ? undefined : json['Test'],
        'timeout': json['Timeout'] == null ? undefined : json['Timeout'],
    };
}

export function StartupHealthCheckToJSON(value?: StartupHealthCheck | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Interval': value['interval'],
        'Retries': value['retries'],
        'StartInterval': value['startInterval'],
        'StartPeriod': value['startPeriod'],
        'Successes': value['successes'],
        'Test': value['test'],
        'Timeout': value['timeout'],
    };
}
