#CRUD API

#Routes

1. GET:'/artists/:artistID'
The HeaderDB.find method will return artist data for a given artistID when an artist query is made.

2. POST:'/artists/newArtist'
This route will create a new document for an artist from the HeaderDB schema and use HeaderDB.save to store it in the database.

3. PUT:'/artists/:artistID/update'
The HeaderDB.findByIdAndUpdate method will find an artistID and update the record with changes provided by the user.

4. DELETE:'/artists/:artistID/delete'
The HeaderDB.findByIdAndRemove method will find the relevant record and delete it from the database.