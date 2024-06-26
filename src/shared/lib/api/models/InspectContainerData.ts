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
import type { InspectContainerHostConfig } from './InspectContainerHostConfig';
import {
    InspectContainerHostConfigFromJSON,
    InspectContainerHostConfigFromJSONTyped,
    InspectContainerHostConfigToJSON,
} from './InspectContainerHostConfig';
import type { DriverData } from './DriverData';
import {
    DriverDataFromJSON,
    DriverDataFromJSONTyped,
    DriverDataToJSON,
} from './DriverData';
import type { InspectContainerState } from './InspectContainerState';
import {
    InspectContainerStateFromJSON,
    InspectContainerStateFromJSONTyped,
    InspectContainerStateToJSON,
} from './InspectContainerState';
import type { InspectNetworkSettings } from './InspectNetworkSettings';
import {
    InspectNetworkSettingsFromJSON,
    InspectNetworkSettingsFromJSONTyped,
    InspectNetworkSettingsToJSON,
} from './InspectNetworkSettings';
import type { InspectContainerConfig } from './InspectContainerConfig';
import {
    InspectContainerConfigFromJSON,
    InspectContainerConfigFromJSONTyped,
    InspectContainerConfigToJSON,
} from './InspectContainerConfig';
import type { InspectMount } from './InspectMount';
import {
    InspectMountFromJSON,
    InspectMountFromJSONTyped,
    InspectMountToJSON,
} from './InspectMount';

/**
 * InspectContainerData provides a detailed record of a container's configuration
 * and state as viewed by Libpod.
 * Large portions of this structure are defined such that the output is
 * compatible with `docker inspect` JSON, but additional fields have been added
 * as required to share information not in the original output.
 * @export
 * @interface InspectContainerData
 */
export interface InspectContainerData {
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    appArmorProfile?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InspectContainerData
     */
    args?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof InspectContainerData
     */
    boundingCaps?: Array<string>;
    /**
     * 
     * @type {InspectContainerConfig}
     * @memberof InspectContainerData
     */
    config?: InspectContainerConfig;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    conmonPidFile?: string;
    /**
     * 
     * @type {Date}
     * @memberof InspectContainerData
     */
    created?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof InspectContainerData
     */
    dependencies?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    driver?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InspectContainerData
     */
    effectiveCaps?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof InspectContainerData
     */
    execIDs?: Array<string>;
    /**
     * 
     * @type {DriverData}
     * @memberof InspectContainerData
     */
    graphDriver?: DriverData;
    /**
     * 
     * @type {InspectContainerHostConfig}
     * @memberof InspectContainerData
     */
    hostConfig?: InspectContainerHostConfig;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    hostnamePath?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    hostsPath?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    imageDigest?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    imageName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InspectContainerData
     */
    isInfra?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InspectContainerData
     */
    isService?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    kubeExitCodePropagation?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    mountLabel?: string;
    /**
     * 
     * @type {Array<InspectMount>}
     * @memberof InspectContainerData
     */
    mounts?: Array<InspectMount>;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    namespace?: string;
    /**
     * 
     * @type {InspectNetworkSettings}
     * @memberof InspectContainerData
     */
    networkSettings?: InspectNetworkSettings;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    oCIConfigPath?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    oCIRuntime?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    pidFile?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    pod?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    processLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    resolvConfPath?: string;
    /**
     * 
     * @type {number}
     * @memberof InspectContainerData
     */
    restartCount?: number;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    rootfs?: string;
    /**
     * 
     * @type {number}
     * @memberof InspectContainerData
     */
    sizeRootFs?: number;
    /**
     * 
     * @type {number}
     * @memberof InspectContainerData
     */
    sizeRw?: number;
    /**
     * 
     * @type {InspectContainerState}
     * @memberof InspectContainerData
     */
    state?: InspectContainerState;
    /**
     * 
     * @type {string}
     * @memberof InspectContainerData
     */
    staticDir?: string;
    /**
     * 
     * @type {number}
     * @memberof InspectContainerData
     */
    lockNumber?: number;
}

/**
 * Check if a given object implements the InspectContainerData interface.
 */
export function instanceOfInspectContainerData(value: object): value is InspectContainerData {
    return true;
}

export function InspectContainerDataFromJSON(json: any): InspectContainerData {
    return InspectContainerDataFromJSONTyped(json, false);
}

