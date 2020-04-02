# Flashcard App v1.0.0

Deployed Link is https://educationflashcards.herokuapp.com/

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
    "id": 16,
    "name": "Community Helpers",
    "description": "People in the community that help others"
}
```

    ...
# Flashcards

## Deletes Flashcards based on provided Id



	DELETE /api/flashcards/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| integer			|  <p>The ID is passed in the URL</p>							|

## Returns all flashcards



	GET /api/flashcards


### Success Response

Success-Response:

```
[
 {
    "id": 1,
    "frontCard": "A",
    "backCard": "a",
    "category_id": 1
}
...
]
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
}
```
## Add New Class



	POST /api/flashcards


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| frontCard			| String			|  <p>Front of card information *Required</p>							|Back of card information
| backCard			| String			|  <p>The Id of the Instructor</p>							|
| category_id			| Integer			|  <p>The Id of the Category *Required</p>							|							|
							|

### Success Response

Success-Response:

```
{
    "id": 1,
    "frontCard": "A",
    "backCard": "a",
    "category_id": 1
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
}
```
## Updated Class with provided Id



	PUT /api/flashcards/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| frontCard			| String			|  <p>Front of card information *Required</p>							|Back of card information
| backCard			| String			|  <p>The Id of the Instructor</p>							|
| category_id			| Integer			|  <p>The Id of the Category *Required</p>							|							|
							|					|

### Success Response

Success-Response:

```
{
    "id": 1,
    "frontCard": "A",
    "backCard": "a",
    "category_id": 1
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
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
| role			| String			|  <p>The Users Role, admin, instructor, client</p>							|

### Success Response

Success-Response:

```
{
 "id": 3,
 "username": "don",
 "password": ,
 "role": "client"
}
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
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
    "message": "No credentials provided"
}
```
## Retrieve all Classes that the Current User is signed up for

<p>Retrieves the Current Users Signed up Classes</p>

	GET /api/users/categories


### Success Response

Success-Response:

```
[
    {
        "category_id": 1,
        "user_id": 1,
        "id": 1,
        "username": "Krystal",
        "name": "Alphabet"
    },
    {
        "category_id": 2,
        "user_id": 1,
        "id": 2,
        "username": "Krystal",
        "name": "Numbers"
    },
    {
        "category_id": 3,
        "user_id": 1,
        "id": 3,
        "username": "Krystal",
        "name": "Colors"
    }
]
```
### Error Response

Unauthorized-Response:

```
{
    "message": "No credentials provided"
}
```
