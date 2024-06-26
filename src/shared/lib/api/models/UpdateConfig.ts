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
import type { WeightDevice } from './WeightDevice';
import {
    WeightDeviceFromJSON,
    WeightDeviceFromJSONTyped,
    WeightDeviceToJSON,
} from './WeightDevice';
import type { ThrottleDevice } from './ThrottleDevice';
import {
    ThrottleDeviceFromJSON,
    ThrottleDeviceFromJSONTyped,
    ThrottleDeviceToJSON,
} from './ThrottleDevice';
import type { DeviceMapping } from './DeviceMapping';
import {
    DeviceMappingFromJSON,
    DeviceMappingFromJSONTyped,
    DeviceMappingToJSON,
} from './DeviceMapping';
import type { Ulimit } from './Ulimit';
import {
    UlimitFromJSON,
    UlimitFromJSONTyped,
    UlimitToJSON,
} from './Ulimit';
import type { RestartPolicy } from './RestartPolicy';
import {
    RestartPolicyFromJSON,
    RestartPolicyFromJSONTyped,
    RestartPolicyToJSON,
} from './RestartPolicy';
import type { DeviceRequest } from './DeviceRequest';
import {
    DeviceRequestFromJSON,
    DeviceRequestFromJSONTyped,
    DeviceRequestToJSON,
} from './DeviceRequest';

/**
 * Those attributes can be updated at runtime.
 * @export
 * @interface UpdateConfig
 */
export interface UpdateConfig {
    /**
     * 
     * @type {Array<ThrottleDevice>}
     * @memberof UpdateConfig
     */
    blkioDeviceReadBps?: Array<ThrottleDevice>;
    /**
     * 
     * @type {Array<ThrottleDevice>}
     * @memberof UpdateConfig
     */
    blkioDeviceReadIOps?: Array<ThrottleDevice>;
    /**
     * 
     * @type {Array<ThrottleDevice>}
     * @memberof UpdateConfig
     */
    blkioDeviceWriteBps?: Array<ThrottleDevice>;
    /**
     * 
     * @type {Array<ThrottleDevice>}
     * @memberof UpdateConfig
     */
    blkioDeviceWriteIOps?: Array<ThrottleDevice>;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    blkioWeight?: number;
    /**
     * 
     * @type {Array<WeightDevice>}
     * @memberof UpdateConfig
     */
    blkioWeightDevice?: Array<WeightDevice>;
    /**
     * Applicable to UNIX platforms
     * @type {string}
     * @memberof UpdateConfig
     */
    cgroupParent?: string;
    /**
     * Applicable to Windows
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuCount?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuPercent?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuPeriod?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuQuota?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuRealtimePeriod?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuRealtimeRuntime?: number;
    /**
     * Applicable to all platforms
     * @type {number}
     * @memberof UpdateConfig
     */
    cpuShares?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateConfig
     */
    cpusetCpus?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateConfig
     */
    cpusetMems?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateConfig
     */
    deviceCgroupRules?: Array<string>;
    /**
     * 
     * @type {Array<DeviceRequest>}
     * @memberof UpdateConfig
     */
    deviceRequests?: Array<DeviceRequest>;
    /**
     * 
     * @type {Array<DeviceMapping>}
     * @memberof UpdateConfig
     */
    devices?: Array<DeviceMapping>;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    iOMaximumBandwidth?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    iOMaximumIOps?: number;
    /**
     * KernelMemory specifies the kernel memory limit (in bytes) for the container.
     * Deprecated: kernel 5.4 deprecated kmem.limit_in_bytes.
     * @type {number}
     * @memberof UpdateConfig
     */
    kernelMemory?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    kernelMemoryTCP?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    memory?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    memoryReservation?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    memorySwap?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    memorySwappiness?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    nanoCpus?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateConfig
     */
    oomKillDisable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UpdateConfig
     */
    pidsLimit?: number;
    /**
     * 
     * @type {RestartPolicy}
     * @memberof UpdateConfig
     */
    restartPolicy?: RestartPolicy;
    /**
     * 
     * @type {Array<Ulimit>}
     * @memberof UpdateConfig
     */
    ulimits?: Array<Ulimit>;
}

/**
 * Check if a given object implements the UpdateConfig interface.
 */
export function instanceOfUpdateConfig(value: object): value is UpdateConfig {
    return true;
}

export function UpdateConfigFromJSON(json: any): UpdateConfig {
    return UpdateConfigFromJSONTyped(json, false);
}

