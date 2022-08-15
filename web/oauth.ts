import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    const uri = `http://localhost:8080/#/oauth?from=kakao&code=${req.query.code}`
    res.redirect(uri);
});

export default router;
