const File = require('../models/File');

async function validateFile(req, res) {
    const { senderCode, fileName } = req.body;

    if (!senderCode || !fileName) {
        return res.status(400).json({ error: 'Sender code and file name cannot be empty.' });
    }

    if (!fileName.match(/^[\w-]+\.txt$/)) {
        return res.status(400).json({ error: 'File naming convention is not respected. Expected format: name.txt' });
    }

    if (senderCode !== 'EXPECTED_SENDER_CODE') {
        return res.status(400).json({ error: 'Sender code does not match.' });
    }

    try {
        const fileExists = await File.findOne({ where: { senderCode, fileName } });

        if (fileExists) {
            return res.status(409).json({ error: 'File with the same name and sender code already exists.' });
        }

        const file = await File.create({ senderCode, fileName });

        return res.status(201).json({ message: 'File validated and created successfully.', file });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while validating the file.', details: error.message });
    }
}

async function getFile(req, res) {
    const { id } = req.params;

    try {
        const file = await File.findByPk(id);

        if (!file) {
            return res.status(404).json({ error: 'File not found.' });
        }

        return res.status(200).json({ file });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while retrieving the file.', details: error.message });
    }
}

async function updateFile(req, res) {
    const { id } = req.params;
    const { senderCode, fileName } = req.body;

    if (!senderCode || !fileName) {
        return res.status(400).json({ error: 'Sender code and file name cannot be empty.' });
    }

    if (!fileName.match(/^[\w-]+\.txt$/)) {
        return res.status(400).json({ error: 'File naming convention is not respected. Expected format: name.txt' });
    }

    if (senderCode !== 'EXPECTED_SENDER_CODE') {
        return res.status(400).json({ error: 'Sender code does not match.' });
    }

    try {
        const file = await File.findByPk(id);

        if (!file) {
            return res.status(404).json({ error: 'File not found.' });
        }

        await file.update({ senderCode, fileName });

        return res.status(200).json({ message: 'File updated successfully.', file });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while updating the file.', details: error.message });
    }
}

async function deleteFile(req, res) {
    const { id } = req.params;

    try {
        const file = await File.findByPk(id);

        if (!file) {
            return res.status(404).json({ error: 'File not found.' });
        }

        await file.destroy();

        return res.status(200).json({ message: 'File deleted successfully.' });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while deleting the file.', details: error.message });
    }
}

module.exports = {
    validateFile,
    getFile,
    updateFile,
    deleteFile
};
