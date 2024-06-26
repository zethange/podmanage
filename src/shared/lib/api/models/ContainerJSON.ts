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
import type { NetworkSettings } from './NetworkSettings';
import {
    NetworkSettingsFromJSON,
    NetworkSettingsFromJSONTyped,
    NetworkSettingsToJSON,
} from './NetworkSettings';
import type { Config } from './Config';
import {
    ConfigFromJSON,
    ConfigFromJSONTyped,
    ConfigToJSON,
} from './Config';
import type { HostConfig } from './HostConfig';
import {
    HostConfigFromJSON,
    HostConfigFromJSONTyped,
    HostConfigToJSON,
} from './HostConfig';
import type { ContainerNode } from './ContainerNode';
import {
    ContainerNodeFromJSON,
    ContainerNodeFromJSONTyped,
    ContainerNodeToJSON,
} from './ContainerNode';
import type { GraphDriverData } from './GraphDriverData';
import {
    GraphDriverDataFromJSON,
    GraphDriverDataFromJSONTyped,
    GraphDriverDataToJSON,
} from './GraphDriverData';
import type { ContainerState } from './ContainerState';
import {
    ContainerStateFromJSON,
    ContainerStateFromJSONTyped,
    ContainerStateToJSON,
} from './ContainerState';

/**
 * ContainerJSON is newly used struct along with MountPoint
 * @export
 * @interface ContainerJSON
 */
export interface ContainerJSON {
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    appArmorProfile?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContainerJSON
     */
    args?: Array<string>;
    /**
     * 
     * @type {Config}
     * @memberof ContainerJSON
     */
    config?: Config;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    created?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    driver?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ContainerJSON
     */
    execIDs?: Array<string>;
    /**
     * 
     * @type {GraphDriverData}
     * @memberof ContainerJSON
     */
    graphDriver?: GraphDriverData;
    /**
     * 
     * @type {HostConfig}
     * @memberof ContainerJSON
     */
    hostConfig?: HostConfig;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    hostnamePath?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    hostsPath?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    logPath?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    mountLabel?: string;
    /**
     * 
     * @type {Array<MountPoint>}
     * @memberof ContainerJSON
     */
    mounts?: Array<MountPoint>;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    name?: string;
    /**
     * 
     * @type {NetworkSettings}
     * @memberof ContainerJSON
     */
    networkSettings?: NetworkSettings;
    /**
     * 
     * @type {ContainerNode}
     * @memberof ContainerJSON
     */
    node?: ContainerNode;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    platform?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    processLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof ContainerJSON
     */
    resolvConfPath?: string;
    /**
     * 
     * @type {number}
     * @memberof ContainerJSON
     */
    restartCount?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerJSON
     */
    sizeRootFs?: number;
    /**
     * 
     * @type {number}
     * @memberof ContainerJSON
     */
    sizeRw?: number;
    /**
     * 
     * @type {ContainerState}
     * @memberof ContainerJSON
     */
    state?: ContainerState;
}

/**
 * Check if a given object implements the ContainerJSON interface.
 */
export function instanceOfContainerJSON(value: object): value is ContainerJSON {
    return true;
}

export function ContainerJSONFromJSON(json: any): ContainerJSON {
    return ContainerJSONFromJSONTyped(json, false);
}

export function ContainerJSONFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerJSON {
    if (json == null) {
        return json;
    }
    return {
        
        'appArmorProfile': json['AppArmorProfile'] == null ? undefined : json['AppArmorProfile'],
        'args': json['Args'] == null ? undefined : json['Args'],
        'config': json['Config'] == null ? undefined : ConfigFromJSON(json['Config']),
        'created': json['Created'] == null ? undefined : json['Created'],
        'driver': json['Driver'] == null ? undefined : json['Driver'],
        'execIDs': json['ExecIDs'] == null ? undefined : json['ExecIDs'],
        'graphDriver': json['GraphDriver'] == null ? undefined : GraphDriverDataFromJSON(json['GraphDriver']),
        'hostConfig': json['HostConfig'] == null ? undefined : HostConfigFromJSON(json['HostConfig']),
        'hostnamePath': json['HostnamePath'] == null ? undefined : json['HostnamePath'],
        'hostsPath': json['HostsPath'] == null ? undefined : json['HostsPath'],
        'id': json['Id'] == null ? undefined : json['Id'],
        'image': json['Image'] == null ? undefined : json['Image'],
        'logPath': json['LogPath'] == null ? undefined : json['LogPath'],
        'mountLabel': json['MountLabel'] == null ? undefined : json['MountLabel'],
        'mounts': json['Mounts'] == null ? undefined : ((json['Mounts'] as Array<any>).map(MountPointFromJSON)),
        'name': json['Name'] == null ? undefined : json['Name'],
        'networkSettings': json['NetworkSettings'] == null ? undefined : NetworkSettingsFromJSON(json['NetworkSettings']),
        'node': json['Node'] == null ? undefined : ContainerNodeFromJSON(json['Node']),
        'path': json['Path'] == null ? undefined : json['Path'],
        'platform': json['Platform'] == null ? undefined : json['Platform'],
        'processLabel': json['ProcessLabel'] == null ? undefined : json['ProcessLabel'],
        'resolvConfPath': json['ResolvConfPath'] == null ? undefined : json['ResolvConfPath'],
        'restartCount': json['RestartCount'] == null ? undefined : json['RestartCount'],
        'sizeRootFs': json['SizeRootFs'] == null ? undefined : json['SizeRootFs'],
        'sizeRw': json['SizeRw'] == null ? undefined : json['SizeRw'],
        'state': json['State'] == null ? undefined : ContainerStateFromJSON(json['State']),
    };
}

export function ContainerJSONToJSON(value?: ContainerJSON | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'AppArmorProfile': value['appArmorProfile'],
        'Args': value['args'],
        'Config': ConfigToJSON(value['config']),
        'Created': value['created'],
        'Driver': value['driver'],
        'ExecIDs': value['execIDs'],
        'GraphDriver': GraphDriverDataToJSON(value['graphDriver']),
        'HostConfig': HostConfigToJSON(value['hostConfig']),
        'HostnamePath': value['hostnamePath'],
        'HostsPath': value['hostsPath'],
        'Id': value['id'],
        'Image': value['image'],
        'LogPath': value['logPath'],
        'MountLabel': value['mountLabel'],
        'Mounts': value['mounts'] == null ? undefined : ((value['mounts'] as Array<any>).map(MountPointToJSON)),
        'Name': value['name'],
        'NetworkSettings': NetworkSettingsToJSON(value['networkSettings']),
        'Node': ContainerNodeToJSON(value['node']),
        'Path': value['path'],
        'Platform': value['platform'],
        'ProcessLabel': value['processLabel'],
        'ResolvConfPath': value['resolvConfPath'],
        'RestartCount': value['restartCount'],
        'SizeRootFs': value['sizeRootFs'],
        'SizeRw': value['sizeRw'],
        'State': ContainerStateToJSON(value['state']),
    };
}

