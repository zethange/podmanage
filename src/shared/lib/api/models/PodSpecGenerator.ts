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
import type { LinuxThrottleDevice } from './LinuxThrottleDevice';
import {
    LinuxThrottleDeviceFromJSON,
    LinuxThrottleDeviceFromJSONTyped,
    LinuxThrottleDeviceToJSON,
} from './LinuxThrottleDevice';
import type { PerNetworkOptions } from './PerNetworkOptions';
import {
    PerNetworkOptionsFromJSON,
    PerNetworkOptionsFromJSONTyped,
    PerNetworkOptionsToJSON,
} from './PerNetworkOptions';
import type { Mount } from './Mount';
import {
    MountFromJSON,
    MountFromJSONTyped,
    MountToJSON,
} from './Mount';
import type { NamedVolume } from './NamedVolume';
import {
    NamedVolumeFromJSON,
    NamedVolumeFromJSONTyped,
    NamedVolumeToJSON,
} from './NamedVolume';
import type { OverlayVolume } from './OverlayVolume';
import {
    OverlayVolumeFromJSON,
    OverlayVolumeFromJSONTyped,
    OverlayVolumeToJSON,
} from './OverlayVolume';
import type { IDMappingOptions } from './IDMappingOptions';
import {
    IDMappingOptionsFromJSON,
    IDMappingOptionsFromJSONTyped,
    IDMappingOptionsToJSON,
} from './IDMappingOptions';
import type { PortMapping } from './PortMapping';
import {
    PortMappingFromJSON,
    PortMappingFromJSONTyped,
    PortMappingToJSON,
} from './PortMapping';
import type { ImageVolume } from './ImageVolume';
import {
    ImageVolumeFromJSON,
    ImageVolumeFromJSONTyped,
    ImageVolumeToJSON,
} from './ImageVolume';
import type { LinuxResources } from './LinuxResources';
import {
    LinuxResourcesFromJSON,
    LinuxResourcesFromJSONTyped,
    LinuxResourcesToJSON,
} from './LinuxResources';
import type { Namespace } from './Namespace';
import {
    NamespaceFromJSON,
    NamespaceFromJSONTyped,
    NamespaceToJSON,
} from './Namespace';

/**
 * PodSpecGenerator describes options to create a pod
 * @export
 * @interface PodSpecGenerator
 */
