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
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';

/**
 * ContainerCgroupConfig contains configuration information about a container's
 * cgroups.
 * @export
 * @interface ContainerCgroupConfig
 */
export interface ContainerCgroupConfig {
    /**
     * CgroupParent is the container's Cgroup parent.
     * If not set, the default for the current cgroup driver will be used.
     * Optional.
     * @type {string}
     * @memberof ContainerCgroupConfig
     */
    cgroupParent?: string;
    /**
     * 
     * @type {Namespace}
     * @memberof ContainerCgroupConfig
     */
    cgroupns?: Namespace;
    /**
     * CgroupsMode sets a policy for how cgroups will be created for the
     * container, including the ability to disable creation entirely.
     * Optional.
     * @type {string}
     * @memberof ContainerCgroupConfig
     */
    cgroupsMode?: string;
}

/**
 * Check if a given object implements the ContainerCgroupConfig interface.
 */
export function instanceOfContainerCgroupConfig(value: object): value is ContainerCgroupConfig {
    return true;
}

export function ContainerCgroupConfigFromJSON(json: any): ContainerCgroupConfig {
    return ContainerCgroupConfigFromJSONTyped(json, false);
}

export function ContainerCgroupConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerCgroupConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'cgroupParent': json['cgroup_parent'] == null ? undefined : json['cgroup_parent'],
        'cgroupns': json['cgroupns'] == null ? undefined : NamespaceFromJSON(json['cgroupns']),
        'cgroupsMode': json['cgroups_mode'] == null ? undefined : json['cgroups_mode'],
    };
}

export function ContainerCgroupConfigToJSON(value?: ContainerCgroupConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cgroup_parent': value['cgroupParent'],
        'cgroupns': NamespaceToJSON(value['cgroupns']),
        'cgroups_mode': value['cgroupsMode'],
    };
}

