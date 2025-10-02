# GitHub Pages部署简化脚本
# 此脚本将帮助您更方便地将网站部署到GitHub Pages

# 打印欢迎信息
Write-Host "============================================="
Write-Host "房产估值网站GitHub Pages部署简化脚本"
Write-Host "============================================="
Write-Host "\n注意：在运行此脚本之前，请确保您已经："
Write-Host "1. 安装了Git（可参考GITHUB_PAGES_GUIDE.md中的安装指南）"
Write-Host "2. 注册了GitHub账号"
Write-Host "3. 在GitHub上创建了一个名为'real-estate-valuation'的仓库"
Write-Host "\n按任意键继续..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')

# 配置Git用户名和邮箱
Clear-Host
Write-Host "配置Git身份信息..."
$username = Read-Host -Prompt "请输入您的GitHub用户名"
$email = Read-Host -Prompt "请输入您注册GitHub时使用的邮箱"

git config --global user.name "$username"
git config --global user.email "$email"

Write-Host "\nGit身份信息已配置完成！"
Write-Host "按任意键继续..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')

# 初始化Git仓库并上传文件
Clear-Host
Write-Host "初始化Git仓库并上传文件..."

# 检查是否已经有.git文件夹
if (Test-Path ".git") {
    Write-Host "检测到已有Git仓库，跳过初始化步骤..."
} else {
    git init
    Write-Host "Git仓库已初始化！"
}

# 添加所有文件
git add .
Write-Host "所有文件已添加到Git！"

# 提交更改
git commit -m "Deploy to GitHub Pages"
Write-Host "文件已提交！"

# 关联GitHub仓库
$github_url = "https://github.com/$username/real-estate-valuation.git"
git remote add origin $github_url 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "GitHub仓库已关联，更新关联..."
    git remote set-url origin $github_url
} else {
    Write-Host "GitHub仓库已关联！"
}

# 推送到GitHub
Write-Host "\n准备推送到GitHub..."
Write-Host "注意：接下来会要求您输入GitHub的用户名和密码（或个人访问令牌）"
Write-Host "按任意键继续..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')

git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host "\n✅ 文件已成功上传到GitHub！"
    Write-Host "\n下一步操作："
    Write-Host "1. 打开浏览器，访问您的GitHub仓库：$github_url"
    Write-Host "2. 点击'Settings' -> 'Pages'"
    Write-Host "3. 在'Source'部分选择'master'分支，点击'Save'"
    Write-Host "4. 等待几分钟，您的网站将在 https://$username.github.io/real-estate-valuation/ 上可用"
} else {
    Write-Host "\n❌ 推送失败！请检查以下问题："
    Write-Host "- 您的GitHub用户名和密码（或个人访问令牌）是否正确"
    Write-Host "- 您是否在GitHub上创建了名为'real-estate-valuation'的仓库"
    Write-Host "- 您的网络连接是否正常"
    Write-Host "\n如果问题仍然存在，请参考GITHUB_PAGES_GUIDE.md中的详细指南进行手动部署。"
}

Write-Host "\n部署脚本执行完毕！"
Write-Host "按任意键退出..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')