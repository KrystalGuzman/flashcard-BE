const express = require('express');

const Flashcards = require('./flashcards-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Flashcards.find()
  .then(flashcards => {
    res.json(flashcards);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get flashcards' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Flashcards.findById(id)
  .then(flashcard => {
    if (flashcard) {
      res.json(flashcard);
    } else {
      res.status(404).json({ message: 'Could not find flashcard with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get flashcards' });
  });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  Flashcards.findSteps(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given flashcard' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});

router.post('/', (req, res) => {
  const flashcardData = req.body;

  Flashcards.add(flashcardData)
  .then(flashcard => {
    res.status(201).json(flashcard);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new flashcard' });
  });
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Flashcards.findById(id)
  .then(flashcard => {
    if (flashcard) {
      Flashcards.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find flashcard with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Flashcards.findById(id)
  .then(flashcard => {
    if (flashcard) {
      Flashcards.update(changes, id)
      .then(updatedFlashcard => {
        res.json(updatedFlashcard);
      });
    } else {
      res.status(404).json({ message: 'Could not find flashcard with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update flashcard' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Flashcards.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find flashcard with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete flashcard' });
  });
});

module.exports = router;