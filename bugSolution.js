```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id": ObjectId("651a7d22c61676405f50d213")}, {"$inc": {"count": 10}});
```