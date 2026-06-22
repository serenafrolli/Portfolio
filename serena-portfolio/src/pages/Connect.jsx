import { useState } from 'react'
import { motion } from 'framer-motion'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const WORLD_GEO = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'
const US_GEO = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const HOME_COUNTRY = 'Italy'

// Natural Earth names as used in world-atlas
const VISITED_COUNTRIES = new Set([
  'United States of America',
  'Morocco',
  'Australia',
  'Brazil',
  'Turks and Caicos Is.',
  'Belize',
  'Denmark',
  'Germany',
  'France',
  'Spain',
  'Portugal',
  'Ireland',
  'United Kingdom',
  'Netherlands',
  'Croatia',
  'Austria',
  'Switzerland',
])

const VISITED_STATES = new Set([
  'Illinois',
  'Massachusetts',
  'Rhode Island',
  'California',
  'Oregon',
  'Washington',
  'Texas',
  'Florida',
  'Minnesota',
  'Indiana',
  'Wisconsin',
  'Montana',
  'Michigan',
  'New York',
  'Arizona',
  'Nevada',
])

const COLORS = {
  visited: '#4F8EF7',
  home: '#E8B84B',
  empty: '#1E3563',
  stroke: '#0B1730',
  hover: '#9DC1FB',
}

function MapCard({ title, subtitle, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-navy-900 border border-navy-700 overflow-hidden"
    >
      <div className="px-6 sm:px-8 pt-6 sm:pt-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-paper">{title}</h3>
        <p className="text-navy-300 text-sm mt-1">{subtitle}</p>
      </div>
      {children}
    </motion.div>
  )
}

export default function Connect() {
  const [tooltip, setTooltip] = useState('')

  const geoStyle = (isVisited, isHome) => ({
    default: {
      fill: isHome ? COLORS.home : isVisited ? COLORS.visited : COLORS.empty,
      stroke: COLORS.stroke,
      strokeWidth: 0.4,
      outline: 'none',
      transition: 'fill 0.3s ease',
    },
    hover: {
      fill: isHome ? COLORS.home : isVisited ? COLORS.hover : '#2A4A82',
      stroke: COLORS.stroke,
      strokeWidth: 0.4,
      outline: 'none',
      cursor: 'pointer',
    },
    pressed: { outline: 'none' },
  })

  return (
    <div className="min-h-screen site-bg text-navy-800">
      {/* Header */}
      <div className="bg-navy-900 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <motion.p
            className="tech-label text-accent-light mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Flight log
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-5xl font-bold tracking-tight text-paper mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Places I Have Been
          </motion.h1>
          <motion.p
            className="text-lg text-navy-200"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {VISITED_COUNTRIES.size + 1} countries · {VISITED_STATES.size} U.S. states
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-5 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <span className="flex items-center gap-2 text-sm text-navy-200">
              <span className="w-3 h-3 rounded-sm" style={{ background: COLORS.home }} /> Home — Italy
            </span>
            <span className="flex items-center gap-2 text-sm text-navy-200">
              <span className="w-3 h-3 rounded-sm" style={{ background: COLORS.visited }} /> Visited
            </span>
          </motion.div>
        </div>
      </div>

      {/* World map — full-bleed */}
      <div className="w-full bg-navy-900">
        <div className="px-4 sm:px-8 pt-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-paper">The World</h3>
          <p className="text-navy-300 text-sm mt-1 h-5">{tooltip || 'Hover a country'}</p>
        </div>
        <ComposableMap projection="geoEqualEarth" projectionConfig={{ scale: 175 }} style={{ width: '100%', height: 'auto' }}>
          <Geographies geography={WORLD_GEO}>
            {({ geographies }) =>
              geographies
                .filter((geo) => geo.properties.name !== 'Antarctica')
                .map((geo) => {
                  const name = geo.properties.name
                  const isHome = name === HOME_COUNTRY
                  const isVisited = VISITED_COUNTRIES.has(name)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => (isVisited || isHome) && setTooltip(isHome ? `${name} — home` : name)}
                      onMouseLeave={() => setTooltip('')}
                      style={geoStyle(isVisited, isHome)}
                    />
                  )
                })
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* US states map */}
        <MapCard title="United States" subtitle={tooltip || 'Hover a state'}>
          <ComposableMap projection="geoAlbersUsa" style={{ width: '100%', height: 'auto' }}>
            <Geographies geography={US_GEO}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const name = geo.properties.name
                  const isVisited = VISITED_STATES.has(name)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => isVisited && setTooltip(name)}
                      onMouseLeave={() => setTooltip('')}
                      style={geoStyle(isVisited, false)}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </MapCard>

        {/* Lists */}
        <motion.div
          className="grid sm:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="tech-label text-navy-500 mb-4">Countries</p>
            <div className="flex flex-wrap gap-2">
              <span className="tech-label rounded-full px-3 py-1.5 border" style={{ borderColor: COLORS.home, color: '#8a6614', background: '#FBF3DC' }}>
                Italy · home
              </span>
              {[...VISITED_COUNTRIES].sort().map((c) => (
                <span key={c} className="tech-label rounded-full px-3 py-1.5 border border-navy-200 bg-navy-50 text-navy-700">
                  {c === 'United States of America' ? 'USA' : c === 'Turks and Caicos Is.' ? 'Turks and Caicos' : c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="tech-label text-navy-500 mb-4">U.S. States</p>
            <div className="flex flex-wrap gap-2">
              {[...VISITED_STATES].sort().map((s) => (
                <span key={s} className="tech-label rounded-full px-3 py-1.5 border border-navy-200 bg-navy-50 text-navy-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