export interface PodSpecGenerator {
    /**
     * Map of networks names to ids the container should join to.
     * You can request additional settings for each network, you can
     * set network aliases, static ips, static mac address  and the
     * network interface name for this container on the specific network.
     * If the map is empty and the bridge network mode is set the container
     * will be joined to the default network.
     * @type {{ [key: string]: PerNetworkOptions; }}
     * @memberof PodSpecGenerator
     */
    networks?: { [key: string]: PerNetworkOptions; };
    /**
     * CgroupParent is the parent for the Cgroup that the pod will create.
     * This pod cgroup will, in turn, be the default cgroup parent for all
     * containers in the pod.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    cgroupParent?: string;
    /**
     * CNINetworks is a list of CNI networks to join the container to.
     * If this list is empty, the default CNI network will be joined
     * instead. If at least one entry is present, we will not join the
     * default network (unless it is part of this list).
     * Only available if NetNS is set to bridge.
     * Optional.
     * Deprecated: as of podman 4.0 use "Networks" instead.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    cniNetworks?: Array<string>;
    /**
     * CPU period of the cpuset, determined by --cpus
     * @type {number}
     * @memberof PodSpecGenerator
     */
    cpuPeriod?: number;
    /**
     * CPU quota of the cpuset, determined by --cpus
     * @type {number}
     * @memberof PodSpecGenerator
     */
    cpuQuota?: number;
    /**
     * DNSOption is a set of DNS options that will be used in the infra
     * container's resolv.conf, which will, by default, be shared with all
     * containers in the pod.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    dnsOption?: Array<string>;
    /**
     * DNSSearch is a set of DNS search domains that will be used in the
     * infra container's resolv.conf, which will, by default, be shared with
     * all containers in the pod.
     * If not provided, DNS search domains from the host's resolv.conf will
     * be used.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    dnsSearch?: Array<string>;
    /**
     * DNSServer is a set of DNS servers that will be used in the infra
     * container's resolv.conf, which will, by default, be shared with all
     * containers in the pod.
     * If not provided, the host's DNS servers will be used, unless the only
     * server set is a localhost address. As the container cannot connect to
     * the host's localhost, a default server will instead be set.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    dnsServer?: Array<string>;
    /**
     * ExitPolicy determines the pod's exit and stop behaviour.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    exitPolicy?: string;
    /**
     * HostAdd is a set of hosts that will be added to the infra container's
     * etc/hosts that will, by default, be shared with all containers in
     * the pod.
     * Conflicts with NoInfra=true and NoManageHosts.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    hostadd?: Array<string>;
    /**
     * Hostname is the pod's hostname. If not set, the name of the pod will
     * be used (if a name was not provided here, the name auto-generated for
     * the pod will be used). This will be used by the infra container and
     * all containers in the pod as long as the UTS namespace is shared.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    hostname?: string;
    /**
     * 
     * @type {IDMappingOptions}
     * @memberof PodSpecGenerator
     */
    idmappings?: IDMappingOptions;
    /**
     * Image volumes bind-mount a container-image mount into the pod's infra container.
     * Optional.
     * @type {Array<ImageVolume>}
     * @memberof PodSpecGenerator
     */
    imageVolumes?: Array<ImageVolume>;
    /**
     * InfraCommand sets the command that will be used to start the infra
     * container.
     * If not set, the default set in the Libpod configuration file will be
     * used.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    infraCommand?: Array<string>;
    /**
     * InfraConmonPidFile is a custom path to store the infra container's
     * conmon PID.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    infraConmonPidFile?: string;
    /**
     * InfraImage is the image that will be used for the infra container.
     * If not set, the default set in the Libpod configuration file will be
     * used.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    infraImage?: string;
    /**
     * InfraName is the name that will be used for the infra container.
     * If not set, the default set in the Libpod configuration file will be
     * used.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    infraName?: string;
    /**
     * 
     * @type {Namespace}
     * @memberof PodSpecGenerator
     */
    ipcns?: Namespace;
    /**
     * Labels are key-value pairs that are used to add metadata to pods.
     * Optional.
     * @type {{ [key: string]: string; }}
     * @memberof PodSpecGenerator
     */
    labels?: { [key: string]: string; };
    /**
     * Mounts are mounts that will be added to the pod.
     * These will supersede Image Volumes and VolumesFrom volumes where
     * there are conflicts.
     * Optional.
     * @type {Array<Mount>}
     * @memberof PodSpecGenerator
     */
    mounts?: Array<Mount>;
    /**
     * Name is the name of the pod.
     * If not provided, a name will be generated when the pod is created.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    name?: string;
    /**
     * 
     * @type {Namespace}
     * @memberof PodSpecGenerator
     */
    netns?: Namespace;
    /**
     * NetworkOptions are additional options for each network
     * Optional.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PodSpecGenerator
     */
    networkOptions?: { [key: string]: Array<string>; };
    /**
     * NoInfra tells the pod not to create an infra container. If this is
     * done, many networking-related options will become unavailable.
     * Conflicts with setting any options in PodNetworkConfig, and the
     * InfraCommand and InfraImages in this struct.
     * Optional.
     * @type {boolean}
     * @memberof PodSpecGenerator
     */
    noInfra?: boolean;
    /**
     * NoManageHosts indicates that /etc/hosts should not be managed by the
     * pod. Instead, each container will create a separate /etc/hosts as
     * they would if not in a pod.
     * Conflicts with HostAdd.
     * @type {boolean}
     * @memberof PodSpecGenerator
     */
    noManageHosts?: boolean;
    /**
     * NoManageResolvConf indicates that /etc/resolv.conf should not be
     * managed by the pod. Instead, each container will create and manage a
     * separate resolv.conf as if they had not joined a pod.
     * Conflicts with NoInfra=true and DNSServer, DNSSearch, DNSOption.
     * Optional.
     * @type {boolean}
     * @memberof PodSpecGenerator
     */
    noManageResolvConf?: boolean;
    /**
     * Overlay volumes are named volumes that will be added to the pod.
     * Optional.
     * @type {Array<OverlayVolume>}
     * @memberof PodSpecGenerator
     */
    overlayVolumes?: Array<OverlayVolume>;
    /**
     * 
     * @type {Namespace}
     * @memberof PodSpecGenerator
     */
    pidns?: Namespace;
    /**
     * 
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    podCreateCommand?: Array<string>;
    /**
     * Devices contains user specified Devices to be added to the Pod
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    podDevices?: Array<string>;
    /**
     * PortMappings is a set of ports to map into the infra container.
     * As, by default, containers share their network with the infra
     * container, this will forward the ports to the entire pod.
     * Only available if NetNS is set to Bridge, Slirp, or Pasta.
     * Optional.
     * @type {Array<PortMapping>}
     * @memberof PodSpecGenerator
     */
    portmappings?: Array<PortMapping>;
    /**
     * 
     * @type {LinuxResources}
     * @memberof PodSpecGenerator
     */
    resourceLimits?: LinuxResources;
    /**
     * RestartPolicy is the pod's restart policy - an action which
     * will be taken when one or all the containers in the pod exits.
     * If not given, the default policy will be set to Always, which
     * restarts the containers in the pod when they exit indefinitely.
     * Optional.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    restartPolicy?: string;
    /**
     * RestartRetries is the number of attempts that will be made to restart
     * the container.
     * Only available when RestartPolicy is set to "on-failure".
     * Optional.
     * @type {number}
     * @memberof PodSpecGenerator
     */
    restartTries?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    securityOpt?: Array<string>;
    /**
     * The ID of the pod's service container.
     * @type {string}
     * @memberof PodSpecGenerator
     */
    serviceContainerID?: string;
    /**
     * PodCreateCommand is the command used to create this pod.
     * This will be shown in the output of Inspect() on the pod, and may
     * also be used by some tools that wish to recreate the pod
     * (e.g. `podman generate systemd --new`).
     * Optional.
     * ShareParent determines if all containers in the pod will share the pod's cgroup as the cgroup parent
     * @type {boolean}
     * @memberof PodSpecGenerator
     */
    shareParent?: boolean;
    /**
     * SharedNamespaces instructs the pod to share a set of namespaces.
     * Shared namespaces will be joined (by default) by every container
     * which joins the pod.
     * If not set and NoInfra is false, the pod will set a default set of
     * namespaces to share.
     * Conflicts with NoInfra=true.
     * Optional.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    sharedNamespaces?: Array<string>;
    /**
     * ShmSize is the size of the tmpfs to mount in at /dev/shm, in bytes.
     * Conflicts with ShmSize if IpcNS is not private.
     * Optional.
     * @type {number}
     * @memberof PodSpecGenerator
     */
    shmSize?: number;
    /**
     * ShmSizeSystemd is the size of systemd-specific tmpfs mounts
     * specifically /run, /run/lock, /var/log/journal and /tmp.
     * Optional
     * @type {number}
     * @memberof PodSpecGenerator
     */
    shmSizeSystemd?: number;
    /**
     * Sysctl sets kernel parameters for the pod
     * @type {{ [key: string]: string; }}
     * @memberof PodSpecGenerator
     */
    sysctl?: { [key: string]: string; };
    /**
     * ThrottleReadBpsDevice contains the rate at which the devices in the pod can be read from/accessed
     * @type {{ [key: string]: LinuxThrottleDevice; }}
     * @memberof PodSpecGenerator
     */
    throttleReadBpsDevice?: { [key: string]: LinuxThrottleDevice; };
    /**
     * 
     * @type {Namespace}
     * @memberof PodSpecGenerator
     */
    userns?: Namespace;
    /**
     * 
     * @type {Namespace}
     * @memberof PodSpecGenerator
     */
    utsns?: Namespace;
    /**
     * Volumes are named volumes that will be added to the pod.
     * These will supersede Image Volumes and VolumesFrom  volumes where
     * there are conflicts.
     * Optional.
     * @type {Array<NamedVolume>}
     * @memberof PodSpecGenerator
     */
    volumes?: Array<NamedVolume>;
    /**
     * VolumesFrom is a set of containers whose volumes will be added to
     * this pod. The name or ID of the container must be provided, and
     * may optionally be followed by a : and then one or more
     * comma-separated options. Valid options are 'ro', 'rw', and 'z'.
     * Options will be used for all volumes sourced from the container.
     * @type {Array<string>}
     * @memberof PodSpecGenerator
     */
    volumesFrom?: Array<string>;
}

