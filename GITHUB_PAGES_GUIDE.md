# GitHub Pages详细部署指南

本指南将帮助您在Windows系统上完成Git的安装，并使用GitHub Pages将您的房产估值网站部署到公网上，让任何人都能访问。

## 第一步：下载并安装Git

1. **访问Git官网**
   - 打开浏览器，访问：[https://git-scm.com/downloads](https://git-scm.com/downloads)
   - 网站会自动检测您的系统并提供Windows版本的下载链接

2. **下载Git安装程序**
   - 点击"Windows"下载按钮，开始下载Git安装程序

3. **安装Git**
   - 找到下载完成的安装程序（通常在"下载"文件夹中），双击运行
   - 出现安装向导后，按照以下步骤操作：
     - 点击"Next"接受默认安装位置
     - 再次点击"Next"接受默认组件
     - 继续点击"Next"接受默认开始菜单文件夹
     - 在"Choosing the default editor used by Git"页面，选择您熟悉的编辑器（推荐选择"Notepad++"或保持默认的"Vim"），然后点击"Next"
     - 在"Adjusting the name of the initial branch in new repositories"页面，保持默认选项"Let Git decide"，点击"Next"
     - 在"Adjusting your PATH environment"页面，选择"Git from the command line and also from 3rd-party software"，点击"Next"
     - 在"Choosing the SSH executable"页面，保持默认选项"Use bundled OpenSSH"，点击"Next"
     - 在"Choosing HTTPS transport backend"页面，保持默认选项"Use the OpenSSL library"，点击"Next"
     - 在"Configuring the line ending conversions"页面，选择"Checkout Windows-style, commit Unix-style line endings"，点击"Next"
     - 在"Configuring the terminal emulator to use with Git Bash"页面，选择"Use Windows' default console window"，点击"Next"
     - 在"Choose the default behavior of 'git pull'"页面，保持默认选项"Default (fast-forward or merge)"，点击"Next"
     - 在"Choosing a credential helper"页面，保持默认选项"Git Credential Manager Core"，点击"Next"
     - 在"Configuring extra options"页面，保持默认选项，点击"Next"
     - 在"Configuring experimental options"页面，保持默认选项（不勾选），点击"Install"
     - 安装完成后，点击"Finish"

4. **验证Git安装**
   - 按下`Win + R`键，输入`cmd`，然后按`Enter`打开命令提示符
   - 输入以下命令并按`Enter`：
     ```
     git --version
     ```
   - 如果显示Git的版本信息（如"git version 2.42.0.windows.1"），则表示安装成功

## 第二步：注册GitHub账号

1. **访问GitHub官网**
   - 打开浏览器，访问：[https://github.com](https://github.com)

2. **创建账号**
   - 点击页面右上角的"Sign up"按钮
   - 输入您的电子邮箱地址，点击"Continue"
   - 设置一个密码，点击"Continue"
   - 选择一个用户名（这个用户名将会显示在您的GitHub Pages网址中），点击"Continue"
   - 完成验证码验证
   - 选择是否接收GitHub的更新邮件，然后点击"Continue"
   - 按照提示完成邮箱验证

## 第三步：创建GitHub仓库

1. **登录GitHub**
   - 打开浏览器，访问：[https://github.com/login](https://github.com/login)
   - 输入您的用户名和密码，点击"Sign in"

2. **创建新仓库**
   - 登录成功后，点击页面右上角的"+"号，然后选择"New repository"
   - 在"Repository name"字段中，输入一个仓库名称，例如：`real-estate-valuation`
   - 可选：在"Description"字段中，输入仓库描述，例如："房产估值网站"
   - 确保"Public"选项被选中（这样才能使用GitHub Pages）
   - 勾选"Initialize this repository with a README"
   - 点击页面底部的"Create repository"按钮

## 第四步：上传网站文件到GitHub

1. **准备网站文件**
   - 确保您的网站文件都在`C:\Users\18161\Desktop\huayun-kexing-real-estate-valuation-app`文件夹中
   - 重要文件包括：`index.html`、`js/search.js`、`logo.svg`和`app.py`、`DEPLOY_GUIDE.md`等

2. **打开Git Bash**
   - 按下`Win + R`键，输入`git bash`，然后按`Enter`打开Git Bash终端

3. **配置Git用户名和邮箱**
   - 在Git Bash中，输入以下命令并按`Enter`（将`Your Name`替换为您的GitHub用户名）：
     ```
     git config --global user.name "Your Name"
     ```
   - 然后输入以下命令并按`Enter`（将`your.email@example.com`替换为您注册GitHub时使用的邮箱）：
     ```
     git config --global user.email "your.email@example.com"
     ```

4. **导航到网站文件夹**
   - 在Git Bash中，输入以下命令并按`Enter`：
     ```
     cd /c/Users/18161/Desktop/huayun-kexing-real-estate-valuation-app
     ```

5. **初始化Git仓库**
   - 输入以下命令并按`Enter`：
     ```
     git init
     ```
   - 您将看到类似"Initialized empty Git repository in C:/Users/18161/Desktop/huayun-kexing-real-estate-valuation-app/.git/"的提示

6. **将网站文件添加到Git**
   - 输入以下命令并按`Enter`：
     ```
     git add .
     ```
   - 这个命令会将当前文件夹中的所有文件都添加到Git中

7. **提交更改**
   - 输入以下命令并按`Enter`：
     ```
     git commit -m "Initial commit"
     ```
   - 这个命令会创建一个提交，记录您添加的所有文件

8. **关联GitHub仓库**
   - 回到GitHub网站，复制您刚刚创建的仓库的URL（在仓库页面的"Code"按钮下）
   - 在Git Bash中，输入以下命令并按`Enter`（将`https://github.com/您的用户名/real-estate-valuation.git`替换为您复制的URL）：
     ```
     git remote add origin https://github.com/您的用户名/real-estate-valuation.git
     ```

9. **推送到GitHub**
   - 输入以下命令并按`Enter`：
     ```
     git push -u origin master
     ```
   - 这时会弹出一个窗口，要求您输入GitHub的用户名和密码（或个人访问令牌）
   - 输入您的GitHub凭据后，Git会开始将文件上传到GitHub
   - 上传完成后，您将看到类似"Branch 'master' set up to track remote branch 'master' from 'origin'."的提示

## 第五步：启用GitHub Pages

1. **回到GitHub仓库页面**
   - 在浏览器中，回到您刚刚创建的GitHub仓库页面

2. **访问仓库设置**
   - 点击页面顶部的"Settings"选项卡

3. **导航到GitHub Pages设置**
   - 在左侧菜单中，点击"Pages"

4. **配置GitHub Pages**
   - 在"Source"部分，点击"None"旁边的下拉菜单，选择"master"分支
   - 保持"/ (root)"选项不变
   - 点击"Save"按钮

5. **等待部署完成**
   - 页面会刷新，并显示"Your site is published at https://您的用户名.github.io/real-estate-valuation/"
   - 通常需要等待几分钟，GitHub Pages才能完成部署

## 第六步：验证网站是否可以访问

1. **访问您的GitHub Pages网站**
   - 打开浏览器，输入GitHub Pages提供的网址：`https://您的用户名.github.io/real-estate-valuation/`
   - 如果一切正常，您将看到您的房产估值网站

2. **测试搜索功能**
   - 在网站上尝试使用搜索功能，确保一切正常工作

## 常见问题与解决方案

1. **Git命令执行失败**
   - 检查命令是否输入正确，注意大小写和空格
   - 确保您已经正确安装了Git并配置了环境变量

2. **文件上传失败**
   - 检查网络连接是否正常
   - 确保您输入的GitHub凭据正确
   - 尝试使用个人访问令牌代替密码（在GitHub的"Settings > Developer settings > Personal access tokens"中生成）

3. **GitHub Pages网站无法访问**
   - 等待几分钟，让GitHub Pages完成部署
   - 检查仓库设置中的GitHub Pages配置是否正确
   - 确保您的`index.html`文件位于仓库的根目录下

4. **搜索功能无法使用**
   - 确保`js/search.js`文件已正确上传到GitHub
   - 清除浏览器缓存，然后重新加载网站

按照本指南完成所有步骤后，您的房产估值网站将会成功部署到GitHub Pages上，任何人都可以通过互联网访问它！