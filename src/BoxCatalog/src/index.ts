import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT || 8001;
const ROUTE = '/box';

const service = express();
service.use(cors())
service.use(bodyParser.urlencoded({ extended: true }))
service.use(bodyParser.json())


service.listen(PORT, () => 
{
    console.log(`BoxCatalog listening on port ${PORT}`)
})