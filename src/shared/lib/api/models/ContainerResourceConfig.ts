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
import type { POSIXRlimit } from './POSIXRlimit';
import {
    POSIXRlimitFromJSON,
    POSIXRlimitFromJSONTyped,
    POSIXRlimitToJSON,
} from './POSIXRlimit';
import type { LinuxWeightDevice } from './LinuxWeightDevice';
import {
    LinuxWeightDeviceFromJSON,
    LinuxWeightDeviceFromJSONTyped,
    LinuxWeightDeviceToJSON,
} from './LinuxWeightDevice';
import type { LinuxIntelRdt } from './LinuxIntelRdt';
import {
    LinuxIntelRdtFromJSON,
    LinuxIntelRdtFromJSONTyped,
    LinuxIntelRdtToJSON,
} from './LinuxIntelRdt';
import type { LinuxThrottleDevice } from './LinuxThrottleDevice';
import {
    LinuxThrottleDeviceFromJSON,
    LinuxThrottleDeviceFromJSONTyped,
    LinuxThrottleDeviceToJSON,
} from './LinuxThrottleDevice';
import type { LinuxResources } from './LinuxResources';
import {
    LinuxResourcesFromJSON,
    LinuxResourcesFromJSONTyped,
    LinuxResourcesToJSON,
} from './LinuxResources';

/**
 * 
 * @export
 * @interface ContainerResourceConfig
 */
export interface ContainerResourceConfig {
    /**
     * 
     * @type {LinuxIntelRdt}
     * @memberof ContainerResourceConfig
     */
    intelRdt?: LinuxIntelRdt;
    /**
     * OOMScoreAdj adjusts the score used by the OOM killer to determine
     * processes to kill for the container's process.
     * Optional.
     * @type {number}
     * @memberof ContainerResourceConfig
     */
    oomScoreAdj?: number;
    /**
     * Rlimits are POSIX rlimits to apply to the container.
     * Optional.
     * @type {Array<POSIXRlimit>}
     * @memberof ContainerResourceConfig
     */
    rLimits?: Array<POSIXRlimit>;
    /**
     * 
     * @type {LinuxResources}
     * @memberof ContainerResourceConfig
     */
    resourceLimits?: LinuxResources;
    /**
     * IO read rate limit per cgroup per device, bytes per second
     * @type {{ [key: string]: LinuxThrottleDevice; }}
     * @memberof ContainerResourceConfig
     */
    throttleReadBpsDevice?: { [key: string]: LinuxThrottleDevice; };
    /**
     * IO read rate limit per cgroup per device, IO per second
     * @type {{ [key: string]: LinuxThrottleDevice; }}
     * @memberof ContainerResourceConfig
     */
    throttleReadIOPSDevice?: { [key: string]: LinuxThrottleDevice; };
    /**
     * IO write rate limit per cgroup per device, bytes per second
     * @type {{ [key: string]: LinuxThrottleDevice; }}
     * @memberof ContainerResourceConfig
     */
    throttleWriteBpsDevice?: { [key: string]: LinuxThrottleDevice; };
    /**
     * IO write rate limit per cgroup per device, IO per second
     * @type {{ [key: string]: LinuxThrottleDevice; }}
     * @memberof ContainerResourceConfig
     */
    throttleWriteIOPSDevice?: { [key: string]: LinuxThrottleDevice; };
    /**
     * CgroupConf are key-value options passed into the container runtime
     * that are used to configure cgroup v2.
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof ContainerResourceConfig
     */
    unified?: { [key: string]: string; };
    /**
     * Weight per cgroup per device, can override BlkioWeight
     * @type {{ [key: string]: LinuxWeightDevice; }}
     * @memberof ContainerResourceConfig
     */
    weightDevice?: { [key: string]: LinuxWeightDevice; };
}

/**
 * Check if a given object implements the ContainerResourceConfig interface.
 */
export function instanceOfContainerResourceConfig(value: object): value is ContainerResourceConfig {
    return true;
}

export function ContainerResourceConfigFromJSON(json: any): ContainerResourceConfig {
    return ContainerResourceConfigFromJSONTyped(json, false);
}

export function ContainerResourceConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerResourceConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'intelRdt': json['intelRdt'] == null ? undefined : LinuxIntelRdtFromJSON(json['intelRdt']),
        'oomScoreAdj': json['oom_score_adj'] == null ? undefined : json['oom_score_adj'],
        'rLimits': json['r_limits'] == null ? undefined : ((json['r_limits'] as Array<any>).map(POSIXRlimitFromJSON)),
        'resourceLimits': json['resource_limits'] == null ? undefined : LinuxResourcesFromJSON(json['resource_limits']),
        'throttleReadBpsDevice': json['throttleReadBpsDevice'] == null ? undefined : (mapValues(json['throttleReadBpsDevice'], LinuxThrottleDeviceFromJSON)),
        'throttleReadIOPSDevice': json['throttleReadIOPSDevice'] == null ? undefined : (mapValues(json['throttleReadIOPSDevice'], LinuxThrottleDeviceFromJSON)),
        'throttleWriteBpsDevice': json['throttleWriteBpsDevice'] == null ? undefined : (mapValues(json['throttleWriteBpsDevice'], LinuxThrottleDeviceFromJSON)),
        'throttleWriteIOPSDevice': json['throttleWriteIOPSDevice'] == null ? undefined : (mapValues(json['throttleWriteIOPSDevice'], LinuxThrottleDeviceFromJSON)),
        'unified': json['unified'] == null ? undefined : json['unified'],
        'weightDevice': json['weightDevice'] == null ? undefined : (mapValues(json['weightDevice'], LinuxWeightDeviceFromJSON)),
    };
}

export function ContainerResourceConfigToJSON(value?: ContainerResourceConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'intelRdt': LinuxIntelRdtToJSON(value['intelRdt']),
        'oom_score_adj': value['oomScoreAdj'],
        'r_limits': value['rLimits'] == null ? undefined : ((value['rLimits'] as Array<any>).map(POSIXRlimitToJSON)),
        'resource_limits': LinuxResourcesToJSON(value['resourceLimits']),
        'throttleReadBpsDevice': value['throttleReadBpsDevice'] == null ? undefined : (mapValues(value['throttleReadBpsDevice'], LinuxThrottleDeviceToJSON)),
        'throttleReadIOPSDevice': value['throttleReadIOPSDevice'] == null ? undefined : (mapValues(value['throttleReadIOPSDevice'], LinuxThrottleDeviceToJSON)),
        'throttleWriteBpsDevice': value['throttleWriteBpsDevice'] == null ? undefined : (mapValues(value['throttleWriteBpsDevice'], LinuxThrottleDeviceToJSON)),
        'throttleWriteIOPSDevice': value['throttleWriteIOPSDevice'] == null ? undefined : (mapValues(value['throttleWriteIOPSDevice'], LinuxThrottleDeviceToJSON)),
        'unified': value['unified'],
        'weightDevice': value['weightDevice'] == null ? undefined : (mapValues(value['weightDevice'], LinuxWeightDeviceToJSON)),
    };
}

