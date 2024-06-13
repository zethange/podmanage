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
import type { LogConfigLibpod } from './LogConfigLibpod';
import {
    LogConfigLibpodFromJSON,
    LogConfigLibpodFromJSONTyped,
    LogConfigLibpodToJSON,
} from './LogConfigLibpod';
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';
import type { LinuxPersonality } from './LinuxPersonality';
import {
    LinuxPersonalityFromJSON,
    LinuxPersonalityFromJSONTyped,
    LinuxPersonalityToJSON,
} from './LinuxPersonality';

/**
 * 
 * @export
 * @interface ContainerBasicConfig
 */
export interface ContainerBasicConfig {
    /**
     * Annotations are key-value options passed into the container runtime
     * that can be used to trigger special behavior.
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof ContainerBasicConfig
     */
    annotations?: { [key: string]: string; };
    /**
     * Command is the container's command.
     * If not given and Image is specified, this will be populated by the
     * image's configuration.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    command?: Array<string>;
    /**
     * ConmonPidFile is a path at which a PID file for Conmon will be
     * placed.
     * If not given, a default location will be used.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    conmonPidFile?: string;
    /**
     * ContainerCreateCommand is the command that was used to create this
     * container.
     * This will be shown in the output of Inspect() on the container, and
     * may also be used by some tools that wish to recreate the container
     * (e.g. `podman generate systemd --new`).
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    containerCreateCommand?: Array<string>;
    /**
     * DependencyContainers is an array of containers this container
     * depends on. Dependency containers must be started before this
     * container. Dependencies can be specified by name or full/partial ID.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    dependencyContainers?: Array<string>;
    /**
     * Entrypoint is the container's entrypoint.
     * If not given and Image is specified, this will be populated by the
     * image's configuration.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    entrypoint?: Array<string>;
    /**
     * Env is a set of environment variables that will be set in the
     * container.
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof ContainerBasicConfig
     */
    env?: { [key: string]: string; };
    /**
     * EnvHost indicates that the host environment should be added to container
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    envHost?: boolean;
    /**
     * EnvMerge takes the specified environment variables from image and preprocess them before injecting them into the
     * container.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    envmerge?: Array<string>;
    /**
     * GroupEntry specifies an arbitrary string to append to the container's /etc/group file.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    groupEntry?: string;
    /**
     * Hostname is the container's hostname. If not set, the hostname will
     * not be modified (if UtsNS is not private) or will be set to the
     * container ID (if UtsNS is private).
     * Conflicts with UtsNS if UtsNS is not set to private.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    hostname?: string;
    /**
     * HostUsers is a list of host usernames or UIDs to add to the container
     * etc/passwd file
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    hostusers?: Array<string>;
    /**
     * EnvHTTPProxy indicates that the http host proxy environment variables
     * should be added to container
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    httpproxy?: boolean;
    /**
     * InitContainerType describes if this container is an init container
     * and if so, what type: always or once.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    initContainerType?: string;
    /**
     * Labels are key-value pairs that are used to add metadata to
     * containers.
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof ContainerBasicConfig
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {LogConfigLibpod}
     * @memberof ContainerBasicConfig
     */
    logConfiguration?: LogConfigLibpod;
    /**
     * Passwd is a container run option that determines if we are validating users/groups before running the container
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    managePassword?: boolean;
    /**
     * Name is the name the container will be given.
     * If no name is provided, one will be randomly generated.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    name?: string;
    /**
     * OCIRuntime is the name of the OCI runtime that will be used to create
     * the container.
     * If not specified, the default will be used.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    ociRuntime?: string;
    /**
     * PasswdEntry specifies an arbitrary string to append to the container's /etc/passwd file.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    passwdEntry?: string;
    /**
     * 
     * @type {LinuxPersonality}
     * @memberof ContainerBasicConfig
     */
    personality?: LinuxPersonality;
    /**
     * 
     * @type {Namespace}
     * @memberof ContainerBasicConfig
     */
    pidns?: Namespace;
    /**
     * Pod is the ID of the pod the container will join.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    pod?: string;
    /**
     * Remove indicates if the container should be removed once it has been started
     * and exits.
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    remove?: boolean;
    /**
     * RestartPolicy is the container's restart policy - an action which
     * will be taken when the container exits.
     * If not given, the default policy, which does nothing, will be used.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    restartPolicy?: string;
    /**
     * RestartRetries is the number of attempts that will be made to restart
     * the container.
     * Only available when RestartPolicy is set to "on-failure".
     * Optional.
     * @type {number}
     * @memberof ContainerBasicConfig
     */
    restartTries?: number;
    /**
     * Determine how to handle the NOTIFY_SOCKET - do we participate or pass it through
     * "container" - let the OCI runtime deal with it, advertise conmon's MAINPID
     * "conmon-only" - advertise conmon's MAINPID, send READY when started, don't pass to OCI
     * "ignore" - unset NOTIFY_SOCKET
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    sdnotifyMode?: string;
    /**
     * EnvSecrets are secrets that will be set as environment variables
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof ContainerBasicConfig
     */
    secretEnv?: { [key: string]: string; };
    /**
     * Stdin is whether the container will keep its STDIN open.
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    stdin?: boolean;
    /**
     * It implements the os.Signal interface.
     * @type {number}
     * @memberof ContainerBasicConfig
     */
    stopSignal?: number;
    /**
     * StopTimeout is a timeout between the container's stop signal being
     * sent and SIGKILL being sent.
     * If not provided, the default will be used.
     * If 0 is used, stop signal will not be sent, and SIGKILL will be sent
     * instead.
     * Optional.
     * @type {number}
     * @memberof ContainerBasicConfig
     */
    stopTimeout?: number;
    /**
     * Sysctl sets kernel parameters for the container
     * @type {{ [key: string]: string; }}
     * @memberof ContainerBasicConfig
     */
    sysctl?: { [key: string]: string; };
    /**
     * Systemd is whether the container will be started in systemd mode.
     * Valid options are "true", "false", and "always".
     * "true" enables this mode only if the binary run in the container is
     * sbin/init or systemd. "always" unconditionally enables systemd mode.
     * "false" unconditionally disables systemd mode.
     * If enabled, mounts and stop signal will be modified.
     * If set to "always" or set to "true" and conditionally triggered,
     * conflicts with StopSignal.
     * If not specified, "false" will be assumed.
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    systemd?: string;
    /**
     * Terminal is whether the container will create a PTY.
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    terminal?: boolean;
    /**
     * Timeout is a maximum time in seconds the container will run before
     * main process is sent SIGKILL.
     * If 0 is used, signal will not be sent. Container can run indefinitely
     * if they do not stop after the default termination signal.
     * Optional.
     * @type {number}
     * @memberof ContainerBasicConfig
     */
    timeout?: number;
    /**
     * Timezone is the timezone inside the container.
     * Local means it has the same timezone as the host machine
     * Optional.
     * @type {string}
     * @memberof ContainerBasicConfig
     */
    timezone?: string;
    /**
     * UnsetEnv unsets the specified default environment variables from the image or from buildin or containers.conf
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerBasicConfig
     */
    unsetenv?: Array<string>;
    /**
     * UnsetEnvAll unsetall default environment variables from the image or from buildin or containers.conf
     * UnsetEnvAll unsets all default environment variables from the image or from buildin
     * Optional.
     * @type {boolean}
     * @memberof ContainerBasicConfig
     */
    unsetenvall?: boolean;
    /**
     * 
     * @type {Namespace}
     * @memberof ContainerBasicConfig
     */
    utsns?: Namespace;
}

