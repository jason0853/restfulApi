module.exports = function(app, conn) {
    // Get all data
    app.get('/api/book', function(req, res) {
        var sql = 'SELECT * FROM book';
        conn.query(sql, function(err, rows) {
            if (err) res.status(500).send('Internal Server Error');
            res.json(rows);
        });
    });

    // Get a single datum
    app.get('/api/book/:id', function(req, res) {
        var sql = 'SELECT * FROM book WHERE id=?';
        var id = req.params.id;
        conn.query(sql, [id], function(err, rows) {
            if (err) res.status(500).send('Internal Server Error');
            res.json(rows);
        });
    });

    // Create a datum
    app.post('/api/book', function(req, res) {
        var sql = 'INSERT INTO book (name, price) VALUES (?, ?)';
        var name = req.body.name;
        var price = req.body.price;
        conn.query(sql, [name, price], function(err, rows) {
            if (err) res.status(500).send('Internal Server Error');
            res.json(rows);
        });
    });

    // Update a datum
    app.put('/api/book/:id', function(req, res) {
        var sql = 'Update book SET name=?, price=? WHERE id=?';
        var name = req.body.name;
        var price = req.body.price;
        var id = req.params.id;
        conn.query(sql, [name, price, id], function(err, rows) {
            if (err) res.status(500).send('Internal Server Error');
            res.json(rows);
        });
    });

    // Delete a datum
    app.delete('/api/book/:id', function(req, res) {
        var sql = 'DELETE FROM book WHERE id=?';
        var id = req.params.id;
        conn.query(sql, [id], function(err, rows) {
            if (err) res.status(500).send('Internal Server Error');
            res.json(rows);
        });
    });
};
