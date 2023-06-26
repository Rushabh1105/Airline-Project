/ 
    - src//
        index.js
        models/
        controllers/
        middlewares/
        servieces/
        utils/
        config/
        repository/
    - tests
/

## Database Design 

    ** Airplane Table
        - id 
        - model number
        - capacity
        - created_at
        - updated_at

    ** Flight Table
        - id 
        - flight_number
        - airport_id
        - source_city_id
        - destination_city_id
        - departure_date
        - arrival_date
        - departure_time
        - arrival_time


    ** Airport Table
        - id
        - name
        - city_id
        - address

    ** City
        - id
        - name


## Table relationships

    - City : Airport ===> 1 : N
    - Airplane : Flights ===> 1 : N
    - Airport : Flight ===> 1 : N