/**
 * Check if a given object implements the ContainerBasicConfig interface.
 */
export function instanceOfContainerBasicConfig(value: object): value is ContainerBasicConfig {
    return true;
}

export function ContainerBasicConfigFromJSON(json: any): ContainerBasicConfig {
    return ContainerBasicConfigFromJSONTyped(json, false);
}

export function ContainerBasicConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerBasicConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'command': json['command'] == null ? undefined : json['command'],
        'conmonPidFile': json['conmon_pid_file'] == null ? undefined : json['conmon_pid_file'],
        'containerCreateCommand': json['containerCreateCommand'] == null ? undefined : json['containerCreateCommand'],
        'dependencyContainers': json['dependencyContainers'] == null ? undefined : json['dependencyContainers'],
        'entrypoint': json['entrypoint'] == null ? undefined : json['entrypoint'],
        'env': json['env'] == null ? undefined : json['env'],
        'envHost': json['env_host'] == null ? undefined : json['env_host'],
        'envmerge': json['envmerge'] == null ? undefined : json['envmerge'],
        'groupEntry': json['group_entry'] == null ? undefined : json['group_entry'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
        'hostusers': json['hostusers'] == null ? undefined : json['hostusers'],
        'httpproxy': json['httpproxy'] == null ? undefined : json['httpproxy'],
        'initContainerType': json['init_container_type'] == null ? undefined : json['init_container_type'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'logConfiguration': json['log_configuration'] == null ? undefined : LogConfigLibpodFromJSON(json['log_configuration']),
        'managePassword': json['manage_password'] == null ? undefined : json['manage_password'],
        'name': json['name'] == null ? undefined : json['name'],
        'ociRuntime': json['oci_runtime'] == null ? undefined : json['oci_runtime'],
        'passwdEntry': json['passwd_entry'] == null ? undefined : json['passwd_entry'],
        'personality': json['personality'] == null ? undefined : LinuxPersonalityFromJSON(json['personality']),
        'pidns': json['pidns'] == null ? undefined : NamespaceFromJSON(json['pidns']),
        'pod': json['pod'] == null ? undefined : json['pod'],
        'remove': json['remove'] == null ? undefined : json['remove'],
        'restartPolicy': json['restart_policy'] == null ? undefined : json['restart_policy'],
        'restartTries': json['restart_tries'] == null ? undefined : json['restart_tries'],
        'sdnotifyMode': json['sdnotifyMode'] == null ? undefined : json['sdnotifyMode'],
        'secretEnv': json['secret_env'] == null ? undefined : json['secret_env'],
        'stdin': json['stdin'] == null ? undefined : json['stdin'],
        'stopSignal': json['stop_signal'] == null ? undefined : json['stop_signal'],
        'stopTimeout': json['stop_timeout'] == null ? undefined : json['stop_timeout'],
        'sysctl': json['sysctl'] == null ? undefined : json['sysctl'],
        'systemd': json['systemd'] == null ? undefined : json['systemd'],
        'terminal': json['terminal'] == null ? undefined : json['terminal'],
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
        'timezone': json['timezone'] == null ? undefined : json['timezone'],
        'unsetenv': json['unsetenv'] == null ? undefined : json['unsetenv'],
        'unsetenvall': json['unsetenvall'] == null ? undefined : json['unsetenvall'],
        'utsns': json['utsns'] == null ? undefined : NamespaceFromJSON(json['utsns']),
    };
}

