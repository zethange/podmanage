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
 * @interface ImageConfig
 */
export interface ImageConfig {
    /**
     * ArgsEscaped
     * 
     * Deprecated: This field is present only for legacy compatibility with
     * Docker and should not be used by new image builders.  It is used by Docker
     * for Windows images to indicate that the `Entrypoint` or `Cmd` or both,
     * contains only a single element array, that is a pre-escaped, and combined
     * into a single string `CommandLine`. If `true` the value in `Entrypoint` or
     * `Cmd` should be used as-is to avoid double escaping.
     * https://github.com/opencontainers/image-spec/pull/892
     * @type {boolean}
     * @memberof ImageConfig
     */
    argsEscaped?: boolean;
    /**
     * Cmd defines the default arguments to the entrypoint of the container.
     * @type {Array<string>}
     * @memberof ImageConfig
     */
    cmd?: Array<string>;
    /**
     * Entrypoint defines a list of arguments to use as the command to execute when the container starts.
     * @type {Array<string>}
     * @memberof ImageConfig
     */
    entrypoint?: Array<string>;
    /**
     * Env is a list of environment variables to be used in a container.
     * @type {Array<string>}
     * @memberof ImageConfig
     */
    env?: Array<string>;
    /**
     * ExposedPorts a set of ports to expose from a container running this image.
     * @type {{ [key: string]: object; }}
     * @memberof ImageConfig
     */
    exposedPorts?: { [key: string]: object; };
    /**
     * Labels contains arbitrary metadata for the container.
     * @type {{ [key: string]: string; }}
     * @memberof ImageConfig
     */
    labels?: { [key: string]: string; };
    /**
     * StopSignal contains the system call signal that will be sent to the container to exit.
     * @type {string}
     * @memberof ImageConfig
     */
    stopSignal?: string;
    /**
     * User defines the username or UID which the process in the container should run as.
     * @type {string}
     * @memberof ImageConfig
     */
    user?: string;
    /**
     * Volumes is a set of directories describing where the process is likely write data specific to a container instance.
     * @type {{ [key: string]: object; }}
     * @memberof ImageConfig
     */
    volumes?: { [key: string]: object; };
    /**
     * WorkingDir sets the current working directory of the entrypoint process in the container.
     * @type {string}
     * @memberof ImageConfig
     */
    workingDir?: string;
}

/**
 * Check if a given object implements the ImageConfig interface.
 */
export function instanceOfImageConfig(value: object): value is ImageConfig {
    return true;
}

export function ImageConfigFromJSON(json: any): ImageConfig {
    return ImageConfigFromJSONTyped(json, false);
}

export function ImageConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'argsEscaped': json['ArgsEscaped'] == null ? undefined : json['ArgsEscaped'],
        'cmd': json['Cmd'] == null ? undefined : json['Cmd'],
        'entrypoint': json['Entrypoint'] == null ? undefined : json['Entrypoint'],
        'env': json['Env'] == null ? undefined : json['Env'],
        'exposedPorts': json['ExposedPorts'] == null ? undefined : json['ExposedPorts'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'stopSignal': json['StopSignal'] == null ? undefined : json['StopSignal'],
        'user': json['User'] == null ? undefined : json['User'],
        'volumes': json['Volumes'] == null ? undefined : json['Volumes'],
        'workingDir': json['WorkingDir'] == null ? undefined : json['WorkingDir'],
    };
}

export function ImageConfigToJSON(value?: ImageConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ArgsEscaped': value['argsEscaped'],
        'Cmd': value['cmd'],
        'Entrypoint': value['entrypoint'],
        'Env': value['env'],
        'ExposedPorts': value['exposedPorts'],
        'Labels': value['labels'],
        'StopSignal': value['stopSignal'],
        'User': value['user'],
        'Volumes': value['volumes'],
        'WorkingDir': value['workingDir'],
    };
}

