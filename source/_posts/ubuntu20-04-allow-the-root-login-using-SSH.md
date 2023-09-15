---
title: Ubuntu20.04 开启允许 SSH 登录
date: 2023-09-14 22:47:55
updated: 2023-09-14 22:47:55
categories:
  - 笔记
tags:
  - ubuntu
  - linux
---

有时自己安装的 ubuntu 是不允许 ssh 登录 root 用户的，这时候需要修改一下配置项

1. 修改 root 密码

```bash
sudo passwd root

# >>>>> 安装要求一步步设置密码即可
# [sudo] password for xifo:
# New password:
# Retype new password:
```

2. 修改配置

```bash
# 没有 openssh 的话需要安装
sudo apt install openssh-server

sudo vim /etc/ssh/sshd_config

# >>>>> 找到 PermitRootLogin 修改为
# PermitRootLogin: yes
```

3. 重启 sshd 服务

```bash
sudo service sshd restart
```

到此结束。顺带附上通过 ssh key 登录 linux

```bash
ssh-copy-id root@IP
```