export function ContainerBasicConfigToJSON(value?: ContainerBasicConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'annotations': value['annotations'],
        'command': value['command'],
        'conmon_pid_file': value['conmonPidFile'],
        'containerCreateCommand': value['containerCreateCommand'],
        'dependencyContainers': value['dependencyContainers'],
        'entrypoint': value['entrypoint'],
        'env': value['env'],
        'env_host': value['envHost'],
        'envmerge': value['envmerge'],
        'group_entry': value['groupEntry'],
        'hostname': value['hostname'],
        'hostusers': value['hostusers'],
        'httpproxy': value['httpproxy'],
        'init_container_type': value['initContainerType'],
        'labels': value['labels'],
        'log_configuration': LogConfigLibpodToJSON(value['logConfiguration']),
        'manage_password': value['managePassword'],
        'name': value['name'],
        'oci_runtime': value['ociRuntime'],
        'passwd_entry': value['passwdEntry'],
        'personality': LinuxPersonalityToJSON(value['personality']),
        'pidns': NamespaceToJSON(value['pidns']),
        'pod': value['pod'],
        'remove': value['remove'],
        'restart_policy': value['restartPolicy'],
        'restart_tries': value['restartTries'],
        'sdnotifyMode': value['sdnotifyMode'],
        'secret_env': value['secretEnv'],
        'stdin': value['stdin'],
        'stop_signal': value['stopSignal'],
        'stop_timeout': value['stopTimeout'],
        'sysctl': value['sysctl'],
        'systemd': value['systemd'],
        'terminal': value['terminal'],
        'timeout': value['timeout'],
        'timezone': value['timezone'],
        'unsetenv': value['unsetenv'],
        'unsetenvall': value['unsetenvall'],
        'utsns': NamespaceToJSON(value['utsns']),
    };
}

