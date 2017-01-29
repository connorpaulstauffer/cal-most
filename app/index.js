import Inferno from 'inferno'
import { scan, map } from 'most'
import { createAppVnode$ } from './components/app/App'

const rootContainer = document.getElementById('appContainer')
const renderer = Inferno.createRenderer()

scan(renderer, rootContainer, createAppVnode$()).drain()