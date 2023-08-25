import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import clienteController from './controller/clienteController';

let servidor = express();
servidor.use = (cors());
servidor.use = (express.json());

servidor.use(clienteController);
servidor.use(veiculosController);

servidor.listen(process.env.PORT, () => console.log('API deu bom!'));