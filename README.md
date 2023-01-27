# poc-TS

Conceptual Project for practicing and learning TypeScript.

# API Documentation

**Insert movie**
```
POST / movies 

Body: {
title: "The Gray Man",
genres: "Action",
platform: "Netflix",
watched: false,
comment: null
}
```
**Return movie**
```
GET / movies
```
**Return movie By id**
```
GET / movies/:id
```
**Update Movie Watched Status**
```
POST / movies/:id

Body: {
watched: true,
comment: "Loved this movie"
}
```
**Delete Movie**
```
DELETE / movies/:id
```
**Return ranking the amount of movies each platform has**
```
GET / ranking
```
