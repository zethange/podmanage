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
 * @interface ContainerExecRequest
 */
export interface ContainerExecRequest {
    /**
     * Attach to stderr of the exec command
     * @type {boolean}
     * @memberof ContainerExecRequest
     */
    attachStderr?: boolean;
    /**
     * Attach to stdin of the exec command
     * @type {boolean}
     * @memberof ContainerExecRequest
     */
    attachStdin?: boolean;
    /**
     * Attach to stdout of the exec command
     * @type {boolean}
     * @memberof ContainerExecRequest
     */
    attachStdout?: boolean;
    /**
     * Command to run, as a string or array of strings.
     * @type {Array<string>}
     * @memberof ContainerExecRequest
     */
    cmd?: Array<string>;
    /**
     * "Override the key sequence for detaching a container. Format is a single character [a-Z] or ctrl-<value> where <value> is one of: a-z, @, ^, [, , or _."
     * 
     * @type {string}
     * @memberof ContainerExecRequest
     */
    detachKeys?: string;
    /**
     * A list of environment variables in the form ["VAR=value", ...]
     * @type {Array<string>}
     * @memberof ContainerExecRequest
     */
    env?: Array<string>;
    /**
     * Runs the exec process with extended privileges
     * @type {boolean}
     * @memberof ContainerExecRequest
     */
    privileged?: boolean;
    /**
     * Allocate a pseudo-TTY
     * @type {boolean}
     * @memberof ContainerExecRequest
     */
    tty?: boolean;
    /**
     * "The user, and optionally, group to run the exec process inside the container. Format is one of: user, user:group, uid, or uid:gid."
     * 
     * @type {string}
     * @memberof ContainerExecRequest
     */
    user?: string;
    /**
     * The working directory for the exec process inside the container.
     * @type {string}
     * @memberof ContainerExecRequest
     */
    workingDir?: string;
}

/**
 * Check if a given object implements the ContainerExecRequest interface.
 */
export function instanceOfContainerExecRequest(value: object): value is ContainerExecRequest {
    return true;
}

export function ContainerExecRequestFromJSON(json: any): ContainerExecRequest {
    return ContainerExecRequestFromJSONTyped(json, false);
}

export function ContainerExecRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerExecRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'attachStderr': json['AttachStderr'] == null ? undefined : json['AttachStderr'],
        'attachStdin': json['AttachStdin'] == null ? undefined : json['AttachStdin'],
        'attachStdout': json['AttachStdout'] == null ? undefined : json['AttachStdout'],
        'cmd': json['Cmd'] == null ? undefined : json['Cmd'],
        'detachKeys': json['DetachKeys'] == null ? undefined : json['DetachKeys'],
        'env': json['Env'] == null ? undefined : json['Env'],
        'privileged': json['Privileged'] == null ? undefined : json['Privileged'],
        'tty': json['Tty'] == null ? undefined : json['Tty'],
        'user': json['User'] == null ? undefined : json['User'],
        'workingDir': json['WorkingDir'] == null ? undefined : json['WorkingDir'],
    };
}

export function ContainerExecRequestToJSON(value?: ContainerExecRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'AttachStderr': value['attachStderr'],
        'AttachStdin': value['attachStdin'],
        'AttachStdout': value['attachStdout'],
        'Cmd': value['cmd'],
        'DetachKeys': value['detachKeys'],
        'Env': value['env'],
        'Privileged': value['privileged'],
        'Tty': value['tty'],
        'User': value['user'],
        'WorkingDir': value['workingDir'],
    };
}

