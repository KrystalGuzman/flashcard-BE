# Flashcard App v1.0.0

Deployed Link is https://lambda-anywhere-fitness.herokuapp.com/

- [Auth](#auth)
	- [Logs an User In](#logs-an-user-in)
	- [Registers a New User](#registers-a-new-user)
	
- [Categories](#categories)
	- [Deletes Category based on provided Id](#deletes-category-based-on-provided-id)
	- [Returns all categories](#returns-all-categories)
	- [Add New Category](#add-new-category)
	- [Updates Category based on provided Id](#updates-category-based-on-provided-id)
	
- [Flashcards](#flashcards)
	- [Deletes flashcard based on provided Id](#deletes-flashcard-based-on-provided-id)
	- [Returns all flashcards](#returns-all-flashcards)
	- [Add New Flashcard](#add-new-class)
	- [Updated Flashcard with provided Id](#updated-flashcard-with-provided-id)
	
- [Users](#users)
	- [Updates the Current Logged In User](#updates-the-current-logged-in-user)
	- [Deletes the Current Logged In User](#deletes-the-current-logged-in-user)
	- [Retrieve all Flashcards that the Current User is testing for](#retrieve-all-categories-that-the-current-user-is-testing-for)
	
# Auth

## Logs an User In

<p>Logs an User In</p>

	POST /api/auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>Username of the User</p>							|
| password			| String			|  <p>Password of the User</p>							|

### Success Response

Success-Response:

```
{
    "message": "Welcome Krystal!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImtyeXN0YWwiLCJpYXQiOjE1ODU2OTE3ODUsImV4cCI6MTU4NjI5NjU4NX0.sTeWMY38y_zqW_NfI0Ae8sTQFjskStOPHJ4wNrre9m0"
}
```
### Error Response

Username-Not-Found-Response

```
{
     "message": "Invalid Credentials"
}
```
Incorrect-Password

```
{
     "message": "Invalid Credentials"
}
```
## Registers a New User

<p>Registers a New User</p>

	POST /api/auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>The New Users username *Required</p>							|
| password			| String			|  <p>The New Users password *Required</p>						|
| role			| String			|  <p>The Users Role: admin, client, instructor</p>							|

### Success Response

Success-Response:

```
{
    "saved": {
        "id": 3,
        "username": "krystal",
        "password": "$2a$10$nN1MqJAPV8a/jinHdYz2ee5yL39zIKlRcYv7RAiy/pcpF6oQ.d5jy",
        "role": "admin"
    }
}
```

# Categories

## Deletes Category based on provided Id



	DELETE /api/categories/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| integer			|  <p>The ID is passed in the URL</p>							|

## Returns all categories



	GET /api/categories


### Success Response

Success-Response:

```
{
        "flashcard_id": 1,
        "flashcard_front": "A",
        "flashcard_back": "a",
        "category_id": 1,
        "category_name": "Alphabet",
        "category_description": "The letters A-Z uppercase and lowercase"
    },
    ...
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
}
```
## Returns all categories



	GET /api/categories/flashcards


### Success Response

Success-Response:

```
{
        "id": 1,
        "name": "Alphabet",
        "frontCard": "A",
        "backCard": "a"
    },
    ...
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
}
```

## Add New Category



	POST /api/categories


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>Category Name *Required</p>							|
| description			| String			|  <p>Description of the Category</p>							|

### Success Response

Success-Response:

```
{
        "id": 1,
        "name": "Alphabet",
        "description": "The letters A-Z uppercase and lowercase"
    }
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthorized"
}
```
BadRequest-Response

```
{
     "message": "The Category Name: ${req.body.name} is already taken"
}
```
## Updates Category based on provided Id



	PUT /api/category/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Integer			|  <p>The ID is passed in the URL</p>							|
| name			| String			|  <p>Category Name *Required</p>							|
| description			| String			|  <p>Description of the Category</p>							|

### Success Response

Success-Response:

```
{
  "id": 7,
  "name": "Test Category",
  "description": "Testing Update Router",
  "created_at": "2019-10-21T01:17:05.085Z",
  "updated_at": "2019-10-21T01:17:05.085Z"
}
```

    ...
# Classes

## Deletes Class based on provided Id



	DELETE /api/classes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| integer			|  <p>The ID is passed in the URL</p>							|

## Returns all classes



	GET /api/classes


### Success Response

Success-Response:

```
[
 {
   "id": 1,
   "title": "Yoga",
   "instructorId": 1,
   "categoryId": 1,
   "scheduleTime": null,
   "address": null,
   "city": null,
   "state": null,
   "zipCode": null,
   "created_at": "2019-10-21T12:51:44.173Z",
   "updated_at": "2019-10-21T12:51:44.173Z"
 },
 {
   "id": 2,
   "title": "Water Aerobics",
   "instructorId": 1,
   "categoryId": 2,
   "scheduleTime": null,
   "address": null,
   "city": null,
   "state": null,
   "zipCode": null,
   "created_at": "2019-10-21T12:51:44.173Z",
   "updated_at": "2019-10-21T12:51:44.173Z"
 }
]
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Add New Class



	POST /api/classes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| String			|  <p>Class Title *Required</p>							|
| instructorId			| Integer			|  <p>The Id of the Instructor *Required</p>							|
| categoryId			| Integer			|  <p>The Id of the Category *Required</p>							|
| scheduleTime			| Date			|  <p>The Date and Time of the class</p>							|
| address			| String			|  <p>The Street Address of the class</p>							|
| city			| String			|  <p>The City of the class</p>							|
| state			| String			|  <p>The State of the class</p>							|
| zipCode			| String			|  <p>The ZipCode fo the class</p>							|

### Success Response

Success-Response:

```
{
 "id": 3,
 "title": "A New Class",
 "instructorId": 1,
 "categoryId": 1,
 "scheduleTime": null,
 "address": null,
 "city": null,
 "state": null,
 "zipCode": null,
 "created_at": "2019-10-21T13:23:39.281Z",
 "updated_at": "2019-10-21T13:23:39.281Z"
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Updated Class with provided Id



	PUT /api/classes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| String			|  <p>Class Title *Required</p>							|
| instructorId			| Integer			|  <p>The Id of the Instructor *Required</p>							|
| categoryId			| Integer			|  <p>The Id of the Category *Required</p>							|
| scheduleTime			| Date			|  <p>The Date and Time of the class</p>							|
| address			| String			|  <p>The Street Address of the class</p>							|
| city			| String			|  <p>The City of the class</p>							|
| state			| String			|  <p>The State of the class</p>							|
| zipCode			| String			|  <p>The ZipCode fo the class</p>							|

### Success Response

Success-Response:

```
{
 "id": 3,
 "title": "An Updated Class",
 "instructorId": 1,
 "categoryId": 1,
 "scheduleTime": null,
 "address": null,
 "city": null,
 "state": null,
 "zipCode": null,
 "created_at": "2019-10-21T13:23:39.281Z",
 "updated_at": "2019-10-21T13:23:39.281Z"
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
# User

## Updates the Current Logged In User

<p>Updates the current logged in user</p>

	PUT /api/user


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>The Users username</p>							|
| password			| String			|  <p>The Users password</p>							|
| firstName			| String			|  <p>The Users first name</p>							|
| lastName			| String			|  <p>The Users last name</p>							|
| email			| String			|  <p>The Users email</p>							|
| roleId			| Integer			|  <p>The Users Role, 1 for Instructor, 2 for Client</p>							|

### Success Response

Success-Response:

```
{
 "id": 3,
 "firstName": "Donald",
 "lastName": null,
 "email": null,
 "username": "don",
 "created_at": "2019-10-20T22:59:45.794Z",
 "updated_at": "2019-10-20T22:59:45.794Z",
 "roleId": 1
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Deletes the Current Logged In User

<p>Deletes the current logged in user</p>

	DELETE /api/user


### Success Response

Success-Response:

```
1
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Retrieve all Classes that the Current User is signed up for

<p>Retrieves the Current Users Signed up Classes</p>

	GET /api/user/classes


### Success Response

Success-Response:

```
[
 {
   "classId": 1,
   "clientId": 3,
   "created_at": "2019-10-21T16:56:56.379Z",
   "updated_at": "2019-10-21T16:56:56.379Z"
 }
]
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Signs the User up for the Provided Class Id

<p>Signs an user up for a class based on the provided class Id</p>

	POST /api/user/classes/:id


### Success Response

Success-Response:

```
{
 "classId": 2,
 "clientId": 3,
 "created_at": "2019-10-21T19:00:55.322Z",
 "updated_at": "2019-10-21T19:00:55.322Z"
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
## Removes the User from the Provided Class Id

<p>Removes the User from the provided Class Id</p>

	DELETE /api/user/classes/:id


### Success Response

Success-Response:

```
1
```
### Error Response

Unauthorized-Response:

```
{
    "message": "Unauthroized"
}
```
