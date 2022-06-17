import { Router } from 'express';

const router = Router()

router.get('/',(req, res) => res.render('index', { title:'Appjv | Inicio' }))
router.get('/about',(req, res) => res.render('about', { title:'Appjv | Nosotros' }))
router.get('/contact',(req, res) => res.render('contact', { title:'Appjv | Contacto' }))


export default router