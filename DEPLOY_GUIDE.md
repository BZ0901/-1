# 房产估值网站公网部署指南

本指南将帮助您把房产估值网站部署到互联网上，让任何人都能访问。

## 方法一：使用免费静态网站托管服务（推荐）

这些服务最适合您的静态网站，操作简单且免费。

### 选项1：GitHub Pages

1. **准备工作**
   - 注册一个[GitHub](https://github.com)账号
   - 下载并安装[Git](https://git-scm.com/downloads)

2. **创建GitHub仓库**
   - 登录GitHub，点击右上角的"+"号，选择"New repository"
   - 仓库名称可以是：`real-estate-valuation`
   - 勾选"Initialize this repository with a README"
   - 点击"Create repository"

3. **上传网站文件**
   - 打开命令提示符（CMD）
   - 进入网站文件夹：
     ```
     cd C:\Users\18161\Desktop\huayun-kexing-real-estate-valuation-app
     ```
   - 初始化Git仓库：
     ```
     git init
     ```
   - 添加所有文件：
     ```
     git add .
     ```
   - 提交更改：
     ```
     git commit -m "Initial commit"
     ```
   - 关联GitHub仓库（请替换为您的实际仓库地址）：
     ```
     git remote add origin https://github.com/您的用户名/real-estate-valuation.git
     ```
   - 推送到GitHub：
     ```
     git push -u origin master
     ```

4. **启用GitHub Pages**
   - 在GitHub仓库页面，点击"Settings"
   - 在左侧菜单中点击"Pages"
   - 在"Source"部分，选择"master"分支，点击"Save"
   - 等待几分钟，您的网站将会在 `https://您的用户名.github.io/real-estate-valuation/` 上可用

### 选项2：Netlify

1. **准备工作**
   - 注册一个[Netlify](https://www.netlify.com)账号

2. **部署网站**
   - 登录Netlify，点击"New site from Git"
   - 选择"GitHub"并授权
   - 选择您的网站仓库
   - 保持默认设置，点击"Deploy site"
   - 部署完成后，您将获得一个随机生成的URL，如 `https://random-name.netlify.app`

## 方法二：使用临时公网访问工具

如果您只是需要临时让别人访问，不需要长期部署，可以使用以下方法：

### 使用localtunnel（无需安装软件）

1. **打开命令提示符（CMD）**

2. **启动Flask服务器**（如果尚未启动）：
   ```
   cd C:\Users\18161\Desktop\huayun-kexing-real-estate-valuation-app
   python app.py
   ```

3. **打开新的命令提示符窗口**，运行以下命令：
   ```
   npx localtunnel --port 8000
   ```

4. **获取公网地址**
   - 命令执行后，会显示一个类似 `https://random-name.loca.lt` 的URL
   - 将这个URL分享给任何人，他们就可以访问您的网站了

   > 注意：localtunnel提供的地址仅在您的服务器运行期间有效

## 方法三：部署到云服务器（长期稳定方案）

如果您需要一个稳定的长期访问地址，可以考虑购买云服务器。

1. **购买云服务器**
   - 选择云服务商：阿里云、腾讯云、AWS、Azure等
   - 选择适合的套餐（入门级即可满足需求）
   - 完成购买并获取服务器IP地址

2. **连接到云服务器**
   - 使用远程桌面连接（Windows服务器）或SSH（Linux服务器）连接到您的云服务器

3. **上传网站文件**
   - 使用FTP工具（如FileZilla）或直接复制粘贴，将网站文件上传到云服务器

4. **安装Web服务器软件**
   - 如果是Windows服务器，可以使用IIS
   - 如果是Linux服务器，推荐使用Nginx

5. **配置域名（可选）**
   - 购买一个域名（如阿里云域名服务、腾讯云域名服务）
   - 将域名解析到您的云服务器IP地址

## 常见问题排查

1. **网站无法访问**
   - 检查服务器是否正在运行
   - 确认防火墙已开放相应端口（8000或80）
   - 检查文件路径和文件名是否正确

2. **样式或功能不正常**
   - 确认所有CSS、JavaScript和图片文件都已正确上传
   - 检查浏览器控制台是否有错误信息

3. **搜索功能无法使用**
   - 确保`js/search.js`文件已正确部署
   - 检查浏览器的控制台日志是否有错误

按照以上任意一种方法操作，您的房产估值网站将可以被互联网上的任何人访问！