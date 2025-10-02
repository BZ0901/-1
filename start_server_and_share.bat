@echo off
cls

REM 房产估值网站启动和分享工具
REM 此批处理文件将帮助您启动网站服务器并显示访问信息

echo =======================================================
echo 房产估值网站 - 启动和分享工具
echo =======================================================
echo.
echo 正在检查Python环境...

REM 检查Python是否安装
python --version >nul 2>&1
if %errorlevel% neq 0 (
echo 错误：未找到Python。请先安装Python。
echo 您可以从 https://www.python.org/downloads/ 下载并安装Python。
echo.
echo 按任意键退出...
pause >nul
exit /b 1
)

REM 检查Flask是否安装
python -c "import flask" >nul 2>&1
if %errorlevel% neq 0 (
echo 未找到Flask库，正在安装...
pip install flask
)

REM 启动服务器
cls
echo =======================================================
echo 房产估值网站 - 服务器已启动
echo =======================================================
echo.
echo 访问方式：
echo 1. 本机访问：http://localhost:8000

REM 获取本机IP地址
for /f "tokens=2 delims=: " %%i in ('ipconfig ^| findstr "IPv4 Address"') do (
echo 2. 局域网访问：http://%%i:8000
echo.
echo 为了让任何人都能访问您的网站，您可以：
echo 1. 按照 GITHUB_DESKTOP_GUIDE.md 中的指南，使用GitHub Desktop部署到GitHub Pages

echo 2. 或者使用以下临时方法（需要保持此窗口打开）：
echo    a. 打开浏览器，访问 https://localtunnel.me/
echo    b. 按照网站上的说明，在另一命令提示符中运行：npx localtunnel --port 8000
echo    c. localtunnel会生成一个公网地址，任何人都可以通过这个地址访问您的网站
)

echo.
echo 注意：请保持此窗口打开以维持服务器运行。
echo 要停止服务器，请按 Ctrl+C，然后按 Y 确认。
echo.

REM 启动Flask服务器
python app.py