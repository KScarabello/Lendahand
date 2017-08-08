INSERT INTO Events (name, streetaddress, city, state, zipcode, venue, hours, quantofvols)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
returning *