export function UpdateConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'blkioDeviceReadBps': json['BlkioDeviceReadBps'] == null ? undefined : ((json['BlkioDeviceReadBps'] as Array<any>).map(ThrottleDeviceFromJSON)),
        'blkioDeviceReadIOps': json['BlkioDeviceReadIOps'] == null ? undefined : ((json['BlkioDeviceReadIOps'] as Array<any>).map(ThrottleDeviceFromJSON)),
        'blkioDeviceWriteBps': json['BlkioDeviceWriteBps'] == null ? undefined : ((json['BlkioDeviceWriteBps'] as Array<any>).map(ThrottleDeviceFromJSON)),
        'blkioDeviceWriteIOps': json['BlkioDeviceWriteIOps'] == null ? undefined : ((json['BlkioDeviceWriteIOps'] as Array<any>).map(ThrottleDeviceFromJSON)),
        'blkioWeight': json['BlkioWeight'] == null ? undefined : json['BlkioWeight'],
        'blkioWeightDevice': json['BlkioWeightDevice'] == null ? undefined : ((json['BlkioWeightDevice'] as Array<any>).map(WeightDeviceFromJSON)),
        'cgroupParent': json['CgroupParent'] == null ? undefined : json['CgroupParent'],
        'cpuCount': json['CpuCount'] == null ? undefined : json['CpuCount'],
        'cpuPercent': json['CpuPercent'] == null ? undefined : json['CpuPercent'],
        'cpuPeriod': json['CpuPeriod'] == null ? undefined : json['CpuPeriod'],
        'cpuQuota': json['CpuQuota'] == null ? undefined : json['CpuQuota'],
        'cpuRealtimePeriod': json['CpuRealtimePeriod'] == null ? undefined : json['CpuRealtimePeriod'],
        'cpuRealtimeRuntime': json['CpuRealtimeRuntime'] == null ? undefined : json['CpuRealtimeRuntime'],
        'cpuShares': json['CpuShares'] == null ? undefined : json['CpuShares'],
        'cpusetCpus': json['CpusetCpus'] == null ? undefined : json['CpusetCpus'],
        'cpusetMems': json['CpusetMems'] == null ? undefined : json['CpusetMems'],
        'deviceCgroupRules': json['DeviceCgroupRules'] == null ? undefined : json['DeviceCgroupRules'],
        'deviceRequests': json['DeviceRequests'] == null ? undefined : ((json['DeviceRequests'] as Array<any>).map(DeviceRequestFromJSON)),
        'devices': json['Devices'] == null ? undefined : ((json['Devices'] as Array<any>).map(DeviceMappingFromJSON)),
        'iOMaximumBandwidth': json['IOMaximumBandwidth'] == null ? undefined : json['IOMaximumBandwidth'],
        'iOMaximumIOps': json['IOMaximumIOps'] == null ? undefined : json['IOMaximumIOps'],
        'kernelMemory': json['KernelMemory'] == null ? undefined : json['KernelMemory'],
        'kernelMemoryTCP': json['KernelMemoryTCP'] == null ? undefined : json['KernelMemoryTCP'],
        'memory': json['Memory'] == null ? undefined : json['Memory'],
        'memoryReservation': json['MemoryReservation'] == null ? undefined : json['MemoryReservation'],
        'memorySwap': json['MemorySwap'] == null ? undefined : json['MemorySwap'],
        'memorySwappiness': json['MemorySwappiness'] == null ? undefined : json['MemorySwappiness'],
        'nanoCpus': json['NanoCpus'] == null ? undefined : json['NanoCpus'],
        'oomKillDisable': json['OomKillDisable'] == null ? undefined : json['OomKillDisable'],
        'pidsLimit': json['PidsLimit'] == null ? undefined : json['PidsLimit'],
        'restartPolicy': json['RestartPolicy'] == null ? undefined : RestartPolicyFromJSON(json['RestartPolicy']),
        'ulimits': json['Ulimits'] == null ? undefined : ((json['Ulimits'] as Array<any>).map(UlimitFromJSON)),
    };
}

export function UpdateConfigToJSON(value?: UpdateConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'BlkioDeviceReadBps': value['blkioDeviceReadBps'] == null ? undefined : ((value['blkioDeviceReadBps'] as Array<any>).map(ThrottleDeviceToJSON)),
        'BlkioDeviceReadIOps': value['blkioDeviceReadIOps'] == null ? undefined : ((value['blkioDeviceReadIOps'] as Array<any>).map(ThrottleDeviceToJSON)),
        'BlkioDeviceWriteBps': value['blkioDeviceWriteBps'] == null ? undefined : ((value['blkioDeviceWriteBps'] as Array<any>).map(ThrottleDeviceToJSON)),
        'BlkioDeviceWriteIOps': value['blkioDeviceWriteIOps'] == null ? undefined : ((value['blkioDeviceWriteIOps'] as Array<any>).map(ThrottleDeviceToJSON)),
        'BlkioWeight': value['blkioWeight'],
        'BlkioWeightDevice': value['blkioWeightDevice'] == null ? undefined : ((value['blkioWeightDevice'] as Array<any>).map(WeightDeviceToJSON)),
        'CgroupParent': value['cgroupParent'],
        'CpuCount': value['cpuCount'],
        'CpuPercent': value['cpuPercent'],
        'CpuPeriod': value['cpuPeriod'],
        'CpuQuota': value['cpuQuota'],
        'CpuRealtimePeriod': value['cpuRealtimePeriod'],
        'CpuRealtimeRuntime': value['cpuRealtimeRuntime'],
        'CpuShares': value['cpuShares'],
        'CpusetCpus': value['cpusetCpus'],
        'CpusetMems': value['cpusetMems'],
        'DeviceCgroupRules': value['deviceCgroupRules'],
        'DeviceRequests': value['deviceRequests'] == null ? undefined : ((value['deviceRequests'] as Array<any>).map(DeviceRequestToJSON)),
        'Devices': value['devices'] == null ? undefined : ((value['devices'] as Array<any>).map(DeviceMappingToJSON)),
        'IOMaximumBandwidth': value['iOMaximumBandwidth'],
        'IOMaximumIOps': value['iOMaximumIOps'],
        'KernelMemory': value['kernelMemory'],
        'KernelMemoryTCP': value['kernelMemoryTCP'],
        'Memory': value['memory'],
        'MemoryReservation': value['memoryReservation'],
        'MemorySwap': value['memorySwap'],
        'MemorySwappiness': value['memorySwappiness'],
        'NanoCpus': value['nanoCpus'],
        'OomKillDisable': value['oomKillDisable'],
        'PidsLimit': value['pidsLimit'],
        'RestartPolicy': RestartPolicyToJSON(value['restartPolicy']),
        'Ulimits': value['ulimits'] == null ? undefined : ((value['ulimits'] as Array<any>).map(UlimitToJSON)),
    };
}

