import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function RocketGame() {
  const canvasRef = useRef(null)
  const [gameState, setGameState] = useState('menu') // menu, playing, gameOver
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const gameRef = useRef(null)

  useEffect(() => {
    if (gameState === 'playing') {
      startGame()
    }
    return () => {
      if (gameRef.current) {
        cancelAnimationFrame(gameRef.current)
      }
    }
  }, [gameState])

  const startGame = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Game variables
    let rocket = {
      x: canvas.width / 2,
      y: canvas.height - 60,
      width: 20,
      height: 30,
      speed: 5
    }
    
    let obstacles = []
    let gameScore = 0
    let gameSpeed = 2
    let lastObstacleTime = 0
    
    // Game loop
    const gameLoop = (timestamp) => {
      if (gameState !== 'playing') return
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background (space theme)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0f172a') // Dark blue
      gradient.addColorStop(1, '#1e293b') // Lighter blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw stars
      for (let i = 0; i < 50; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
        ctx.fillRect(
          (i * 37) % canvas.width,
          (i * 73) % canvas.height,
          1,
          1
        )
      }
      
      // Handle input - use keys ref
      if (keysRef.current.ArrowLeft && rocket.x > 0) rocket.x -= rocket.speed
      if (keysRef.current.ArrowRight && rocket.x < canvas.width - rocket.width) rocket.x += rocket.speed
      
      // Draw rocket
      ctx.fillStyle = '#3b82f6' // Blue rocket
      ctx.fillRect(rocket.x, rocket.y, rocket.width, rocket.height)
      
      // Rocket details
      ctx.fillStyle = '#1e40af'
      ctx.fillRect(rocket.x + 2, rocket.y + 5, rocket.width - 4, 8) // Window
      ctx.fillStyle = '#ef4444' // Red flame
      ctx.fillRect(rocket.x + 4, rocket.y + rocket.height, 4, 8)
      ctx.fillRect(rocket.x + 12, rocket.y + rocket.height, 4, 8)
      
      // Spawn obstacles
      if (timestamp - lastObstacleTime > 1000) {
        obstacles.push({
          x: Math.random() * (canvas.width - 20),
          y: -20,
          width: 20,
          height: 20
        })
        lastObstacleTime = timestamp
        gameSpeed += 0.1
      }
      
      // Update and draw obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i]
        obstacle.y += gameSpeed
        
        // Draw meteorite
        ctx.fillStyle = '#78716c' // Gray meteorite
        ctx.beginPath()
        ctx.arc(obstacle.x + 10, obstacle.y + 10, 10, 0, Math.PI * 2)
        ctx.fill()
        
        // Remove obstacles that are off screen
        if (obstacle.y > canvas.height) {
          obstacles.splice(i, 1)
          gameScore++
          setScore(gameScore)
        }
        
        // Check collision
        if (
          rocket.x < obstacle.x + obstacle.width &&
          rocket.x + rocket.width > obstacle.x &&
          rocket.y < obstacle.y + obstacle.height &&
          rocket.y + rocket.height > obstacle.y
        ) {
          // Game over
          if (gameScore > highScore) {
            setHighScore(gameScore)
          }
          setGameState('gameOver')
          return
        }
      }
      
      // Draw score
      ctx.fillStyle = '#ffffff'
      ctx.font = '20px Arial'
      ctx.fillText(`Score: ${gameScore}`, 10, 30)
      
      // Continue game loop
      gameRef.current = requestAnimationFrame(gameLoop)
    }
    
    gameRef.current = requestAnimationFrame(gameLoop)
  }

  // Keyboard handling
  const keysRef = useRef({})
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      keysRef.current[e.key] = true
    }
    const handleKeyUp = (e) => {
      keysRef.current[e.key] = false
    }
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const handleStartGame = () => {
    setScore(0)
    setGameState('playing')
  }

  const handleRestart = () => {
    setScore(0)
    setGameState('playing')
  }

  return (
    <motion.div 
      className="mt-8 p-6 bg-slate-50 rounded-xl border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Play Rocket Dodge</h3>
        <p className="text-slate-600 text-sm">Use arrow keys to dodge meteorites and survive as long as possible!</p>
      </div>
      
      <div className="flex justify-center">
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={400}
            height={300}
            className="border-2 border-slate-200 rounded-lg bg-slate-900"
          />
          
          {/* Game Overlay */}
          {gameState === 'menu' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
              <div className="text-center text-white">
                <h4 className="text-xl font-bold mb-4">Ready to Launch?</h4>
                <button
                  onClick={handleStartGame}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  Start Game
                </button>
              </div>
            </div>
          )}
          
          {gameState === 'gameOver' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
              <div className="text-center text-white">
                <h4 className="text-xl font-bold mb-2">Game Over!</h4>
                <p className="mb-4">Final Score: {score}</p>
                {score > highScore && (
                  <p className="text-yellow-400 mb-4">🎉 New High Score!</p>
                )}
                <button
                  onClick={handleRestart}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="text-center mt-4 text-sm text-slate-600">
        <p>High Score: {highScore}</p>
        <p className="mt-1">Controls: ← → Arrow Keys</p>
      </div>
    </motion.div>
  )
}
