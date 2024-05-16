---
author: vanlee
pubDatetime: 2024-05-16T00:00:00+08:00
modDatetime: 2024-05-16T00:00:00+08:00
title: 如何在windows环境下运行wordpress项目
slug: How to run wordpress project in windows environment
featured: true
draft: false
tags:
  - nginx
description: Windows环境下使用Nginx和PHP运行WordPress项目
---

## 环境准备

### 自行下载并安装 WordPress

- [download](https://wordpress.org/download/)

得到一个项目 `D:\wordpress`

### 安装 PHP

可以在这个文档安装 [php 安装](https://windows.php.net/downloads/releases/archives/)

得到php的安装路径 `D:\php-7.3.0-Win32-VC15-x64`

### 安装 Nginx

可以在 [nginx](https://nginx.org/en/download.html) 下载安装

得到 [nginx](D:\nginx-1.26.0\nginx-1.26.0)

## 操练起来

要在Windows环境下使用Nginx和PHP运行WordPress项目，您需要确保Nginx配置正确地与PHP处理器（php-cgi）通信，并且WordPress的文件已经放置在了指定的目录中。以下是配置步骤：

### 1.配置PHP处理器（FastCGI）

首先，确保PHP的php-cgi.exe能够被Nginx调用。在PHP的安装目录下找到php.ini-development或php.ini-production，复制一份并重命名为php.ini，然后编辑此文件以适应您的需求，特别是确保cgi.fix_pathinfo=1这一行没有被注释掉。

接下来，创建一个PHP处理的配置文件，例如在Nginx的conf目录下创建一个名为php-fpm.conf的文件，内容大致如下：

```conf
location ~ \.php$ {
    fastcgi_pass   127.0.0.1:9000; # 这里假设PHP-FPM监听9000端口
    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include        fastcgi_params;
}
```

### 2. 配置Nginx服务器块

```conf
server {
    listen       80;
    server_name  localhost; # 根据实际情况修改，或者使用默认的localhost进行本地测试

    root   D:/wordpress; # 指向WordPress项目的根目录
    index  index.php;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    # 上面已经提到的PHP处理配置
    include php-fpm.conf;

    # 对于WordPress的一些额外配置，比如重写规则
    location ~ /\.ht {
        deny all;
    }
}
```

### 3. 启动PHP处理器

确保PHP的FastCGI进程管理器（PHP-FPM）正在运行。如果使用的是Windows，通常需要通过命令行手动启动。打开命令提示符，切换到PHP的安装目录，然后执行（假设使用的是默认的配置文件路径）：

```sh
D:
cd D:\php-7.3.0-Win32-VC15-x64
start php-cgi.exe -b 127.0.0.1:9000 -c D:\php-7.3.0-Win32-VC15-x64\php.ini
```

### 4. 启动Nginx

最后，在命令行中切换到Nginx的安装目录，启动Nginx服务：

```sh
D:
cd D:\nginx-1.26.0\nginx-1.26.0
start nginx.exe
```

### 5. 访问WordPress

现在，您应该能够在浏览器中通过访问http://localhost（或相应的服务器名/IP，如果您进行了相应配置）来访问您的WordPress安装。首次访问时，根据提示完成WordPress的安装过程。

请注意，上述步骤是基于基本配置，实际部署时可能需要根据具体情况进行调整，比如端口设置、安全加固等。

## mysql的支持

要检查PHP的mysqli扩展是否已安装并启用，您可以按照以下步骤操作：

查看php.ini配置文件：
找到您之前编辑并使用的php.ini文件（通常位于您的PHP安装目录下，如D:\php-7.3.0-Win32-VC15-x64），打开它并搜索关键词extension=mysqli。确保这一行存在并且没有被分号（;）注释掉。被注释的行看起来像这样：;extension=mysqli，如果是这样的话，您需要去掉前面的分号以启用该扩展。

使用PHPInfo()：
创建一个名为phpinfo.php的文件，放在您的web服务器的根目录下（例如，D:\wp-demo-code），并在其中输入以下代码：

```php
<?php
phpinfo();
?>
```

然后，在浏览器中访问http://localhost/phpinfo.php（或相应地址，取决于您的服务器配置）。在这个页面上搜索“mysqli”，如果mysqli扩展已经被成功加载，您会看到关于mysqli的详细信息段落。

命令行检查：
您也可以通过命令行工具检查mysqli扩展是否启用。打开命令提示符，切换到PHP的安装目录，然后执行：

```sh
D:
cd D:\php-7.3.0-Win32-VC15-x64
php -m

```

这个命令会列出所有已加载的PHP模块。在输出列表中查找是否有mysqli，这表示该扩展已被启用。

如果发现mysqli未被启用，您需要取消对应的注释并在PHP配置文件中启用它，然后重启PHP和Nginx服务使更改生效。
