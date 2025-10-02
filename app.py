from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='/')

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    print("正在启动房产估值网站服务器...")
    print("请确保您的防火墙已允许端口8000的访问")
    print("启动完成后，您可以通过以下地址访问网站：")
    print("- 本机访问: http://localhost:8000")
    print("- 局域网内其他设备访问: http://<您的IP地址>:8000")
    print("\n为了让任何人都能访问您的网站，我们建议：")
    print("1. 保持此服务器运行")
    print("2. 使用ngrok等工具创建临时公网地址（需要额外安装）")
    print("3. 或考虑将网站部署到云服务器或静态托管平台")
    
    # 绑定到所有网络接口，允许外部访问
    app.run(host='0.0.0.0', port=8000, debug=False)