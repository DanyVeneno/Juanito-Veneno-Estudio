import { Router } from 'express';

const router = Router()

router.get('/',(req, res) => res.render('index', { title:'Juanito Veneno Estudio | Inicio' }))
router.get('/about',(req, res) => res.render('about', { title:'Juanito Veneno Estudio | Nosotros' }))
router.get('/servicios',(req, res) => res.render('servicios', { title:'Juanito Veneno Estudio | Servicios' }))
router.get('/contact',(req, res) => res.render('contact', { title:'Juanito Veneno Estudio | Contacto' }))


export default router