/**
 * Check if a given object implements the PodSpecGenerator interface.
 */
export function instanceOfPodSpecGenerator(value: object): value is PodSpecGenerator {
    return true;
}

export function PodSpecGeneratorFromJSON(json: any): PodSpecGenerator {
    return PodSpecGeneratorFromJSONTyped(json, false);
}

export function PodSpecGeneratorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PodSpecGenerator {
    if (json == null) {
        return json;
    }
    return {
        
        'networks': json['Networks'] == null ? undefined : (mapValues(json['Networks'], PerNetworkOptionsFromJSON)),
        'cgroupParent': json['cgroup_parent'] == null ? undefined : json['cgroup_parent'],
        'cniNetworks': json['cni_networks'] == null ? undefined : json['cni_networks'],
        'cpuPeriod': json['cpu_period'] == null ? undefined : json['cpu_period'],
        'cpuQuota': json['cpu_quota'] == null ? undefined : json['cpu_quota'],
        'dnsOption': json['dns_option'] == null ? undefined : json['dns_option'],
        'dnsSearch': json['dns_search'] == null ? undefined : json['dns_search'],
        'dnsServer': json['dns_server'] == null ? undefined : json['dns_server'],
        'exitPolicy': json['exit_policy'] == null ? undefined : json['exit_policy'],
        'hostadd': json['hostadd'] == null ? undefined : json['hostadd'],
        'hostname': json['hostname'] == null ? undefined : json['hostname'],
        'idmappings': json['idmappings'] == null ? undefined : IDMappingOptionsFromJSON(json['idmappings']),
        'imageVolumes': json['image_volumes'] == null ? undefined : ((json['image_volumes'] as Array<any>).map(ImageVolumeFromJSON)),
        'infraCommand': json['infra_command'] == null ? undefined : json['infra_command'],
        'infraConmonPidFile': json['infra_conmon_pid_file'] == null ? undefined : json['infra_conmon_pid_file'],
        'infraImage': json['infra_image'] == null ? undefined : json['infra_image'],
        'infraName': json['infra_name'] == null ? undefined : json['infra_name'],
        'ipcns': json['ipcns'] == null ? undefined : NamespaceFromJSON(json['ipcns']),
        'labels': json['labels'] == null ? undefined : json['labels'],
        'mounts': json['mounts'] == null ? undefined : ((json['mounts'] as Array<any>).map(MountFromJSON)),
        'name': json['name'] == null ? undefined : json['name'],
        'netns': json['netns'] == null ? undefined : NamespaceFromJSON(json['netns']),
        'networkOptions': json['network_options'] == null ? undefined : json['network_options'],
        'noInfra': json['no_infra'] == null ? undefined : json['no_infra'],
        'noManageHosts': json['no_manage_hosts'] == null ? undefined : json['no_manage_hosts'],
        'noManageResolvConf': json['no_manage_resolv_conf'] == null ? undefined : json['no_manage_resolv_conf'],
        'overlayVolumes': json['overlay_volumes'] == null ? undefined : ((json['overlay_volumes'] as Array<any>).map(OverlayVolumeFromJSON)),
        'pidns': json['pidns'] == null ? undefined : NamespaceFromJSON(json['pidns']),
        'podCreateCommand': json['pod_create_command'] == null ? undefined : json['pod_create_command'],
        'podDevices': json['pod_devices'] == null ? undefined : json['pod_devices'],
        'portmappings': json['portmappings'] == null ? undefined : ((json['portmappings'] as Array<any>).map(PortMappingFromJSON)),
        'resourceLimits': json['resource_limits'] == null ? undefined : LinuxResourcesFromJSON(json['resource_limits']),
        'restartPolicy': json['restart_policy'] == null ? undefined : json['restart_policy'],
        'restartTries': json['restart_tries'] == null ? undefined : json['restart_tries'],
        'securityOpt': json['security_opt'] == null ? undefined : json['security_opt'],
        'serviceContainerID': json['serviceContainerID'] == null ? undefined : json['serviceContainerID'],
        'shareParent': json['share_parent'] == null ? undefined : json['share_parent'],
        'sharedNamespaces': json['shared_namespaces'] == null ? undefined : json['shared_namespaces'],
        'shmSize': json['shm_size'] == null ? undefined : json['shm_size'],
        'shmSizeSystemd': json['shm_size_systemd'] == null ? undefined : json['shm_size_systemd'],
        'sysctl': json['sysctl'] == null ? undefined : json['sysctl'],
        'throttleReadBpsDevice': json['throttleReadBpsDevice'] == null ? undefined : (mapValues(json['throttleReadBpsDevice'], LinuxThrottleDeviceFromJSON)),
        'userns': json['userns'] == null ? undefined : NamespaceFromJSON(json['userns']),
        'utsns': json['utsns'] == null ? undefined : NamespaceFromJSON(json['utsns']),
        'volumes': json['volumes'] == null ? undefined : ((json['volumes'] as Array<any>).map(NamedVolumeFromJSON)),
        'volumesFrom': json['volumes_from'] == null ? undefined : json['volumes_from'],
    };
}

