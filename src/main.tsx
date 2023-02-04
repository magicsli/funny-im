import ReactDOM from 'react-dom/client'
import App from './App'
import 'webrtc-adapter' // 兼容rtc参数方法
import 'antd/dist/reset.css' // dist类型文件
import '@/styles/reset.scss' // 格式化默认样式

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
