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
import type { PluginEnv } from './PluginEnv';
import {
    PluginEnvFromJSON,
    PluginEnvFromJSONTyped,
    PluginEnvToJSON,
} from './PluginEnv';
import type { PluginConfigLinux } from './PluginConfigLinux';
import {
    PluginConfigLinuxFromJSON,
    PluginConfigLinuxFromJSONTyped,
    PluginConfigLinuxToJSON,
} from './PluginConfigLinux';
import type { PluginConfigArgs } from './PluginConfigArgs';
import {
    PluginConfigArgsFromJSON,
    PluginConfigArgsFromJSONTyped,
    PluginConfigArgsToJSON,
} from './PluginConfigArgs';
import type { PluginConfigRootfs } from './PluginConfigRootfs';
import {
    PluginConfigRootfsFromJSON,
    PluginConfigRootfsFromJSONTyped,
    PluginConfigRootfsToJSON,
} from './PluginConfigRootfs';
import type { PluginConfigNetwork } from './PluginConfigNetwork';
import {
    PluginConfigNetworkFromJSON,
    PluginConfigNetworkFromJSONTyped,
    PluginConfigNetworkToJSON,
} from './PluginConfigNetwork';
import type { PluginConfigInterface } from './PluginConfigInterface';
import {
    PluginConfigInterfaceFromJSON,
    PluginConfigInterfaceFromJSONTyped,
    PluginConfigInterfaceToJSON,
} from './PluginConfigInterface';
import type { PluginConfigUser } from './PluginConfigUser';
import {
    PluginConfigUserFromJSON,
    PluginConfigUserFromJSONTyped,
    PluginConfigUserToJSON,
} from './PluginConfigUser';
import type { PluginMount } from './PluginMount';
import {
    PluginMountFromJSON,
    PluginMountFromJSONTyped,
    PluginMountToJSON,
} from './PluginMount';

/**
 * 
 * @export
 * @interface PluginConfig
 */
export interface PluginConfig {
    /**
     * 
     * @type {PluginConfigArgs}
     * @memberof PluginConfig
     */
    args: PluginConfigArgs;
    /**
     * description
     * @type {string}
     * @memberof PluginConfig
     */
    description: string;
    /**
     * Docker Version used to create the plugin
     * @type {string}
     * @memberof PluginConfig
     */
    dockerVersion?: string;
    /**
     * documentation
     * @type {string}
     * @memberof PluginConfig
     */
    documentation: string;
    /**
     * entrypoint
     * @type {Array<string>}
     * @memberof PluginConfig
     */
    entrypoint: Array<string>;
    /**
     * env
     * @type {Array<PluginEnv>}
     * @memberof PluginConfig
     */
    env: Array<PluginEnv>;
    /**
     * 
     * @type {PluginConfigInterface}
     * @memberof PluginConfig
     */
    _interface: PluginConfigInterface;
    /**
     * ipc host
     * @type {boolean}
     * @memberof PluginConfig
     */
    ipcHost: boolean;
    /**
     * 
     * @type {PluginConfigLinux}
     * @memberof PluginConfig
     */
    linux: PluginConfigLinux;
    /**
     * mounts
     * @type {Array<PluginMount>}
     * @memberof PluginConfig
     */
    mounts: Array<PluginMount>;
    /**
     * 
     * @type {PluginConfigNetwork}
     * @memberof PluginConfig
     */
    network: PluginConfigNetwork;
    /**
     * pid host
     * @type {boolean}
     * @memberof PluginConfig
     */
    pidHost: boolean;
    /**
     * propagated mount
     * @type {string}
     * @memberof PluginConfig
     */
    propagatedMount: string;
    /**
     * 
     * @type {PluginConfigUser}
     * @memberof PluginConfig
     */
    user?: PluginConfigUser;
    /**
     * work dir
     * @type {string}
     * @memberof PluginConfig
     */
    workDir: string;
    /**
     * 
     * @type {PluginConfigRootfs}
     * @memberof PluginConfig
     */
    rootfs?: PluginConfigRootfs;
}

/**
 * Check if a given object implements the PluginConfig interface.
 */
export function instanceOfPluginConfig(value: object): value is PluginConfig {
    if (!('args' in value) || value['args'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('documentation' in value) || value['documentation'] === undefined) return false;
    if (!('entrypoint' in value) || value['entrypoint'] === undefined) return false;
    if (!('env' in value) || value['env'] === undefined) return false;
    if (!('_interface' in value) || value['_interface'] === undefined) return false;
    if (!('ipcHost' in value) || value['ipcHost'] === undefined) return false;
    if (!('linux' in value) || value['linux'] === undefined) return false;
    if (!('mounts' in value) || value['mounts'] === undefined) return false;
    if (!('network' in value) || value['network'] === undefined) return false;
    if (!('pidHost' in value) || value['pidHost'] === undefined) return false;
    if (!('propagatedMount' in value) || value['propagatedMount'] === undefined) return false;
    if (!('workDir' in value) || value['workDir'] === undefined) return false;
    return true;
}

export function PluginConfigFromJSON(json: any): PluginConfig {
    return PluginConfigFromJSONTyped(json, false);
}

export function PluginConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'args': PluginConfigArgsFromJSON(json['Args']),
        'description': json['Description'],
        'dockerVersion': json['DockerVersion'] == null ? undefined : json['DockerVersion'],
        'documentation': json['Documentation'],
        'entrypoint': json['Entrypoint'],
        'env': ((json['Env'] as Array<any>).map(PluginEnvFromJSON)),
        '_interface': PluginConfigInterfaceFromJSON(json['Interface']),
        'ipcHost': json['IpcHost'],
        'linux': PluginConfigLinuxFromJSON(json['Linux']),
        'mounts': ((json['Mounts'] as Array<any>).map(PluginMountFromJSON)),
        'network': PluginConfigNetworkFromJSON(json['Network']),
        'pidHost': json['PidHost'],
        'propagatedMount': json['PropagatedMount'],
        'user': json['User'] == null ? undefined : PluginConfigUserFromJSON(json['User']),
        'workDir': json['WorkDir'],
        'rootfs': json['rootfs'] == null ? undefined : PluginConfigRootfsFromJSON(json['rootfs']),
    };
}

export function PluginConfigToJSON(value?: PluginConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Args': PluginConfigArgsToJSON(value['args']),
        'Description': value['description'],
        'DockerVersion': value['dockerVersion'],
        'Documentation': value['documentation'],
        'Entrypoint': value['entrypoint'],
        'Env': ((value['env'] as Array<any>).map(PluginEnvToJSON)),
        'Interface': PluginConfigInterfaceToJSON(value['_interface']),
        'IpcHost': value['ipcHost'],
        'Linux': PluginConfigLinuxToJSON(value['linux']),
        'Mounts': ((value['mounts'] as Array<any>).map(PluginMountToJSON)),
        'Network': PluginConfigNetworkToJSON(value['network']),
        'PidHost': value['pidHost'],
        'PropagatedMount': value['propagatedMount'],
        'User': PluginConfigUserToJSON(value['user']),
        'WorkDir': value['workDir'],
        'rootfs': PluginConfigRootfsToJSON(value['rootfs']),
    };
}
