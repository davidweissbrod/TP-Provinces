import {Router} from 'express';
import ProvinceService from 'src/services/province-service.js'
const router = Router();
const svc = new ProvinceService();

router.get('', async (req, res) => {
    let res;
    const array = await svc.getAllAsync();
    if(array != null){
        res = res.status(200).json(array);
    }else{
        res = res.status(500).send('Error');
    }
    return res;
});
router.get('/:id', async (req, res) => {
    let ret;
    if(req.params.id != null){
        ret = res.status(200).send(req.params.id)
    }else{
        ret = res.status(500).send('Error')
    }
});
router.post('/', async (req, res) => {
    
});