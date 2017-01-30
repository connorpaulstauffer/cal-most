import Inferno from 'inferno'
import { scan, map } from 'most'
import { App$ } from './components/app/App'

const rootContainer = document.getElementById('appContainer')
const renderer = Inferno.createRenderer()

scan(renderer, rootContainer, App$()).drain()