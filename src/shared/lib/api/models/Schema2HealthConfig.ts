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
 * Schema2HealthConfig is a HealthConfig, which holds configuration settings
 * for the HEALTHCHECK feature, from docker/docker/api/types/container.
 * @export
 * @interface Schema2HealthConfig
 */
export interface Schema2HealthConfig {
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof Schema2HealthConfig
     */
    interval?: number;
    /**
     * Retries is the number of consecutive failures needed to consider a container as unhealthy.
     * Zero means inherit.
     * @type {number}
     * @memberof Schema2HealthConfig
     */
    retries?: number;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof Schema2HealthConfig
     */
    startInterval?: number;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof Schema2HealthConfig
     */
    startPeriod?: number;
    /**
     * Test is the test to perform to check that the container is healthy.
     * An empty slice means to inherit the default.
     * The options are:
     * {} : inherit healthcheck
     * {"NONE"} : disable healthcheck
     * {"CMD", args...} : exec arguments directly
     * {"CMD-SHELL", command} : run command with system's default shell
     * @type {Array<string>}
     * @memberof Schema2HealthConfig
     */
    test?: Array<string>;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof Schema2HealthConfig
     */
    timeout?: number;
}

/**
 * Check if a given object implements the Schema2HealthConfig interface.
 */
export function instanceOfSchema2HealthConfig(value: object): value is Schema2HealthConfig {
    return true;
}

export function Schema2HealthConfigFromJSON(json: any): Schema2HealthConfig {
    return Schema2HealthConfigFromJSONTyped(json, false);
}

export function Schema2HealthConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schema2HealthConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'interval': json['Interval'] == null ? undefined : json['Interval'],
        'retries': json['Retries'] == null ? undefined : json['Retries'],
        'startInterval': json['StartInterval'] == null ? undefined : json['StartInterval'],
        'startPeriod': json['StartPeriod'] == null ? undefined : json['StartPeriod'],
        'test': json['Test'] == null ? undefined : json['Test'],
        'timeout': json['Timeout'] == null ? undefined : json['Timeout'],
    };
}

export function Schema2HealthConfigToJSON(value?: Schema2HealthConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Interval': value['interval'],
        'Retries': value['retries'],
        'StartInterval': value['startInterval'],
        'StartPeriod': value['startPeriod'],
        'Test': value['test'],
        'Timeout': value['timeout'],
    };
}

