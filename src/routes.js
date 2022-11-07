const { Router } = require('express');
const ImoveisControler = require('./app/controller/ImovelController');
const ComodidadeController = require('./app/controller/ComodidadeController');
const ProprietariosControler = require('./app/controller/ProprietarioController');

const router = Router();

// Routes for imoveis
router.get('/imoveis', ImoveisControler.index);
router.get('/imoveis/:cod_imovel', ImoveisControler.showImovel);
router.get('/imoveis/:bairro', ImoveisControler.showByBairro);
router.get('/imoveis/:tipo_imovel', ImoveisControler.showByTipo);
router.post('/imoveis', ImoveisControler.create);
router.put('/imoveis/edita/:cod_imovel', ImoveisControler.update);
router.delete('/imoveis/delete/:cod_imovel', ImoveisControler.delete);

// Routes for comodidades
router.get('/comodidades', ComodidadeController.index);
router.post('/comodidades', ComodidadeController.create);
router.put('/comodidades/edita/:id', ComodidadeController.update);
router.delete('/comodidades/delete/:id', ComodidadeController.delete);

// Routes for clientes

// Routes for proprietarios
router.get('/proprietarios', ProprietariosControler.index);
router.get('/proprietarios/:id_proprietario', ProprietariosControler.showProprietario);
router.get('/proprietarios/:cpf_cnpj_proprietario', ProprietariosControler.showProprietarioCpfCnpj);
router.post('/proprietarios', ProprietariosControler.create);
router.put('/proprietarios/edita/:id_proprietario', ProprietariosControler.update);
router.delete('/proprietarios/delete/:id_proprietario', ProprietariosControler.delete);
// Routes for imobiliaria

module.exports = router;
