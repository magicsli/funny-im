import { useLayoutEffect } from 'react'

const useDraw = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  useLayoutEffect(() => {
    const hanlderDraw = () => {}

    if (canvasRef.current) {
    }

    return () => {}
  }, [])
}

export default useDraw
