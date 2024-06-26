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
import type { IDMappingOptions } from './IDMappingOptions';
import {
    IDMappingOptionsFromJSON,
    IDMappingOptionsFromJSONTyped,
    IDMappingOptionsToJSON,
} from './IDMappingOptions';
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';

/**
 * ContainerSecurityConfig is a container's security features, including
 * SELinux, Apparmor, and Seccomp.
 * @export
 * @interface ContainerSecurityConfig
 */
export interface ContainerSecurityConfig {
    /**
     * ApparmorProfile is the name of the Apparmor profile the container
     * will use.
     * Optional.
     * @type {string}
     * @memberof ContainerSecurityConfig
     */
    apparmorProfile?: string;
    /**
     * CapAdd are capabilities which will be added to the container.
     * Conflicts with Privileged.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    capAdd?: Array<string>;
    /**
     * CapDrop are capabilities which will be removed from the container.
     * Conflicts with Privileged.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    capDrop?: Array<string>;
    /**
     * Groups are a list of supplemental groups the container's user will
     * be granted access to.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    groups?: Array<string>;
    /**
     * 
     * @type {IDMappingOptions}
     * @memberof ContainerSecurityConfig
     */
    idmappings?: IDMappingOptions;
    /**
     * LabelNested indicates whether or not the container is allowed to
     * run fully nested containers including SELinux labelling.
     * Optional.
     * @type {boolean}
     * @memberof ContainerSecurityConfig
     */
    labelNested?: boolean;
    /**
     * Mask is the path we want to mask in the container. This masks the paths
     * given in addition to the default list.
     * Optional
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    mask?: Array<string>;
    /**
     * NoNewPrivileges is whether the container will set the no new
     * privileges flag on create, which disables gaining additional
     * privileges (e.g. via setuid) in the container.
     * Optional.
     * @type {boolean}
     * @memberof ContainerSecurityConfig
     */
    noNewPrivileges?: boolean;
    /**
     * Privileged is whether the container is privileged.
     * Privileged does the following:
     * Adds all devices on the system to the container.
     * Adds all capabilities to the container.
     * Disables Seccomp, SELinux, and Apparmor confinement.
     * (Though SELinux can be manually re-enabled).
     * TODO: this conflicts with things.
     * TODO: this does more.
     * Optional.
     * @type {boolean}
     * @memberof ContainerSecurityConfig
     */
    privileged?: boolean;
    /**
     * ProcOpts are the options used for the proc mount.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    procfsOpts?: Array<string>;
    /**
     * ReadOnlyFilesystem indicates that everything will be mounted
     * as read-only.
     * Optional.
     * @type {boolean}
     * @memberof ContainerSecurityConfig
     */
    readOnlyFilesystem?: boolean;
    /**
     * ReadWriteTmpfs indicates that when running with a ReadOnlyFilesystem
     * mount temporary file systems.
     * Optional.
     * @type {boolean}
     * @memberof ContainerSecurityConfig
     */
    readWriteTmpfs?: boolean;
    /**
     * SeccompPolicy determines which seccomp profile gets applied
     * the container. valid values: empty,default,image
     * @type {string}
     * @memberof ContainerSecurityConfig
     */
    seccompPolicy?: string;
    /**
     * SeccompProfilePath is the path to a JSON file containing the
     * container's Seccomp profile.
     * If not specified, no Seccomp profile will be used.
     * Optional.
     * @type {string}
     * @memberof ContainerSecurityConfig
     */
    seccompProfilePath?: string;
    /**
     * SelinuxProcessLabel is the process label the container will use.
     * If SELinux is enabled and this is not specified, a label will be
     * automatically generated if not specified.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    selinuxOpts?: Array<string>;
    /**
     * Umask is the umask the init process of the container will be run with.
     * @type {string}
     * @memberof ContainerSecurityConfig
     */
    umask?: string;
    /**
     * Unmask a path in the container. Some paths are masked by default,
     * preventing them from being accessed within the container; this undoes
     * that masking. If ALL is passed, all paths will be unmasked.
     * Optional.
     * @type {Array<string>}
     * @memberof ContainerSecurityConfig
     */
    unmask?: Array<string>;
    /**
     * User is the user the container will be run as.
     * Can be given as a UID or a username; if a username, it will be
     * resolved within the container, using the container's /etc/passwd.
     * If unset, the container will be run as root.
     * Optional.
     * @type {string}
     * @memberof ContainerSecurityConfig
     */
    user?: string;
    /**
     * 
     * @type {Namespace}
     * @memberof ContainerSecurityConfig
     */
    userns?: Namespace;
}

/**
 * Check if a given object implements the ContainerSecurityConfig interface.
 */
export function instanceOfContainerSecurityConfig(value: object): value is ContainerSecurityConfig {
    return true;
}

export function ContainerSecurityConfigFromJSON(json: any): ContainerSecurityConfig {
    return ContainerSecurityConfigFromJSONTyped(json, false);
}

export function ContainerSecurityConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContainerSecurityConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'apparmorProfile': json['apparmor_profile'] == null ? undefined : json['apparmor_profile'],
        'capAdd': json['cap_add'] == null ? undefined : json['cap_add'],
        'capDrop': json['cap_drop'] == null ? undefined : json['cap_drop'],
        'groups': json['groups'] == null ? undefined : json['groups'],
        'idmappings': json['idmappings'] == null ? undefined : IDMappingOptionsFromJSON(json['idmappings']),
        'labelNested': json['label_nested'] == null ? undefined : json['label_nested'],
        'mask': json['mask'] == null ? undefined : json['mask'],
        'noNewPrivileges': json['no_new_privileges'] == null ? undefined : json['no_new_privileges'],
        'privileged': json['privileged'] == null ? undefined : json['privileged'],
        'procfsOpts': json['procfs_opts'] == null ? undefined : json['procfs_opts'],
        'readOnlyFilesystem': json['read_only_filesystem'] == null ? undefined : json['read_only_filesystem'],
        'readWriteTmpfs': json['read_write_tmpfs'] == null ? undefined : json['read_write_tmpfs'],
        'seccompPolicy': json['seccomp_policy'] == null ? undefined : json['seccomp_policy'],
        'seccompProfilePath': json['seccomp_profile_path'] == null ? undefined : json['seccomp_profile_path'],
        'selinuxOpts': json['selinux_opts'] == null ? undefined : json['selinux_opts'],
        'umask': json['umask'] == null ? undefined : json['umask'],
        'unmask': json['unmask'] == null ? undefined : json['unmask'],
        'user': json['user'] == null ? undefined : json['user'],
        'userns': json['userns'] == null ? undefined : NamespaceFromJSON(json['userns']),
    };
}

export function ContainerSecurityConfigToJSON(value?: ContainerSecurityConfig | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apparmor_profile': value['apparmorProfile'],
        'cap_add': value['capAdd'],
        'cap_drop': value['capDrop'],
        'groups': value['groups'],
        'idmappings': IDMappingOptionsToJSON(value['idmappings']),
        'label_nested': value['labelNested'],
        'mask': value['mask'],
        'no_new_privileges': value['noNewPrivileges'],
        'privileged': value['privileged'],
        'procfs_opts': value['procfsOpts'],
        'read_only_filesystem': value['readOnlyFilesystem'],
        'read_write_tmpfs': value['readWriteTmpfs'],
        'seccomp_policy': value['seccompPolicy'],
        'seccomp_profile_path': value['seccompProfilePath'],
        'selinux_opts': value['selinuxOpts'],
        'umask': value['umask'],
        'unmask': value['unmask'],
        'user': value['user'],
        'userns': NamespaceToJSON(value['userns']),
    };
}

