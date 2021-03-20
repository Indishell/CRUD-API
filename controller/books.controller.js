const express = require('express');
const BookSchema = require('../models/Books');

exports.randomMessage = async (req, res) => {
    try {
        res.send({
            msg : 'Hello World'
        })
    } catch (error) {
        res.send(400).send({
            msg : 'Sorry , Failed to Fetch Data'
        })
    }
}

exports.getBooks = async (req, res) => {
    try {
        const data = await BookSchema.find({});
        res.send(JSON.stringify(data));
    } catch (error) {
        res.send(400).send('Failed to Get Data');
    }
}

exports.getSingleBook =  async (req, res) => {
    try {
        const queryID = req.params.id;
        // console.log(req.params);

        const data = await BookSchema.find({ _id: queryID });

        res.send(JSON.stringify(data));
    } catch (error) {
        res.sendStatus(404).send('Failed to Get Data');
    }
}

exports.postBook = async (req, res) => {
    try {
        const book = new BookSchema({
            _id: req.body._id,
            name: req.body.name,
            author: req.body.author,
            rating: req.body.rating,
            uploadedAt: new Date
        });

        console.log(req.body);

        await book.save();

        res.send(
            {
                message: "Uploaded Successfully",
                book
            }
        )
    } catch (error) {
        res.status(400).send('Failed to Upload');
    }
}

exports.updateBookById =  async (req, res) => {

    try {
        const id = req.params.id;
        const data = await BookSchema.findByIdAndUpdate(id, req.body);

        res.send({ message: 'Book Data Updated Successfully' });
    } catch (error) {

        res.status(400).send('Failed to Update');
    }
}

exports.deleteBookById =  async (req, res) => {
    try {
        const id = req.params.id;
        await BookSchema.findByIdAndDelete({ _id: id });

        res.send({ message: `Book ${id} data deleted successfully` });
    } catch (error) {

        res.send('Failed to Delete');
    }
}