export function PodSpecGeneratorToJSON(value?: PodSpecGenerator | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Networks': value['networks'] == null ? undefined : (mapValues(value['networks'], PerNetworkOptionsToJSON)),
        'cgroup_parent': value['cgroupParent'],
        'cni_networks': value['cniNetworks'],
        'cpu_period': value['cpuPeriod'],
        'cpu_quota': value['cpuQuota'],
        'dns_option': value['dnsOption'],
        'dns_search': value['dnsSearch'],
        'dns_server': value['dnsServer'],
        'exit_policy': value['exitPolicy'],
        'hostadd': value['hostadd'],
        'hostname': value['hostname'],
        'idmappings': IDMappingOptionsToJSON(value['idmappings']),
        'image_volumes': value['imageVolumes'] == null ? undefined : ((value['imageVolumes'] as Array<any>).map(ImageVolumeToJSON)),
        'infra_command': value['infraCommand'],
        'infra_conmon_pid_file': value['infraConmonPidFile'],
        'infra_image': value['infraImage'],
        'infra_name': value['infraName'],
        'ipcns': NamespaceToJSON(value['ipcns']),
        'labels': value['labels'],
        'mounts': value['mounts'] == null ? undefined : ((value['mounts'] as Array<any>).map(MountToJSON)),
        'name': value['name'],
        'netns': NamespaceToJSON(value['netns']),
        'network_options': value['networkOptions'],
        'no_infra': value['noInfra'],
        'no_manage_hosts': value['noManageHosts'],
        'no_manage_resolv_conf': value['noManageResolvConf'],
        'overlay_volumes': value['overlayVolumes'] == null ? undefined : ((value['overlayVolumes'] as Array<any>).map(OverlayVolumeToJSON)),
        'pidns': NamespaceToJSON(value['pidns']),
        'pod_create_command': value['podCreateCommand'],
        'pod_devices': value['podDevices'],
        'portmappings': value['portmappings'] == null ? undefined : ((value['portmappings'] as Array<any>).map(PortMappingToJSON)),
        'resource_limits': LinuxResourcesToJSON(value['resourceLimits']),
        'restart_policy': value['restartPolicy'],
        'restart_tries': value['restartTries'],
        'security_opt': value['securityOpt'],
        'serviceContainerID': value['serviceContainerID'],
        'share_parent': value['shareParent'],
        'shared_namespaces': value['sharedNamespaces'],
        'shm_size': value['shmSize'],
        'shm_size_systemd': value['shmSizeSystemd'],
        'sysctl': value['sysctl'],
        'throttleReadBpsDevice': value['throttleReadBpsDevice'] == null ? undefined : (mapValues(value['throttleReadBpsDevice'], LinuxThrottleDeviceToJSON)),
        'userns': NamespaceToJSON(value['userns']),
        'utsns': NamespaceToJSON(value['utsns']),
        'volumes': value['volumes'] == null ? undefined : ((value['volumes'] as Array<any>).map(NamedVolumeToJSON)),
        'volumes_from': value['volumesFrom'],
    };
}
