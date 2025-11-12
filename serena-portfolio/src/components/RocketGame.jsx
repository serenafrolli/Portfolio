import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function RocketGame() {
  const canvasRef = useRef(null)
  const [gameState, setGameState] = useState('menu') // menu, playing, gameOver
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const gameRef = useRef(null)
  const starsRef = useRef([])
  const gameStateRef = useRef(gameState)
  
  // Keep gameStateRef in sync
  useEffect(() => {
    gameStateRef.current = gameState
  }, [gameState])

  // Initialize stars when canvas is ready
  useEffect(() => {
    const initStars = () => {
      const canvas = canvasRef.current
      if (canvas && canvas.width && canvas.height) {
        const stars = []
        const numStars = Math.floor((canvas.width * canvas.height) / 2000) // Scale stars with canvas size
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.01
          })
        }
        starsRef.current = stars
      }
    }
    
    // Try to initialize immediately
    initStars()
    
    // Also try after a short delay in case canvas isn't ready
    const timeout = setTimeout(initStars, 100)
    return () => clearTimeout(timeout)
  }, [])

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
      if (gameStateRef.current !== 'playing') {
        return
      }
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw background (space theme)
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#0a0e27') // Darker blue
      gradient.addColorStop(0.5, '#1a1f3a') // Mid blue
      gradient.addColorStop(1, '#0f172a') // Dark blue
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw animated twinkling stars
      starsRef.current.forEach((star) => {
        // Twinkle effect - smooth animation
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1) {
          star.opacity = 0.3
        } else if (star.opacity < 0.3) {
          star.opacity = 0.3
        }
        
        // Draw star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
      
      // Handle input - use keys ref
      if (keysRef.current.ArrowLeft && rocket.x > 0) rocket.x -= rocket.speed
      if (keysRef.current.ArrowRight && rocket.x < canvas.width - rocket.width) rocket.x += rocket.speed
      
      // Draw improved rocket
      // Rocket body (pointed top)
      ctx.fillStyle = '#3b82f6'
      ctx.beginPath()
      ctx.moveTo(rocket.x + rocket.width / 2, rocket.y) // Top point
      ctx.lineTo(rocket.x, rocket.y + rocket.height * 0.6) // Left side
      ctx.lineTo(rocket.x, rocket.y + rocket.height) // Bottom left
      ctx.lineTo(rocket.x + rocket.width, rocket.y + rocket.height) // Bottom right
      ctx.lineTo(rocket.x + rocket.width, rocket.y + rocket.height * 0.6) // Right side
      ctx.closePath()
      ctx.fill()
      
      // Rocket window
      ctx.fillStyle = '#60a5fa'
      ctx.beginPath()
      ctx.arc(rocket.x + rocket.width / 2, rocket.y + rocket.height * 0.35, rocket.width * 0.2, 0, Math.PI * 2)
      ctx.fill()
      
      // Rocket fins
      ctx.fillStyle = '#1e293b' // slate-800
      ctx.beginPath()
      ctx.moveTo(rocket.x, rocket.y + rocket.height * 0.7)
      ctx.lineTo(rocket.x - 4, rocket.y + rocket.height)
      ctx.lineTo(rocket.x, rocket.y + rocket.height)
      ctx.closePath()
      ctx.fill()
      
      ctx.beginPath()
      ctx.moveTo(rocket.x + rocket.width, rocket.y + rocket.height * 0.7)
      ctx.lineTo(rocket.x + rocket.width + 4, rocket.y + rocket.height)
      ctx.lineTo(rocket.x + rocket.width, rocket.y + rocket.height)
      ctx.closePath()
      ctx.fill()
      
      // Rocket flame
      ctx.fillStyle = '#f59e0b'
      ctx.fillRect(rocket.x + 4, rocket.y + rocket.height, 4, 8)
      ctx.fillRect(rocket.x + rocket.width - 8, rocket.y + rocket.height, 4, 8)
      ctx.fillStyle = '#ef4444'
      ctx.fillRect(rocket.x + 5, rocket.y + rocket.height, 3, 6)
      ctx.fillRect(rocket.x + rocket.width - 8, rocket.y + rocket.height, 3, 6)
      
      // Spawn obstacles with different types
      if (timestamp - lastObstacleTime > 1000) {
        const obstacleTypes = ['meteorite', 'asteroid', 'debris', 'comet', 'satellite']
        const type = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)]
        const size = 15 + Math.random() * 15
        
        obstacles.push({
          x: Math.random() * (canvas.width - size),
          y: -size,
          width: size,
          height: size,
          type: type,
          rotation: 0,
          rotationSpeed: (Math.random() - 0.5) * 0.05
        })
        lastObstacleTime = timestamp
        gameSpeed += 0.1
      }
      
      // Update and draw obstacles
      for (let i = obstacles.length - 1; i >= 0; i--) {
        const obstacle = obstacles[i]
        obstacle.y += gameSpeed
        obstacle.rotation += obstacle.rotationSpeed
        
        ctx.save()
        ctx.translate(obstacle.x + obstacle.width / 2, obstacle.y + obstacle.height / 2)
        ctx.rotate(obstacle.rotation)
        
        // Draw different obstacle types
        if (obstacle.type === 'meteorite') {
          // Gray round meteorite
          ctx.fillStyle = '#78716c'
          ctx.beginPath()
          ctx.arc(0, 0, obstacle.width / 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#a8a29e'
          ctx.beginPath()
          ctx.arc(-obstacle.width / 6, -obstacle.height / 6, obstacle.width / 6, 0, Math.PI * 2)
          ctx.fill()
        } else if (obstacle.type === 'asteroid') {
          // Irregular asteroid shape
          ctx.fillStyle = '#57534e'
          ctx.beginPath()
          ctx.arc(0, 0, obstacle.width / 2, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = '#78716c'
          ctx.beginPath()
          ctx.arc(obstacle.width / 4, -obstacle.height / 4, obstacle.width / 4, 0, Math.PI * 2)
          ctx.fill()
        } else if (obstacle.type === 'debris') {
          // Square space debris
          ctx.fillStyle = '#64748b'
          ctx.fillRect(-obstacle.width / 2, -obstacle.height / 2, obstacle.width, obstacle.height)
          ctx.fillStyle = '#475569'
          ctx.fillRect(-obstacle.width / 3, -obstacle.height / 3, obstacle.width / 1.5, obstacle.height / 1.5)
        } else if (obstacle.type === 'comet') {
          // Comet with tail
          ctx.fillStyle = '#a78bfa'
          ctx.beginPath()
          ctx.arc(0, 0, obstacle.width / 2, 0, Math.PI * 2)
          ctx.fill()
          // Comet tail
          ctx.fillStyle = 'rgba(167, 139, 250, 0.4)'
          ctx.beginPath()
          ctx.moveTo(0, obstacle.height / 2)
          ctx.lineTo(-obstacle.width / 3, obstacle.height)
          ctx.lineTo(obstacle.width / 3, obstacle.height)
          ctx.closePath()
          ctx.fill()
        } else if (obstacle.type === 'satellite') {
          // Satellite with solar panels
          ctx.fillStyle = '#cbd5e1'
          ctx.fillRect(-obstacle.width / 3, -obstacle.height / 2, obstacle.width / 1.5, obstacle.height)
          // Solar panels
          ctx.fillStyle = '#1e293b'
          ctx.fillRect(-obstacle.width / 2, -obstacle.height / 3, obstacle.width / 4, obstacle.height / 1.5)
          ctx.fillRect(obstacle.width / 4, -obstacle.height / 3, obstacle.width / 4, obstacle.height / 1.5)
        }
        
        ctx.restore()
        
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
            width={800}
            height={600}
            className="border-2 border-slate-300 rounded-lg bg-slate-900 shadow-2xl"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          {/* Game Overlay */}
          {gameState === 'menu' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
              <div className="text-center text-white">
                <h4 className="text-xl font-bold mb-4">Ready to Launch?</h4>
                <button
                  onClick={handleStartGame}
                  className="px-6 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg font-medium transition-colors"
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
                  className="px-6 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg font-medium transition-colors"
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
