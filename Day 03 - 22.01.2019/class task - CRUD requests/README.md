
# Crud in react

## Step 2

Givem the following http requests:

### Get
* url : https://reqres.in/api/users
* response:
```json
{"page":1,"per_page":3,"total":12,"total_pages":4,"data":[{"id":1,"first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"}]}
```


### Post
* url : https://reqres.in/api/users
* request body: 
```json
{
    "name": "morpheus",
    "job": "leader"
}
```
* response:
```json
{
    "name": "morpheus",
    "job": "leader",
    "id": "663",
    "createdAt": "2019-01-22T07:39:54.408Z"
}
```

### Put
* url : https://reqres.in/api/users/2
* request body: 
```json
{
    "name": "morpheus",
    "job": "zion resident"
}
```
* response:
```json
{
    "name": "morpheus",
    "job": "zion resident",
    "updatedAt": "2019-01-22T07:42:58.683Z"
}
```


### Delete
* url : https://reqres.in/api/users/2
* response: empty 



## Step 2
Add to the `App` compoonent the following 4 components (class components):
* for `get` request  - will show all the users in a table
* for `post` request  - will get a `username` and `job`, and when the user clicks at the `submit` button - the data will be used to create a post request
* for `put` request  - will get: `id` , `username` and `job`, and when the user clicks at the `submit` button - the data will be used to create a put request
* for `delete` request  - will get: `id`, and when the user clicks at the `submit` button - the data will be used to create a delete request


##### Good luck!!