export function InspectContainerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectContainerData {
    if (json == null) {
        return json;
    }
    return {
        
        'appArmorProfile': json['AppArmorProfile'] == null ? undefined : json['AppArmorProfile'],
        'args': json['Args'] == null ? undefined : json['Args'],
        'boundingCaps': json['BoundingCaps'] == null ? undefined : json['BoundingCaps'],
        'config': json['Config'] == null ? undefined : InspectContainerConfigFromJSON(json['Config']),
        'conmonPidFile': json['ConmonPidFile'] == null ? undefined : json['ConmonPidFile'],
        'created': json['Created'] == null ? undefined : (new Date(json['Created'])),
        'dependencies': json['Dependencies'] == null ? undefined : json['Dependencies'],
        'driver': json['Driver'] == null ? undefined : json['Driver'],
        'effectiveCaps': json['EffectiveCaps'] == null ? undefined : json['EffectiveCaps'],
        'execIDs': json['ExecIDs'] == null ? undefined : json['ExecIDs'],
        'graphDriver': json['GraphDriver'] == null ? undefined : DriverDataFromJSON(json['GraphDriver']),
        'hostConfig': json['HostConfig'] == null ? undefined : InspectContainerHostConfigFromJSON(json['HostConfig']),
        'hostnamePath': json['HostnamePath'] == null ? undefined : json['HostnamePath'],
        'hostsPath': json['HostsPath'] == null ? undefined : json['HostsPath'],
        'id': json['Id'] == null ? undefined : json['Id'],
        'image': json['Image'] == null ? undefined : json['Image'],
        'imageDigest': json['ImageDigest'] == null ? undefined : json['ImageDigest'],
        'imageName': json['ImageName'] == null ? undefined : json['ImageName'],
        'isInfra': json['IsInfra'] == null ? undefined : json['IsInfra'],
        'isService': json['IsService'] == null ? undefined : json['IsService'],
        'kubeExitCodePropagation': json['KubeExitCodePropagation'] == null ? undefined : json['KubeExitCodePropagation'],
        'mountLabel': json['MountLabel'] == null ? undefined : json['MountLabel'],
        'mounts': json['Mounts'] == null ? undefined : ((json['Mounts'] as Array<any>).map(InspectMountFromJSON)),
        'name': json['Name'] == null ? undefined : json['Name'],
        'namespace': json['Namespace'] == null ? undefined : json['Namespace'],
        'networkSettings': json['NetworkSettings'] == null ? undefined : InspectNetworkSettingsFromJSON(json['NetworkSettings']),
        'oCIConfigPath': json['OCIConfigPath'] == null ? undefined : json['OCIConfigPath'],
        'oCIRuntime': json['OCIRuntime'] == null ? undefined : json['OCIRuntime'],
        'path': json['Path'] == null ? undefined : json['Path'],
        'pidFile': json['PidFile'] == null ? undefined : json['PidFile'],
        'pod': json['Pod'] == null ? undefined : json['Pod'],
        'processLabel': json['ProcessLabel'] == null ? undefined : json['ProcessLabel'],
        'resolvConfPath': json['ResolvConfPath'] == null ? undefined : json['ResolvConfPath'],
        'restartCount': json['RestartCount'] == null ? undefined : json['RestartCount'],
        'rootfs': json['Rootfs'] == null ? undefined : json['Rootfs'],
        'sizeRootFs': json['SizeRootFs'] == null ? undefined : json['SizeRootFs'],
        'sizeRw': json['SizeRw'] == null ? undefined : json['SizeRw'],
        'state': json['State'] == null ? undefined : InspectContainerStateFromJSON(json['State']),
        'staticDir': json['StaticDir'] == null ? undefined : json['StaticDir'],
        'lockNumber': json['lockNumber'] == null ? undefined : json['lockNumber'],
    };
}

export function InspectContainerDataToJSON(value?: InspectContainerData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'AppArmorProfile': value['appArmorProfile'],
        'Args': value['args'],
        'BoundingCaps': value['boundingCaps'],
        'Config': InspectContainerConfigToJSON(value['config']),
        'ConmonPidFile': value['conmonPidFile'],
        'Created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'Dependencies': value['dependencies'],
        'Driver': value['driver'],
        'EffectiveCaps': value['effectiveCaps'],
        'ExecIDs': value['execIDs'],
        'GraphDriver': DriverDataToJSON(value['graphDriver']),
        'HostConfig': InspectContainerHostConfigToJSON(value['hostConfig']),
        'HostnamePath': value['hostnamePath'],
        'HostsPath': value['hostsPath'],
        'Id': value['id'],
        'Image': value['image'],
        'ImageDigest': value['imageDigest'],
        'ImageName': value['imageName'],
        'IsInfra': value['isInfra'],
        'IsService': value['isService'],
        'KubeExitCodePropagation': value['kubeExitCodePropagation'],
        'MountLabel': value['mountLabel'],
        'Mounts': value['mounts'] == null ? undefined : ((value['mounts'] as Array<any>).map(InspectMountToJSON)),
        'Name': value['name'],
        'Namespace': value['namespace'],
        'NetworkSettings': InspectNetworkSettingsToJSON(value['networkSettings']),
        'OCIConfigPath': value['oCIConfigPath'],
        'OCIRuntime': value['oCIRuntime'],
        'Path': value['path'],
        'PidFile': value['pidFile'],
        'Pod': value['pod'],
        'ProcessLabel': value['processLabel'],
        'ResolvConfPath': value['resolvConfPath'],
        'RestartCount': value['restartCount'],
        'Rootfs': value['rootfs'],
        'SizeRootFs': value['sizeRootFs'],
        'SizeRw': value['sizeRw'],
        'State': InspectContainerStateToJSON(value['state']),
        'StaticDir': value['staticDir'],
        'lockNumber': value['lockNumber'],
    };
}

