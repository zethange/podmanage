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
import type { InspectExecProcess } from './InspectExecProcess';
import {
    InspectExecProcessFromJSON,
    InspectExecProcessFromJSONTyped,
    InspectExecProcessToJSON,
} from './InspectExecProcess';

/**
 * 
 * @export
 * @interface InspectExecSession
 */
export interface InspectExecSession {
    /**
     * CanRemove is legacy and used purely for compatibility reasons.
     * Will always be set to true, unless the exec session is running.
     * @type {boolean}
     * @memberof InspectExecSession
     */
    canRemove?: boolean;
    /**
     * ContainerID is the ID of the container this exec session is attached
     * to.
     * @type {string}
     * @memberof InspectExecSession
     */
    containerID?: string;
    /**
     * DetachKeys are the detach keys used by the exec session.
     * If set to "" the default keys are being used.
     * Will show "<none>" if no detach keys are set.
     * @type {string}
     * @memberof InspectExecSession
     */
    detachKeys?: string;
    /**
     * ExitCode is the exit code of the exec session. Will be set to 0 if
     * the exec session has not yet exited.
     * @type {number}
     * @memberof InspectExecSession
     */
    exitCode?: number;
    /**
     * ID is the ID of the exec session.
     * @type {string}
     * @memberof InspectExecSession
     */
    iD?: string;
    /**
     * OpenStderr is whether the container's STDERR stream will be attached.
     * Always set to true if the exec session created a TTY.
     * @type {boolean}
     * @memberof InspectExecSession
     */
    openStderr?: boolean;
    /**
     * OpenStdin is whether the container's STDIN stream will be attached
     * to.
     * @type {boolean}
     * @memberof InspectExecSession
     */
    openStdin?: boolean;
    /**
     * OpenStdout is whether the container's STDOUT stream will be attached.
     * Always set to true if the exec session created a TTY.
     * @type {boolean}
     * @memberof InspectExecSession
     */
    openStdout?: boolean;
    /**
     * Pid is the PID of the exec session's process.
     * Will be set to 0 if the exec session is not running.
     * @type {number}
     * @memberof InspectExecSession
     */
    pid?: number;
    /**
     * 
     * @type {InspectExecProcess}
     * @memberof InspectExecSession
     */
    processConfig?: InspectExecProcess;
    /**
     * Running is whether the exec session is running.
     * @type {boolean}
     * @memberof InspectExecSession
     */
    running?: boolean;
}

/**
 * Check if a given object implements the InspectExecSession interface.
 */
export function instanceOfInspectExecSession(value: object): value is InspectExecSession {
    return true;
}

export function InspectExecSessionFromJSON(json: any): InspectExecSession {
    return InspectExecSessionFromJSONTyped(json, false);
}

export function InspectExecSessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): InspectExecSession {
    if (json == null) {
        return json;
    }
    return {
        
        'canRemove': json['CanRemove'] == null ? undefined : json['CanRemove'],
        'containerID': json['ContainerID'] == null ? undefined : json['ContainerID'],
        'detachKeys': json['DetachKeys'] == null ? undefined : json['DetachKeys'],
        'exitCode': json['ExitCode'] == null ? undefined : json['ExitCode'],
        'iD': json['ID'] == null ? undefined : json['ID'],
        'openStderr': json['OpenStderr'] == null ? undefined : json['OpenStderr'],
        'openStdin': json['OpenStdin'] == null ? undefined : json['OpenStdin'],
        'openStdout': json['OpenStdout'] == null ? undefined : json['OpenStdout'],
        'pid': json['Pid'] == null ? undefined : json['Pid'],
        'processConfig': json['ProcessConfig'] == null ? undefined : InspectExecProcessFromJSON(json['ProcessConfig']),
        'running': json['Running'] == null ? undefined : json['Running'],
    };
}

export function InspectExecSessionToJSON(value?: InspectExecSession | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'CanRemove': value['canRemove'],
        'ContainerID': value['containerID'],
        'DetachKeys': value['detachKeys'],
        'ExitCode': value['exitCode'],
        'ID': value['iD'],
        'OpenStderr': value['openStderr'],
        'OpenStdin': value['openStdin'],
        'OpenStdout': value['openStdout'],
        'Pid': value['pid'],
        'ProcessConfig': InspectExecProcessToJSON(value['processConfig']),
        'Running': value['running'],
    };
}

