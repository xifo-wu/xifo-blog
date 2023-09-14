---
title: Ubuntu20.04 安装 qBittorrent-nox
date: 2023-09-14 22:47:55
updated: 2023-09-14 22:47:55
cover: https://telegraph-image.pages.dev/file/a43832fbd6a3d6bd73528.jpg
categories:
  - 笔记
tags:
  - ubuntu
  - linux
---

qBittorrent-nox 和 qBittorrent 的区别是 qBittorrent-nox 不提供桌面端，只有 web 服务。接下来直接在 ubuntu 上进行安装

## 安装 qBittorrent-nox

添加 qBittorrent 存储库

```bash
sudo add-apt-repository -y ppa:qbittorrent-team/qbittorrent-stable
```

安装 qBittorrent-nox

```bash
sudo apt install -y qbittorrent-nox
```

安装完成后可以检查一下版本

```bash
qbittorrent-nox --version
```

## 写一个 qBittorrent-nox service

```bash
sudo vim /etc/systemd/system/qbittorrent-nox.service
```

文件内容

```
[Unit]
Description=qBittorrent client
After=network.target

[Service]
ExecStart=/usr/bin/qbittorrent-nox --webui-port=8080
Restart=always

[Install]
WantedBy=multi-user.target
```

webui-port 可以改改，公网 IP 的话用户名密码也记得改改。某人就因为没有改默认账号和密码导致被安装了挖矿脚本（~~那个人就是我~~）

运行服务

```bash
sudo service qbittorrent-nox start
```

查看运行状态

```bash
sudo service qbittorrent-nox status
```

还有其他命令（停止和重启）

```bash
sudo service qbittorrent-nox stop
sudo service qbittorrent-nox restart
```

如果还要设置开机启动可以执行以下命令

```bash
sudo systemctl enable qbittorrent-nox
```

然后再浏览器输入 http://IP_ADDRESS:8080 应该就能打开了。默认账户是 ```admin``` 默认密码是 ```adminadmin```。再次友情提醒记得改密码。

你也有可能会想我不要装在母机上。要用 docker 等等。那就先卸载吧。

## 卸载 qbittorrent-nox

接下来让我们一步步的完全的删除 qbittorrent-nox， 停止服务并移除之前创建的服务文件

```bash
sudo service qbittorrent-nox stop
sudo systemctl disable qbittorrent-nox
sudo rm -rf /etc/systemd/system/qbittorrent-nox.service
sudo systemctl daemon-reload
sudo systemctl reset-failed
```

移除 qBittorrent-nox

```bash
sudo apt purge --autoremove -y qbittorrent-nox
```

移除 GPG key 和 repository

```bash
sudo rm -rf /etc/apt/trusted.gpg.d/qbittorrent-team_ubuntu_qbittorrent-stable.gpg
sudo rm -rf /etc/apt/sources.list.d/qbittorrent-team-ubuntu-qbittorrent-stable-focal.list
```

如果你已经运行了一段时间，qbittorrent 会产生一些配置文件，日志等文件。你也可以通过以下命令移除他们

```bash
sudo rm -rf /.config/qBittorrent
sudo rm -rf /.local/share/qBittorrent
sudo rm -rf /.cache/qBittorrent
rm -rf ~/.config/qBittorrent
rm -rf ~/.local/share/qBittorrent
rm -rf ~/.cache/qBittorrent
```
