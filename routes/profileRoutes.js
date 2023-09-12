const express = require('express');
const router = express.Router()
const { createNewProfile, fetchNewSingleProfile, updateSingleProfile, deleteSingleProfile, fetchNewProfile } = require('../controllers/profile-controllers');





router.post('/', createNewProfile);

router.get('/', fetchNewProfile);
router.get('/:id', fetchNewSingleProfile);

router.put('/:id', updateSingleProfile);


router.delete('/:id', deleteSingleProfile);

module.exports = router;
