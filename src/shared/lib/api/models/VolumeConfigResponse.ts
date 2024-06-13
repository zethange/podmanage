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
 * @interface VolumeConfigResponse
 */
export interface VolumeConfigResponse {
    /**
     * Anonymous indicates that the volume was created as an anonymous
     * volume for a specific container, and will be removed when any
     * container using it is removed.
     * @type {boolean}
     * @memberof VolumeConfigResponse
     */
    anonymous?: boolean;
    /**
     * CreatedAt is the date and time the volume was created at. This is not
     * stored for older Libpod volumes; if so, it will be omitted.
     * @type {Date}
     * @memberof VolumeConfigResponse
     */
    createdAt?: Date;
    /**
     * Driver is the driver used to create the volume.
     * If set to "local" or "", the Local driver (Podman built-in code) is
     * used to service the volume; otherwise, a volume plugin with the given
     * name is used to mount and manage the volume.
     * @type {string}
     * @memberof VolumeConfigResponse
     */
    driver?: string;
    /**
     * GID is the GID that the volume was created with.
     * @type {number}
     * @memberof VolumeConfigResponse
     */
    gID?: number;
    /**
     * Labels includes the volume's configured labels, key:value pairs that
     * can be passed during volume creation to provide information for third
     * party tools.
     * @type {{ [key: string]: string; }}
     * @memberof VolumeConfigResponse
     */
    labels?: { [key: string]: string; };
    /**
     * LockNumber is the number of the volume's Libpod lock.
     * @type {number}
     * @memberof VolumeConfigResponse
     */
    lockNumber?: number;
    /**
     * MountCount is the number of times this volume has been mounted.
     * @type {number}
     * @memberof VolumeConfigResponse
     */
    mountCount?: number;
    /**
     * Mountpoint is the path on the host where the volume is mounted.
     * @type {string}
     * @memberof VolumeConfigResponse
     */
    mountpoint?: string;
    /**
     * Name is the name of the volume.
     * @type {string}
     * @memberof VolumeConfigResponse
     */
    name?: string;
    /**
     * NeedsChown indicates that the next time the volume is mounted into
     * a container, the container will chown the volume to the container process
     * UID/GID.
     * @type {boolean}
     * @memberof VolumeConfigResponse
     */
    needsChown?: boolean;
    /**
     * NeedsCopyUp indicates that the next time the volume is mounted into
     * @type {boolean}
     * @memberof VolumeConfigResponse
     */
    needsCopyUp?: boolean;
    /**
     * Options is a set of options that were used when creating the volume.
     * For the Local driver, these are mount options that will be used to
     * determine how a local filesystem is mounted; they are handled as
     * parameters to Mount in a manner described in the volume create
     * manpage.
     * For non-local drivers, these are passed as-is to the volume plugin.
     * @type {{ [key: string]: string; }}
     * @memberof VolumeConfigResponse
     */
    options?: { [key: string]: string; };
    /**
     * Scope is unused and provided solely for Docker compatibility. It is
     * unconditionally set to "local".
     * @type {string}
     * @memberof VolumeConfigResponse
     */
    scope?: string;
    /**
     * Status is used to return information on the volume's current state,
     * if the volume was created using a volume plugin (uses a Driver that
     * is not the local driver).
     * Status is provided to us by an external program, so no guarantees are
     * made about its format or contents. Further, it is an optional field,
     * so it may not be set even in cases where a volume plugin is in use.
     * @type {{ [key: string]: object; }}
     * @memberof VolumeConfigResponse
     */
    status?: { [key: string]: object; };
    /**
     * StorageID is the ID of the container backing the volume in c/storage.
     * Only used with Image Volumes.
     * @type {string}
     * @memberof VolumeConfigResponse
     */
    storageID?: string;
    /**
     * Timeout is the specified driver timeout if given
     * @type {number}
     * @memberof VolumeConfigResponse
     */
    timeout?: number;
    /**
     * UID is the UID that the volume was created with.
     * @type {number}
     * @memberof VolumeConfigResponse
     */
    uID?: number;
}

/**
 * Check if a given object implements the VolumeConfigResponse interface.
 */
export function instanceOfVolumeConfigResponse(value: object): value is VolumeConfigResponse {
    return true;
}

export function VolumeConfigResponseFromJSON(json: any): VolumeConfigResponse {
    return VolumeConfigResponseFromJSONTyped(json, false);
}

export function VolumeConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolumeConfigResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'anonymous': json['Anonymous'] == null ? undefined : json['Anonymous'],
        'createdAt': json['CreatedAt'] == null ? undefined : (new Date(json['CreatedAt'])),
        'driver': json['Driver'] == null ? undefined : json['Driver'],
        'gID': json['GID'] == null ? undefined : json['GID'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'lockNumber': json['LockNumber'] == null ? undefined : json['LockNumber'],
        'mountCount': json['MountCount'] == null ? undefined : json['MountCount'],
        'mountpoint': json['Mountpoint'] == null ? undefined : json['Mountpoint'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'needsChown': json['NeedsChown'] == null ? undefined : json['NeedsChown'],
        'needsCopyUp': json['NeedsCopyUp'] == null ? undefined : json['NeedsCopyUp'],
        'options': json['Options'] == null ? undefined : json['Options'],
        'scope': json['Scope'] == null ? undefined : json['Scope'],
        'status': json['Status'] == null ? undefined : json['Status'],
        'storageID': json['StorageID'] == null ? undefined : json['StorageID'],
        'timeout': json['Timeout'] == null ? undefined : json['Timeout'],
        'uID': json['UID'] == null ? undefined : json['UID'],
    };
}

export function VolumeConfigResponseToJSON(value?: VolumeConfigResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Anonymous': value['anonymous'],
        'CreatedAt': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
        'Driver': value['driver'],
        'GID': value['gID'],
        'Labels': value['labels'],
        'LockNumber': value['lockNumber'],
        'MountCount': value['mountCount'],
        'Mountpoint': value['mountpoint'],
        'Name': value['name'],
        'NeedsChown': value['needsChown'],
        'NeedsCopyUp': value['needsCopyUp'],
        'Options': value['options'],
        'Scope': value['scope'],
        'Status': value['status'],
        'StorageID': value['storageID'],
        'Timeout': value['timeout'],
        'UID': value['uID'],
    };
}

