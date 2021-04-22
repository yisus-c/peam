const express= require('express');
const router = express.Router();

router.get('/', (req, res) =>{
        res.render('index.html', {titulo: 'INICIO'});
})
router.get('/contacto', (req, res) =>{
    res.render('contacto.html', {titulo: 'CONTACTO'});
})
router.get('/acerca', (req, res) =>{
    res.render('acerca.html', {titulo: 'ACERCA DE'});
})
router.get('/ventas', (req, res) =>{
    res.render('ventas.html', {titulo: 'VENTAS'});
})
router.get('/cuenta', (req, res) =>{
    res.render('cuenta.html', {titulo: 'CUENTA'});
})
router.get('/publicaciones', (req, res) =>{
    res.render('publicaciones.html', {titulo: 'CUENTA'});
})
router.get('/compras', (req, res) =>{
    res.render('compras.html', {titulo: 'CUENTA'});
})
module.exports = router;