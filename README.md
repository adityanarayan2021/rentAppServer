# rentAppServer

## Installation
- Clone this repository.
- Run `npm install` to install the dependencies.
- Add your mongoDB URL to connect with DB
- Run `npm start` to start the server.


# API EndPonts
## 1.) Create a new rent
Endpoint: POST /rents/newRent
Parameters:
ownerReceives: Amount received by the owner (e.g., 950)
userPays: Amount paid by the user (e.g., 1050)
platformFee: Platform fee (e.g., 100)
rentAmount: Rent amount (e.g., 950)

## 2.) Get All Rents
Endpoint: GET /rents/getAllRent

## 3.) Update Existing Rent
Endpoint: PUT /rents/updateRent/{id}
Parameters:
rentId: id of the rent to update.
ownerReceives: Updated amount received by the owner (e.g., 1250)
userPays: Updated amount paid by the user (e.g., 1350)
platformFee: Updated platform fee (e.g., 100)
rentAmount: Updated rent amount (e.g., 1150)

## 4.) Delete a Record
Endpoint: DELETE /rents/deleteRent/{id}
Parameters:
rentId: id of the rent to Delete.
  
