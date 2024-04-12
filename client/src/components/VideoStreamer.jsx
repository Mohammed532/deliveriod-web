import { useEffect, useRef } from 'react'

function VideoStreamer() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);

    useEffect(() => {
        if(!canvasRef.current) return;
        const ctx = canvasRef.current.getContext("2d");
        ctx.beginPath();
        ctx.arc(canvasRef.current.width / 2, canvasRef.current.height /2, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue'
        ctx.fill();

        if(mediaStreamRef.current || !canvasRef.current) return;

        // Create 30fps MediaStream
        mediaStreamRef.current = canvasRef.current.captureStream(30);
    }, [])

    return (
        <canvas width={300} height={300} ref={canvasRef} />
    )
}

export default VideoStreamer