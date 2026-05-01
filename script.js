body { margin: 0; background: #000 !important; overflow: hidden; display: flex; justify-content: center; align-items: center; height: 100vh; }
#canvas-container { position: absolute; inset: 0; z-index: 0; }
.card { width: 300px; height: 500px; position: relative; z-index: 1; transform-style: preserve-3d; transition: transform 0.1s; }
.glass-layer { position: absolute; inset: 0; background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(15px); border: 1px solid rgba(0, 242, 254, 0.3); border-radius: 25px; }
.content { position: relative; z-index: 2; color: white; text-align: center; padding: 25px; }
.profile-img { width: 100px; height: 100px; border-radius: 50%; background: url('https://i.postimg.cc/PCY2SfTx/FB-IMG-1777600313632.jpg') center/cover; margin: 0 auto 20px; border: 3px solid #00f2fe; box-shadow: 0 0 20px #00f2fe; }
.action-btn { width: 100%; padding: 12px; border-radius: 12px; border: 1px solid #00f2fe; background: transparent; color: #00f2fe; font-weight: bold; cursor: pointer; margin-top: 10px; }
.action-btn.fb { border-color: #1877F2; color: #1877F2; }
.status { margin-top: 30px; font-size: 0.7rem; color: #00f2fe; animation: blink 2s infinite; }
@keyframes blink { 50% { opacity: 0.3; } }
