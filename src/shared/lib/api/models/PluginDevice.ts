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
 * PluginDevice plugin device
 * @export
 * @interface PluginDevice
 */
export interface PluginDevice {
    /**
     * description
     * @type {string}
     * @memberof PluginDevice
     */
    description: string;
    /**
     * name
     * @type {string}
     * @memberof PluginDevice
     */
    name: string;
    /**
     * path
     * @type {string}
     * @memberof PluginDevice
     */
    path: string;
    /**
     * settable
     * @type {Array<string>}
     * @memberof PluginDevice
     */
    settable: Array<string>;
}

/**
 * Check if a given object implements the PluginDevice interface.
 */
export function instanceOfPluginDevice(value: object): value is PluginDevice {
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('settable' in value) || value['settable'] === undefined) return false;
    return true;
}

export function PluginDeviceFromJSON(json: any): PluginDevice {
    return PluginDeviceFromJSONTyped(json, false);
}

export function PluginDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginDevice {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['Description'],
        'name': json['Name'],
        'path': json['Path'],
        'settable': json['Settable'],
    };
}

export function PluginDeviceToJSON(value?: PluginDevice | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Description': value['description'],
        'Name': value['name'],
        'Path': value['path'],
        'Settable': value['settable'],
    };
}

