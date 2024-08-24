---
title: 'Kubernetes Installation'
description: 'Real World example of Installing Kubernetes (k8s) on bear metal servers.'
pubDate: 'August 24 2024'
heroImage: 'src/assets/images/banners/devops/kubernetes_banner.png'
category: 'DevOps'
tags: ['Kubernetes', 'k8s']
draft: false
---

## In this tutorial we will make and setup real world kubernetes cluster

### Requirements

The setup configuration contains three **Nodes**, one master and slave if form of docker containers. Due to my location there
may be problems with debian based servers so I selected my favorite linux destroy as severing machine. The serving nodes are **Arch Linux** that
already having required packages. see the [Arch Linux K8S Cluster](https://mmroshani.github.io/post/devops/kubernetes/archlinux_k8s_cluster/) post for related tutorial.

To have a idea of what is going on, I have a **Manjaro Linux** installed on my system. we make three **Arch Linux** docker image and run them with **Docker Compose** that each
of them represent real world bear metal servers. Them we select one of the servers as master and two of them as slave and we will install **Kubernetes** on them.

Based on [K8S documentations](https://kubernetes.io) each one of the **Worker Nodes** have to have at leased _two CPU cores_ and _two GB of RAM_ so in related _docker-compose.yml_
file that is located in [archlinux-k8s-cluster repository](https://github.com/mmRoshani/archlinux-k8s-cluster), each container _CPU_ and _memory_ is limited to two cores and 2 GB respectively. One have to consider that this environment require at least _8 cores of CPU_ and _8 GB of RAM_. One can modify the mentioned file to achieve less resource consumption.
This simulation is not for production based on the linux distros that have been chosen but if you replace the arch linuxes with something like ubuntu or any stable linux server then you can simply use it as production scale cluster, so of you want to upgrade the resources of the cluster keep in mind to first upgrade the **Slaves** and the upgrade the **Master** because the **Master Node** is only in charge of controlling and monitoring and the **Slaves** are whom doing the job done.

The packages that should be install on all nodes is a **Container Runtime**, **Kubelet** and deploying **Kube Proxy** as **Pod** then on **Master Node (A.K.A node number one)** specifically we need to deploy **API server**, **Scheduler**, **Controller Manager** and **etcd** as **pods**. This task already done in the [archlinux-k8s-cluster repository](https://github.com/mmRoshani/archlinux-k8s-cluster). To achieve **Pod** deployment we need _K8S manifest file_ and _secure deployment_. To deploy a **Pod** we need to send a request to **API Server** and the the **Scheduler** will decide where the newly created **Pod** must be locates and the **Pod** data will be update, store or read from **etcd** storage but the problem is how the **Master Node** components that already are **Pods** them selves should be deploy when we don't have them in first place? With the help of **Static Pods**. The **Static Pods** will be directly scheduled by **Kubelet** itself so with the two main component of **Master Node** we can deploy the required components (API Server, Controller Manager, Scheduler and etcd). The **Kubelet** will schedules the pod manifests that are located in _/etc/kubernetes/manifest_. The main differences of **Static Pods** with Regular **Pods** are they are just controlled by **Kubelet** and although they are visible thought **API Server** but they can not be change by **API server**. One should note that the **Static Pods** have suffix of the **Node** _hostname_ they are located on. So the firs step is to generate the required manifests for **Master Node** **pods** and put them in mentioned path. Each component that connects to other component mush use _TLS_ for security manner. To over view the security manner we need to know who talks to whom and we certificates are required.

For instance almost each one of the components, talks to **API Server** and must _authenticate_ it self for communication. by the help of _self-signed CA_ certificates for **K8S** cluster and signing all clients and servers with it we can satisfy the _authentication_ problem. the certificates are located in _/etc/kubernetes/pki_ path _(pki stands for Public Key Infrastructure)_. So to briefly over view,

1. Generating a **Self-signed CA Certificate** for whole **K8S** cluster _(A.K.A. cluster root CA)_

2. Signing all clients and sevres with it

   - Server Certificate, for the **API Server**
   - Client Certificate, for the **scheduler** and **Controller Manager**
   - Server Certificate, for the **etcd** and **Kubelet**
   - Client Certificate, for the **API Server** to use **etcd** and **Kubelet** services
   - Client Certificate, for **Kubelet** to authenticate to **API Server**

To achieve cluster setup and handel these complex and full of error tasks we will use the [Kubeadm (kube admin tools)](https://kubernetes.io/docs/reference/setup-tools/kubeadm/) that is maintained by **Kubernetes** it selfs.
