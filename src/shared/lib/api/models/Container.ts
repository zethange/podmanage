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
import type { MountPoint } from './MountPoint';
import {
    MountPointFromJSON,
    MountPointFromJSONTyped,
    MountPointToJSON,
} from './MountPoint';
import type { SummaryNetworkSettings } from './SummaryNetworkSettings';
import {
    SummaryNetworkSettingsFromJSON,
    SummaryNetworkSettingsFromJSONTyped,
    SummaryNetworkSettingsToJSON,
} from './SummaryNetworkSettings';
import type { Platform } from './Platform';
import {
    PlatformFromJSON,
    PlatformFromJSONTyped,
    PlatformToJSON,
} from './Platform';
import type { NetworkingConfig } from './NetworkingConfig';
import {
    NetworkingConfigFromJSON,
    NetworkingConfigFromJSONTyped,
    NetworkingConfigToJSON,
} from './NetworkingConfig';
import type { Config } from './Config';
import {
    ConfigFromJSON,
    ConfigFromJSONTyped,
    ConfigToJSON,
} from './Config';
import type { Port } from './Port';
import {
    PortFromJSON,
    PortFromJSONTyped,
    PortToJSON,
} from './Port';
import type { HostConfig } from './HostConfig';
import {
    HostConfigFromJSON,
    HostConfigFromJSONTyped,
    HostConfigToJSON,
} from './HostConfig';

/**
 * 
 * @export
 * @interface Container
 */
export interface Container {
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    command?: string;
    /**
     * 
     * @type {Config}
     * @memberof Container
     */
    config?: Config;
    /**
     * 
     * @type {number}
     * @memberof Container
     */
    created?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Container
     */
    defaultReadOnlyNonRecursive?: boolean;
    /**
     * 
     * @type {HostConfig}
     * @memberof Container
     */
    hostConfig?: HostConfig;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    imageID?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Container
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {Array<MountPoint>}
     * @memberof Container
     */
    mounts?: Array<MountPoint>;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Container
     */
    names?: Array<string>;
    /**
     * 
     * @type {SummaryNetworkSettings}
     * @memberof Container
     */
    networkSettings?: SummaryNetworkSettings;
    /**
     * 
     * @type {NetworkingConfig}
     * @memberof Container
     */
    networkingConfig?: NetworkingConfig;
    /**
     * 
     * @type {Platform}
     * @memberof Container
     */
    platform?: Platform;
    /**
     * 
     * @type {Array<Port>}
     * @memberof Container
     */
    ports?: Array<Port>;
    /**
     * 
     * @type {number}
     * @memberof Container
     */
    sizeRootFs?: number;
    /**
     * 
     * @type {number}
     * @memberof Container
     */
    sizeRw?: number;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Container
     */
    status?: string;
}

/**
 * Check if a given object implements the Container interface.
 */
export function instanceOfContainer(value: object): value is Container {
    return true;
}

export function ContainerFromJSON(json: any): Container {
    return ContainerFromJSONTyped(json, false);
}

export function ContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Container {
    if (json == null) {
        return json;
    }
    return {
        
        'command': json['Command'] == null ? undefined : json['Command'],
        'config': json['Config'] == null ? undefined : ConfigFromJSON(json['Config']),
        'created': json['Created'] == null ? undefined : json['Created'],
        'defaultReadOnlyNonRecursive': json['DefaultReadOnlyNonRecursive'] == null ? undefined : json['DefaultReadOnlyNonRecursive'],
        'hostConfig': json['HostConfig'] == null ? undefined : HostConfigFromJSON(json['HostConfig']),
        'id': json['Id'] == null ? undefined : json['Id'],
        'image': json['Image'] == null ? undefined : json['Image'],
        'imageID': json['ImageID'] == null ? undefined : json['ImageID'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'mounts': json['Mounts'] == null ? undefined : ((json['Mounts'] as Array<any>).map(MountPointFromJSON)),
        'name': json['Name'] == null ? undefined : json['Name'],
        'names': json['Names'] == null ? undefined : json['Names'],
        'networkSettings': json['NetworkSettings'] == null ? undefined : SummaryNetworkSettingsFromJSON(json['NetworkSettings']),
        'networkingConfig': json['NetworkingConfig'] == null ? undefined : NetworkingConfigFromJSON(json['NetworkingConfig']),
        'platform': json['Platform'] == null ? undefined : PlatformFromJSON(json['Platform']),
        'ports': json['Ports'] == null ? undefined : ((json['Ports'] as Array<any>).map(PortFromJSON)),
        'sizeRootFs': json['SizeRootFs'] == null ? undefined : json['SizeRootFs'],
        'sizeRw': json['SizeRw'] == null ? undefined : json['SizeRw'],
        'state': json['State'] == null ? undefined : json['State'],
        'status': json['Status'] == null ? undefined : json['Status'],
    };
}

export function ContainerToJSON(value?: Container | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Command': value['command'],
        'Config': ConfigToJSON(value['config']),
        'Created': value['created'],
        'DefaultReadOnlyNonRecursive': value['defaultReadOnlyNonRecursive'],
        'HostConfig': HostConfigToJSON(value['hostConfig']),
        'Id': value['id'],
        'Image': value['image'],
        'ImageID': value['imageID'],
        'Labels': value['labels'],
        'Mounts': value['mounts'] == null ? undefined : ((value['mounts'] as Array<any>).map(MountPointToJSON)),
        'Name': value['name'],
        'Names': value['names'],
        'NetworkSettings': SummaryNetworkSettingsToJSON(value['networkSettings']),
        'NetworkingConfig': NetworkingConfigToJSON(value['networkingConfig']),
        'Platform': PlatformToJSON(value['platform']),
        'Ports': value['ports'] == null ? undefined : ((value['ports'] as Array<any>).map(PortToJSON)),
        'SizeRootFs': value['sizeRootFs'],
        'SizeRw': value['sizeRw'],
        'State': value['state'],
        'Status': value['status'],
    };
}

